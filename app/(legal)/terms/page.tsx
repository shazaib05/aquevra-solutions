import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import { AlertCircle, FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Terms of Service for AQUEVRA SOLUTIONS — the conditions governing use of our services.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'September 2026';

  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      {/* Hero */}
      <section className="border-b border-white/10 bg-[#0D1B2A] px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-[#00D4FF]" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-wider text-[#00D4FF]">
              Legal
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
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
              <span className="font-semibold">[PLACEHOLDER]</span> This is a template Terms
              of Service document. It should be reviewed, customized, and approved by a
              qualified legal professional before this website goes live to ensure it
              accurately reflects AQUEVRA SOLUTIONS&apos; service agreements and complies with
              applicable Pakistani law.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="px-4 py-12 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <p className="mb-10 text-lg text-[#94A3B8]">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the
            services provided by{' '}
            <span className="font-semibold text-white">{siteConfig.name}</span>. By
            engaging our services, you agree to be bound by these Terms. If you do not
            agree, please do not use our services.
          </p>

          {/* Section 1 — Services */}
          <TermsSection number="1" title="Our Services">
            <p>
              {siteConfig.name} provides technology and digital services including, but not
              limited to:
            </p>
            <ul>
              <li>Website Design and Custom Web Development</li>
              <li>Custom Business Software Solutions</li>
              <li>Graphic Design, Creative and Brand Identity</li>
              <li>Digital Marketing and Social Media Advertising</li>
              <li>Corporate Gifting and Executive Merchandise</li>
              <li>Professional Digital, Offset, and Flex Printing</li>
              <li>Signage Solutions and Promotional Displays</li>
            </ul>
            <p>
              The specific scope of services for each engagement will be defined in a
              separate Service Agreement, Quotation, or Project Brief agreed upon by both
              parties.
            </p>
          </TermsSection>

          {/* Section 2 — Quotations */}
          <TermsSection number="2" title="Quotations and Project Agreements">
            <p>
              All quotations provided by {siteConfig.name} are valid for{' '}
              <strong className="text-white">14 calendar days</strong> from the date of
              issue, unless otherwise stated. A quotation does not constitute a binding
              agreement until accepted by the client in writing (including email).
            </p>
            <p>
              Project scope, deliverables, timelines, and pricing will be agreed upon
              before work commences. Any changes to the agreed scope may result in
              additional charges, which will be communicated and agreed upon before
              implementation.
            </p>
          </TermsSection>

          {/* Section 3 — Payment Terms */}
          <TermsSection number="3" title="Payment Terms">
            <p>
              Unless otherwise agreed in writing, the following payment terms apply:
            </p>
            <ul>
              <li>
                <strong className="text-white">Deposit:</strong> A deposit (typically
                50% of the agreed project value) is required before work commences.
              </li>
              <li>
                <strong className="text-white">Final Payment:</strong> The remaining
                balance is due upon project completion and before final delivery or
                handover.
              </li>
              <li>
                <strong className="text-white">Ongoing Services:</strong> For retainer
                or recurring services, invoices are issued monthly and payment is due
                within 7 days of the invoice date.
              </li>
            </ul>
            <p>
              {siteConfig.name} reserves the right to suspend services for accounts with
              overdue payments. Late payments may incur additional charges at the discretion
              of {siteConfig.name}.
            </p>
            <p>
              All prices are in Pakistani Rupees (PKR) unless explicitly stated otherwise.
            </p>
          </TermsSection>

          {/* Section 4 — Client Responsibilities */}
          <TermsSection number="4" title="Client Responsibilities">
            <p>
              To ensure successful delivery of services, clients agree to:
            </p>
            <ul>
              <li>
                Provide accurate and complete information required for service delivery in
                a timely manner
              </li>
              <li>
                Make necessary personnel, systems, or locations available as agreed for
                on-site work
              </li>
              <li>
                Review and provide feedback on deliverables within agreed timeframes
              </li>
              <li>
                Ensure that any content, logos, or materials provided do not infringe
                third-party intellectual property rights
              </li>
              <li>
                Not use our services for any unlawful or unauthorized purpose
              </li>
            </ul>
          </TermsSection>

          {/* Section 5 — Intellectual Property */}
          <TermsSection number="5" title="Intellectual Property">
            <p>
              Upon receipt of full payment, {siteConfig.name} transfers ownership of
              custom deliverables (such as website code, graphic designs, or software
              created exclusively for the client) to the client, unless otherwise agreed.
            </p>
            <p>
              {siteConfig.name} retains the right to use completed work in its portfolio
              and for promotional purposes, unless the client explicitly requests
              confidentiality in writing.
            </p>
            <p>
              Third-party tools, libraries, software, and assets used in projects remain
              subject to their respective licenses.
            </p>
          </TermsSection>

          {/* Section 6 — Limitation of Liability */}
          <TermsSection number="6" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law,{' '}
              {siteConfig.name} shall not be liable for:
            </p>
            <ul>
              <li>
                Any indirect, incidental, special, consequential, or punitive damages
                arising from the use of our services
              </li>
              <li>
                Loss of data, revenue, profits, or business opportunities
              </li>
              <li>
                Damages arising from circumstances beyond our reasonable control,
                including power outages, internet service disruptions, third-party service
                failures, or natural disasters
              </li>
              <li>
                Security breaches that occur despite reasonable security measures being
                in place
              </li>
            </ul>
            <p>
              In any case, our maximum liability shall not exceed the total amount paid
              by the client for the specific service giving rise to the claim within the
              preceding 3 months.
            </p>
          </TermsSection>

          {/* Section 7 — Warranty Disclaimer */}
          <TermsSection number="7" title="Warranty Disclaimer">
            <p>
              Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
              {siteConfig.name} makes no warranties, express or implied, regarding:
            </p>
            <ul>
              <li>The uninterrupted availability of any service or system</li>
              <li>That services will be error-free</li>
              <li>Specific business outcomes or results</li>
            </ul>
            <p>
              Where warranty periods are included in a service agreement (e.g., post-launch
              support for websites), the specific terms will be defined in that agreement.
            </p>
          </TermsSection>

          {/* Section 8 — Termination */}
          <TermsSection number="8" title="Termination">
            <p>
              Either party may terminate a service agreement with written notice, subject
              to the terms defined in the relevant project or service agreement.
            </p>
            <p>
              In the event of termination by the client before project completion,{' '}
              {siteConfig.name} reserves the right to retain the deposit and any amounts
              due for work completed up to the termination date.
            </p>
            <p>
              {siteConfig.name} may immediately terminate services if a client is in
              breach of these Terms, including non-payment or misuse of services.
            </p>
          </TermsSection>

          {/* Section 9 — Governing Law */}
          <TermsSection number="9" title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of Pakistan. Any disputes arising from or related to these Terms shall be
              subject to the exclusive jurisdiction of the courts of Karachi, Sindh,
              Pakistan.
            </p>
          </TermsSection>

          {/* Section 10 — Contact */}
          <TermsSection number="10" title="Contact">
            <p>
              If you have any questions about these Terms of Service, please contact us:
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
          </TermsSection>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
            <Link
              href="/privacy"
              className="text-sm text-[#00D4FF] underline underline-offset-4 hover:text-white"
            >
              Privacy Policy →
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

function TermsSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10" aria-labelledby={`terms-${number}`}>
      <h2
        id={`terms-${number}`}
        className="mb-4 flex items-center gap-3 text-xl font-semibold text-white"
      >
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#00D4FF]/10 text-sm font-bold text-[#00D4FF]">
          {number}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-[#94A3B8] [&_li]:ml-4 [&_li]:list-disc">
        {children}
      </div>
    </section>
  );
}
