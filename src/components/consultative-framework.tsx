"use client";

import { motion } from "framer-motion";
import {
  Search,
  Stethoscope,
  FileText,
  Hammer,
  Users,
  RefreshCw,
} from "lucide-react";

const phases = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We listen first. Intake calls, process shadowing, data audits, and stakeholder mapping to fully understand your business.",
    duration: "Week 1",
  },
  {
    step: "02",
    icon: Stethoscope,
    title: "Diagnosis",
    description:
      "We map every process into keep manual, AI-assisted, or fully automate -- then rank by ROI so you know exactly where to invest.",
    duration: "Week 2",
  },
  {
    step: "03",
    icon: FileText,
    title: "Prescription",
    description:
      "A clear roadmap with three horizons: quick wins (days), core builds (weeks), and transformative projects (months). You choose the pace.",
    duration: "Week 2-3",
  },
  {
    step: "04",
    icon: Hammer,
    title: "Build & Deploy",
    description:
      "Agile development with weekly demos. You see progress every week -- never a black box. Built on proven, scalable architecture.",
    duration: "Weeks 3-8+",
  },
  {
    step: "05",
    icon: Users,
    title: "Adopt & Train",
    description:
      "Hands-on training, documentation, and an internal AI champion in your org. We don't just ship software -- we ensure your team uses it.",
    duration: "Launch Week",
  },
  {
    step: "06",
    icon: RefreshCw,
    title: "Optimize & Scale",
    description:
      "Monthly performance reviews, adoption check-ins, and continuous improvement. We grow with your business as a long-term partner.",
    duration: "Ongoing",
  },
];

export function ConsultativeFramework() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-navy-gradient relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
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
            Our Process
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white tracking-[-0.03em]">
            The Consultative Framework
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            We diagnose before we prescribe. Every engagement follows a proven
            six-phase methodology designed to deliver the right solution, not
            just any solution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-7 transition-all duration-300 hover:bg-white/10 hover:border-gold/30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-gold/50 text-sm font-mono font-bold">
                    {phase.step}
                  </span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold">
                    <phase.icon size={20} />
                  </div>
                </div>
                <span className="text-xs text-white/40 font-medium">
                  {phase.duration}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {phase.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
