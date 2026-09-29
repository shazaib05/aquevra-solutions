import type { Metadata } from 'next';
import IndustriesPageClient from './IndustriesPageClient';

export const metadata: Metadata = {
  title: 'Industries We Serve | AQUEVRA SOLUTIONS',
  description:
    'AQUEVRA SOLUTIONS delivers tailored website development, custom software, branding, digital marketing, and corporate printing across 10+ major industries.',
  openGraph: {
    title: 'Industries We Serve | AQUEVRA SOLUTIONS',
    description:
      'Discover how AQUEVRA SOLUTIONS serves 10+ industries with website development, custom software, creative branding, digital marketing, and corporate printing.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
