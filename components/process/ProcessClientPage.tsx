'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare, FileSearch, Lightbulb, Cog, Rocket, HeartHandshake,
  CheckCircle2, ArrowRight, Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Process Steps Data ────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    tagline: 'We listen first.',
    description:
      'Every engagement begins with an exhaustive consultation to understand your business operations, challenges, and goals. We ask the right questions so we engineer the precise solution — not the most expensive one.',
    activities: [
      'Free initial discovery consultation (Karachi on-site or remote)',
      'Operational and technical requirements assessment',
      'Existing hardware and network topology audit',
      'Goal-setting and performance success criteria definition',
      'Budget parameter and project milestone planning',
      'Key stakeholder alignment and scope consensus',
    ],
    accentClass: 'text-sky-600',
    bgClass: 'bg-sky-50',
    borderClass: 'border-sky-200',
    dotClass: 'bg-sky-600',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Planning & Itemised Proposal',
    tagline: 'A clear roadmap, zero surprises.',
    description:
      'Based on our discovery audit, we create an itemised proposal outlining exact equipment specifications, timelines, deliverables, and transparent pricing. You retain complete clarity before implementation starts.',
    activities: [
      'Comprehensive project scope documentation',
      'Itemised equipment & service cost breakdown',
      'Realistic timeline with phased deployment milestones',
      'Hardware, software, and cabling recommendations',
      'Risk identification and business continuity planning',
      'Formal proposal review session with Q&A',
    ],
    accentClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    dotClass: 'bg-blue-600',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Architecture & Design Strategy',
    tagline: 'Form meets operational function.',
    description:
      'For creative and digital projects, we develop concepts, wireframes, and corporate branding proofs before production begins. For IT infrastructure, we finalize wiring diagrams and system architectures. Explicit client approval at every stage.',
    activities: [
      'Visual mockups, branding proofs, and stationery layouts',
      'Corporate brand and style guide alignment',
      'UI/UX application wireframing & prototyping',
      'Network routing, CCTV placement, and server topology diagrams',
      'Content planning and print stock specifications',
      'Client revision and sign-off rounds',
    ],
    accentClass: 'text-indigo-600',
    bgClass: 'bg-indigo-50',
    borderClass: 'border-indigo-200',
    dotClass: 'bg-indigo-600',
  },
  {
    number: '04',
    icon: Cog,
    title: 'Engineering & Deployment',
    tagline: 'Expert execution with surgical precision.',
    description:
      'Our certified technicians, developers, and print specialists bring the architecture to reality. Whether installing structured networking, developing software, or producing corporate stationery — we operate cleanly and efficiently.',
    activities: [
      'On-premises physical deployment by certified engineers',
      'Server, firewall, switch, and camera configuration',
      'Full-stack software development and API engineering',
      'Corporate printing runs & commercial finishing',
      'Milestone quality inspections at each phase',
      'Frequent status updates to client leadership',
    ],
    accentClass: 'text-teal-600',
    bgClass: 'bg-teal-50',
    borderClass: 'border-teal-200',
    dotClass: 'bg-teal-600',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Testing & Formal Handover',
    tagline: 'Deploy with absolute confidence.',
    description:
      'Nothing goes live without rigorous validation. We test every connection, security feed, software flow, and printed artifact against industrial benchmarks before handover, ensuring seamless go-live.',
    activities: [
      'End-to-end functionality, throughput, and stress testing',
      'Security verification and penetration checks',
      'User acceptance testing (UAT) with your internal team',
      'Complete system documentation & administrator access guides',
      'Formal client sign-off and warranty initiation',
      'On-site monitored go-live with immediate engineer standby',
    ],
    accentClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-200',
    dotClass: 'bg-amber-600',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Ongoing Maintenance & Support',
    tagline: 'A long-term technical partnership.',
    description:
      'Our commitment endures well beyond delivery. Through scheduled annual maintenance contracts (AMC), responsive remote helpdesks, and rapid on-site visits, we keep your commercial operations running at peak efficiency.',
    activities: [
      'Post-deployment guarantee and warranty coverage',
      'Flexible annual maintenance contracts (AMC)',
      'Remote helpdesk and scheduled on-site maintenance',
      'Periodic health checks, firmware updates, and reporting',
      'System expansions and scaling as your business grows',
      'Guaranteed priority SLA response times',
    ],
    accentClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    dotClass: 'bg-emerald-600',
  },
];

// ── Why it works stats ────────────────────────────────────────────────────

const WHY = [
  { label: 'On-time milestone rate', value: '98%' },
  { label: 'Client satisfaction', value: '4.9/5' },
  { label: 'Average response time', value: '<2h' },
  { label: 'Projects completed', value: '250+' },
];

// ── Step Card (animated) ──────────────────────────────────────────────────

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -40 : 40 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className={cn(
        'relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
        isEven ? '' : 'lg:flex-row-reverse'
      )}
    >
      {/* Spacer for alternating layout */}
      <div className={cn('hidden lg:block', isEven ? 'order-last' : 'order-first')} aria-hidden="true" />

      {/* Card */}
      <div
        className={cn(
          'relative rounded-2xl border border-slate-200/90 bg-white p-7 lg:p-9 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md',
          isEven ? 'lg:order-first' : 'lg:order-last'
        )}
      >
        {/* Step number watermark */}
        <div
          className={cn(
            'absolute top-4 right-5 text-7xl font-black opacity-5 select-none pointer-events-none',
            step.accentClass
          )}
          aria-hidden="true"
        >
          {step.number}
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={cn('p-3 rounded-xl border', step.bgClass, step.borderClass, step.accentClass)}>
            <Icon size={24} aria-hidden="true" />
          </div>
          <div>
            <p className={cn('text-xs font-bold uppercase tracking-wider mb-0.5', step.accentClass)}>
              Step {step.number}
            </p>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p className={cn('text-sm font-semibold mb-3', step.accentClass)}>
          &ldquo;{step.tagline}&rdquo;
        </p>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {step.description}
        </p>

        {/* Key activities */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Key Scope &amp; Activities
          </p>
          <ul className="space-y-2" aria-label={`Activities in ${step.title}`}>
            {step.activities.map((activity) => (
              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <span
                  className={cn('mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full', step.dotClass)}
                  aria-hidden="true"
                />
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────

export default function ProcessClientPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-50/80 border-b border-slate-200/70 text-center px-4"
        aria-labelledby="process-hero-heading"
      >
        <div className="section-container relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Zap size={13} aria-hidden="true" />
              Engineered Methodology
            </span>
          </motion.div>

          <motion.h1
            id="process-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5 tracking-tight"
          >
            A Process Built on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Integrity &amp; Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We adhere to a proven 6-step lifecycle across every commercial engagement — from structured cabling deployments to bespoke software development and brand printing.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-w-2xl mx-auto"
          >
            {WHY.map(({ label, value }) => (
              <div key={label} className="bg-white px-5 py-4 text-center">
                <div className="text-2xl font-extrabold text-sky-600 mb-0.5">{value}</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-tight">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────── */}
      <section className="section-container py-16 lg:py-24" aria-label="Our 6-step process">
        {/* Vertical line (desktop) */}
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-px w-0.5 bg-slate-200"
          style={{ height: `${steps.length * 390}px` }}
          aria-hidden="true"
        />

        <div className="relative space-y-12 lg:space-y-20">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Desktop centre dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={cn(
                  'hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 w-10 h-10 rounded-full border-2 bg-white items-center justify-center z-10 shadow-sm',
                  step.borderClass
                )}
                aria-hidden="true"
              >
                <step.icon size={18} className={step.accentClass} />
              </motion.div>

              <StepCard step={step} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Our Process ─────────────────────────────────────── */}
      <section className="section-container pb-16" aria-labelledby="why-process-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 lg:p-12 shadow-sm"
        >
          <div className="text-center mb-10">
            <h2
              id="why-process-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3"
            >
              Why Our Methodology Delivers Reliable Results
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
              Discipline and complete accountability ensure on-budget execution and zero commercial friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Transparent Communication',
                body: 'Regular milestone updates at every step. Complete visibility into progress and timelines.',
              },
              {
                title: 'Client-Led Approvals',
                body: 'Phased deliverables move forward only after your direct review and explicit authorization.',
              },
              {
                title: 'Milestone-Based Execution',
                body: 'Projects are structured into clear, verifiable targets that guarantee measurable velocity.',
              },
              {
                title: 'Comprehensive Documentation',
                body: 'Full architecture handovers and administrator guides so you retain total operational autonomy.',
              },
              {
                title: 'Post-Launch Accountability',
                body: 'Every turnkey installation includes an active warranty and dedicated troubleshooting coverage.',
              },
              {
                title: 'Scalable Architecture',
                body: 'We architect systems designed to expand seamlessly as your commercial capacity doubles.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <CheckCircle2 className="text-sky-600 mt-0.5 shrink-0" size={18} aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section className="section-container pb-20" aria-label="Start your project CTA">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50/80 p-10 lg:p-14 text-center shadow-sm">
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">Free Estimate</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8">
              Discuss your project scope with our engineers. We provide a complimentary discovery assessment with no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary">
                Request a Free Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Speak With an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
