# Angel City Chorale proposal

URL: `/proposals/angel-city-chorale`

The public portfolio remains a static Astro build. A standalone Node function serves this proposal and its downloadable PDF only after server-side authentication.

## Credentials and content

- `ACC_PROPOSAL_PASSWORD` is the shared client password.
- `ACC_PROPOSAL_SECRET` signs seven-day sessions and encrypts the content package. Use a cryptographically random secret of at least 32 characters.
- Both values are sensitive Production environment variables in the Vercel **stay-observant** project. Neither is committed.
- HTML, the PDF, and the portfolio thumbnail are encrypted together in `proposal-content/angel-city-chorale.enc`. This keeps confidential pricing and proposal content out of the public GitHub source.
- Unencrypted working files live in ignored `private/angel-city-chorale/`, excluded from deployments too.
- No proposal link is added to public navigation. Robots headers and meta tags discourage indexing; the password gate is the actual access control.

## Edit and publish

Edit local `index.html`, `proposal.pdf`, or `portfolio.png` under `private/angel-city-chorale/`, then run `node scripts/package-proposal.mjs` with the current `ACC_PROPOSAL_SECRET` in the environment. Commit the updated encrypted package, not the unencrypted sources. If working files are missing, they can be recovered by decrypting the package with the same AES-256-GCM key derivation used by the handler.

Run `node --test tests/proposal.test.mjs` with both environment variables and `npm run build`. Deploy from a checkout containing only intended changes. Verify the live password gate, authenticated page, and PDF download.

Changing only the client password does not invalidate existing signed sessions. To revoke all sessions, rotate the secret, regenerate the encrypted package with the new secret, and deploy both together. Do not rotate the encryption secret independently of the package.

## Protections

The gate uses a strong shared password, constant-time comparisons, signed cookies marked Secure/HttpOnly/SameSite, no-store responses, a nonce-based script policy, same-origin form checks, fixed file allowlisting, and a fail-closed missing-config response. It is suitable for a client proposal shared with a small group, not an identity-based document management system. Recipients can share the password or their downloaded PDF.
