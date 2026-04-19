"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudies() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
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
            Our Work
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
            Proven Results, Real Products
          </h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            Every project below is live, production software -- not mockups or
            concepts. Built and shipped by our team.
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }
            >
              <Link
                href={`/portfolio/${c.slug}`}
                className={`group relative block rounded-xl border border-border bg-white p-7 transition-all duration-300 hover:shadow-navy hover:-translate-y-0.5 h-full`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <c.icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {c.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-navy mb-2">
                  {c.title}
                </h3>
                <p className="text-charcoal/65 text-sm leading-relaxed mb-5">
                  {c.description.length > 150
                    ? c.description.slice(0, 150) + "..."
                    : c.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {c.metrics.slice(0, 3).map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy"
                    >
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-charcoal/50 bg-light-bg px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                  Read Case Study
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-blue transition-colors"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
