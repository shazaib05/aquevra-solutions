'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  Briefcase,
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

interface Industry {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  services: {
    label: string;
    description: string;
  }[];
  badge: string;
  iconBg: string;
}

const industries: Industry[] = [
  {
    icon: <Building2 className="w-6 h-6 text-sky-600" aria-hidden="true" />,
    name: 'Corporate Offices',
    tagline: 'Premier digital presence, custom software, and executive corporate gifting.',
    badge: 'Enterprise',
    iconBg: 'bg-sky-50 border-sky-100',
    services: [
      {
        label: 'Corporate Gifting & Welcome Kits',
        description:
          'Executive gift hampers, embossed leather organizers, metallic pens, and luxury employee onboarding packages.',
      },
      {
        label: 'Executive Stationery & Print',
        description:
          'Premium visiting cards, letterheads, presentation folders, corporate profiles, and official envelopes.',
      },
      {
        label: 'Web & Internal Portals',
        description:
          'Modern corporate websites, employee intranets, document management portals, and cloud web applications.',
      },
      {
        label: 'LinkedIn & Digital Branding',
        description:
          'B2B thought leadership marketing, corporate identity guidelines, and strategic digital campaigns.',
      },
    ],
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    name: 'Small & Medium Businesses',
    tagline: 'All the digital, creative, and branding solutions you need to compete and scale.',
    badge: 'Commercial',
    iconBg: 'bg-blue-50 border-blue-100',
    services: [
      {
        label: 'Custom Business Websites',
        description:
          'Responsive corporate websites engineered with Next.js, optimized for mobile conversion and lightning speed.',
      },
      {
        label: 'Brand Identity & Graphic Design',
        description:
          'Logo design, color systems, visiting cards, social media post templates, and marketing collateral.',
      },
      {
        label: 'Digital Marketing & SEO',
        description:
          'Google business search ranking, Meta advertising, targeted lead generation, and social media management.',
      },
      {
        label: 'Promotional Printing & Banners',
        description:
          'Roll-up standees, flex banners, shop signage, marketing flyers, and product catalogues.',
      },
    ],
  },
  {
    icon: <Store className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    name: 'Retail Shops & Showrooms',
    tagline: 'Vibrant storefront signage, premium packaging, and localized digital promotions.',
    badge: 'Retail',
    iconBg: 'bg-indigo-50 border-indigo-100',
    services: [
      {
        label: '3D Acrylic & LED Signage',
        description:
          'Custom illuminated shop fascias, 3D acrylic channel letters, neon displays, and showroom signboards.',
      },
      {
        label: 'Flex Banners & Promotional Displays',
        description:
          'High-resolution front-lit & back-lit flex printing, window graphics, promotional posters, and standees.',
      },
      {
        label: 'Product Packaging & Shopping Bags',
        description:
          'Custom printed paper bags, branded shopping boxes, barcode labels, and product hangtags.',
      },
      {
        label: 'Local Social Media Marketing',
        description:
          'Localized Instagram and Facebook promotional campaigns driving foot traffic to your physical store.',
      },
    ],
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-teal-600" aria-hidden="true" />,
    name: 'E-Commerce & Brands',
    tagline: 'High-converting online stores, premium unboxing, and performance ad campaigns.',
    badge: 'Digital Commerce',
    iconBg: 'bg-teal-50 border-teal-100',
    services: [
      {
        label: 'Custom E-Commerce Development',
        description:
          'Feature-rich online shopping portals, payment gateway integrations, real-time inventory management, and fast hosting.',
      },
      {
        label: 'Performance Ads & Funnel SEO',
        description:
          'Targeted Meta & Google ad campaigns, conversion tracking, retargeting funnels, and organic search optimization.',
      },
      {
        label: 'Custom Mailer Packaging & Labels',
        description:
          'Custom printed rigid mailer boxes, unboxing tissue wraps, product sticker labels, and thank-you cards.',
      },
      {
        label: 'Social Media Creative Production',
        description:
          'High-impact social media carousel designs, promotional story animations, and seasonal discount banners.',
      },
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    name: 'Educational Institutions',
    tagline: 'Modern institutional portals, durable student credentials, and event printing.',
    badge: 'Education',
    iconBg: 'bg-amber-50 border-amber-100',
    services: [
      {
        label: 'Institutional Websites & Portals',
        description:
          'School, college, and university portals featuring admission forms, course catalogues, and event announcements.',
      },
      {
        label: 'PVC Student ID Cards & Lanyards',
        description:
          'High-durability laminated PVC student and faculty ID cards with custom branded printed lanyards.',
      },
      {
        label: 'Certificates & Degree Folders',
        description:
          'Foil-stamped academic certificates, graduation diplomas, degree presentation folders, and award plaques.',
      },
      {
        label: 'Prospectus, Books & Brochures',
        description:
          'Premium full-color annual prospectus books, course guides, event brochures, and campus banners.',
      },
    ],
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-rose-600" aria-hidden="true" />,
    name: 'Restaurants & Hospitality',
    tagline: 'Appetizing visual branding, durable menu printing, and localized food marketing.',
    badge: 'Hospitality',
    iconBg: 'bg-rose-50 border-rose-100',
    services: [
      {
        label: 'Menu Design & Durable Printing',
        description:
          'Waterproof laminated food menus, leather menu covers, table tent cards, and QR code digital menus.',
      },
      {
        label: 'Branded Food Packaging',
        description:
          'Custom printed take-away boxes, paper bags, burger wrappers, cup sleeves, and tamper-evident delivery stickers.',
      },
      {
        label: 'Social Media & Local Marketing',
        description:
          'Engaging Instagram food creatives, localized Karachi ad promotions, and seasonal festive campaigns.',
      },
      {
        label: 'Online Ordering Websites',
        description:
          'Fast, mobile-optimized restaurant ordering websites with menu management and WhatsApp ordering integration.',
      },
    ],
  },
  {
    icon: <Warehouse className="w-6 h-6 text-orange-600" aria-hidden="true" />,
    name: 'Warehouses & Logistics',
    tagline: 'Custom management software, compliance signage, and high-volume shipping labels.',
    badge: 'Logistics',
    iconBg: 'bg-orange-50 border-orange-100',
    services: [
      {
        label: 'Custom Inventory & Dispatch Software',
        description:
          'Bespoke web applications for stock management, parcel tracking, customer delivery status, and order reconciliation.',
      },
      {
        label: 'Industrial & Safety Signage',
        description:
          'Reflective safety signage, hazard boards, warehouse aisle markers, and high-durability floor graphic stickers.',
      },
      {
        label: 'Thermal Shipping Labels & Roll Printing',
        description:
          'High-volume thermal barcode shipping labels, dispatch slips, invoice books, and delivery challans.',
      },
      {
        label: 'Corporate Branding & Uniforms',
        description:
          'Branded employee safety vests, polo shirts, vehicle flex graphics, and operational stationery.',
      },
    ],
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    name: 'Healthcare Facilities',
    tagline: 'Patient-centric digital booking portals, doctor stationery, and clean signage.',
    badge: 'Healthcare',
    iconBg: 'bg-emerald-50 border-emerald-100',
    services: [
      {
        label: 'Doctor & Clinic Appointment Websites',
        description:
          'Clean, trustworthy clinic websites featuring doctor profiles, appointment booking forms, and service guides.',
      },
      {
        label: 'Medical Stationery & Report Folders',
        description:
          'Custom prescription pads, laboratory report envelopes, patient case files, and appointment appointment cards.',
      },
      {
        label: 'Hospital Directional Signage',
        description:
          'Acrylic department door signs, directional wayfinding boards, emergency exit signage, and reception displays.',
      },
      {
        label: 'Healthcare Brand Identity & Marketing',
        description:
          'Patient education brochures, awareness flyers, social media wellness creatives, and localized Google search ads.',
      },
    ],
  },
  {
    icon: <Rocket className="w-6 h-6 text-violet-600" aria-hidden="true" />,
    name: 'Startups & Ventures',
    tagline: 'Launch rapidly with world-class identity, SaaS web applications, and growth campaigns.',
    badge: 'Startups',
    iconBg: 'bg-violet-50 border-violet-100',
    services: [
      {
        label: 'Brand Identity & Pitch Decks',
        description:
          'Complete brand architecture: logo guidelines, typography, investor pitch presentation decks, and stationery.',
      },
      {
        label: 'Web & SaaS Engineering',
        description:
          'High-performance Next.js web applications, responsive customer portals, database infrastructure, and API engineering.',
      },
      {
        label: 'Targeted Growth & Paid Ads',
        description:
          'Data-driven client acquisition campaigns across Meta, Google, and LinkedIn with continuous conversion optimization.',
      },
      {
        label: 'Branded Launch Swag & Merchandise',
        description:
          'Custom printed startup t-shirts, branded hoodies, premium laptop stickers, notebooks, and executive gifts.',
      },
    ],
  },
  {
    icon: <Home className="w-6 h-6 text-cyan-600" aria-hidden="true" />,
    name: 'Commercial & Consumer Brands',
    tagline: 'High-impact packaging, retail flex displays, and omni-channel digital presence.',
    badge: 'Consumer Brands',
    iconBg: 'bg-cyan-50 border-cyan-100',
    services: [
      {
        label: 'Custom Retail Packaging & Boxes',
        description:
          'Luxury rigid boxes, corrugated carton packaging, cosmetic containers, and embossed product sleeve labels.',
      },
      {
        label: 'Outdoor Billboards & Flex Banners',
        description:
          'Large-format outdoor flex printing, promotional hoardings, building wraps, and exhibition display booths.',
      },
      {
        label: 'Digital Marketing & Influencer Creative',
        description:
          'Multi-channel brand awareness campaigns, product launch social media campaigns, and Google Shopping promotion.',
      },
      {
        label: 'Corporate Gifting & Promotional Swag',
        description:
          'Custom branded corporate giveaways, promotional merchandise, personalized mugs, diaries, and executive kits.',
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function IndustriesPageClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/80 border-b border-slate-200/70"
        aria-labelledby="industries-hero-heading"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            className="text-sky-700 text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-2xs"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Commercial Verticals
          </motion.p>
          <motion.h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Specialized Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Every Sector
            </span>
          </motion.h1>
          <motion.p
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Whatever your commercial focus, AQUEVRA SOLUTIONS delivers the exact balance of technical infrastructure, security, digital capabilities, and corporate printing to accelerate your business.
          </motion.p>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ───────────────────────────────────────────────── */}
      <section
        className="py-14 px-4 sm:px-6 lg:px-8"
        aria-label="Industry solutions list"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {industries.map((industry, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                custom={index * 0.2}
                className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md"
                aria-labelledby={`industry-${index}-heading`}
              >
                {/* Card Header */}
                <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-all duration-300 ${industry.iconBg}`}>
                      {industry.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h2
                          id={`industry-${index}-heading`}
                          className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200"
                        >
                          {industry.name}
                        </h2>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-2.5 py-0.5">
                          {industry.badge}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="p-6 sm:p-7">
                  <p className="text-[11px] font-bold text-sky-700 tracking-wider uppercase mb-4">
                    Tailored AQUEVRA Scope
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.services.map((service, si) => (
                      <div key={si} className="flex gap-2.5">
                        <CheckCircle
                          className="w-4 h-4 text-sky-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-slate-900 text-xs sm:text-sm font-bold mb-0.5">
                            {service.label}
                          </p>
                          <p className="text-slate-500 text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-t border-slate-200/70 overflow-hidden"
        aria-labelledby="industries-cta-heading"
      >
        <motion.div
          className="relative max-w-3xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
            Industry Consultation
          </span>
          <h2
            id="industries-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Ready for a Tailored{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              Technology Agreement?
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us about your industry, square footage, and user count. We&apos;ll architect a turnkey commercial package that fits your operational roadmap.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request Free Consultation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
            >
              View All 8 Divisions
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-semibold">
            {['All Industries Welcome', 'Itemised Quotations', 'Zero Hidden Markups', 'Karachi On-Site Support'].map(
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
