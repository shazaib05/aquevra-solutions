'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  Network,
  Camera,
  Globe,
  Palette,
  Megaphone,
  Briefcase,
  Wrench,
} from 'lucide-react';
import { siteConfig } from '@/lib/site.config';

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

interface ServiceItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

const serviceItems: ServiceItem[] = [
  { id: 'web-software', label: 'Website & Software Solutions', icon: Globe },
  { id: 'graphic-design', label: 'Graphic Design & Creative Services', icon: Palette },
  { id: 'digital-marketing', label: 'Digital Marketing', icon: Megaphone },
  { id: 'corporate-services', label: 'Corporate Gifting & Printing', icon: Briefcase },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const dropdownVariants = {
  closed: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.15 } },
  open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
};

const itemVariants = {
  closed: { opacity: 0, x: -8 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.2 },
  }),
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Do not render public navbar on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // ── Scroll listener ──────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 15);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // ── Close dropdown on outside click ─────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Close mobile menu on route change ───────────────────────────────────
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // ── Prevent body scroll when mobile menu open ────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // ── Keyboard: close dropdown on Escape ──────────────────────────────────
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
        servicesButtonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isServicesActive = pathname.startsWith('/services');

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60'
        }
      `}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
            aria-label={`${siteConfig.name} – Home`}
          >
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              height={44}
              width={180}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop nav links ─────────────────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {/* Home */}
            <li>
              <Link
                href="/"
                className={`
                  px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${isActive('/') ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'}
                `}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                href="/about"
                className={`
                  px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${isActive('/about') ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'}
                `}
              >
                About Us
              </Link>
            </li>

            {/* Services dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                ref={servicesButtonRef}
                onClick={() => setServicesOpen((prev) => !prev)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                className={`
                  flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${isServicesActive ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'}
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
                `}
              >
                Services
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    id="services-dropdown"
                    role="menu"
                    aria-orientation="vertical"
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onMouseLeave={() => setServicesOpen(false)}
                    className="
                      absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72
                      bg-white border border-slate-200 rounded-2xl
                      shadow-xl py-2 overflow-hidden
                    "
                  >
                    {serviceItems.map((service, i) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={service.id}
                          custom={i}
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                        >
                          <Link
                            href={`/services#${service.id}`}
                            role="menuitem"
                            className="
                              flex items-center gap-3 px-4 py-2.5
                              text-sm text-slate-700 hover:text-sky-600
                              hover:bg-sky-50/80
                              transition-colors duration-150
                              focus:outline-none focus-visible:bg-sky-50
                            "
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-slate-800 hover:text-sky-600">{service.label}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                    {/* View all services */}
                    <div className="border-t border-slate-100 mt-1 pt-1 bg-slate-50/60">
                      <Link
                        href="/services"
                        role="menuitem"
                        className="
                          flex items-center justify-center gap-2 px-4 py-2.5
                          text-sm font-semibold text-sky-600
                          hover:text-sky-700 hover:bg-sky-100/50
                          transition-colors duration-150
                        "
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Remaining links */}
            {['Industries', 'Portfolio', 'Process', 'Support', 'Contact'].map((label) => {
              const href = `/${label.toLowerCase().replace(' ', '-')}`;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`
                      px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                      ${isActive(href) ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA button + Hamburger ────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* CTA – desktop */}
            <Link
              href="/quote"
              className="
                hidden lg:inline-flex items-center gap-2
                px-5 py-2.5 rounded-xl
                bg-gradient-to-r from-sky-600 to-blue-600
                hover:from-sky-700 hover:to-blue-700
                text-white text-sm font-bold
                shadow-md hover:shadow-lg hover:shadow-sky-500/25
                hover:-translate-y-0.5
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
                whitespace-nowrap
              "
            >
              Get a Free Quote
            </Link>

            {/* Hamburger – mobile */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="
                lg:hidden flex items-center justify-center
                w-10 h-10 rounded-lg
                text-slate-700 hover:text-sky-600 hover:bg-slate-100
                transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white border-t border-slate-200 shadow-xl rounded-b-2xl pb-6 pt-2 px-4">
                <ul className="space-y-1" role="list">
                  {/* Home */}
                  <li>
                    <Link
                      href="/"
                      className={`
                        flex items-center px-4 py-2.5 rounded-xl text-sm font-medium
                        transition-colors duration-200
                        ${isActive('/') ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'}
                      `}
                    >
                      Home
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link
                      href="/about"
                      className={`
                        flex items-center px-4 py-2.5 rounded-xl text-sm font-medium
                        transition-colors duration-200
                        ${isActive('/about') ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'}
                      `}
                    >
                      About Us
                    </Link>
                  </li>

                  {/* Services accordion */}
                  <li>
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      className={`
                        flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-medium
                        transition-colors duration-200
                        ${isServicesActive ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'}
                        focus:outline-none
                      `}
                    >
                      Services
                      <motion.span
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex"
                      >
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.ul
                          id="mobile-services"
                          role="list"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-1 ml-4 space-y-1 border-l-2 border-sky-200 pl-3"
                        >
                          {serviceItems.map((service) => {
                            const Icon = service.icon;
                            return (
                              <li key={service.id}>
                                <Link
                                  href={`/services#${service.id}`}
                                  className="
                                    flex items-center gap-3 px-3 py-2 rounded-lg
                                    text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50
                                    transition-colors duration-150
                                  "
                                >
                                  <Icon className="w-4 h-4 text-sky-600 flex-shrink-0" />
                                  {service.label}
                                </Link>
                              </li>
                            );
                          })}
                          <li>
                            <Link
                              href="/services"
                              className="
                                flex items-center gap-2 px-3 py-2 rounded-lg
                                text-sm font-semibold text-sky-600
                                hover:bg-sky-50
                                transition-colors duration-150
                              "
                            >
                              View All Services →
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Remaining links */}
                  {['Industries', 'Portfolio', 'Process', 'Support', 'Contact'].map((label) => {
                    const href = `/${label.toLowerCase().replace(' ', '-')}`;
                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          className={`
                            flex items-center px-4 py-2.5 rounded-xl text-sm font-medium
                            transition-colors duration-200
                            ${isActive(href) ? 'text-sky-600 font-semibold bg-sky-50' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'}
                          `}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <Link
                    href="/quote"
                    className="
                      flex items-center justify-center w-full
                      px-5 py-3 rounded-xl
                      bg-gradient-to-r from-sky-600 to-blue-600
                      text-white text-sm font-bold
                      shadow-md hover:shadow-lg
                      transition-all duration-300
                    "
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
