'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Network,
  Camera,
  Globe,
  Palette,
  TrendingUp,
  Wrench,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services.data';

// ── Icon map ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<any>> = {
  Monitor,
  Network,
  Camera,
  Globe,
  Palette,
  TrendingUp,
  Wrench,
  Briefcase,
};

// ── Color accent map (Light theme calibrated) ───────────────────────────────
const colorMap: Record<
  string,
  { glow: string; dot: string; badge: string; border: string; iconBg: string }
> = {
  cyan: {
    glow: 'hover:shadow-[0_8px_30px_rgba(2,132,199,0.08)]',
    dot: 'bg-sky-500',
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    border: 'hover:border-sky-300',
    iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  blue: {
    glow: 'hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]',
    dot: 'bg-blue-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    border: 'hover:border-blue-300',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  purple: {
    glow: 'hover:shadow-[0_8px_30px_rgba(147,51,234,0.08)]',
    dot: 'bg-purple-500',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    border: 'hover:border-purple-300',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  green: {
    glow: 'hover:shadow-[0_8px_30px_rgba(22,163,74,0.08)]',
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    border: 'hover:border-emerald-300',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  pink: {
    glow: 'hover:shadow-[0_8px_30px_rgba(219,39,119,0.08)]',
    dot: 'bg-pink-500',
    badge: 'bg-pink-50 text-pink-700 border-pink-200',
    border: 'hover:border-pink-300',
    iconBg: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  orange: {
    glow: 'hover:shadow-[0_8px_30px_rgba(234,88,12,0.08)]',
    dot: 'bg-orange-500',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    border: 'hover:border-orange-300',
    iconBg: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  yellow: {
    glow: 'hover:shadow-[0_8px_30px_rgba(202,138,4,0.08)]',
    dot: 'bg-amber-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    border: 'hover:border-amber-300',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  indigo: {
    glow: 'hover:shadow-[0_8px_30px_rgba(79,70,229,0.08)]',
    dot: 'bg-indigo-600',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    border: 'hover:border-indigo-300',
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
};

const PREVIEW_COUNT = 6;

interface ServiceDetailProps {
  service: Service;
  index?: number;
}

export default function ServiceDetail({ service, index = 0 }: ServiceDetailProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const Icon = iconMap[service.icon] ?? Monitor;
  const accent = colorMap[service.color] ?? colorMap.cyan;
  const visibleItems = expanded ? service.items : service.items.slice(0, PREVIEW_COUNT);
  const hasMore = service.items.length > PREVIEW_COUNT;

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={cn(
        'bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/90 shadow-sm transition-all duration-300 scroll-mt-28',
        accent.glow,
        accent.border
      )}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          {/* Icon badge */}
          <div className={cn('p-3 rounded-xl border', accent.iconBg)}>
            <Icon size={26} aria-hidden="true" />
          </div>
          <div>
            <h2
              id={`service-title-${service.id}`}
              className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight"
            >
              {service.title}
            </h2>
            <span
              className={cn(
                'mt-1 inline-block text-xs font-semibold tracking-wider uppercase border rounded-full px-2.5 py-0.5',
                accent.badge
              )}
            >
              {service.items.length} services included
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={service.ctaLink}
          className="btn-primary text-sm shrink-0 self-start sm:self-auto shadow-xs"
          aria-label={`${service.cta} — ${service.title}`}
        >
          {service.cta}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>

      {/* ── Description ────────────────────────────────────────────────── */}
      <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
        {service.description}
      </p>

      {/* ── Service items grid ──────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        <motion.ul
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2.5"
          aria-label={`${service.title} offerings`}
        >
          {visibleItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15, delay: i * 0.02 }}
              className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-slate-50/70 rounded-lg px-3 py-2 border border-slate-100"
            >
              <span
                className={cn('w-2 h-2 rounded-full shrink-0', accent.dot)}
                aria-hidden="true"
              />
              <span className="truncate">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {/* ── Expand / Collapse ───────────────────────────────────────────── */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`items-${service.id}`}
          className={cn(
            'mt-5 flex items-center gap-2 text-sm font-semibold transition-colors duration-200',
            'text-sky-600 hover:text-sky-700 cursor-pointer'
          )}
        >
          {expanded ? (
            <>
              <ChevronUp size={16} aria-hidden="true" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={16} aria-hidden="true" />
              Show all {service.items.length} services
            </>
          )}
        </button>
      )}

      {/* ── Quote CTA footer ────────────────────────────────────────────── */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          Need a custom quote for {service.title.split(' ')[0]} services?
        </p>
        <Link
          href={`/quote?service=${service.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          aria-label={`Request a quote for ${service.title}`}
        >
          Request an Itemised Quote
          <ExternalLink size={13} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}
