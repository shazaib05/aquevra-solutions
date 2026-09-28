'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Monitor, Network, Camera, Globe, Palette, TrendingUp, Wrench, Briefcase,
  ExternalLink, AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PortfolioItem } from '@/lib/portfolio.data';

// ── Category icon map ─────────────────────────────────────────────────────
const categoryIconMap: Record<string, React.ComponentType<any>> = {
  'it-technical':     Monitor,
  'networking':       Network,
  'cctv':            Camera,
  'web-software':    Globe,
  'branding-design': Palette,
  'social-media':    Palette,
  'digital-marketing': TrendingUp,
  'corporate-services': Briefcase,
  default:           Wrench,
};

// ── Category gradient map (Light Mode Calibrated) ─────────────────────────
const categoryGradientMap: Record<string, string> = {
  'it-technical':     'from-sky-50 to-blue-100',
  'networking':       'from-blue-50 to-indigo-100',
  'cctv':            'from-indigo-50 to-slate-100',
  'web-software':    'from-emerald-50 to-teal-100',
  'branding-design': 'from-purple-50 to-pink-100',
  'social-media':    'from-rose-50 to-orange-100',
  'digital-marketing': 'from-amber-50 to-orange-100',
  'corporate-services': 'from-indigo-50 to-sky-100',
  default:           'from-slate-50 to-slate-100',
};

const categoryIconColorMap: Record<string, string> = {
  'it-technical':     'text-sky-600',
  'networking':       'text-blue-600',
  'cctv':            'text-indigo-600',
  'web-software':    'text-emerald-600',
  'branding-design': 'text-purple-600',
  'social-media':    'text-rose-600',
  'digital-marketing': 'text-amber-600',
  'corporate-services': 'text-indigo-600',
  default:           'text-slate-600',
};

const categoryBadgeMap: Record<string, string> = {
  'it-technical':     'bg-sky-50 text-sky-700 border-sky-200',
  'networking':       'bg-blue-50 text-blue-700 border-blue-200',
  'cctv':            'bg-indigo-50 text-indigo-700 border-indigo-200',
  'web-software':    'bg-emerald-50 text-emerald-700 border-emerald-200',
  'branding-design': 'bg-purple-50 text-purple-700 border-purple-200',
  'social-media':    'bg-rose-50 text-rose-700 border-rose-200',
  'digital-marketing': 'bg-amber-50 text-amber-700 border-amber-200',
  'corporate-services': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  default:           'bg-slate-100 text-slate-700 border-slate-200',
};

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false);

  const Icon = categoryIconMap[item.categoryId] ?? categoryIconMap.default;
  const gradient = categoryGradientMap[item.categoryId] ?? categoryGradientMap.default;
  const iconColor = categoryIconColorMap[item.categoryId] ?? categoryIconColorMap.default;
  const badgeClass = categoryBadgeMap[item.categoryId] ?? categoryBadgeMap.default;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      className={cn(
        'group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm transition-all duration-300',
        hovered && 'border-sky-300 shadow-md'
      )}
      aria-label={item.title}
    >
      {/* ── Gradient Image Placeholder ──────────────────────────────────── */}
      <div className={cn('relative h-44 bg-gradient-to-br', gradient, 'flex items-center justify-center overflow-hidden border-b border-slate-100')}>
        {/* Large icon */}
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.25 }}
          className={cn('opacity-30 group-hover:opacity-50 transition-opacity duration-300', iconColor)}
          aria-hidden="true"
        >
          <Icon size={64} strokeWidth={1.3} />
        </motion.div>

        {/* [SAMPLE] badge */}
        {item.isPlaceholder && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-600 text-xs font-semibold rounded-full px-2.5 py-0.5 shadow-2xs">
            <AlertCircle size={11} className="text-amber-500" aria-hidden="true" />
            Sample Case
          </div>
        )}
      </div>

      {/* ── Card Body ──────────────────────────────────────────────────── */}
      <div className="p-5">
        {/* Category badge */}
        <span className={cn('inline-block text-[11px] font-bold tracking-wider uppercase border rounded-full px-2.5 py-0.5 mb-2.5', badgeClass)}>
          {item.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-sky-600 transition-colors duration-200">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label="Project tags">
          {item.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="text-[11px] font-medium text-slate-600 bg-slate-100 rounded-md px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={item.link ?? '#'}
          className={cn(
            'flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200',
            item.link
              ? 'border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 shadow-2xs'
              : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed pointer-events-none'
          )}
          aria-label={`View project: ${item.title}`}
          tabIndex={item.link ? 0 : -1}
          aria-disabled={!item.link}
        >
          <ExternalLink size={13} aria-hidden="true" />
          {item.link ? 'View Case Details' : 'Specification Ready'}
        </Link>
      </div>
    </motion.article>
  );
}
