import type { Metadata } from 'next';
import PortfolioClientPage from '@/components/portfolio/PortfolioClientPage';

export const metadata: Metadata = {
  title: 'Portfolio | AQUEVRA SOLUTIONS — Our Work',
  description:
    'Browse sample projects and case studies by AQUEVRA SOLUTIONS across Website & Software Development, Branding & Creative Design, Digital Marketing, and Corporate Gifting & Printing.',
  keywords: [
    'AQUEVRA SOLUTIONS portfolio',
    'website development portfolio',
    'custom software case studies',
    'branding projects',
    'digital marketing portfolio',
    'corporate gifting portfolio',
    'printing projects Karachi',
  ],
  openGraph: {
    title: 'Our Work | AQUEVRA SOLUTIONS Portfolio',
    description:
      'Sample portfolio showcasing the range and quality of AQUEVRA SOLUTIONS technology, design, marketing, and printing projects.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioClientPage />;
}
