import { contactServices } from '../src/data/contact-services.js';

const recipient = 'stayobservant@gmail.com';
const maxBodyBytes = 32 * 1024;
const emailPattern = /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

async function readBody(req) {
  if (Number(req.headers['content-length']) > maxBodyBytes) throw new RangeError('Body too large');
  const parsed = req.body;
  if (parsed !== undefined) {
    const raw = typeof parsed === 'string' ? parsed : JSON.stringify(parsed);
    if (Buffer.byteLength(raw) > maxBodyBytes) throw new RangeError('Body too large');
    return typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
  }

  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    // Drain an oversized request without retaining its contents.
    if (size <= maxBodyBytes) chunks.push(Buffer.from(chunk));
  }
  if (size > maxBodyBytes) throw new RangeError('Body too large');
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

// The same Node handler runs on Vercel and in the Astro development middleware.
export default async function handler(req, res, env = process.env) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const respond = (status, data) => {
    res.statusCode = status;
    res.end(JSON.stringify(data));
  };

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return respond(405, { error: 'Please send your message using the contact form.' });
  }
  if (String(req.headers['content-type']).split(';')[0].trim().toLowerCase() !== 'application/json') {
    return respond(415, { error: 'Please send your message using the contact form.' });
  }

  // Only accept the form's same-origin JSON request; never provide a public relay.
  try {
    const origin = new URL(req.headers.origin);
    if (!['http:', 'https:'].includes(origin.protocol) || origin.host !== req.headers.host || req.headers['sec-fetch-site'] === 'cross-site') {
      return respond(403, { error: 'Please open the contact form on this website to send your message.' });
    }
  } catch {
    return respond(403, { error: 'Please open the contact form on this website to send your message.' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    return respond(error instanceof RangeError ? 413 : 400, {
      error: error instanceof RangeError ? 'Please shorten your message and try again.' : 'Please check your details and try again.',
    });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return respond(400, { error: 'Please check your details and try again.' });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const services = body.services;
  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return respond(400, { error: 'Please enter a valid email address so I can reply.' });
  }
  if (!message || message.length > 8000) {
    return respond(400, { error: 'Please add a message of up to 8,000 characters.' });
  }
  if (!Array.isArray(services) || services.length > contactServices.length || services.some((id) => !contactServices.some((service) => service.id === id))) {
    return respond(400, { error: 'Please choose a service from the form, or select “Not sure yet”.' });
  }
  if (typeof body.submissionId !== 'string' || !uuidPattern.test(body.submissionId)) {
    return respond(400, { error: 'Please reopen the contact form and try again.' });
  }
  if (body.website) {
    return respond(400, { error: 'Your message couldn’t be sent. Please email me directly below.' });
  }
  if (!env.RESEND_API_KEY) {
    console.error('[contact] Email sender has not been configured.');
    return respond(503, { error: 'Message sending isn’t available yet. Please email me directly below.' });
  }

  const selected = contactServices.filter((service) => services.includes(service.id)).map((service) => service.name);
  const serviceNames = selected.length ? selected.join(', ') : 'Not sure yet';

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'stayobservant-contact/1.0',
        'Idempotency-Key': `contact/${body.submissionId}`,
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL || 'Stay Observant <projects@contact.stayobservant.com>',
        to: [recipient],
        reply_to: [email],
        subject: `New project enquiry: ${serviceNames}`,
        text: [
          'New enquiry from the Stay Observant website',
          '',
          `Reply to: ${email}`,
          `Services: ${serviceNames}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await delivery.json().catch(() => null);
    if (!delivery.ok || typeof result?.id !== 'string' || !result.id) {
      console.error('[contact] Email provider rejected the request.', { status: delivery.status });
      if (delivery.status === 429) {
        res.setHeader('Retry-After', '60');
        return respond(429, { error: 'Message sending is busy right now. Please wait a minute and try again, or email me directly below.' });
      }
      return respond(502, { error: 'Your message couldn’t be sent. Please try again or email me directly below.' });
    }
    return respond(200, { ok: true });
  } catch {
    console.error('[contact] Could not reach the email provider.');
    return respond(502, { error: 'We couldn’t confirm your message was sent. Please try again or email me directly below.' });
  }
}
