import type { Metadata } from 'next';
import ProcessClientPage from '@/components/process/ProcessClientPage';

export const metadata: Metadata = {
  title: 'How We Work | AQUEVRA SOLUTIONS — Our Process',
  description:
    'Discover the AQUEVRA SOLUTIONS 6-step client process: from discovery and planning through design, development, deployment, and ongoing support. Transparent. Professional. Reliable.',
  keywords: [
    'AQUEVRA SOLUTIONS process',
    'how we work',
    'technology consulting process',
    'project delivery methodology',
    'IT project process',
    'digital agency workflow',
  ],
  openGraph: {
    title: 'How We Work | AQUEVRA SOLUTIONS Process',
    description:
      'A transparent look at how AQUEVRA SOLUTIONS delivers technology and digital projects — 6 clear steps from brief to ongoing support.',
    type: 'website',
  },
};

export default function ProcessPage() {
  return <ProcessClientPage />;
}
