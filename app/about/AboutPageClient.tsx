'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Lightbulb,
  Award,
  Users,
  Eye,
  TrendingUp,
  Briefcase,
  Target,
  Headphones,
  Globe,
  Layers,
  Package,
  Building2,
  Store,
  ShoppingCart,
  GraduationCap,
  UtensilsCrossed,
  Warehouse,
  HeartPulse,
  Rocket,
  Home,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const coreValues = [
  {
    icon: <Shield className="w-5 h-5 text-sky-600" aria-hidden="true" />,
    title: 'Reliability',
    description:
      'We deliver on our commitments. Our clients trust us to keep their technical systems operational and their critical projects on schedule.',
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    title: 'Innovation',
    description:
      'We combine proven engineering with creative modern technologies to solve operational challenges intelligently.',
  },
  {
    icon: <Award className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: 'Professionalism',
    description:
      'From discovery consultation to final deployment, every interaction reflects uncompromising standards of quality.',
  },
  {
    icon: <Users className="w-5 h-5 text-teal-600" aria-hidden="true" />,
    title: 'Customer-Centric',
    description:
      'Your business objectives drive our architecture. We listen deeply, understand workflows, and engineer what creates measurable ROI.',
  },
  {
    icon: <Eye className="w-5 h-5 text-emerald-600" aria-hidden="true" />,
    title: 'Transparency',
    description:
      'Transparent communication, itemised pricing, and zero hidden markups. You always retain complete visibility.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-amber-600" aria-hidden="true" />,
    title: 'Continuous Evolution',
    description:
      'We continually upgrade our engineering practices, hardware certifications, and digital skillsets to keep our clients ahead.',
  },
];

const whyReasons = [
  {
    icon: <Briefcase className="w-5 h-5 text-sky-600" aria-hidden="true" />,
    title: '8 Complete Service Divisions',
    desc: 'IT, networking, CCTV, web apps, custom software, corporate printing, design, and AMC — all under one roof.',
  },
  {
    icon: <Target className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    title: 'Business-Focused Engineering',
    desc: 'Turnkey solutions engineered around commercial operational goals, not generic off-the-shelf templates.',
  },
  {
    icon: <Headphones className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: 'Dependable Support Desk',
    desc: 'Rapid Karachi on-site dispatched engineers and remote helpdesk assistance whenever issues emerge.',
  },
  {
    icon: <Globe className="w-5 h-5 text-teal-600" aria-hidden="true" />,
    title: 'Modern Digital Ecosystem',
    desc: 'High-performance web applications, SEO marketing, and digital experiences built for competitive advantage.',
  },
  {
    icon: <Layers className="w-5 h-5 text-purple-600" aria-hidden="true" />,
    title: 'Technical & Creative Synergy',
    desc: 'Certified IT engineers working alongside creative designers for unified corporate excellence.',
  },
  {
    icon: <Package className="w-5 h-5 text-rose-600" aria-hidden="true" />,
    title: 'Scalable Corporate Packages',
    desc: 'Flexible maintenance contracts (AMC), project-based milestones, and bespoke enterprise agreements.',
  },
];

const industriesList = [
  { icon: <Building2 className="w-5 h-5 text-sky-600" aria-hidden="true" />, name: 'Corporate Offices' },
  { icon: <Briefcase className="w-5 h-5 text-blue-600" aria-hidden="true" />, name: 'Small & Medium Businesses' },
  { icon: <Store className="w-5 h-5 text-indigo-600" aria-hidden="true" />, name: 'Retail Outlets' },
  { icon: <ShoppingCart className="w-5 h-5 text-teal-600" aria-hidden="true" />, name: 'E-Commerce Brands' },
  { icon: <GraduationCap className="w-5 h-5 text-amber-600" aria-hidden="true" />, name: 'Educational Institutions' },
  { icon: <UtensilsCrossed className="w-5 h-5 text-rose-600" aria-hidden="true" />, name: 'Hospitality & Dining' },
  { icon: <Warehouse className="w-5 h-5 text-orange-600" aria-hidden="true" />, name: 'Warehouses & Logistics' },
  { icon: <HeartPulse className="w-5 h-5 text-emerald-600" aria-hidden="true" />, name: 'Healthcare & Clinics' },
  { icon: <Rocket className="w-5 h-5 text-purple-600" aria-hidden="true" />, name: 'Startups & Tech' },
  { icon: <Home className="w-5 h-5 text-cyan-600" aria-hidden="true" />, name: 'Homes & Individuals' },
];

const teamPlaceholders = [
  {
    initials: 'AS',
    name: 'Technical Solutions Director',
    role: 'Infrastructure & Security Lead',
    bio: 'Oversees network architecture, enterprise CCTV deployments, and mission-critical server maintenance for corporate clients.',
  },
  {
    initials: 'MD',
    name: 'Software & Digital Head',
    role: 'Lead Full-Stack Architect',
    bio: 'Directs web application development, custom software engineering, and cloud deployment pipelines.',
  },
  {
    initials: 'CK',
    name: 'Creative & Corporate Branding Lead',
    role: 'Design & Corporate Printing Director',
    bio: 'Leads brand strategy, corporate stationery manufacturing, packaging design, and omni-channel digital marketing campaigns.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPageClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/80 border-b border-slate-200/70"
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-100/60 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            className="text-sky-700 text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-2xs"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Corporate Overview
          </motion.p>
          <motion.h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-5 tracking-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Technology.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Creativity.
            </span>{' '}
            <br />
            Reliable Execution.
          </motion.h1>
          <motion.p
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            AQUEVRA SOLUTIONS is a full-service technology and corporate solutions enterprise based in Karachi, Pakistan. We enable businesses to thrive through dependable IT infrastructure, digital innovation, and creative branding excellence.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3 justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link
              href="/contact"
              className="btn-primary"
            >
              Work With Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
            >
              Explore Our 8 Divisions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION ──────────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/70"
        aria-labelledby="company-intro-heading"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp}>
              <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
                Who We Are
              </p>
              <h2
                id="company-intro-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight"
              >
                Your Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                  Technology Partner
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  AQUEVRA SOLUTIONS was founded with a clear directive: to serve as the unified technology partner that modern businesses can depend on for everything — from structural cabling and CCTV security to bespoke web applications and corporate stationery printing.
                </p>
                <p>
                  We empower a diverse portfolio of clients across corporate offices, retail networks, healthcare facilities, education campuses, and growing commercial enterprises.
                </p>
                <p>
                  Our multidisciplinary team bridges certified systems engineers with seasoned designers and developers — eliminating vendor fragmentation and delivering cohesive, professional execution.
                </p>
              </div>
            </motion.div>

            {/* Stats / highlights */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="grid grid-cols-2 gap-4"
              aria-label="Company highlights"
            >
              {[
                { value: '8', label: 'Service Divisions' },
                { value: '10+', label: 'Industries Served' },
                { value: '100%', label: 'Dedicated SLA Focus' },
                { value: '24/7', label: 'Emergency Support' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 text-center hover:border-sky-300 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div className="text-3xl font-extrabold text-sky-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES CARDS ──────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-b border-slate-200/70"
        aria-labelledby="mvv-heading"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
              Our Core Direction
            </p>
            <h2
              id="mvv-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
            >
              Mission, Vision &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                Operating Values
              </span>
            </h2>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {[
              {
                label: 'Our Mission',
                content:
                  'To deliver dependable, modern, and comprehensive technology & corporate solutions that empower businesses to operate without friction, expand their brand, and excel in an increasingly connected economy.',
              },
              {
                label: 'Our Vision',
                content:
                  'To be recognized as the foremost trusted technology partner in the region — known for engineering precision, absolute integrity, and the proven ability to convert technical infrastructure into a commercial advantage.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-sky-200/80 bg-white p-8 shadow-xs"
              >
                <p className="text-sky-700 text-xs font-bold tracking-widest uppercase mb-3">
                  {item.label}
                </p>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {coreValues.map((value, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                custom={index * 0.4}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 hover:border-sky-300 hover:shadow-md transition-all duration-300"
                aria-label={value.title}
              >
                <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 group-hover:scale-105 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-slate-900 font-bold mb-2 group-hover:text-sky-600 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE AQUEVRA ──────────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/70"
        aria-labelledby="why-aquevra-heading"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
              The AQUEVRA Distinction
            </p>
            <h2
              id="why-aquevra-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
            >
              Why Organizations Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                AQUEVRA
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {whyReasons.map((reason, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.4}
                className="flex gap-4 rounded-xl border border-slate-200/90 bg-slate-50/70 p-5 hover:border-sky-300 hover:bg-white hover:shadow-sm transition-all duration-300 group"
              >
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center group-hover:scale-105 group-hover:border-sky-200 transition-all duration-300 shadow-2xs">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-sm mb-1 group-hover:text-sky-600 transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ─────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-b border-slate-200/70"
        aria-labelledby="about-industries-heading"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
              Who We Serve
            </p>
            <h2
              id="about-industries-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
            >
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                Support
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            role="list"
          >
            {industriesList.map((industry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.2}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-5 text-center hover:border-sky-300 hover:shadow-sm transition-all duration-300 cursor-default"
                role="listitem"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  {industry.icon}
                </div>
                <p className="text-slate-700 text-xs font-bold group-hover:text-sky-600 transition-colors duration-200 leading-tight">
                  {industry.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sky-700 text-sm font-bold hover:text-sky-800 transition-all duration-200"
            >
              See All Industry Specifications <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM LEADERSHIP ────────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/70"
        aria-labelledby="team-heading"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
              Leadership &amp; Engineering
            </p>
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
            >
              Our Core{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                Practice Leads
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Certified systems engineers, creative directors, and software architects united by a passion for technical reliability.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {teamPlaceholders.map((member, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 overflow-hidden hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300"
                aria-label={`Practice: ${member.name}`}
              >
                {/* Avatar placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center border-b border-slate-200/70">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-sky-300 flex items-center justify-center shadow-xs">
                    <span className="text-xl font-bold text-sky-700">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-slate-900 font-bold mb-0.5 group-hover:text-sky-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 text-xs font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 overflow-hidden"
        aria-labelledby="about-cta-heading"
      >
        <motion.div
          className="relative max-w-3xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-3">
            Accelerate Your Operations
          </p>
          <h2
            id="about-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Ready to Build With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              AQUEVRA?
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule a free commercial discovery session with our engineering consultants to assess your infrastructure or brand requirements.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
            >
              Explore All 8 Divisions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-600 text-xs font-semibold">
            {['Free Discovery Session', 'Transparent Pricing', 'Turnkey Execution', 'Karachi On-Site Support'].map(
              (badge, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  {badge}
                </span>
              )
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
