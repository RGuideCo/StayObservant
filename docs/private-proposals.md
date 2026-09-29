# Angel City Chorale proposal

URL: `/proposals/angel-city-chorale`

The proposal is **unlisted, not access-controlled**, at the owner's request. Anyone with its URL can view the page and download the PDF. It is excluded from public navigation and carries noindex/nofollow/noarchive directives, which are indexing guidance, not access protection.

The existing static Astro portfolio is unchanged. A Node function serves the proposal and its allowed assets. `ACC_PROPOSAL_SECRET` decrypts `proposal-content/angel-city-chorale.enc`; encryption keeps the working content out of the public Git repository, not out of visitors' browsers. `ACC_PROPOSAL_PASSWORD` is no longer used.

Editable sources are in ignored `private/angel-city-chorale/`: `index.html`, `proposal.pdf`, and `portfolio.png`. After editing, run `node scripts/package-proposal.mjs` with the current `ACC_PROPOSAL_SECRET`, then commit the encrypted package. Never rotate the secret without repackaging with the matching key.

Run `node --test tests/proposal.test.mjs` with the secret, plus `npm run build`. Verify anonymous page and PDF access, desktop/mobile layout, and interactions before publishing to the Vercel **stay-observant** project. The sidebar and header use `public/proposal-logo.svg`, copied from the portfolio's original logo.

Timeline autoplay advances every nine seconds while visible. Manual selection or keyboard focus pauses it; the play/pause control resumes it. It pauses in background tabs and is disabled for reduced-motion preferences. Scope accordions preserve native keyboard interaction with animated expansion. Reduced-motion users receive immediate transitions.
