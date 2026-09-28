'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Clock,
  Tag,
  ChevronRight,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { blogPosts, blogCategories, type BlogPost } from '@/lib/blog.data';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/lib/site.config';

// ─── Gradient palettes per category (Light corporate theme) ─────────────────

const categoryGradients: Record<string, string> = {
  'networking': 'from-blue-50 via-sky-50 to-blue-100',
  'cctv-security': 'from-indigo-50 via-slate-50 to-indigo-100',
  'web-software': 'from-emerald-50 via-teal-50 to-emerald-100',
  'digital-marketing': 'from-pink-50 via-rose-50 to-pink-100',
  'it-tips': 'from-cyan-50 via-sky-50 to-cyan-100',
  'graphic-design': 'from-violet-50 via-purple-50 to-violet-100',
  'business-tech': 'from-indigo-50 via-blue-50 to-indigo-100',
  'maintenance': 'from-amber-50 via-yellow-50 to-amber-100',
};

function getCategoryGradient(categoryId: string): string {
  return categoryGradients[categoryId] ?? 'from-slate-50 via-sky-50 to-slate-100';
}

// ─── Blog Card ───────────────────────────────────────────────────────────────

function BlogCard({ post }: { post: BlogPost }) {
  const gradient = getCategoryGradient(post.categoryId);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:border-sky-300 hover:shadow-md"
      aria-label={`Blog post: ${post.title}`}
    >
      {/* Placeholder Image / Gradient Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} shrink-0 overflow-hidden border-b border-slate-100`}>
        {/* Category badge on image */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3 py-0.5 text-xs font-semibold text-slate-700 backdrop-blur-sm shadow-2xs">
            <Tag className="h-3 w-3 text-sky-600" aria-hidden="true" />
            {post.category}
          </span>
        </div>
        {/* Placeholder label */}
        <div className="absolute bottom-3 right-3 rounded-md border border-slate-200/60 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-500 backdrop-blur-sm">
          Technical Brief
        </div>
        {/* BookOpen icon center */}
        <div className="flex h-full items-center justify-center">
          <BookOpen className="h-10 w-10 text-sky-600/30" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-base font-bold leading-snug text-slate-900 group-hover:text-sky-600 transition-colors">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-2.5 text-xs text-slate-500 font-medium">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-sky-700">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-sky-600 transition hover:gap-2 hover:text-sky-800"
          aria-label={`Read article: ${post.title}`}
        >
          Read Article
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20 bg-slate-50/80 border-b border-slate-200/70 px-4">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 inline-block rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-2xs"
          >
            Insights &amp; Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            Technology{' '}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Commercial engineering guides, IT infrastructure best practices, CCTV security compliance, and corporate branding tips from our Karachi team.
          </motion.p>
        </div>
      </section>

      {/* ── Sample Content Notice ── */}
      <div className="px-4 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50/80 p-4 shadow-2xs">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">[SAMPLE ARTICLES]</span> — The technical briefings below demonstrate our publishing format. Regular operational guides are published weekly.
            </p>
          </div>
        </div>
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="sticky top-20 z-20 border-y border-slate-200/90 bg-white/95 px-4 py-3 backdrop-blur-md shadow-2xs">
        <div className="mx-auto max-w-7xl">
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
            role="tablist"
            aria-label="Blog categories"
          >
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Blog Grid ── */}
      <section className="px-4 py-12 pb-16">
        <div className="mx-auto max-w-7xl">
          {filteredPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <BookOpen className="mb-3 h-12 w-12 text-slate-400" />
              <h3 className="mb-1 text-lg font-bold text-slate-900">No articles in this division</h3>
              <p className="text-slate-500 text-sm">
                Check back shortly or explore other categories.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA at Bottom ── */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 sm:p-12 text-center shadow-sm"
          >
            <h2 className="mb-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Have a Specific Engineering Question?
            </h2>
            <p className="mb-6 text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
              Our solutions team is on standby to advise on cabling codes, CCTV retention calculation, web architecture, or corporate print runs.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              aria-label="Contact AQUEVRA SOLUTIONS"
            >
              Contact Our Engineers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
