"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Receipt,
  BookOpen,
  ClipboardCheck,
  ArrowRight,
  LogOut,
} from "lucide-react";

const tools = [
  {
    icon: FileText,
    title: "Proposal Builder",
    description:
      "Create professional proposals and statements of work. Define scope, timelines, milestones, and pricing for client engagements.",
    href: "/proposal",
  },
  {
    icon: Receipt,
    title: "Invoicing",
    description:
      "Generate and send invoices through Stripe. Track line items, quantities, and totals for client billing.",
    href: "/invoicing",
  },
  {
    icon: BookOpen,
    title: "Consultative Playbook",
    description:
      "Internal reference for the 6-phase consultative framework. Objectives, activities, deliverables, and transition criteria for each phase.",
    href: "/playbook",
  },
  {
    icon: ClipboardCheck,
    title: "AI Readiness Audit",
    description:
      "Client-facing assessment form. Collects business info, pain points, interests, and budget to qualify leads.",
    href: "/audit",
  },
];

export function AdminTools() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">
            Internal
          </span>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
            Tools & Resources
          </h1>
          <p className="mt-4 text-charcoal/60 text-sm">
            Quick access to internal tools. This page is not indexed by search
            engines.
          </p>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-charcoal/40 hover:text-red-500 transition-colors disabled:opacity-50"
          >
            <LogOut size={13} />
            {loggingOut ? "Signing out..." : "Sign out"}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Link
                href={tool.href}
                className="group block relative bg-light-bg rounded-xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <tool.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {tool.title}
                  </h3>
                </div>

                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  {tool.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-dark transition-colors">
                  Open
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
