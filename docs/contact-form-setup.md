# Contact form email delivery

The Reach out, Contact me, and service quote buttons on `/services`, plus Reach out on the homepage, open a shared contact modal. The form posts to `/api/contact`. That Node function sends a plain-text enquiry to **stayobservant@gmail.com**, with the visitor's email as Reply-To. The recipient is fixed on the server. No confirmation email or mailing-list signup is sent to the visitor.

The form shows success only when Resend accepts the email and returns its message ID. It preserves the form on error. Retrying unchanged details reuses an idempotency key to prevent duplicate emails for 24 hours. Basic spam protection includes a hidden field and same-origin checks; these are not a substitute for platform rate limits if the form starts receiving abuse.

## Current setup status

The user-provided Resend key and verified sender are configured locally and in Vercel as of **11 October 2026**. The local Astro configuration was refreshed to load the saved environment. The production website publishes the `main` branch through Vercel's Git integration, including the shared modal and `/api/contact` endpoint.

The existing `stayobservant` Resend team's **Transactional Free** plan and verified `rguide.co` domain were confirmed on 9 October (3,000 emails/month and 100/day, with paid overages disabled). Email uses that existing account directly. No paid plan was selected and the other project's SMTP key was not changed.

Configured settings:

| Setting | Local development | Vercel |
| --- | --- | --- |
| `RESEND_API_KEY` | Private `.env.local` | Secret in Production and Preview; Config in Development, as required for local environment pulls |
| `RESEND_FROM_EMAIL` | `Stay Observant <projects@rguide.co>` | Same value in Production, Preview, and Development |

The API key was transferred to Vercel through stdin, without exposing its value in chat, command arguments, or logs. `.env.local` is ignored by Git and has owner-only permissions. These variables are server-only; never give them a `PUBLIC_` or `VITE_` prefix.

The workspace is now linked to the public website's existing Vercel project, `stay-observant` (`prj_G34hTMfdZUhZiwJhRh21IaNIfSTf`). That project serves `stayobservant.com` and is connected to `RGuideCo/StayObservant`, with production on `main`. The previous local CLI link pointed to a separate `stayobservant` project; it was corrected without changing domain assignments.

## Local development and deployment

1. Run `npm run dev` to use the form locally. The Astro middleware runs the same contact handler as Vercel; it never simulates a successful send.
2. After changing Vercel Development credentials, use `vercel env pull .env.local --yes` and restart the dev server. Keep `.env.local` private.
3. Publish changes by pushing `main` to `RGuideCo/StayObservant`, then confirm the associated production deployment reaches Ready in Vercel. Saved Vercel variables apply to new deployments. `astro preview` serves only static files and does not run `/api/contact`.

Using `rguide.co` requires no DNS changes. If a Stay Observant sender is preferred later, verify `contact.stayobservant.com` using Resend's exact records at the authoritative DNS provider, currently Bluehost (`ns1.bluehost.com`, `ns2.bluehost.com`). Preserve existing records and nameservers.

No tests or live email sends were run, at the user's request.

Implementation references: [Resend Send Email API](https://resend.com/docs/api-reference/emails/send-email), [idempotency keys](https://resend.com/docs/dashboard/emails/idempotency-keys), and [Vercel Node Functions](https://vercel.com/docs/functions/runtimes/node-js).
