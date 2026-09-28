import type { Metadata } from 'next';
import PortfolioClientPage from '@/components/portfolio/PortfolioClientPage';

export const metadata: Metadata = {
  title: 'Portfolio | AQUEVRA SOLUTIONS — Our Work',
  description:
    'Browse sample projects and case studies by AQUEVRA SOLUTIONS across IT, Networking, CCTV, Website Development, Branding, Social Media, and Digital Marketing.',
  keywords: [
    'AQUEVRA SOLUTIONS portfolio',
    'IT projects',
    'website development portfolio',
    'CCTV installation projects',
    'branding projects',
    'digital marketing portfolio',
    'networking projects',
  ],
  openGraph: {
    title: 'Our Work | AQUEVRA SOLUTIONS Portfolio',
    description:
      'Sample portfolio showcasing the range and quality of AQUEVRA SOLUTIONS technology and digital projects.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioClientPage />;
}
