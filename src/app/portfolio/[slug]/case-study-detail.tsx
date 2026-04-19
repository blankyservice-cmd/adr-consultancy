"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getCaseStudy } from "@/lib/case-studies";
import { notFound } from "next/navigation";

export function CaseStudyDetail({ slug }: { slug: string }) {
  const cs = getCaseStudy(slug);
  if (!cs) { notFound(); return null; }
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
            href="/portfolio"
            className="text-sm font-medium text-navy hover:text-blue transition-colors"
          >
            All Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Portfolio
            </Link>

            <span className="block text-sm font-semibold text-gold uppercase tracking-wider">
              {cs.category}
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1]">
              {cs.title}
            </h1>
            <p className="mt-2 text-lg text-white/50">{cs.subtitle}</p>
            <p className="mt-6 text-white/70 leading-relaxed max-w-3xl">
              {cs.description}
            </p>

            {/* Metrics bar */}
            <div className="mt-10 flex flex-wrap gap-8">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <span className="block text-2xl font-bold text-white">
                    {m.value}
                  </span>
                  <span className="text-sm text-white/40">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-20">
        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-light-bg rounded-xl p-8">
            <h2 className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              The Problem
            </h2>
            <p className="text-charcoal/70 leading-[1.7] text-sm">
              {cs.problem}
            </p>
          </div>
          <div className="bg-navy/[0.03] rounded-xl p-8 border border-navy/10">
            <h2 className="text-sm font-semibold text-blue uppercase tracking-wider mb-3">
              Our Solution
            </h2>
            <p className="text-charcoal/70 leading-[1.7] text-sm">
              {cs.solution}
            </p>
          </div>
        </motion.div>

        {/* Video placeholder */}
        {cs.videoPlaceholder && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy tracking-[-0.02em] mb-6">
              See It in Action
            </h2>
            <div className="relative aspect-video rounded-xl bg-navy/5 border border-border flex items-center justify-center overflow-hidden group cursor-pointer hover:bg-navy/8 transition-colors">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-3 group-hover:bg-gold/30 transition-colors">
                  <Play size={28} className="text-gold ml-1" />
                </div>
                <p className="text-sm text-charcoal/50">
                  Demo video coming soon
                </p>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-charcoal/30">
                <Monitor size={14} />
                Walkthrough
              </div>
            </div>
          </motion.div>
        )}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy tracking-[-0.02em] mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cs.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-navy transition-shadow duration-300"
              >
                <h3 className="text-base font-semibold text-navy mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy tracking-[-0.02em] mb-6">
            Results
          </h2>
          <div className="bg-light-bg rounded-xl p-8">
            <ul className="space-y-3">
              {cs.results.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-charcoal/75">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy tracking-[-0.02em] mb-6">
            Tech Stack
          </h2>
          <div className="space-y-3">
            {cs.techStack.map((t) => (
              <div
                key={t.name}
                className="flex items-start gap-4 py-3 border-b border-border last:border-0"
              >
                <span className="text-sm font-semibold text-navy min-w-[140px]">
                  {t.name}
                </span>
                <span className="text-sm text-charcoal/60">{t.role}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-navy-gradient rounded-2xl p-10 text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white tracking-[-0.02em]">
            Want something like this for your business?
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Every solution we build starts with understanding your specific
            needs. Book a free consultation and let us show you what is
            possible.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold active:scale-[0.97]"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 active:scale-[0.97]"
            >
              View More Projects
            </Link>
          </div>
        </motion.div>
      </div>

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
