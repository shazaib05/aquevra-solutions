'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, serviceCategories } from '@/lib/services.data';
import ServiceFilter from '@/components/services/ServiceFilter';
import ServiceDetail from '@/components/services/ServiceDetail';

const STATS = [
  { label: 'Service Divisions', value: '8' },
  { label: 'Specialised Offerings', value: '100+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Client Satisfaction', value: '99%' },
];

const USP = [
  'Single point of contact for all technology & corporate needs',
  'Certified IT engineers and creative design professionals',
  'Transparent itemised pricing with no hidden charges',
  'Prompt Karachi on-site & nationwide remote support',
];

export default function ServicesClientPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ── Derived filtered list ─────────────────────────────────────────────────
  const filteredServices = useMemo(() => {
    let list = services;

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter((s) => s.id === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.items.some((item) => item.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-200/70"
        aria-labelledby="services-hero-heading"
      >
        {/* Background subtle decoration */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(2,132,199,0.06) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3.5 py-1.5 shadow-2xs">
              <Layers size={13} aria-hidden="true" />
              Complete Corporate Portfolio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="services-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-slate-900 leading-tight mb-5"
          >
            Enterprise Technology &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Digital Solutions
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-600 text-base sm:text-lg text-center max-w-2xl mx-auto mb-8"
          >
            From physical infrastructure and CCTV security to bespoke software development and corporate printing — AQUEVRA SOLUTIONS delivers{' '}
            <span className="text-slate-900 font-semibold">8 comprehensive divisions</span> under one roof.
          </motion.p>

          {/* USP chips */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2.5 mb-10"
          >
            {USP.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200/90 rounded-full px-4 py-2 shadow-2xs"
              >
                <CheckCircle2 size={14} className="text-sky-600 shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-w-3xl mx-auto"
          >
            {STATS.map(({ label, value }) => (
              <div key={label} className="bg-white px-6 py-5 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 mb-0.5">{value}</div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ─────────────────────────────────────────────── */}
      <ServiceFilter
        categories={serviceCategories}
        activeCategory={activeCategory}
        onCategoryChange={(id) => {
          setActiveCategory(id);
          setSearchQuery('');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* ── Service Detail Cards ──────────────────────────────────────────── */}
      <section className="section-container py-12 space-y-8" aria-label="Service details">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, i) => (
            <ServiceDetail key={service.id} service={service} index={i} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200"
          >
            <p className="text-slate-800 text-lg font-semibold mb-2">
              No services found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-slate-500 text-sm">
              Try a different keyword, or{' '}
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-sky-600 font-medium underline underline-offset-2"
              >
                browse all 8 categories
              </button>
              .
            </p>
          </motion.div>
        )}
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="section-container py-16" aria-label="Contact CTA">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50/80 p-10 lg:p-14 text-center shadow-sm">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-4">
              Customised Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Need a Tailored Commercial Package?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              We design bespoke technology, security, and corporate printing agreements built around your exact business size, workflow, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Solutions Team
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/quote" className="btn-secondary">
                Request an Itemised Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
