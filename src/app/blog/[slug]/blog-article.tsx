"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  ArrowRight,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";
import { getAllPosts } from "@/lib/blog-posts";

export function BlogArticle({ post }: { post: BlogPost }) {
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="pb-8 sm:pb-12 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-navy transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-[-0.03em] leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-charcoal/50">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-CA", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs bg-navy/5 text-navy/60 px-2.5 py-1 rounded-full"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-12 bg-light-bg">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-navy"
          >
            {post.content.map((section, i) => (
              <div
                key={i}
                className={i > 0 ? "mt-8" : ""}
              >
                {section.heading && (
                  <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-navy tracking-[-0.02em] mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-charcoal/70 leading-[1.8] mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 mb-4 space-y-2 pl-1">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-2.5 text-charcoal/70 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-navy-gradient rounded-2xl p-8 sm:p-10 text-center"
          >
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-3">
              Ready to explore AI for your business?
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Take our free 5-minute assessment and get a personalized
              roadmap of your highest-impact AI opportunities.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold active:scale-[0.97]"
            >
              Free AI Assessment
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy mb-8 text-center">
              More Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block bg-light-bg rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {r.category}
                  </span>
                  <h4 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-bold text-navy group-hover:text-blue transition-colors">
                    {r.title}
                  </h4>
                  <p className="mt-2 text-charcoal/60 text-sm line-clamp-2">
                    {r.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold">
                    Read
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
