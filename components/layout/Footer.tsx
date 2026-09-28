import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { Facebook, Instagram, Linkedin } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/site.config';

// ─── Social icon component ────────────────────────────────────────────────────
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex items-center justify-center w-9 h-9 rounded-lg
        bg-white hover:bg-sky-50
        text-slate-600 hover:text-sky-600
        border border-slate-200 hover:border-sky-300
        transition-all duration-200 shadow-2xs
        focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
      "
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

// ─── Heading helper ───────────────────────────────────────────────────────────
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
      <span className="w-2.5 h-1 bg-sky-600 rounded-full" aria-hidden="true" />
      {children}
    </h3>
  );
}

// ─── Footer link helper ───────────────────────────────────────────────────────
function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const baseClasses = `
    text-sm text-slate-600 hover:text-sky-600
    transition-colors duration-150
    focus:outline-none focus-visible:text-sky-600
    inline-block
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-50 border-t border-slate-200 relative text-slate-700"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ── Main footer grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Column 1: Brand ─────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
              aria-label={`${siteConfig.name} – Home`}
            >
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} logo`}
                height={44}
                width={175}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sky-600 text-xs font-bold uppercase tracking-widest mb-2">
              {siteConfig.tagline}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2" role="list" aria-label="Social media links">
              <div role="listitem">
                <SocialLink
                  href={siteConfig.social.facebook}
                  icon={Facebook}
                  label="Follow us on Facebook"
                />
              </div>
              <div role="listitem">
                <SocialLink
                  href={siteConfig.social.instagram}
                  icon={Instagram}
                  label="Follow us on Instagram"
                />
              </div>
              <div role="listitem">
                <SocialLink
                  href={siteConfig.social.linkedin}
                  icon={Linkedin}
                  label="Connect on LinkedIn"
                />
              </div>
            </div>
          </div>

          {/* ── Column 2: Company links ──────────────────────────────────── */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <nav aria-label="Company navigation">
              <ul className="space-y-2.5" role="list">
                {[
                  { href: '/about', label: 'About Us' },
                  { href: '/services', label: 'All Services' },
                  { href: '/industries', label: 'Industries' },
                  { href: '/portfolio', label: 'Portfolio' },
                  { href: '/process', label: 'Our Process' },
                  { href: '/support', label: 'Technical Support' },
                  { href: '/blog', label: 'Insights & Blog' },
                  { href: '/contact', label: 'Contact Us' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Column 3: Services links (All 8 Services) ────────────────── */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <nav aria-label="Services navigation">
              <ul className="space-y-2.5" role="list">
                {[
                  { href: '/services#it-technical', label: 'IT & Technical Services' },
                  { href: '/services#networking', label: 'Networking & Infrastructure' },
                  { href: '/services#cctv', label: 'CCTV & Security' },
                  { href: '/services#web-software', label: 'Website & Software' },
                  { href: '/services#graphic-design', label: 'Graphic Design & Creative' },
                  { href: '/services#digital-marketing', label: 'Digital Marketing' },
                  { href: '/services#corporate-services', label: 'Corporate Gifting & Printing' },
                  { href: '/services#maintenance-support', label: 'Maintenance & Support' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Column 4: Contact info ───────────────────────────────────── */}
          <div>
            <FooterHeading>Contact Info</FooterHeading>
            <address className="not-italic space-y-3.5 text-sm text-slate-600">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 text-sky-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 mt-0.5 text-sky-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 text-sky-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group text-slate-600 hover:text-sky-600 transition-colors duration-200"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle
                  className="w-4 h-4 mt-0.5 text-sky-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>WhatsApp: {siteConfig.contact.whatsapp}</span>
              </a>

              {/* Business hours */}
              <div className="flex items-start gap-3">
                <Clock
                  className="w-4 h-4 mt-0.5 text-sky-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="text-xs text-slate-500 space-y-1">
                  <p>{siteConfig.businessHours.weekdays}</p>
                  <p>{siteConfig.businessHours.weekend}</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-sky-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sky-600 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/admin" className="hover:text-sky-600 transition-colors">
              Staff Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
