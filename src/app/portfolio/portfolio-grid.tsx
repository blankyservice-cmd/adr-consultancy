"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, categories } from "@/lib/case-studies";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.categorySlug === activeCategory);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="ADR Consultancy"
              width={170}
              height={25}
            />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold active:scale-[0.97]"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-12 bg-navy-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-gold transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white tracking-[-0.03em]">
              Our Portfolio
            </h1>
            <p className="mt-3 text-white/60 max-w-2xl">
              Every project below is live, production software built and shipped
              by our team. From enterprise SaaS to marketing automations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 sm:py-16 bg-light-bg min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? "bg-navy text-white"
                    : "bg-white text-charcoal/70 hover:bg-navy/5 border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((cs, i) => (
                <motion.div
                  key={cs.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Link
                    href={`/portfolio/${cs.slug}`}
                    className="group block bg-white rounded-xl border border-border p-7 transition-all duration-300 hover:shadow-navy hover:-translate-y-0.5 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                        <cs.icon size={20} />
                      </div>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        {cs.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed mb-5 line-clamp-3">
                      {cs.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cs.metrics.slice(0, 3).map((m) => (
                        <span
                          key={m.label}
                          className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy"
                        >
                          {m.value} {m.label}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.02em]">
            Ready to build something like this?
          </h2>
          <p className="mt-3 text-charcoal/60">
            Tell us about your business and we will show you what is possible.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold active:scale-[0.97]"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-gradient border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex items-center justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ADR Consultancy. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-xs text-white/30 hover:text-gold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </>
  );
}
