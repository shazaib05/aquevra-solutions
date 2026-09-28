'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  Network,
  Camera,
  Globe,
  Palette,
  Megaphone,
  Briefcase,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { HeroSceneWrapper } from '@/components/3d/HeroScene';

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ---------------------------------------------------------------------------
// Trust badge data
// ---------------------------------------------------------------------------
const trustBadges = [
  { icon: Monitor,  label: 'IT & Technical Support' },
  { icon: Network,  label: 'Network & Infrastructure' },
  { icon: Camera,   label: 'CCTV & Security' },
  { icon: Globe,    label: 'Web & Software' },
  { icon: Palette,  label: 'Creative & Design' },
  { icon: Megaphone, label: 'Digital Marketing' },
  { icon: Briefcase, label: 'Corporate Gifting & Printing' },
];

// ---------------------------------------------------------------------------
// CTA Button variants
// ---------------------------------------------------------------------------
function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-xl hover:shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 w-full sm:w-auto text-center"
      style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
      }}
      aria-label="Get a free quote from AQUEVRA SOLUTIONS"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
      {/* Shimmer overlay */}
      <span
        className="absolute inset-0 bg-white/20 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[110%] transition-transform duration-700 pointer-events-none"
        aria-hidden="true"
      />
    </Link>
  );
}

function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-slate-800 text-sm border border-slate-300 bg-white shadow-xs transition-all duration-300 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50/50 hover:scale-[1.03] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 w-full sm:w-auto text-center"
      aria-label="Explore AQUEVRA SOLUTIONS services"
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 text-slate-400 group-hover:text-sky-600"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Scroll indicator
// ---------------------------------------------------------------------------
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      aria-hidden="true"
    >
      <span className="text-slate-400 text-[11px] tracking-[0.2em] uppercase font-semibold">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={18} className="text-sky-500" />
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main Hero Section
// ---------------------------------------------------------------------------
export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-18 lg:pt-36 lg:pb-24"
      aria-label="AQUEVRA SOLUTIONS — hero section"
    >
      {/* ── Background layers ────────────────────────────────── */}

      {/* Radial soft cyan/sky glow top-center */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(2,132,199,0.07) 0%, rgba(37,99,235,0.03) 45%, transparent 75%)',
        }}
      />

      {/* Subtle light grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226,232,240,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226,232,240,0.7) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Left accent blob */}
      <div
        className="pointer-events-none absolute -left-28 top-1/4 w-96 h-96 rounded-full z-0 blur-3xl opacity-50"
        aria-hidden="true"
        style={{ background: 'rgba(2,132,199,0.06)' }}
      />
      {/* Right accent blob */}
      <div
        className="pointer-events-none absolute -right-20 top-1/3 w-96 h-96 rounded-full z-0 blur-3xl opacity-60"
        aria-hidden="true"
        style={{ background: 'rgba(37,99,235,0.05)' }}
      />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">

            {/* ── Left column ── */}
            <motion.div
              className="flex-1 lg:w-1/2 flex flex-col justify-center order-1 lg:order-1"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                custom={0}
                className="mb-4 sm:mb-5"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wide bg-sky-50 border border-sky-200 text-sky-700 shadow-xs">
                  <Sparkles size={13} className="text-sky-500 shrink-0" aria-hidden="true" />
                  <span>Complete Technology &amp; Digital Solutions</span>
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-extrabold text-slate-900 leading-[1.18] sm:leading-[1.14] tracking-tight mb-4 sm:mb-5"
              >
                Powering Businesses Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                  Technology &amp; Digital Innovation
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[95%]"
              >
                From IT infrastructure and networking to websites, software, corporate gifting & printing,
                creative design, and digital marketing — AQUEVRA SOLUTIONS delivers reliable technology
                and digital solutions under one roof.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={fadeUp}
                custom={0.3}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
              >
                <PrimaryButton href="/quote">Get a Free Quote</PrimaryButton>
                <OutlineButton href="/services">Explore Our Services</OutlineButton>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} custom={0.4}>
                <p className="text-slate-400 text-xs uppercase tracking-[0.16em] font-semibold mb-3">
                  What we deliver
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Core service areas"
                >
                  {trustBadges.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      role="listitem"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-colors duration-200 shadow-2xs"
                    >
                      <Icon size={13} className="text-sky-600" aria-hidden="true" />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right column: 3D Scene ── */}
            <motion.div
              className="flex-1 lg:w-1/2 order-2 lg:order-2 flex items-center justify-center w-full"
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              aria-label="3D network visualization"
            >
              <div
                className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[520px] aspect-square mx-auto mt-4 sm:mt-6 lg:mt-0"
                role="presentation"
              >
                {/* Glow backdrop behind 3D */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(2,132,199,0.09) 0%, rgba(37,99,235,0.05) 50%, transparent 75%)',
                  }}
                />
                <HeroSceneWrapper />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <ScrollIndicator />

      {/* ── Bottom transition border ─────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-16 z-10"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F8FAFC)',
        }}
      />
    </section>
  );
}
