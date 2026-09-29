// Keep client material encrypted in the public repository and deployment source.
// ACC_PROPOSAL_SECRET must match the server-side Vercel variable.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createCipheriv, createHash, randomBytes } from 'node:crypto';
const secret = process.env.ACC_PROPOSAL_SECRET;
if (!secret || secret.length < 32) throw new Error('A strong ACC_PROPOSAL_SECRET is required.');
const files = {};
for (const name of ['index.html', 'proposal.pdf', 'portfolio.png']) files[name] = (await readFile(new URL(`../private/angel-city-chorale/${name}`, import.meta.url))).toString('base64');
const iv = randomBytes(12);
const cipher = createCipheriv('aes-256-gcm', createHash('sha256').update(secret).digest(), iv);
const encrypted = Buffer.concat([cipher.update(JSON.stringify(files)), cipher.final()]);
await mkdir(new URL('../proposal-content/', import.meta.url), { recursive: true });
await writeFile(new URL('../proposal-content/angel-city-chorale.enc', import.meta.url), Buffer.concat([iv, cipher.getAuthTag(), encrypted]));
console.log('Encrypted proposal package generated. No credentials included.');
