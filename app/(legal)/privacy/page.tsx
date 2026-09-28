import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import { AlertCircle, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how AQUEVRA SOLUTIONS collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 2026';

  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      {/* Hero */}
      <section className="border-b border-white/10 bg-[#0D1B2A] px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-[#00D4FF]" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-wider text-[#00D4FF]">
              Legal
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-[#94A3B8]">
            Last updated: <span className="text-white">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Placeholder Notice */}
      <div className="px-4 pt-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" aria-hidden="true" />
            <p className="text-sm text-amber-200">
              <span className="font-semibold">[PLACEHOLDER]</span> This is a template privacy
              policy. It should be reviewed and updated by a qualified legal professional
              before this website goes live to ensure compliance with applicable laws (e.g.,
              PDPA, GDPR, PTA guidelines).
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="px-4 py-12 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert max-w-none">
            {/* Intro */}
            <p className="lead mb-8 text-lg text-[#94A3B8]">
              {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your personal information and your right to privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or contact us for services.
            </p>

            {/* Section 1 */}
            <PolicySection number="1" title="Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Identification Information:</strong> Full name, company
                  name, email address, phone number, and physical address when you contact
                  us, submit a form, or request a quotation.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our
                  website, including IP address, browser type, pages visited, and time spent
                  on pages. This is collected automatically through standard web server logs.
                </li>
                <li>
                  <strong>Communication Data:</strong> Content of messages, inquiries, and
                  support requests you send to us.
                </li>
                <li>
                  <strong>Technical Data:</strong> Device type, operating system, and browser
                  information for support purposes.
                </li>
              </ul>
              <p>
                We only collect information that is necessary for the purposes described in
                this policy. We do not collect sensitive personal data unless legally
                required.
              </p>
            </PolicySection>

            {/* Section 2 */}
            <PolicySection number="2" title="How We Use Your Information">
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries, support requests, and quotation requests</li>
                <li>To deliver the services you have engaged us for</li>
                <li>To communicate updates, service information, or follow-up on projects</li>
                <li>To improve our website and service quality</li>
                <li>To comply with legal obligations</li>
                <li>
                  To send promotional communications (only with your explicit consent, and
                  you may opt out at any time)
                </li>
              </ul>
              <p>
                We will never sell, rent, or trade your personal information to third parties
                for their marketing purposes.
              </p>
            </PolicySection>

            {/* Section 3 */}
            <PolicySection number="3" title="Data Security">
              <p>
                We take the security of your personal information seriously. We implement
                appropriate technical and organizational measures to protect your data
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>These measures include:</p>
              <ul>
                <li>SSL/TLS encryption for data transmitted to and from our website</li>
                <li>
                  Limited access to personal data — only team members who need it to perform
                  their duties can access it
                </li>
                <li>Secure storage of data with reputable service providers</li>
                <li>Regular review of our security practices</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure. While
                we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </PolicySection>

            {/* Section 4 */}
            <PolicySection number="4" title="Third-Party Services">
              <p>
                We may use third-party services that collect or process data on our behalf.
                These include:
              </p>
              <ul>
                <li>
                  <strong>Web3Forms:</strong> Used for processing contact and inquiry form
                  submissions. Your form data is transmitted through their secure API. Please
                  review{' '}
                  <a
                    href="https://web3forms.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] underline underline-offset-4 hover:text-white"
                  >
                    Web3Forms' Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Maps:</strong> Our contact page embeds Google Maps for
                  location display. Google may collect usage data. Please review{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] underline underline-offset-4 hover:text-white"
                  >
                    Google's Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Analytics:</strong> We may use analytics tools to understand
                  website traffic and improve our content.
                </li>
              </ul>
              <p>
                We do not control these third-party services and are not responsible for
                their privacy practices. We encourage you to review their privacy policies.
              </p>
            </PolicySection>

            {/* Section 5 */}
            <PolicySection number="5" title="Cookies">
              <p>
                Our website may use cookies — small text files stored on your device — to
                enhance your browsing experience. These may include:
              </p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use
                  our site
                </li>
              </ul>
              <p>
                You can control cookie settings through your browser settings. Disabling
                cookies may affect some website functionality.
              </p>
            </PolicySection>

            {/* Section 6 */}
            <PolicySection number="6" title="Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data (subject to legal obligations)</li>
                <li>Withdraw consent for any processing based on consent</li>
                <li>Object to processing of your data for certain purposes</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details in
                Section 7 below.
              </p>
            </PolicySection>

            {/* Section 7 */}
            <PolicySection number="7" title="Contact Information">
              <p>
                If you have questions about this Privacy Policy, or wish to exercise your
                rights regarding your personal data, please contact us:
              </p>
              <div className="mt-4 rounded-xl border border-white/10 bg-[#0D1B2A] p-5">
                <p className="font-semibold text-white">{siteConfig.name}</p>
                <p className="mt-1 text-[#94A3B8]">
                  {siteConfig.contact.address.area},{' '}
                  {siteConfig.contact.address.city},{' '}
                  {siteConfig.contact.address.country}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[#00D4FF]">
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="underline underline-offset-4 hover:text-white"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </PolicySection>

            {/* Changes */}
            <PolicySection number="8" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with an updated &quot;last updated&quot; date. We encourage you
                to review this page periodically to stay informed about how we protect your
                information.
              </p>
            </PolicySection>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
            <Link
              href="/terms"
              className="text-sm text-[#00D4FF] underline underline-offset-4 hover:text-white"
            >
              Terms of Service →
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#94A3B8] underline underline-offset-4 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

// ─── Helper component ────────────────────────────────────────────────────────

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10" aria-labelledby={`section-${number}`}>
      <h2
        id={`section-${number}`}
        className="mb-4 flex items-center gap-3 text-xl font-semibold text-white"
      >
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#00D4FF]/10 text-sm font-bold text-[#00D4FF]">
          {number}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-[#94A3B8] [&_a]:text-[#00D4FF] [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-white">
        {children}
      </div>
    </section>
  );
}
