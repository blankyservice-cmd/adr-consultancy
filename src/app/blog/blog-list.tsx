"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog-posts";

export function BlogList() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pb-12 sm:pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Insights
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-navy tracking-[-0.03em]">
              Blog
            </h1>
            <p className="mt-5 text-lg text-charcoal/70 leading-[1.7]">
              Practical insights on AI strategy, automation, and digital
              transformation for small and medium businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 sm:py-16 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full"
                >
                  {/* Category Banner */}
                  <div className="bg-navy-gradient px-6 py-3">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-navy leading-tight mb-3 group-hover:text-blue transition-colors duration-200">
                      {post.title}
                    </h2>

                    <p className="text-charcoal/60 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-charcoal/40 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-CA", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs bg-navy/5 text-navy/60 px-2.5 py-1 rounded-full"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-dark transition-colors">
                      Read Article
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
