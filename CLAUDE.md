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
- Custom brand colors (NOT default Tailwind palette)
- Layered shadows, paired typography, spring animations
- Every clickable element needs hover, focus-visible, and active states
