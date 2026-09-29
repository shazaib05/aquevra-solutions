import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | AQUEVRA SOLUTIONS',
  description:
    'Learn about AQUEVRA SOLUTIONS — our mission, values, and the specialized team delivering website & software development, graphic design, digital marketing, and corporate gifting & printing services.',
  openGraph: {
    title: 'About Us | AQUEVRA SOLUTIONS',
    description:
      'Technology. Creativity. Reliable Solutions. Discover who we are and why businesses trust AQUEVRA SOLUTIONS.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
