'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, AlertCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioItems, portfolioCategories } from '@/lib/portfolio.data';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

export default function PortfolioClientPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-50/80 border-b border-slate-200/70 px-4" aria-labelledby="portfolio-hero-heading">
        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Briefcase size={13} aria-hidden="true" />
              Proven Capabilities
            </span>
          </motion.div>

          <motion.h1
            id="portfolio-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight"
          >
            Engineering &amp; Solutions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Project Showcase
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore representative implementations across enterprise IT networking, CCTV surveillance, custom web applications, branding, and corporate print materials.
          </motion.p>
        </div>
      </section>

      {/* ── [PLACEHOLDER] Notice ─────────────────────────────────────────── */}
      <div className="section-container pt-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50/80 p-4 shadow-2xs"
        >
          <AlertCircle className="text-amber-600 mt-0.5 shrink-0" size={18} aria-hidden="true" />
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">[SAMPLE CASE PORTFOLIO]</span> — The projects featured below illustrate the exact operational scopes delivered by AQUEVRA SOLUTIONS across Karachi. Client NDA-protected projects are shown with anonymized metrics.
          </p>
        </motion.div>
      </div>

      {/* ── Category Filter ───────────────────────────────────────────────── */}
      <div className="section-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          role="tablist"
          aria-label="Portfolio categories"
          className="flex flex-wrap gap-2 justify-center"
        >
          {portfolioCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer shadow-2xs',
                  isActive
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* ── Portfolio Grid ────────────────────────────────────────────────── */}
      <section className="section-container pb-16" aria-label="Portfolio items">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200"
            >
              <p className="text-slate-800 text-base font-semibold">No sample cases found in this category.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-3 text-sky-600 font-semibold text-sm underline underline-offset-2"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="section-container pb-20" aria-label="Contact CTA">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50/80 p-10 lg:p-14 text-center shadow-sm">
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-4">
              <MessageSquare size={13} aria-hidden="true" />
              Start Your Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Have a Similar Project in Mind?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8">
              Discuss your technical requirements with our engineers. We provide detailed equipment schedules and milestone delivery plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Consult an Engineer
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/quote" className="btn-secondary">
                Request Itemised Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
