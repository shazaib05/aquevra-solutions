'use client';

import Link from 'next/link';
import {
  motion,
  useInView,
  useReducedMotion,
  Variants,
} from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheck,
  Target,
  Sparkles,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

// ---------------------------------------------------------------------------
// Feature card data
// ---------------------------------------------------------------------------
interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  highlights: string[];
  accentColor: string;
  iconBg: string;
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Modern Web & Software',
    description:
      'We deliver robust, high-performance web applications, portals, and custom software — built to scale and perform under real commercial conditions.',
    highlights: ['Next.js & modern stacks', 'API & cloud integrations', 'Scalable architecture'],
    accentColor: '#0284C7', // sky-600
    iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    icon: Target,
    title: 'Business-Focused Design',
    description:
      'Every brand identity and design asset we create is tailored to your business goals. We deliver memorable creative work that sets you apart from competitors.',
    highlights: ['Tailored brand systems', 'Vector print assets', 'UI/UX precision'],
    accentColor: '#2563EB', // blue-600
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Sparkles,
    title: 'Creative Marketing & Ads',
    description:
      'Engage your target audience and generate qualified leads. Our data-driven digital marketing campaigns maximize your return on ad spend and search visibility.',
    highlights: ['High-intent Google Ads', 'Meta performance ads', 'Organic SEO growth'],
    accentColor: '#4F46E5', // indigo-600
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    icon: HeadphonesIcon,
    title: 'Corporate Gifting & Print',
    description:
      'From custom executive gift hampers and merchandise to high-definition flex banners and shop signage — we ensure flawless quality and fast turnaround.',
    highlights: ['Premium print quality', 'Customized merchandise', 'Fast reliable turnaround'],
    accentColor: '#0D9488', // teal-600
    iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
  },
];

// ---------------------------------------------------------------------------
// Feature Card Component
// ---------------------------------------------------------------------------
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { icon: Icon, title, description, highlights, accentColor, iconBg } = feature;

  return (
    <motion.article
      variants={cardReveal}
      custom={index}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 cursor-default"
      aria-label={`Feature: ${title}`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${iconBg}`}
      >
        <Icon size={22} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-900 font-bold text-lg leading-tight group-hover:text-sky-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 mt-auto pt-2 border-t border-slate-100" aria-label={`${title} highlights`}>
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <CheckCircle2
              size={14}
              className="text-sky-600 shrink-0"
              aria-hidden="true"
            />
            {h}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Main Intro Section
// ---------------------------------------------------------------------------
export default function IntroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const animState = shouldReduceMotion ? 'visible' : isInView ? 'visible' : 'hidden';

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/80 border-b border-slate-200/70"
      aria-labelledby="intro-heading"
    >
      {/* Background radial accents */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(2,132,199,0.05) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 35% at 80% 55%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={animState}
        >
          {/* Eyebrow label */}
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-sky-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full"
          >
            About AQUEVRA SOLUTIONS
          </motion.p>

          {/* Heading */}
          <motion.h2
            id="intro-heading"
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto mb-5"
          >
            Your Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Technology &amp; Digital Solutions
            </span>{' '}
            Partner
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            AQUEVRA SOLUTIONS is a full-service technology and digital solutions company
            based in Karachi, Pakistan. We combine engineering excellence with creative
            design and corporate printing capabilities, giving you a single, dependable partner for all your
            digital, brand, and promotional needs.
          </motion.p>
        </motion.div>

        {/* ── Feature Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={animState}
          role="list"
          aria-label="Core capabilities"
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          custom={0.6}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-sky-700 text-sm border border-sky-200 bg-white shadow-sm transition-all duration-300 hover:bg-sky-50 hover:border-sky-300 hover:shadow hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Learn more about AQUEVRA SOLUTIONS"
          >
            Learn More About Our Company
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
