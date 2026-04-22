"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Code2,
  Workflow,
  Megaphone,
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Service Pillars Data                                               */
/* ------------------------------------------------------------------ */

interface ServicePillar {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
}

const pillars: ServicePillar[] = [
  {
    icon: Compass,
    title: "AI Strategy & Consulting",
    description:
      "We assess your business, identify high-impact AI opportunities, and build a roadmap ranked by ROI -- so you invest where it matters most.",
    deliverables: [
      "AI readiness assessment",
      "Opportunity mapping & prioritization",
      "Implementation roadmap with ROI estimates",
      "Technology stack recommendations",
    ],
  },
  {
    icon: Code2,
    title: "AI-Powered Software",
    description:
      "Custom web applications, AI chatbots, real-time dashboards, and multi-portal systems built on modern, scalable architecture.",
    deliverables: [
      "Custom web & mobile applications",
      "AI chatbots & virtual assistants",
      "Real-time dashboards & analytics",
      "API integrations & data pipelines",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automations -- from document processing and triage routing to scheduling and system integration.",
    deliverables: [
      "Process mapping & optimization",
      "n8n / Zapier automation builds",
      "Document processing & extraction",
      "System-to-system integrations",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Advertising AI",
    description:
      "AI-powered content generation, social media automation, email campaigns, SEO strategy, and ad optimization that runs while you sleep.",
    deliverables: [
      "AI content generation pipelines",
      "Social media automation",
      "Email campaign automation",
      "SEO & ad optimization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement AI",
    description:
      "CRM automation, lead scoring, pipeline management, outreach sequences, and sales forecasting to close more deals faster.",
    deliverables: [
      "CRM setup & automation",
      "Lead scoring & qualification",
      "Outreach sequence builders",
      "Sales analytics & forecasting",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Training & Adoption",
    description:
      "Hands-on training programs, documentation, and change management to ensure your team actually uses the AI tools we build.",
    deliverables: [
      "Custom training workshops",
      "User documentation & SOPs",
      "Change management planning",
      "Ongoing support & coaching",
    ],
  },
  {
    icon: ShieldCheck,
    title: "AI Governance & Compliance",
    description:
      "Data privacy (PIPEDA), AI ethics reviews, security architecture, and regulatory compliance so you can deploy AI with confidence.",
    deliverables: [
      "PIPEDA compliance audits",
      "AI ethics & bias reviews",
      "Security architecture design",
      "Policy & documentation frameworks",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Pricing Tiers Data                                                 */
/* ------------------------------------------------------------------ */

interface PricingTier {
  name: string;
  tagline: string;
  priceRange: string;
  priceNote: string;
  features: string[];
  timeline: string;
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Entry Point",
    tagline: "Understand your opportunity",
    priceRange: "$2,500 - $7,500",
    priceNote: "One-time engagement",
    features: [
      "AI readiness assessment",
      "Opportunity mapping & prioritization",
      "Implementation roadmap with ROI",
      "Technology recommendations",
      "30-day follow-up call",
    ],
    timeline: "1-2 weeks",
    cta: "Start Here",
    ctaHref: "/audit",
  },
  {
    name: "Project-Based",
    tagline: "Build what matters most",
    priceRange: "$10,000 - $50,000+",
    priceNote: "Per project, 50% upfront",
    features: [
      "Everything in Entry Point",
      "Custom AI solution development",
      "Workflow automation builds",
      "Integration with existing systems",
      "User training & documentation",
      "60-day post-launch support",
    ],
    timeline: "4-12 weeks",
    cta: "Get a Quote",
    ctaHref: "/#contact",
    highlighted: true,
  },
  {
    name: "Managed Services",
    tagline: "Ongoing AI partnership",
    priceRange: "$3,000 - $10,000/mo",
    priceNote: "Monthly retainer, cancel anytime",
    features: [
      "Dedicated AI consultant",
      "Continuous optimization & monitoring",
      "Priority support & bug fixes",
      "Monthly performance reviews",
      "New feature development",
      "Training for new team members",
    ],
    timeline: "Ongoing",
    cta: "Let's Talk",
    ctaHref: "/#contact",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-navy tracking-[-0.03em]">
              Services & Pricing
            </h1>
            <p className="mt-5 text-lg text-charcoal/70 leading-[1.7]">
              Seven service pillars covering every stage of your AI journey.
              We diagnose before we build, so you only pay for what creates
              real value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-16 sm:py-20 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group relative bg-white rounded-xl p-8 shadow-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <pillar.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-charcoal/65 leading-relaxed text-sm mb-4">
                      {pillar.description}
                    </p>
                    <ul className="space-y-1.5">
                      {pillar.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-charcoal/70"
                        >
                          <Check
                            size={14}
                            className="text-gold flex-shrink-0"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
              Flexible Engagement Models
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Whether you need a one-time assessment or an ongoing AI
              partnership, we have a model that fits your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-navy-gradient text-white ring-2 ring-gold/30 shadow-lg scale-[1.02]"
                    : "bg-light-bg text-navy"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-semibold ${
                      tier.highlighted ? "text-white" : "text-navy"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      tier.highlighted ? "text-white/60" : "text-charcoal/50"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-2xl font-bold ${
                      tier.highlighted ? "text-gold" : "text-navy"
                    }`}
                  >
                    {tier.priceRange}
                  </span>
                  <p
                    className={`text-xs mt-1 ${
                      tier.highlighted ? "text-white/50" : "text-charcoal/40"
                    }`}
                  >
                    {tier.priceNote}
                  </p>
                </div>

                <div
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg w-fit mb-6 ${
                    tier.highlighted
                      ? "bg-white/10 text-white/70"
                      : "bg-navy/5 text-navy/60"
                  }`}
                >
                  Timeline: {tier.timeline}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-gold" : "text-gold"
                        }`}
                      />
                      <span
                        className={
                          tier.highlighted
                            ? "text-white/80"
                            : "text-charcoal/70"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
                    tier.highlighted
                      ? "bg-gold text-navy hover:bg-gold-dark hover:shadow-gold"
                      : "bg-navy text-white hover:bg-navy/90 hover:shadow-lg"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-16 sm:py-20 bg-light-bg">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em]">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed max-w-xl mx-auto">
              Take our free AI Readiness Assessment. In 5 minutes, we will
              identify your highest-impact opportunities and recommend the
              right engagement model.
            </p>
            <Link
              href="/audit"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97]"
            >
              Free AI Assessment
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
