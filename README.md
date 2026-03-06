# Succession

> Voice-powered knowledge capture for retiring business owners.

**Live:** succession.ashketing.com  
**Stage:** 4 — MVP Built ✅

## What It Does

Succession turns 5 voice conversations into the complete handover document a buyer needs to understand a business. Owners talk, AI organizes, brokers share.

## Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** shadcn/ui + Tailwind CSS v4
- **Auth:** NextAuth.js (magic link + Google OAuth)
- **DB:** Prisma + PostgreSQL (shared Coolify instance)
- **Voice:** Web Speech API + Whisper API
- **AI:** OpenAI GPT-4o
- **Payments:** Stripe
- **Storage:** Cloudflare R2
- **Email:** Resend

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing — hero, how it works, pricing, social proof |
| `/about` | Mission, product detail, industry flows |
| `/pricing` | Full pricing + FAQ |
| `/signup` | Magic link / Google OAuth signup |
| `/login` | Return user sign-in |
| `/onboarding` | 3-step setup: business → details → owner |
| `/dashboard` | Owner home: sessions, progress, document |
| `/session/new` | Voice recording interface |
| `/session/[id]` | Session review: transcript + extracted sections |
| `/document` | Full handover document with sticky TOC |
| `/share/[token]` | Public broker/buyer read-only view |
| `/deck` | Animated pitch deck (9 slides) |
| `/docs` | Documentation hub |
| `/api/health` | Health check → 200 OK |

## Brand

- **Walnut** `#5C3D2E` — Primary CTAs, links
- **Parchment** `#E8D5B7` — Section backgrounds
- **Sage** `#7A8C6E` — Success states
- **Cream** `#FAF7F2` — Page background
- **Brick Red** `#B54040` — Live recording indicator
- **Fonts:** Playfair Display (H1-H2), Lora (H3-H5), Inter (body)

## Development

```bash
cp .env.example .env
# Fill in .env values
npm install
npx prisma migrate dev
npm run dev
```

## Deploy

See `~/clawd/areas/infrastructure/deployment-rules.md`.

- Coolify project: `succession`
- Subdomain: `succession.ashketing.com`
- Postgres schema: `succession` on shared instance
- Memory limit: 256MB

## Pipeline Status

- [x] Stage 1: Research
- [x] Stage 2: MVP Plan
- [x] Stage 3: Design
- [x] Stage 4: Create MVP (this stage)
- [ ] Stage 5: Test
- [ ] Stage 6: Deploy
