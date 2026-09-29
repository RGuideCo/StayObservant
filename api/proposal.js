import { randomBytes, createDecipheriv, createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Unlisted, not access-controlled. Anyone with the link may view and download.
// Encryption keeps the source material out of the public Git repository.
const base = '/proposals/angel-city-chorale';
let contentCache;
async function content(secret) {
  if (!contentCache) {
    const packed = await readFile(path.join(process.cwd(), 'proposal-content/angel-city-chorale.enc'));
    const decipher = createDecipheriv('aes-256-gcm', createHash('sha256').update(secret).digest(), packed.subarray(0, 12));
    decipher.setAuthTag(packed.subarray(12, 28));
    contentCache = JSON.parse(Buffer.concat([decipher.update(packed.subarray(28)), decipher.final()]).toString());
  }
  return contentCache;
}
export default async function handler(req, res) {
  const nonce = randomBytes(18).toString('base64');
  res.setHeader('Cache-Control', 'private, no-store, max-age=0');
  res.setHeader('Vercel-CDN-Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self'; base-uri 'none'; frame-ancestors 'none'`);
  const html = (status, value) => { res.statusCode = status; res.setHeader('Content-Type', 'text/html; charset=utf-8'); res.end(value); };
  if (!['GET', 'HEAD'].includes(req.method)) { res.setHeader('Allow', 'GET, HEAD'); return html(405, 'Method not allowed.'); }
  const secret = process.env.ACC_PROPOSAL_SECRET;
  if (!secret) return html(503, 'This proposal is temporarily unavailable. Please contact Brian.');
  const url = new URL(req.url, 'https://www.stayobservant.com');
  const asset = url.searchParams.get('asset') || url.pathname.replace(base, '').replace(/^\//, '');
  const isPage = asset === '' || asset === 'api/proposal';
  const files = { 'proposal.pdf': ['proposal.pdf', 'application/pdf'], 'portfolio.png': ['portfolio.png', 'image/png'] };
  if (!isPage && !Object.hasOwn(files, asset)) return html(404, 'Not found.');
  try {
    const [filename, type] = isPage ? ['index.html', 'text/html; charset=utf-8'] : files[asset];
    let data = Buffer.from((await content(secret))[filename], 'base64');
    if (isPage) data = Buffer.from(data.toString().replaceAll('__NONCE__', nonce));
    res.setHeader('Content-Type', type);
    if (asset === 'proposal.pdf') res.setHeader('Content-Disposition', 'attachment; filename="Angel-City-Chorale-Website-Proposal-Brian-Rodriguez.pdf"');
    res.statusCode = 200;
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { return html(500, 'Unable to load the proposal. Please try again later.'); }
}
