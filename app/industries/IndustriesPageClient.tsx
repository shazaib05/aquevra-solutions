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
    tagline: 'Enterprise-grade technology for high-performance commercial workplaces.',
    badge: 'Enterprise',
    iconBg: 'bg-sky-50 border-sky-100',
    services: [
      {
        label: 'IT Support & AMC',
        description:
          'Continuous system maintenance, priority support SLAs, and scheduled technical visits across Karachi.',
      },
      {
        label: 'Networking & Structured Cabling',
        description:
          'High-speed LAN/WAN, Cat6A cabling, enterprise firewalls, secure VPNs, and managed commercial Wi-Fi.',
      },
      {
        label: 'CCTV & Access Control',
        description:
          'High-definition IP surveillance, biometric access doors, NVR storage, and off-site cloud recording.',
      },
      {
        label: 'Corporate Branding & Printing',
        description:
          'Premium stationery, business profiles, executive cards, employee ID credentials, and brand assets.',
      },
    ],
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    name: 'Small & Medium Businesses',
    tagline: 'All the digital and technical solutions you need to compete and scale.',
    badge: 'Commercial',
    iconBg: 'bg-blue-50 border-blue-100',
    services: [
      {
        label: 'Full IT Setup & Workstations',
        description:
          'Turnkey workstation provisioning, software licensing, backup automation, and helpdesk support.',
      },
      {
        label: 'Networking & CCTV Security',
        description:
          'Reliable office network switches and multi-camera surveillance guarding inventory and staff.',
      },
      {
        label: 'Web & Online Presence',
        description:
          'Corporate websites, professional business email setup, Google Workspace, and cloud hosting.',
      },
      {
        label: 'Marketing Collateral',
        description:
          'Brochures, company catalogs, business cards, roll-up banners, and promotional merchandise.',
      },
    ],
  },
  {
    icon: <Store className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    name: 'Retail Shops & Showrooms',
    tagline: 'Fast point-of-sale systems and high-definition store security.',
    badge: 'Retail',
    iconBg: 'bg-indigo-50 border-indigo-100',
    services: [
      {
        label: 'POS IT & Hardware Support',
        description:
          'Barcode scanner, receipt printer, thermal printer, and POS system stability support.',
      },
      {
        label: 'Loss-Prevention CCTV',
        description:
          'Cash-counter zoom cameras, wide-angle customer aisles, and live mobile phone monitoring.',
      },
      {
        label: 'Customer Wi-Fi Networks',
        description:
          'Isolated guest Wi-Fi captive portals and secure POS internal business networking.',
      },
      {
        label: 'Packaging & In-Store Displays',
        description:
          'Shopping bags, branded boxes, product labels, price tags, and promotional acrylic displays.',
      },
    ],
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-teal-600" aria-hidden="true" />,
    name: 'E-Commerce & Brands',
    tagline: 'High-converting online stores, branding, and performance campaigns.',
    badge: 'Digital Commerce',
    iconBg: 'bg-teal-50 border-teal-100',
    services: [
      {
        label: 'E-Commerce Development',
        description:
          'Custom online stores, payment gateway integration, inventory synchronization, and fast hosting.',
      },
      {
        label: 'Performance Ads & SEO',
        description:
          'Targeted Meta & Google ad campaigns, organic search optimization, and conversion rate audits.',
      },
      {
        label: 'Product Packaging & Labels',
        description:
          'Custom mailer boxes, product label rolls, tissue wraps, unboxing cards, and stickers.',
      },
      {
        label: 'Cloud Infrastructure & Security',
        description:
          'SSL hardening, automated daily backups, cloud database monitoring, and server scaling.',
      },
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    name: 'Educational Institutions',
    tagline: 'Campus-wide connectivity, computer labs, and student safety.',
    badge: 'Education',
    iconBg: 'bg-amber-50 border-amber-100',
    services: [
      {
        label: 'Computer Lab Engineering',
        description:
          'Multi-terminal workstation deployment, server virtualization, and student access management.',
      },
      {
        label: 'Campus Wi-Fi & LAN',
        description:
          'High-density access points handling hundreds of simultaneous devices across classrooms.',
      },
      {
        label: 'Campus CCTV Surveillance',
        description:
          'Comprehensive gate, perimeter, corridor, and playground safety surveillance systems.',
      },
      {
        label: 'ID Cards & Certificates',
        description:
          'High-durability PVC student ID cards, RFID cards, certificates, and institutional brochures.',
      },
    ],
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-rose-600" aria-hidden="true" />,
    name: 'Restaurants & Hospitality',
    tagline: 'Kitchen display systems, guest Wi-Fi, and enticing menu branding.',
    badge: 'Hospitality',
    iconBg: 'bg-rose-50 border-rose-100',
    services: [
      {
        label: 'Kitchen & Order Routing IT',
        description:
          'Reliable KDS screen setups, thermal kitchen ticket printers, and order station cabling.',
      },
      {
        label: 'Dine-In CCTV Security',
        description:
          'Cash register monitoring, kitchen cleanliness monitoring, and dining room safety coverage.',
      },
      {
        label: 'Menu Design & Printing',
        description:
          'Waterproof laminated menus, table tent cards, take-away brochures, and branded food packaging.',
      },
      {
        label: 'Social Media & Local Marketing',
        description:
          'Instagram food photography, localized Karachi promotions, and Google Maps optimization.',
      },
    ],
  },
  {
    icon: <Warehouse className="w-6 h-6 text-orange-600" aria-hidden="true" />,
    name: 'Warehouses & Logistics',
    tagline: 'Perimeter security, industrial Wi-Fi, and barcode tracking.',
    badge: 'Logistics',
    iconBg: 'bg-orange-50 border-orange-100',
    services: [
      {
        label: 'Long-Range Perimeter CCTV',
        description:
          'Night-vision PTZ cameras, loading dock monitoring, gate tracking, and vehicle ANPR.',
      },
      {
        label: 'Industrial Wi-Fi Coverage',
        description:
          'High-ceiling directional antennas enabling continuous connectivity for handheld barcode scanners.',
      },
      {
        label: 'Biometric Access Control',
        description:
          'Automated turnstiles, biometric fingerprint/facial recognition, and shift attendance tracking.',
      },
      {
        label: 'Shipping Labels & Stationery',
        description:
          'Barcode thermal labels, delivery challan books, invoices, and warehouse compliance signage.',
      },
    ],
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    name: 'Healthcare Facilities',
    tagline: 'Reliable, secure technology for patient-first clinics and hospitals.',
    badge: 'Healthcare',
    iconBg: 'bg-emerald-50 border-emerald-100',
    services: [
      {
        label: 'Clinical IT Systems & Records',
        description:
          'Workstation setup, medical records storage stability, and diagnostic printer maintenance.',
      },
      {
        label: 'Patient-Isolated Networking',
        description:
          'Segregated VLANs isolating sensitive diagnostic machinery from public waiting room Wi-Fi.',
      },
      {
        label: 'Discreet Security Surveillance',
        description:
          'Reception, emergency entry, pharmacy storage, and perimeter security with strict audit trails.',
      },
      {
        label: 'Patient Portals & Print Materials',
        description:
          'Doctor appointment websites, patient file folders, prescription pads, and laboratory report envelopes.',
      },
    ],
  },
  {
    icon: <Rocket className="w-6 h-6 text-violet-600" aria-hidden="true" />,
    name: 'Startups & Ventures',
    tagline: 'Launch rapidly with world-class identity, software, and marketing.',
    badge: 'Startups',
    iconBg: 'bg-violet-50 border-violet-100',
    services: [
      {
        label: 'Brand Identity & Guidelines',
        description:
          'Comprehensive brand packages: logo, typographic scale, corporate deck, and business stationery.',
      },
      {
        label: 'Web & SaaS Engineering',
        description:
          'Next.js web applications, responsive customer portals, and database infrastructure.',
      },
      {
        label: 'Workspace & Cloud Setup',
        description:
          'Company domains, enterprise email, GitHub / Slack integrations, and cloud storage.',
      },
      {
        label: 'Growth Marketing',
        description:
          'SEO setup, launch strategy, social media channels, and targeted paid lead generation.',
      },
    ],
  },
  {
    icon: <Home className="w-6 h-6 text-cyan-600" aria-hidden="true" />,
    name: 'Homes & Individuals',
    tagline: 'Safe, smart, and seamlessly connected residences.',
    badge: 'Residential',
    iconBg: 'bg-cyan-50 border-cyan-100',
    services: [
      {
        label: 'Home CCTV Installation',
        description:
          'Smart indoor and perimeter cameras with instant mobile alert notifications and playback.',
      },
      {
        label: 'Mesh Wi-Fi Coverage',
        description:
          'Multi-story mesh Wi-Fi eliminating dead zones across large villas, townhouses, and apartments.',
      },
      {
        label: 'Personal IT Troubleshooting',
        description:
          'Desktop and laptop repair, data recovery, OS reinstallation, and hardware upgrades.',
      },
      {
        label: 'Home Office IT Setup',
        description:
          'Dual monitor setups, secure corporate VPN configuration, and dedicated backup drives.',
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
