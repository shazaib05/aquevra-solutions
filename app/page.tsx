import type { Metadata } from 'next';

// ─── Component imports ────────────────────────────────────────────────────────
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import IndustriesSection from '@/components/home/IndustriesSection';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import FAQSection from '@/components/home/FAQSection';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    'AQUEVRA SOLUTIONS | Technology. Digital. Beyond.',
  description:
    'AQUEVRA SOLUTIONS is your complete technology and digital solutions partner — offering website & software development, graphic design & creative branding, digital marketing, and corporate gifting & printing under one roof.',
  keywords: [
    'web development',
    'custom software solutions',
    'graphic design',
    'digital marketing',
    'corporate gifting',
    'corporate printing',
    'flex printing',
    'signage solutions',
    'AQUEVRA SOLUTIONS',
    'technology company Karachi',
  ],
  authors: [{ name: 'AQUEVRA SOLUTIONS' }],
  creator: 'AQUEVRA SOLUTIONS',
  publisher: 'AQUEVRA SOLUTIONS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'AQUEVRA SOLUTIONS | Technology. Digital. Beyond.',
    description:
      'Complete technology and digital solutions partner — web development, custom software, creative branding, digital marketing, and corporate printing under one roof.',
    siteName: 'AQUEVRA SOLUTIONS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AQUEVRA SOLUTIONS — Technology. Digital. Beyond.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQUEVRA SOLUTIONS | Technology. Digital. Beyond.',
    description:
      'Complete technology and digital solutions — web development, custom software, creative branding, digital marketing, and corporate printing.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AQUEVRA SOLUTIONS',
  description:
    'Complete technology and digital solutions partner offering website development, custom software, graphic design, digital marketing, and corporate printing.',
  url: 'https://aquevrasolutions.com',
  logo: 'https://aquevrasolutions.com/logo.png',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  offers: {
    '@type': 'AggregateOffer',
    description:
      'Website & Software Solutions, Graphic Design & Creative Services, Digital Marketing, Corporate Gifting & Printing',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AQUEVRA SOLUTIONS',
  url: 'https://aquevrasolutions.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://aquevrasolutions.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// ─── Page Component (Server Component) ───────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ── Above the fold — server rendered ── */}
      <main id="main-content" aria-label="AQUEVRA SOLUTIONS home page">

        {/* 1. Hero — full viewport, 3D scene */}
        <HeroSection />

        {/* 2. Company intro — who we are + 4 feature cards */}
        <IntroSection />

        {/* 3. Services overview — 7 service cards */}
        <ServicesOverview />

        {/* ── Below the fold — lazy / code-split ── */}

        {/* 4. Why Choose Us — differentiators & stats */}
        <WhyChooseUs />

        {/* 5. Industries We Serve */}
        <IndustriesSection />

        {/* 6. Our Process — timeline / step-by-step */}
        <ProcessTimeline />

        {/* 7. FAQ — accordion */}
        <FAQSection />

      </main>
    </>
  );
}
