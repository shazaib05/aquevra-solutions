'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Store,
  ShoppingCart,
  GraduationCap,
  UtensilsCrossed,
  Warehouse,
  HeartPulse,
  Rocket,
  Home,
  Briefcase,
} from 'lucide-react';

interface Industry {
  icon: React.ReactNode;
  name: string;
  services: string[];
}

const industries: Industry[] = [
  {
    icon: <Building2 className="w-5 h-5 text-sky-600" aria-hidden="true" />,
    name: 'Corporate Offices',
    services: ['Corporate Gifting', 'Brand Stationery', 'Web Portals'],
  },
  {
    icon: <Briefcase className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    name: 'Small & Medium Businesses',
    services: ['Websites & Software', 'Branding & Design', 'Digital Marketing'],
  },
  {
    icon: <Store className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    name: 'Retail Shops',
    services: ['Shop Signage & Displays', 'Flex Banners', 'Social Media Ads'],
  },
  {
    icon: <ShoppingCart className="w-5 h-5 text-teal-600" aria-hidden="true" />,
    name: 'E-Commerce',
    services: ['Custom E-Commerce', 'Performance Ads & SEO', 'Packaging & Labels'],
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-amber-600" aria-hidden="true" />,
    name: 'Educational Institutions',
    services: ['ID Cards & Certificates', 'Brochures & Catalogues', 'Web Development'],
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5 text-rose-600" aria-hidden="true" />,
    name: 'Restaurants & Hospitality',
    services: ['Menu & Brochure Printing', 'Digital Marketing', 'Brand Identity'],
  },
  {
    icon: <Warehouse className="w-5 h-5 text-orange-600" aria-hidden="true" />,
    name: 'Warehouses & Logistics',
    services: ['Packaging & Labels', 'Signage Solutions', 'Custom Software'],
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-emerald-600" aria-hidden="true" />,
    name: 'Healthcare Facilities',
    services: ['Patient Portals & Websites', 'Corporate Stationery', 'Digital Marketing'],
  },
  {
    icon: <Rocket className="w-5 h-5 text-violet-600" aria-hidden="true" />,
    name: 'Startups & Ventures',
    services: ['Brand Identity Design', 'Web & SaaS Development', 'Lead Generation Ads'],
  },
  {
    icon: <Home className="w-5 h-5 text-cyan-600" aria-hidden="true" />,
    name: 'Commercial Brands',
    services: ['Promotional Merchandise', 'Offset & Digital Printing', 'Social Ads'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function IndustriesSection() {
  return (
    <section
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-200/70"
      aria-labelledby="industries-heading"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-sky-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full">
            Industries We Serve
          </p>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Solutions Tailored for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              Every Sector
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            From corporate headquarters and educational campuses to logistics centers
            and retail shops — we deliver specialized technology engineered for your industry.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          role="list"
        >
          {industries.map((industry, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 cursor-default overflow-hidden transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-md"
              role="listitem"
              aria-label={industry.name}
            >
              {/* Icon */}
              <div className="relative mb-3.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 group-hover:border-sky-200 transition-all duration-300">
                {industry.icon}
              </div>

              {/* Name */}
              <h3 className="relative text-sm font-bold text-slate-900 mb-2 leading-tight group-hover:text-sky-600 transition-colors duration-200">
                {industry.name}
              </h3>

              {/* Services list */}
              <ul className="relative space-y-1.5" aria-label={`Services for ${industry.name}`}>
                {industry.services.map((service, si) => (
                  <li
                    key={si}
                    className="flex items-center gap-1.5 text-xs text-slate-500 font-medium"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"
                      aria-hidden="true"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
