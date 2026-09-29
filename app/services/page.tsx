import type { Metadata } from 'next';
import ServicesClientPage from '@/components/services/ServicesClientPage';

export const metadata: Metadata = {
  title: 'Services | AQUEVRA SOLUTIONS — Web, Software, Design, Marketing & Printing',
  description:
    'Explore AQUEVRA SOLUTIONS complete range of core services: Website & Software Solutions, Graphic Design & Creative Services, Digital Marketing, and Corporate Gifting & Printing.',
  keywords: [
    'website development Karachi',
    'software solutions',
    'graphic design agency',
    'digital marketing Karachi',
    'corporate gifting',
    'corporate printing',
    'flex printing',
    'signage solutions',
    'AQUEVRA SOLUTIONS services',
  ],
  openGraph: {
    title: 'Core Technology & Digital Services | AQUEVRA SOLUTIONS',
    description:
      '4 core service divisions. One trusted technology & creative partner. Web & Software, Graphic Design, Digital Marketing, and Corporate Gifting & Printing.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
