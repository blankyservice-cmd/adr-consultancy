# THIS PROJECT: ADR Consultancy
**Directory:** `C:/Projects/adr-consultancy/`
**Port:** 3003

## HARD RULE: PROJECT ISOLATION
This session is for ADR Consultancy ONLY.
- NEVER read, edit, or create files outside of `C:/Projects/adr-consultancy/`
- NEVER make changes to Automanagement, TELUS Dashboard, Patron Express, Aliyah Jewelry, or any other project
- If asked to work on another project, instruct the user to open a new session from that project's directory

---

# ADR Consultancy - AI Consulting Agency Website

End-to-end AI consulting agency with a consultative approach. Website serves as the digital storefront for ADR Consultancy.

## Project Rules
- **Git workflow:** Never commit and push without explicit user approval.
- **Port:** Dev server runs on port 3003
- **Isolated project:** This is completely separate from Automanagement, Patron Express, TELUS Dashboard, and all other projects. NEVER mix assets or code.
- No em dashes, no emojis in AI-generated content

## Tech Stack
- **Framework**: Next.js (TypeScript, React, App Router)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: TBD (likely Vercel)

## File Structure
```
adr-consultancy/
├── CLAUDE.md                    # This file
├── src/
│   ├── app/                     # App Router pages
│   ├── components/              # Reusable UI components
│   │   └── ui/                  # shadcn/ui components
│   └── lib/                     # Utilities
├── public/
│   └── brand-assets/            # Logo, brand kit files
└── package.json
```

## Brand Identity
- **Name**: ADR Consultancy
- **Positioning**: End-to-end AI consulting with consultative approach
- **7 Service Pillars**:
  1. AI Strategy & Consulting
  2. AI-Powered Software Development
  3. Workflow Automation & AI Integration
  4. Marketing & Advertising AI
  5. Sales Enablement AI
  6. AI Training, Adoption & Change Management
  7. AI Governance & Compliance
- **LinkedIn**: Connected to Peter's main profile

## Design Rules
- Follow the same anti-generic guardrails from the frontend design skill
- Custom brand colors: Navy `#1F4E78`, Gold `#D4A574`, Gold Dark `#C49560`, Light BG `#F8F6F0`, Charcoal `#2D3748`
- Typography: Playfair Display (headings) + Inter (body)
- Layered shadows, spring animations (only `transform` + `opacity`, never `transition-all`)
- Every clickable element needs hover, focus-visible, and active states

## Env Vars
See `.env.local.example` for all required variables. Key services:
- Supabase (leads storage)
- Resend (contact form email notifications)
- Stripe (invoice generation)
- n8n webhook (lead notification pipeline)
- ADMIN_PASSWORD + ADMIN_SESSION_SECRET (protect /admin, /invoicing, /playbook, /proposal)

---

## Next.js Gotchas

- **NEVER use service role `createServerClient` in middleware** — crashes the entire site ("Application error"). Service role is only safe in server actions and API routes (Node.js runtime).
- **NEVER export functions from `"use client"` modules** that server components call — they become client references and throw during render. Move shared logic to a plain `lib/` file.
- **`useSearchParams()` needs `<Suspense>`** boundary in Next.js 15+.
- **Framer Motion `ease` type**: use `ease: [0.22, 1, 0.36, 1] as const` not plain array — plain array doesn't satisfy the `Easing` type.

## Supabase Patterns
- NEVER write RLS policies on `users` table that query `users` — causes infinite recursion
- Admin policies must use a `SECURITY DEFINER` function instead of `SELECT FROM users`
- Missing storage buckets silently block uploads — verify bucket existence on setup
