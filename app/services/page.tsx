import type { Metadata } from 'next';
import ServicesClientPage from '@/components/services/ServicesClientPage';

export const metadata: Metadata = {
  title: 'Services | AQUEVRA SOLUTIONS — Complete Technology & Digital Solutions',
  description:
    'Explore AQUEVRA SOLUTIONS complete range of technology and digital services: IT support, networking, CCTV security, website development, graphic design, digital marketing, and maintenance contracts.',
  keywords: [
    'IT services Dubai',
    'CCTV installation',
    'network setup',
    'website development',
    'digital marketing',
    'graphic design',
    'IT support',
    'AQUEVRA SOLUTIONS services',
  ],
  openGraph: {
    title: 'Complete Technology & Digital Solutions | AQUEVRA SOLUTIONS',
    description:
      '7 core service categories. One trusted technology partner. IT, Networking, CCTV, Web, Design, Marketing & Maintenance.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
