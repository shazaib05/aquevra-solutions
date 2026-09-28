'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare,
  ClipboardList,
  FileText,
  Wrench,
  CheckCircle,
  LifeBuoy,
} from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: <MessageSquare className="w-5 h-5 text-sky-600" aria-hidden="true" />,
    title: 'Consultation',
    description:
      'We start with a free, no-obligation consultation to understand your business, workflow, and technology requirements.',
  },
  {
    number: '02',
    icon: <ClipboardList className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    title: 'Assessment & Planning',
    description:
      'Our engineers assess your current setup and architect a tailored technology roadmap that aligns with your budget and goals.',
  },
  {
    number: '03',
    icon: <FileText className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: 'Proposal & Quotation',
    description:
      'You receive a clear, itemised proposal with transparent pricing — no hidden fees, unexpected extras, or surprises.',
  },
  {
    number: '04',
    icon: <Wrench className="w-5 h-5 text-teal-600" aria-hidden="true" />,
    title: 'Implementation',
    description:
      'Our certified team deploys the solution with surgical precision, minimising downtime and operational disruption.',
  },
  {
    number: '05',
    icon: <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />,
    title: 'Testing & Review',
    description:
      'Rigorous quality assurance testing ensures every component meets industrial standards before formal handover.',
  },
  {
    number: '06',
    icon: <LifeBuoy className="w-5 h-5 text-sky-600" aria-hidden="true" />,
    title: 'Support & Maintenance',
    description:
      'Post-delivery, we stay with you — offering remote support, on-site visits, and AMC contracts to keep everything running seamlessly.',
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, delay: 0.2 } },
};

const verticalLineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1, delay: 0.2 } },
};

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/80 overflow-hidden border-b border-slate-200/70"
      aria-labelledby="process-heading"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sky-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              Work With You
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A structured, transparent 6-step lifecycle that delivers reliable results —
            from first discovery to long-term commercial partnership.
          </p>
        </motion.div>

        {/* ─── DESKTOP TIMELINE (lg+) ─── */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-0">
            <div className="absolute top-[48px] left-0 right-0 h-0.5 bg-slate-200 z-0" />
            <motion.div
              className="absolute top-[48px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent origin-left z-10"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group flex flex-col items-center text-center"
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                {/* Number badge + icon */}
                <div className="relative mb-5 z-20">
                  <div className="w-[96px] h-[96px] rounded-full bg-white border-2 border-slate-200 group-hover:border-sky-500 group-hover:bg-sky-50/50 flex flex-col items-center justify-center gap-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="text-[11px] font-bold text-sky-600 tracking-wider uppercase">
                      {step.number}
                    </span>
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-200 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ─── MOBILE / TABLET VERTICAL TIMELINE ─── */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-slate-200" />
          <motion.div
            className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-transparent origin-top"
            variants={verticalLineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          <div className="flex flex-col gap-8 pl-14">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group relative"
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                {/* Dot on vertical line */}
                <div className="absolute -left-[38px] top-3 w-7 h-7 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center shadow-xs z-10">
                  <div className="w-2 h-2 rounded-full bg-sky-600" />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm group-hover:border-sky-300 group-hover:shadow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-sky-600 tracking-wider uppercase block">
                        Step {step.number}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
