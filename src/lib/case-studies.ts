import {
  Building2,
  BarChart3,
  Zap,
  Share2,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  automanagement: Building2,
  "telus-dashboard": BarChart3,
  "ai-automations": Zap,
  "linkedin-pipeline": Share2,
  "patron-express": Truck,
};

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudyData {
  slug: string;
  iconSlug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  description: string;
  problem: string;
  solution: string;
  features: CaseStudyFeature[];
  metrics: { label: string; value: string }[];
  tags: string[];
  techStack: { name: string; role: string }[];
  results: string[];
  videoPlaceholder?: boolean;
}

export interface CaseStudy extends CaseStudyData {
  icon: LucideIcon;
}

export interface CaseStudyLike {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  description: string;
  problem: string;
  solution: string;
  features: CaseStudyFeature[];
  metrics: { label: string; value: string }[];
  tags: string[];
  techStack: { name: string; role: string }[];
  results: string[];
  videoPlaceholder?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "automanagement",
    iconSlug: "automanagement",
    icon: Building2,
    title: "Enterprise Property Management Platform",
    subtitle: "Automanagement.ca",
    category: "Custom Software",
    categorySlug: "software",
    description:
      "A full-stack SaaS platform that automates the entire rental property lifecycle -- from listing and screening to rent collection and maintenance -- across all 10 Canadian provinces.",
    problem:
      "Canadian property managers were drowning in manual work: screening tenants by hand, chasing rent payments, coordinating maintenance through phone calls and spreadsheets, and struggling to stay compliant with different provincial regulations. No existing solution covered the full lifecycle with AI built in.",
    solution:
      "We built Automanagement -- an enterprise-grade property management platform with 4 distinct portals (admin, tenant, owner, contractor), 9 AI-powered automations, and compliance logic covering all 10 Canadian provinces. The system handles everything from listing syndication to late fee processing, with AI doing the heavy lifting on tenant screening, maintenance triage, and customer support.",
    features: [
      {
        title: "4-Portal Architecture",
        description:
          "Separate interfaces for property managers, tenants, property owners, and contractors -- each tailored to their specific workflows and permissions.",
      },
      {
        title: "AI Tenant Screening",
        description:
          "Analyzes applications against income-to-rent ratios, employment stability, rental history, and red flags. Generates risk scores while respecting Ontario Human Rights Code.",
      },
      {
        title: "AI Maintenance Triage",
        description:
          "Classifies urgency, categorizes requests, and automatically matches with the best available contractor based on specialty, availability, and ratings.",
      },
      {
        title: "AI Chat Assistant",
        description:
          "Handles 90% of tenant FAQs automatically -- lease questions, payment history, maintenance status -- with full context awareness of the tenant's lease and property.",
      },
      {
        title: "Automated Rent Collection",
        description:
          "Interac e-Transfer integration (no credit card fees), automatic late fee calculation with grace periods, and payment reminders on schedule.",
      },
      {
        title: "Listing Syndication",
        description:
          "One-click distribution to Kijiji, Craigslist, Zumper, RentFaster, and Facebook Marketplace with platform-specific formatting.",
      },
      {
        title: "10-Province Compliance",
        description:
          "Built-in rules for rent increase limits, security deposits, late fees, and notice periods for every Canadian province.",
      },
      {
        title: "AI Contractor Finder",
        description:
          "When no internal contractor matches, AI searches for local contractors with 4+ star ratings, validates results, and stores recommendations.",
      },
    ],
    metrics: [
      { label: "Portals", value: "4" },
      { label: "AI Automations", value: "9" },
      { label: "Provinces Covered", value: "10" },
      { label: "Tenant FAQ Coverage", value: "90%" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "n8n", "OpenRouter", "Stripe", "Resend", "Vercel"],
    techStack: [
      { name: "Next.js 16", role: "Frontend framework with App Router and server actions" },
      { name: "TypeScript", role: "Type-safe development across the full stack" },
      { name: "Supabase", role: "PostgreSQL database, authentication, real-time sync, row-level security" },
      { name: "n8n", role: "Workflow automation engine for all 9 AI-powered automations" },
      { name: "OpenRouter", role: "AI model access (Claude, Gemini) for screening, triage, and chat" },
      { name: "Stripe", role: "Payment processing and subscription management" },
      { name: "Resend", role: "Transactional email (notifications, reminders, receipts)" },
      { name: "Tailwind CSS + shadcn/ui", role: "UI component library and styling system" },
      { name: "Vercel", role: "Hosting and auto-deployment from GitHub" },
    ],
    results: [
      "Full property management lifecycle automated end-to-end",
      "AI handles tenant screening, maintenance routing, and 90% of support questions",
      "Compliant with rental regulations across all 10 Canadian provinces",
      "Late fee processing runs automatically every day at 5 AM",
      "Listings syndicated to 5 platforms with one click",
      "Error handling with auto-retry and Telegram alerts for zero downtime",
    ],
    videoPlaceholder: true,
  },
  {
    slug: "telus-dashboard",
    iconSlug: "telus-dashboard",
    icon: BarChart3,
    title: "AI Sales Coaching Dashboard",
    subtitle: "TELUS Sales Performance Tracker",
    category: "Analytics & AI",
    categorySlug: "analytics",
    description:
      "A real-time sales performance dashboard with AI coaching, gamification, and commission prediction -- built to help sales reps hit their targets every month.",
    problem:
      "Sales representatives tracking commissions in spreadsheets had no real-time visibility into their performance. They could not tell if they were on pace to hit targets until it was too late, and there was no coaching system to help them course-correct mid-month.",
    solution:
      "We built a real-time sales coaching platform that tracks every sale, calculates commissions instantly, predicts monthly outcomes, and provides personalized AI coaching based on current performance gaps. A gamification layer with levels, badges, and celebrations keeps motivation high.",
    features: [
      {
        title: "Real-Time Sales Tracking",
        description:
          "Product-by-product tracking (Mobile, BCON, Internet, Add-ons) with instant commission calculations and daily pace analysis.",
      },
      {
        title: "AI Sales Coach",
        description:
          "Context-aware coaching that analyzes pipeline, targets, and earnings, then delivers personalized strategies in 80-120 words. No hype -- just actionable advice.",
      },
      {
        title: "Gamification System",
        description:
          "Leveling system, achievement badges, multiplier tracking, and confetti celebrations on milestones to keep reps engaged and motivated.",
      },
      {
        title: "Gap Analysis & What-If Calculator",
        description:
          "Shows exactly how many more sales are needed per product to hit targets. What-if scenarios let reps model different strategies.",
      },
      {
        title: "Sales Pipeline Management",
        description:
          "Lead logging, product tagging, sales history, and pipeline health monitoring with deal-stage progression tracking.",
      },
      {
        title: "Commission Forecasting",
        description:
          "Predictive analytics based on current pace, pipeline, and historical data to forecast monthly earnings before month-end.",
      },
    ],
    metrics: [
      { label: "Real-Time Data", value: "Live" },
      { label: "AI Coach", value: "Context-Aware" },
      { label: "Gamification", value: "Full System" },
      { label: "Products Tracked", value: "4+" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Claude API", "Recharts", "Google OAuth"],
    techStack: [
      { name: "Next.js 16", role: "Full-stack framework with server components and real-time updates" },
      { name: "Supabase", role: "Real-time database subscriptions, authentication, row-level security" },
      { name: "Claude API", role: "AI coaching engine with context-aware sales strategy recommendations" },
      { name: "Recharts", role: "Interactive data visualization and performance charts" },
      { name: "Google OAuth + Calendar", role: "Authentication and calendar integration for activity tracking" },
      { name: "Tailwind CSS", role: "Responsive design system with custom dashboard components" },
    ],
    results: [
      "Sales reps see commission impact of every sale in real-time",
      "AI coach delivers personalized strategy based on actual pipeline data",
      "Gamification system drives consistent engagement and friendly competition",
      "What-if calculator empowers reps to plan their own path to target",
      "Multiplier tracking ensures reps never miss bonus thresholds",
    ],
    videoPlaceholder: true,
  },
  {
    slug: "ai-automations",
    iconSlug: "ai-automations",
    icon: Zap,
    title: "10+ Production AI Automations",
    subtitle: "n8n Workflow Suite",
    category: "Workflow Automation",
    categorySlug: "automation",
    description:
      "A comprehensive suite of intelligent automations covering customer support, operations, content generation, lead scraping, and error handling -- all running in production 24/7.",
    problem:
      "Businesses were spending hours every day on repetitive tasks: answering the same customer questions, manually routing maintenance requests, processing late fees by hand, posting to social media, and scrambling when automations failed silently.",
    solution:
      "We built a suite of 10+ n8n workflows that handle these tasks autonomously. Each workflow uses AI (Claude or Gemini via OpenRouter) for intelligent decision-making, not just simple if/then logic. Error handling with auto-retry and Telegram alerts ensures nothing fails silently.",
    features: [
      {
        title: "AI Chat Agent",
        description:
          "Webhook-triggered chatbot that fetches tenant context (lease, payments, maintenance) and generates intelligent responses using Gemini.",
      },
      {
        title: "Maintenance Triage",
        description:
          "Classifies urgency, categorizes requests, recommends contractors, and triggers the external contractor finder when no internal match exists.",
      },
      {
        title: "Tenant Screening",
        description:
          "Analyzes applications, generates risk scores (1-10), and sends admin notifications with approve/flag/reject recommendations.",
      },
      {
        title: "Late Fee Processor",
        description:
          "Runs daily at 5 AM. Checks overdue payments, calculates fees (flat or percentage with caps), updates records, and notifies admins.",
      },
      {
        title: "External Contractor Finder",
        description:
          "AI researches local contractors with 4+ stars, validates against fake patterns, and stores verified recommendations in the database.",
      },
      {
        title: "Error Handler",
        description:
          "Catches errors across all workflows, classifies as retryable vs permanent, auto-retries when possible, and sends Telegram alerts with execution links.",
      },
      {
        title: "Lead Scraper",
        description:
          "Scrapes Yellow Pages Canada for SMB leads by city, province, and category. Extracts business name, address, phone, and website into Google Sheets.",
      },
      {
        title: "Listing Syndication",
        description:
          "Fetches listing details, posts to Facebook, formats for 4 rental platforms (Kijiji, Craigslist, Zumper, RentFaster), and tracks syndication results.",
      },
    ],
    metrics: [
      { label: "Workflows", value: "10+" },
      { label: "AI Models Used", value: "3" },
      { label: "Uptime", value: "24/7" },
      { label: "Error Recovery", value: "Auto-Retry" },
    ],
    tags: ["n8n", "OpenRouter", "Gemini", "Claude", "Supabase", "Telegram", "Google Sheets"],
    techStack: [
      { name: "n8n", role: "Workflow automation engine (self-hosted)" },
      { name: "OpenRouter", role: "AI model gateway (Claude, Gemini access)" },
      { name: "Supabase REST API", role: "Database reads/writes from within workflows" },
      { name: "Telegram Bot API", role: "Real-time alerts and approval flows" },
      { name: "Google Sheets API", role: "Content storage and lead data management" },
      { name: "LinkedIn API", role: "Post publishing and image upload" },
      { name: "Facebook Graph API", role: "Listing syndication to Marketplace" },
    ],
    results: [
      "Customer support questions answered automatically 24/7",
      "Maintenance requests triaged and routed in seconds, not hours",
      "Late fees processed daily with zero manual effort",
      "Zero silent failures -- errors are caught, retried, and alerted in real-time",
      "Content generated, approved, and published without touching a keyboard",
      "SMB leads scraped and organized automatically from Yellow Pages",
    ],
  },
  {
    slug: "linkedin-pipeline",
    iconSlug: "linkedin-pipeline",
    icon: Share2,
    title: "Autonomous Content Pipeline",
    subtitle: "LinkedIn AI Content System",
    category: "Marketing AI",
    categorySlug: "marketing",
    description:
      "A fully autonomous content system that generates LinkedIn posts, creates images, sends them for approval via Telegram, and publishes on schedule -- twice daily, six days a week.",
    problem:
      "Maintaining a consistent LinkedIn presence requires hours of content planning, writing, image creation, and manual posting. Most businesses start strong then drop off within weeks because the effort is unsustainable.",
    solution:
      "We built an end-to-end content pipeline that runs autonomously. It rotates through 6 content pillars, generates posts with Claude, creates matching images with Gemini, sends for one-tap approval via Telegram, and publishes directly to LinkedIn with the image attached. The entire cycle -- from idea to published post -- happens without opening LinkedIn.",
    features: [
      {
        title: "6 Content Pillar Rotation",
        description:
          "Automatically cycles through Compliance, Tenant Screening, Rent Collection, Maintenance, Market Insights, and Product Showcase -- with unique topics per day and time slot.",
      },
      {
        title: "AI Post Generation",
        description:
          "Claude generates 100-150 word LinkedIn posts with industry hashtags, optimized for engagement. Different tone and angle for each pillar.",
      },
      {
        title: "AI Image Generation",
        description:
          "Gemini creates hyperrealistic property management images matching the post topic. Square 1:1 format optimized for LinkedIn feed.",
      },
      {
        title: "Telegram Approval Flow",
        description:
          "Generated posts are sent to Telegram with approve/reject buttons. One tap to approve, and it publishes automatically.",
      },
      {
        title: "Auto-Publish to LinkedIn",
        description:
          "Registers image upload with LinkedIn API, uploads the image, then publishes the post with text and image attached. Updates tracking sheet.",
      },
      {
        title: "Google Sheets Tracking",
        description:
          "Every post is logged with status (pending/approved/published), content, pillar, date, and LinkedIn post ID for analytics.",
      },
    ],
    metrics: [
      { label: "Posts Per Week", value: "12" },
      { label: "Content Pillars", value: "6" },
      { label: "Manual Effort", value: "~0" },
      { label: "Approval Method", value: "1-Tap" },
    ],
    tags: ["n8n", "Claude API", "Gemini API", "LinkedIn API", "Telegram", "Google Sheets"],
    techStack: [
      { name: "n8n", role: "Workflow orchestration and scheduling (9 AM + 5 PM EST, Mon-Sat)" },
      { name: "OpenRouter (Claude)", role: "Post content generation with pillar-aware context" },
      { name: "Google Gemini", role: "Hyperrealistic image generation for each post" },
      { name: "LinkedIn API", role: "Image upload registration, image upload, and post publishing" },
      { name: "Telegram Bot API", role: "Approval flow with inline keyboard buttons" },
      { name: "Google Sheets", role: "Content tracking, status management, and analytics" },
    ],
    results: [
      "12 LinkedIn posts published per week with near-zero manual effort",
      "Consistent brand presence maintained indefinitely without burnout",
      "AI-generated images match post topics for higher engagement",
      "One-tap approval via Telegram means you can manage content from your phone",
      "Full content history tracked in Google Sheets for analytics and optimization",
    ],
  },
  {
    slug: "patron-express",
    iconSlug: "patron-express",
    icon: Truck,
    title: "Premium Delivery Startup Website",
    subtitle: "Patron Express",
    category: "Brand & Web",
    categorySlug: "brand",
    description:
      "A high-craft marketing website for a same-day delivery startup in the Greater Toronto Area, featuring premium branding, smooth animations, and lead capture.",
    problem:
      "A new same-day delivery startup needed a digital presence that communicated speed, reliability, and professionalism -- standing out in a crowded GTA delivery market where most competitors have generic, template-based websites.",
    solution:
      "We designed and built a premium marketing website with custom branding, Framer Motion animations, and a clear conversion flow. The design uses gold accents and warehouse imagery to position Patron Express as a premium, reliable logistics partner -- not just another delivery app.",
    features: [
      {
        title: "Premium Brand Identity",
        description:
          "Custom color palette with gold accents, Playfair Display typography for headings, and warehouse imagery with gradient overlays for a premium logistics feel.",
      },
      {
        title: "Smooth Scroll Animations",
        description:
          "Framer Motion-powered fade-ins, slide transitions, and scroll reveal effects that create a polished, modern browsing experience.",
      },
      {
        title: "Lead Capture System",
        description:
          "Strategically placed contact forms and CTAs designed to convert visitors into qualified business leads.",
      },
      {
        title: "Service Showcase",
        description:
          "Clear presentation of delivery services, coverage areas, and competitive advantages with stats and social proof.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Fully responsive across all devices with touch-optimized interactions and fast load times.",
      },
      {
        title: "How It Works Flow",
        description:
          "Step-by-step visual explainer that makes the delivery process clear and builds confidence in potential customers.",
      },
    ],
    metrics: [
      { label: "Design Quality", value: "Premium" },
      { label: "Load Speed", value: "Fast" },
      { label: "Responsive", value: "All Devices" },
      { label: "Lead Capture", value: "Built-In" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    techStack: [
      { name: "Next.js 16", role: "Static site generation for fast load times" },
      { name: "Framer Motion", role: "Smooth scroll animations and page transitions" },
      { name: "Tailwind CSS", role: "Custom design system with premium brand colors" },
      { name: "Sharp", role: "Image optimization for warehouse and delivery imagery" },
      { name: "Vercel", role: "Edge hosting for GTA-local fast delivery" },
    ],
    results: [
      "Premium brand positioning that differentiates from template-based competitors",
      "Lead capture system converts website visitors into business inquiries",
      "Mobile-first design ensures the site works perfectly for on-the-go business owners",
      "Fast load times and smooth animations create a professional first impression",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

/** Serializable version for server components (no icon function) */
export function getCaseStudyData(slug: string) {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return undefined;
  return {
    slug: cs.slug,
    title: cs.title,
    subtitle: cs.subtitle,
    category: cs.category,
    categorySlug: cs.categorySlug,
    description: cs.description,
  };
}

export const categories = [
  { label: "All", slug: "all" },
  { label: "Custom Software", slug: "software" },
  { label: "Analytics & AI", slug: "analytics" },
  { label: "Workflow Automation", slug: "automation" },
  { label: "Marketing AI", slug: "marketing" },
  { label: "Brand & Web", slug: "brand" },
];
