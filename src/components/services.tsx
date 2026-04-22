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
} from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "AI Strategy & Consulting",
    description:
      "We assess your business, identify high-impact AI opportunities, and build a roadmap ranked by ROI -- so you invest where it matters most.",
  },
  {
    icon: Code2,
    title: "AI-Powered Software",
    description:
      "Custom web applications, AI chatbots, real-time dashboards, and multi-portal systems built on modern, scalable architecture.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automations -- from document processing and triage routing to scheduling and system integration.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Advertising AI",
    description:
      "AI-powered content generation, social media automation, email campaigns, SEO strategy, and ad optimization that runs while you sleep.",
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement AI",
    description:
      "CRM automation, lead scoring, pipeline management, outreach sequences, and sales forecasting to close more deals faster.",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Adoption",
    description:
      "Hands-on training programs, documentation, and change management to ensure your team actually uses the AI tools we build.",
  },
  {
    icon: ShieldCheck,
    title: "AI Governance & Compliance",
    description:
      "Data privacy (PIPEDA), AI ethics reviews, security architecture, and regulatory compliance so you can deploy AI with confidence.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
            End-to-End AI Solutions
          </h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            Seven service pillars covering every stage of your AI journey --
            from strategy through deployment, marketing to training.
          </p>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
          >
            View All Services & Pricing
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group relative bg-white rounded-xl p-7 shadow-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Gold top accent on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                  <pillar.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-charcoal/65 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a
            href="/audit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: 0.56,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="group relative bg-navy-gradient rounded-xl p-7 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="text-gold font-semibold text-lg">
              Not sure where to start?
            </span>
            <span className="mt-2 text-white/70 text-sm">
              Book a free AI readiness assessment and we will map out your
              opportunities together.
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
              Get Started
              <span className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
