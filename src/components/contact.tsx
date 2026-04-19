"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      source: "contact-form",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
              Book a Free AI Consultation
            </h2>
            <p className="mt-4 text-charcoal/70 leading-[1.7]">
              Tell us about your business and what is slowing you down. We will
              identify where AI can create the most value -- no commitment, no
              sales pitch. Just an honest assessment.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-charcoal/70">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy">
                  <Mail size={18} />
                </div>
                <span className="text-sm">info@adrconsultancy.ca</span>
              </div>
              <a
                href="https://www.linkedin.com/in/peter-miranda-4a4113215"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal/70 hover:text-navy transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy">
                  <LinkedInIcon size={18} />
                </div>
                <span className="text-sm">Connect on LinkedIn</span>
              </a>
            </div>

            {/* What to expect */}
            <div className="mt-10 bg-light-bg rounded-xl p-6">
              <h3 className="text-sm font-semibold text-navy mb-3">
                What to Expect
              </h3>
              <ol className="space-y-2 text-sm text-charcoal/65">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-px">1.</span>
                  Free 30-minute discovery call to understand your needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-px">2.</span>
                  AI readiness assessment with prioritized opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-px">3.</span>
                  Custom roadmap with timeline and ROI estimates
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === "success" ? (
              <div className="bg-light-bg rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Message Sent
                </h3>
                <p className="text-charcoal/60 text-sm max-w-sm">
                  Thank you for reaching out. We will review your message and
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-light-bg rounded-2xl p-8 sm:p-10"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Tell Us About Your Business
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What does your business do? What processes take too much time? Where do you think AI could help?"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-charcoal/40 text-center">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
