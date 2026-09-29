'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Target,
  Headphones,
  Globe,
  Layers,
  Package,
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Briefcase className="w-6 h-6 text-sky-600" aria-hidden="true" />,
    title: 'Integrated Digital & Creative Hub',
    description:
      'Web & software development, creative graphic design, digital marketing, corporate gifting, and professional printing — all under one roof with a single point of accountability.',
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    title: 'Business-Focused Approach',
    description:
      'Every solution we deliver is designed around practical business goals — accelerating online growth, enhancing brand authority, and driving measurable commercial ROI.',
  },
  {
    icon: <Headphones className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    title: 'Dedicated Client Support',
    description:
      'Fast, dependable communication and project support ensure your websites, campaigns, and corporate print deliverables are executed seamlessly.',
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-600" aria-hidden="true" />,
    title: 'Modern Digital Solutions',
    description:
      'From custom high-performance web applications to strategic digital marketing campaigns — we craft polished digital experiences that elevate your market presence.',
  },
  {
    icon: <Layers className="w-6 h-6 text-teal-600" aria-hidden="true" />,
    title: 'Creative & Technical Synergy',
    description:
      'Our team bridges full-stack software engineers with creative brand designers, delivering both rock-solid digital platforms and compelling corporate brand identity.',
  },
  {
    icon: <Package className="w-6 h-6 text-violet-600" aria-hidden="true" />,
    title: 'Flexible Service Packages',
    description:
      'Whether you need a standalone website, a full brand overhaul, an ongoing marketing retainer, or high-volume corporate printing, our packages scale to your exact needs.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-200/70"
      aria-labelledby="why-choose-heading"
    >
      {/* Background subtle decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-sky-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full">
            Why AQUEVRA SOLUTIONS
          </p>
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            One Partner.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              Multiple Solutions.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            AQUEVRA SOLUTIONS brings together every technology, digital, and corporate
            branding service your enterprise needs — so you never have to coordinate
            between disconnected vendors.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/60 p-7 cursor-default overflow-hidden transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-lg hover:shadow-sky-500/5"
              aria-label={feature.title}
            >
              {/* Icon container */}
              <div className="relative mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs group-hover:scale-105 group-hover:border-sky-200 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="relative text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-36 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
