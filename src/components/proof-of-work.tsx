"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "AI Automations",
    sub: "running in production 24/7",
  },
  {
    value: "4",
    label: "Portal Architecture",
    sub: "admin, tenant, owner, contractor",
  },
  {
    value: "90%",
    label: "Tenant FAQ Coverage",
    sub: "handled autonomously by AI",
  },
  {
    value: "12/wk",
    label: "LinkedIn Posts",
    sub: "generated and published automatically",
  },
  {
    value: "5",
    label: "Rental Platforms",
    sub: "syndicated with one click",
  },
  {
    value: "3",
    label: "SaaS Products",
    sub: "shipped end-to-end",
  },
];

export function ProofOfWork() {
  return (
    <section className="py-24 sm:py-32 bg-navy-gradient relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">
            Track Record
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white tracking-[-0.03em]">
            Real Numbers From Production Systems
          </h2>
          <p className="mt-4 text-white/55 leading-relaxed">
            Every stat comes from a project we built and shipped. No estimates,
            no demos -- production-grade AI running in the real world.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.07,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group relative bg-white/[0.05] backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.09] hover:border-gold/25"
            >
              <span className="block text-3xl sm:text-4xl font-bold text-gold tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm font-semibold text-white">
                {stat.label}
              </span>
              <span className="mt-1 block text-xs text-white/40 leading-snug">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200"
          >
            See the full case studies
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
