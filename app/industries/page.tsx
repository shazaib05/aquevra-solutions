import type { Metadata } from 'next';
import IndustriesPageClient from './IndustriesPageClient';

export const metadata: Metadata = {
  title: 'Industries We Serve | AQUEVRA SOLUTIONS',
  description:
    'AQUEVRA SOLUTIONS delivers tailored technology services across corporate offices, SMBs, retail, e-commerce, education, hospitality, healthcare, startups, and more.',
  openGraph: {
    title: 'Industries We Serve | AQUEVRA SOLUTIONS',
    description:
      'Discover how AQUEVRA SOLUTIONS serves 10+ industries with IT, networking, CCTV, web, and digital marketing solutions.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
