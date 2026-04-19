"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ADR Consultancy did not just build us software -- they sat down, understood our operations, and designed a solution that actually fits how we work. The AI automations save us hours every day.",
    name: "Property Management Client",
    role: "Landlord, 50+ Units",
    initials: "PM",
  },
  {
    quote:
      "The consultative approach made all the difference. They identified automation opportunities we had not even considered, and the ROI roadmap gave us confidence to invest.",
    name: "Sales Organization Client",
    role: "Director of Sales",
    initials: "SO",
  },
  {
    quote:
      "From the first discovery call to deployment, the process was transparent and professional. Weekly demos meant we were never in the dark about progress.",
    name: "Startup Founder",
    role: "CEO, Logistics Company",
    initials: "SF",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white">
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
            Client Feedback
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative bg-light-bg rounded-xl p-8"
            >
              <Quote
                size={24}
                className="text-gold/30 mb-4"
              />
              <p className="text-charcoal/70 text-sm leading-[1.7] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-navy">
                    {t.name}
                  </span>
                  <span className="block text-xs text-charcoal/50">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-xs text-charcoal/40"
        >
          * Names anonymized for client confidentiality. Real testimonials with
          full attribution coming soon.
        </motion.p>
      </div>
    </section>
  );
}
