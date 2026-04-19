"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "3 production SaaS products shipped and live",
  "10+ AI-powered automations in production",
  "Full-stack: strategy, development, automation, marketing, training",
  "Canadian compliance expertise (PIPEDA, provincial regulations)",
  "Modern tech stack: Next.js, Supabase, n8n, Claude, Gemini",
  "Consultative approach -- we diagnose before we prescribe",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              About ADR Consultancy
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
              Built by a builder, not a salesperson.
            </h2>
            <p className="mt-6 text-charcoal/70 leading-[1.7]">
              ADR Consultancy was founded on a simple belief: businesses deserve
              AI solutions designed for their specific needs, not recycled
              templates. Before recommending anything, we sit down, understand
              your operations, and identify where AI will create the most value.
            </p>
            <p className="mt-4 text-charcoal/70 leading-[1.7]">
              Our founder has hands-on experience building enterprise software,
              deploying AI automations, and shipping products across property
              management, sales operations, logistics, and marketing. This is
              not theoretical knowledge -- it is proven, production-grade
              capability.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-charcoal/75">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-navy p-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-navy">3</span>
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
                  <span className="block text-4xl font-bold text-navy">7</span>
                  <span className="mt-1 block text-sm text-charcoal/60">
                    Service Pillars
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold text-navy">4</span>
                  <span className="mt-1 block text-sm text-charcoal/60">
                    Industries Served
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Industries */}
              <div>
                <span className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
                  Industries
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Property Management",
                    "Sales & CRM",
                    "Logistics",
                    "Marketing",
                  ].map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full bg-navy/5 px-3 py-1.5 text-xs font-medium text-navy"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
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

            {/* Decorative accent */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-navy/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
