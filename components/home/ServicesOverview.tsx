'use client';

import Link from 'next/link';
import { useRef } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import {
  Monitor,
  Network,
  Camera,
  Globe,
  Palette,
  TrendingUp,
  Briefcase,
  Wrench,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { services, type Service } from '@/lib/services.data';

// ---------------------------------------------------------------------------
// Icon map (Lucide icon name → component)
// ---------------------------------------------------------------------------
const iconMap: Record<string, React.ComponentType<any>> = {
  Monitor,
  Network,
  Camera,
  Globe,
  Palette,
  TrendingUp,
  Briefcase,
  Wrench,
};

// ---------------------------------------------------------------------------
// Color config per service color key (Light theme friendly)
// ---------------------------------------------------------------------------
type ColorConfig = {
  accent: string;
  bg: string;
  border: string;
  glow: string;
  tag: string;
};

const colorMap: Record<string, ColorConfig> = {
  cyan: {
    accent: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    glow: 'rgba(2,132,199,0.12)',
    tag: '#e0f2fe',
  },
  blue: {
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    glow: 'rgba(37,99,235,0.12)',
    tag: '#dbeafe',
  },
  purple: {
    accent: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    glow: 'rgba(124,58,237,0.12)',
    tag: '#ede9fe',
  },
  green: {
    accent: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    glow: 'rgba(5,150,105,0.12)',
    tag: '#d1fae5',
  },
  pink: {
    accent: '#db2777',
    bg: '#fdf2f8',
    border: '#fbcfe8',
    glow: 'rgba(219,39,119,0.12)',
    tag: '#fce7f3',
  },
  orange: {
    accent: '#ea580c',
    bg: '#fff7ed',
    border: '#fed7aa',
    glow: 'rgba(234,88,12,0.12)',
    tag: '#ffedd5',
  },
  indigo: {
    accent: '#4f46e5',
    bg: '#eef2ff',
    border: '#c7d2fe',
    glow: 'rgba(79,70,229,0.12)',
    tag: '#e0e7ff',
  },
  yellow: {
    accent: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    glow: 'rgba(217,119,6,0.12)',
    tag: '#fef3c7',
  },
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
    },
  }),
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

// ---------------------------------------------------------------------------
// Service Card
// ---------------------------------------------------------------------------
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Monitor;
  const colors = colorMap[service.color] ?? colorMap.cyan;

  // Truncate description to 105 chars
  const shortDesc =
    service.description.length > 105
      ? service.description.slice(0, 102) + '…'
      : service.description;

  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
      role="article"
      aria-label={`Service: ${service.title}`}
    >
      {/* Top subtle accent bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: colors.accent }}
        aria-hidden="true"
      />

      {/* Icon & Category */}
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
          style={{
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            color: colors.accent,
          }}
        >
          <Icon size={22} />
        </div>

        <span
          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: colors.tag, color: colors.accent }}
        >
          <Zap size={10} aria-hidden="true" />
          {service.items.length} services
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-sky-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{shortDesc}</p>
      </div>

      {/* Action link */}
      <div className="pt-2 border-t border-slate-100 mt-auto flex items-center justify-between">
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
          style={{ color: colors.accent }}
          aria-label={`View ${service.title} services`}
        >
          View All {service.title}
          <ArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Main Services Overview Section
// ---------------------------------------------------------------------------
export default function ServicesOverview() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-40px' });

  const headingAnim = shouldReduceMotion ? 'visible' : headingInView ? 'visible' : 'hidden';
  const gridAnim = shouldReduceMotion ? 'visible' : gridInView ? 'visible' : 'hidden';

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden bg-slate-50 border-y border-slate-200/60"
      aria-labelledby="services-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading ── */}
        <motion.div
          ref={headingRef}
          className="text-center mb-14"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={headingAnim}
        >
          <motion.span
            variants={headingVariants}
            custom={0}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs"
          >
            Complete Portfolio
          </motion.span>

          <motion.h2
            id="services-heading"
            variants={headingVariants}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto mb-4"
          >
            Everything Your Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Needs to Scale
            </span>
          </motion.h2>

          <motion.p
            variants={headingVariants}
            custom={2}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            From high-availability IT infrastructure, networking, and security to websites,
            custom software, corporate printing, and digital marketing — explore our 8 dedicated pillars.
          </motion.p>
        </motion.div>

        {/* ── Service Cards Grid (Now 8 Services!) ── */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={gridAnim}
          role="list"
          aria-label="AQUEVRA SOLUTIONS service areas"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* ── View All CTA ── */}
        <motion.div
          className="text-center mt-12"
          variants={headingVariants}
          initial="hidden"
          animate={headingAnim}
          custom={0.4}
        >
          <Link
            href="/services"
            className="btn-primary shadow-md hover:shadow-lg hover:shadow-sky-500/25"
            aria-label="View all AQUEVRA SOLUTIONS services"
          >
            Explore Complete Service Catalogue →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
