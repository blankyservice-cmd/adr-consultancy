"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", homeAnchor: "#about" },
  { label: "Contact", homeAnchor: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function getHref(link: (typeof navLinks)[number]) {
    // If the link has a dedicated page, always use it
    if (link.href) return link.href;
    // Anchor-only links: on homepage use #anchor, elsewhere use /#anchor
    return isHome ? link.homeAnchor! : `/${link.homeAnchor}`;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-navy"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? "/logo.svg" : "/logo-white.svg"}
              alt="ADR Consultancy"
              width={190}
              height={28}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const href = getHref(link);
              const isAnchor = href.startsWith("#");
              return isAnchor ? (
                <a
                  key={link.label}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/audit"
              className="inline-flex items-center rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97]"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-navy hover:bg-navy/5"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => {
                const href = getHref(link);
                const isAnchor = href.startsWith("#");
                return isAnchor ? (
                  <a
                    key={link.label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-navy font-medium py-2 hover:text-blue transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-navy font-medium py-2 hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/audit"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-dark active:scale-[0.97]"
              >
                Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
