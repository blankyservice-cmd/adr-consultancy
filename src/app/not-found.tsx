"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <nav className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <Link href="/">
            <Image src="/logo.svg" alt="ADR Consultancy" width={180} height={40} />
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-md"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-6xl font-bold text-navy/10 font-[family-name:var(--font-heading)]"
          >
            404
          </motion.p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-navy tracking-[-0.03em]">
            Page Not Found
          </h1>
          <p className="mt-3 text-sm text-charcoal/50 leading-[1.7]">
            The page you are looking for does not exist or has been moved.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-navy/90 hover:shadow-navy active:scale-[0.97]"
            >
              Back to Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-navy transition-all duration-200 hover:bg-navy/5 active:scale-[0.97]"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
