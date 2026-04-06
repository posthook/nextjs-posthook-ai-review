# Human-in-the-Loop AI Review with Posthook

An AI content review app built with Next.js, OpenAI, and [Posthook](https://posthook.io). AI generates drafts, Posthook schedules reminders and expirations — reviewers approve, reject, or snooze before time runs out.

**Live at**: [nextjs-starter.posthook.io](https://nextjs-starter.posthook.io)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fposthook%2Fnextjs-posthook-ai-review&env=POSTHOOK_API_KEY,POSTHOOK_SIGNING_KEY&envDescription=Get%20your%20Posthook%20API%20key%20at%20posthook.io.%20OPENAI_API_KEY%20is%20optional%20(falls%20back%20to%20simulated%20drafts).&envLink=https%3A%2F%2Fposthook.io%2Fapp%2Fsignup&optionalEnv=OPENAI_API_KEY&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22neon%22%2C%22productSlug%22%3A%22neon%22%2C%22protocol%22%3A%22storage%22%7D%5D)

[![Screenshot](screenshot.png)](https://nextjs-starter.posthook.io)

## What It Does

1. **Create a review task** — AI generates a draft, Posthook schedules a reminder and expiration
2. **Reminder fires** — webhook delivers, task status changes to "reminded"
3. **Expiration fires** — if no one acted, the task auto-expires
4. **Approve / Reject / Snooze** — human actions; pending hooks self-disarm via state verification

## Features

- **AI content generation** — OpenAI with graceful fallback to simulated drafts
- **Webhook handlers** — one route per hook type, each verifying HMAC signatures
- **Task state machine** — schedule-first ordering, conditional updates, epoch-based snooze
- **Interactive dashboard** — shadcn/ui with live countdowns, activity feed, real-time updates
- **Session isolation** — each visitor gets their own sandbox (30-min TTL)
- **Seeded data** — 3 pre-created tasks in different states on first visit

## Local Development

```bash
git clone https://github.com/posthook/nextjs-posthook-ai-review.git
cd nextjs-posthook-ai-review
npm install
docker compose up -d db
cp .env.example .env.local    # add your keys
npm run db:push
SEED_REMINDER_DELAY=45s SEED_EXPIRATION_DELAY=3m npm run dev
```

In another terminal:

```bash
npx posthook listen --forward http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) and click "Try the demo."

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | Postgres connection string |
| `POSTHOOK_API_KEY` | Yes | Posthook API key (`phk_...`) |
| `POSTHOOK_SIGNING_KEY` | Yes | Posthook signing key (`phs_...`) |
| `OPENAI_API_KEY` | No | OpenAI key (falls back to simulated drafts) |
| `REMINDER_DELAY` | No | Default reminder delay (default: `1h`) |
| `EXPIRATION_DELAY` | No | Default expiration delay (default: `24h`) |
| `SEED_REMINDER_DELAY` | No | Seed task reminder delay (default: `45s`) |
| `SEED_EXPIRATION_DELAY` | No | Seed task expiration delay (default: `3m`) |

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [Posthook](https://posthook.io) for durable per-event scheduling
- [OpenAI](https://openai.com) for AI content generation
- [Drizzle ORM](https://orm.drizzle.team) + PostgreSQL
- [shadcn/ui](https://ui.shadcn.com) + Tailwind CSS

## Related

- **[posthook/nextjs-posthook-scheduling](https://github.com/posthook/nextjs-posthook-scheduling)** — Simpler reminder-only starter. Vercel template.
- **[posthook.io](https://posthook.io)** — Durable scheduling API.

## License

MIT
