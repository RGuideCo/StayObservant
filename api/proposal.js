import { createHmac, timingSafeEqual, randomBytes, createDecipheriv, createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const base = '/proposals/angel-city-chorale';
const cookieName = '__Secure-acc-proposal';
const lifetime = 7 * 24 * 60 * 60;
let contentCache;
async function content(secret) {
  if (!contentCache) {
    const packed = await readFile(path.join(process.cwd(), 'proposal-content/angel-city-chorale.enc'));
    const key = createHash('sha256').update(secret).digest();
    const decipher = createDecipheriv('aes-256-gcm', key, packed.subarray(0, 12));
    decipher.setAuthTag(packed.subarray(12, 28));
    contentCache = JSON.parse(Buffer.concat([decipher.update(packed.subarray(28)), decipher.final()]).toString());
  }
  return contentCache;
}
const sign = (value, secret) => createHmac('sha256', secret).update(value).digest('base64url');
function equal(a, b) {
  const x = Buffer.from(String(a)); const y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}
export function validSession(token, secret, now = Date.now()) {
  const [expires, signature, extra] = (token || '').split('.');
  return !extra && /^\d+$/.test(expires || '') && Number(expires) > now &&
    Number(expires) <= now + lifetime * 1000 && equal(signature || '', sign(expires, secret));
}
function login(error = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Private proposal · Stay Observant</title><style> *{box-sizing:border-box}body{margin:0;background:#f2efe7;color:#080808;font:16px/1.5 Arial,sans-serif;min-height:100vh;display:grid;place-items:center;padding:24px}main{width:min(100%,490px);border:1px solid;padding:clamp(24px,6vw,48px)}small{letter-spacing:.14em;font-size:11px}h1{font-size:46px;line-height:1.03;letter-spacing:-2px;margin:32px 0 20px}p{color:#53514d}label{display:block;margin-top:32px;font-weight:bold}input,button{font:inherit;width:100%;padding:15px;border:1px solid #080808;border-radius:0}input{background:#fff;margin:10px 0 12px}button{background:#080808;color:#fff;cursor:pointer}button:hover{background:#c62119}a{color:inherit} .error{color:#a31a13;font-size:14px}footer{margin-top:32px;font-size:12px} :focus-visible{outline:3px solid #c62119;outline-offset:4px}</style></head><body><main><small>STAY OBSERVANT / PRIVATE PROPOSAL</small><h1>A conversation<br>worth starting.</h1><p>Prepared for Angel City Chorale.<br>Enter your access password to view the proposal.</p><form method="post" action="${base}"><label for="password">Proposal password</label><input id="password" name="password" type="password" autocomplete="current-password" required maxlength="200" autofocus>${error ? `<p class="error" role="alert">${error}</p>` : ''}<button type="submit">View proposal →</button></form><footer>Need access? <a href="mailto:brodriguezdesign@gmail.com">Contact Brian</a></footer></main></body></html>`;
}
export default async function handler(req, res) {
  const secret = process.env.ACC_PROPOSAL_SECRET;
  const password = process.env.ACC_PROPOSAL_PASSWORD;
  const nonce = randomBytes(18).toString('base64');
  res.setHeader('Cache-Control', 'private, no-store, max-age=0');
  res.setHeader('Vercel-CDN-Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'`);
  const html = (status, content) => { res.statusCode = status; res.setHeader('Content-Type', 'text/html; charset=utf-8'); res.end(content); };
  if (!secret || !password) return html(503, 'This proposal is temporarily unavailable. Please contact Brian.');
  const url = new URL(req.url, 'https://www.stayobservant.com');
  const asset = url.searchParams.get('asset') || url.pathname.replace(base, '').replace(/^\//, '');
  const isPage = asset === '' || asset === 'api/proposal';
  const cookies = Object.fromEntries((req.headers.cookie || '').split(';').map(v => v.trim().split('=')));
  if (req.method === 'POST') {
    if (req.headers.origin && req.headers.origin !== `https://${req.headers.host}`) return html(403, 'Request not allowed.');
    let body = req.body;
    if (body === undefined) {
      let raw = '';
      for await (const chunk of req) { raw += chunk; if (raw.length > 2048) return html(413, 'Request too large.'); }
      body = Object.fromEntries(new URLSearchParams(raw));
    } else if (typeof body === 'string' || Buffer.isBuffer(body)) body = Object.fromEntries(new URLSearchParams(String(body)));
    if (body?.action === 'logout') {
      res.setHeader('Set-Cookie', `${cookieName}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`);
    } else {
      if (!equal(sign(String(body?.password || ''), secret), sign(password, secret))) return html(401, login('That password didn’t match. Please try again.'));
      const expires = String(Date.now() + lifetime * 1000);
      res.setHeader('Set-Cookie', `${cookieName}=${expires}.${sign(expires, secret)}; Path=/; Max-Age=${lifetime}; HttpOnly; Secure; SameSite=Strict`);
    }
    res.statusCode = 303; res.setHeader('Location', base); return res.end();
  }
  if (!['GET', 'HEAD'].includes(req.method)) { res.setHeader('Allow', 'GET, HEAD, POST'); return html(405, 'Method not allowed.'); }
  if (!validSession(cookies[cookieName], secret)) return html(isPage ? 200 : 401, login());
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
