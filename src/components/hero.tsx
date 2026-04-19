"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-gold-light backdrop-blur-sm border border-white/10">
              <Sparkles size={14} />
              AI Consulting with a Consultative Approach
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.03em]"
          >
            We consult first,{" "}
            <span className="text-gold">build second.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl"
          >
            From AI strategy to software development, marketing automation to
            team training -- we deliver end-to-end AI solutions tailored to
            your business. No off-the-shelf tools. No guesswork.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97]"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97]"
            >
              Explore Our Services
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8 sm:gap-12 text-white/40 text-sm"
          >
            <div>
              <span className="block text-2xl font-bold text-white">10+</span>
              AI Automations Deployed
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">3</span>
              Production SaaS Products
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">7</span>
              Service Pillars
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
