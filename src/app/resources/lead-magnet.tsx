"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download,
  CheckCircle2,
  Mail,
  User,
  Building2,
  ArrowRight,
  FileText,
  Loader2,
} from "lucide-react";

const checklistHighlights = [
  "20 diagnostic questions across 5 business dimensions",
  "Scoring framework to rank your AI readiness",
  "Quick-win identification guide",
  "ROI estimation worksheet",
  "Technology stack decision tree",
];

export function LeadMagnet() {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          message: "Downloaded AI Readiness Checklist",
          source: "lead-magnet-checklist",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">
                Free Resource
              </span>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-[-0.03em] leading-tight">
                AI Readiness Checklist
              </h1>
              <p className="mt-5 text-lg text-charcoal/70 leading-[1.7]">
                Not sure if your business is ready for AI? This free checklist
                walks you through 20 diagnostic questions to evaluate your
                readiness, identify quick wins, and estimate potential ROI.
              </p>

              <ul className="mt-8 space-y-3">
                {checklistHighlights.map((item) => (
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

            {/* Right: Form or Success */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {status === "success" ? (
                <div className="bg-white rounded-2xl shadow-navy p-10 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy mb-3">
                    Check your inbox!
                  </h3>
                  <p className="text-charcoal/60 mb-6">
                    We have sent the AI Readiness Checklist to{" "}
                    <strong className="text-navy">{form.email}</strong>. If you
                    do not see it within a few minutes, check your spam folder.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/audit"
                      className="block w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy text-center transition-all hover:bg-gold-dark active:scale-[0.97]"
                    >
                      Take the Full AI Assessment
                    </Link>
                    <Link
                      href="/blog"
                      className="block w-full rounded-lg bg-navy/5 px-6 py-3 text-sm font-semibold text-navy text-center transition-all hover:bg-navy/10 active:scale-[0.97]"
                    >
                      Read Our Blog
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-navy p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10">
                      <FileText size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        Download Free Checklist
                      </h3>
                      <p className="text-xs text-charcoal/50">
                        PDF delivered to your inbox instantly
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Name *
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/30"
                        />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full rounded-lg border border-border bg-light-bg pl-10 pr-4 py-3 text-sm text-navy placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/30"
                        />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="you@company.com"
                          className="w-full rounded-lg border border-border bg-light-bg pl-10 pr-4 py-3 text-sm text-navy placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Company{" "}
                        <span className="text-charcoal/30">(optional)</span>
                      </label>
                      <div className="relative">
                        <Building2
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/30"
                        />
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          placeholder="Your company"
                          className="w-full rounded-lg border border-border bg-light-bg pl-10 pr-4 py-3 text-sm text-navy placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Download size={16} />
                          Get Free Checklist
                        </>
                      )}
                    </button>

                    <p className="text-xs text-charcoal/40 text-center">
                      No spam, ever. We respect your privacy.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 sm:py-20 bg-light-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em]">
              What is Inside the Checklist
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Process Readiness",
                desc: "Evaluate which workflows are ripe for AI automation based on volume, complexity, and error rates.",
              },
              {
                title: "Data Maturity",
                desc: "Assess whether your data infrastructure can support AI -- from collection to quality to accessibility.",
              },
              {
                title: "Team Readiness",
                desc: "Gauge organizational appetite for AI adoption and identify potential champions and blockers.",
              },
              {
                title: "Technology Fit",
                desc: "Map your current tech stack against AI integration requirements and identify gaps.",
              },
              {
                title: "ROI Potential",
                desc: "Estimate the financial impact of AI across time savings, error reduction, and revenue acceleration.",
              },
              {
                title: "Quick Win Finder",
                desc: "Pinpoint the single highest-impact, lowest-risk AI project to start with.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl p-6 shadow-navy"
              >
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em]">
              Want a deeper analysis?
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed max-w-xl mx-auto">
              The checklist is a great starting point. For a personalized,
              expert-led assessment of your business, take our full AI
              Readiness Audit -- free of charge.
            </p>
            <Link
              href="/audit"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy text-white px-8 py-4 text-base font-semibold transition-all duration-200 hover:bg-navy/90 hover:shadow-lg active:scale-[0.97]"
            >
              Full AI Assessment
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
