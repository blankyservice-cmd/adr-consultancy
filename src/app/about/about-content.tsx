"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  BarChart3,
  Zap,
  Share2,
  Truck,
} from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const highlights = [
  "3 production SaaS products shipped and live",
  "10+ AI-powered automations in production",
  "Full-stack: strategy, development, automation, marketing, training",
  "Canadian compliance expertise (PIPEDA, provincial regulations)",
  "Modern tech stack: Next.js, Supabase, n8n, Claude, Gemini",
  "Consultative approach -- we diagnose before we prescribe",
];

const values = [
  {
    title: "Diagnose First",
    description:
      "We never build before we understand. Every engagement starts with discovery -- mapping your processes, data, and goals before recommending anything.",
  },
  {
    title: "Outcome Over Output",
    description:
      "We measure success by business impact, not lines of code. If a simple automation solves the problem, we will not build a complex platform.",
  },
  {
    title: "Honest Recommendations",
    description:
      "If AI is not the right solution for your problem, we will tell you. We would rather earn your trust than your money on the wrong project.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From strategy through deployment, training through ongoing support -- we do not hand off to another team. You get continuity and accountability.",
  },
];

const caseStudyHighlights = [
  {
    icon: Building2,
    title: "Automanagement",
    desc: "AI-powered property management SaaS with 4 portals, automated maintenance, and Stripe billing.",
  },
  {
    icon: BarChart3,
    title: "TELUS Sales Dashboard",
    desc: "Commission tracker and sales analytics platform for telecom account specialists.",
  },
  {
    icon: Zap,
    title: "AI Automations Suite",
    desc: "10+ production automations including document processing, lead scoring, and content generation.",
  },
  {
    icon: Share2,
    title: "LinkedIn Content Pipeline",
    desc: "Fully automated AI content generation, scheduling, and cross-platform publishing.",
  },
  {
    icon: Truck,
    title: "Patron Express",
    desc: "Modern delivery logistics website with real-time tracking and route optimization.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">
                About Us
              </span>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-[-0.03em] leading-tight">
                Built by a builder, not a salesperson.
              </h1>
              <p className="mt-6 text-lg text-charcoal/70 leading-[1.7]">
                ADR Consultancy was founded on a simple belief: businesses
                deserve AI solutions designed for their specific needs, not
                recycled templates.
              </p>
              <p className="mt-4 text-charcoal/70 leading-[1.7]">
                Our founder has hands-on experience building enterprise software,
                deploying AI automations, and shipping products across property
                management, sales operations, logistics, and marketing. This is
                not theoretical knowledge -- it is proven, production-grade
                capability.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/peter-miranda-4a4113215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg active:scale-[0.97]"
                >
                  <LinkedInIcon size={16} />
                  Connect on LinkedIn
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue transition-colors"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-navy p-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-navy">
                      3
                    </span>
                    <span className="mt-1 block text-sm text-charcoal/60">
                      Production SaaS Products
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-navy">
                      10+
                    </span>
                    <span className="mt-1 block text-sm text-charcoal/60">
                      AI Automations Deployed
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-navy">
                      7
                    </span>
                    <span className="mt-1 block text-sm text-charcoal/60">
                      Service Pillars
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-navy">
                      4
                    </span>
                    <span className="mt-1 block text-sm text-charcoal/60">
                      Industries Served
                    </span>
                  </div>
                </div>

                <div className="my-8 h-px bg-border" />

                <div>
                  <span className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
                    Tech Stack
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "TypeScript",
                      "Supabase",
                      "n8n",
                      "Claude / Gemini",
                      "Tailwind CSS",
                      "Stripe",
                      "Vercel",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-navy/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
              Our Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 shadow-navy"
              >
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Track Record
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
              Projects We Have Shipped
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Every project in our portfolio was built end-to-end -- strategy,
              design, development, deployment, and training.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyHighlights.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-light-bg rounded-xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <cs.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-navy">{cs.title}</h3>
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {cs.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
            >
              View Full Case Studies
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 sm:py-20 bg-light-bg">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em] text-center mb-8">
              Credentials
            </h2>
            <div className="bg-white rounded-2xl shadow-navy p-8 sm:p-10">
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-gold mt-0.5 flex-shrink-0"
                    />
                    <span className="text-charcoal/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy-gradient">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em]">
              Ready to work together?
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed max-w-xl mx-auto">
              Whether you need a strategy assessment, a custom build, or an
              ongoing AI partnership -- let us start with a conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold active:scale-[0.97]"
              >
                Free AI Assessment
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.97]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
