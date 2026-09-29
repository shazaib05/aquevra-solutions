'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  FileText,
  Cpu,
  Network,
  Camera,
  Globe,
  Code2,
  Palette,
  Megaphone,
  Wrench,
  Briefcase,
} from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { generateRef } from '@/lib/utils';

// ─── Schema ──────────────────────────────────────────────────────────────────

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  projectDescription: z
    .string()
    .min(30, 'Please describe your project in at least 30 characters'),
  budget: z.string().min(1, 'Please select an approximate budget'),
  startDate: z.string().optional(),
  contactMethod: z.enum(['Phone', 'Email', 'WhatsApp'], {
    required_error: 'Please select a preferred contact method',
  }),
  additionalRequirements: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

// ─── Constants ───────────────────────────────────────────────────────────────

const serviceCheckboxes = [
  { id: 'web-software', label: 'Website & Software Solutions', icon: Globe },
  { id: 'graphic-design', label: 'Graphic Design & Creative Services', icon: Palette },
  { id: 'digital-marketing', label: 'Digital Marketing & SEO', icon: Megaphone },
  { id: 'corporate-services', label: 'Corporate Gifting & Printing', icon: Briefcase },
];

const budgetOptions = [
  { value: 'under-10k', label: 'Under PKR 10,000' },
  { value: '10k-50k', label: 'PKR 10,000 – 50,000' },
  { value: '50k-100k', label: 'PKR 50,000 – 100,000' },
  { value: '100k-500k', label: 'PKR 100,000 – 500,000' },
  { value: '500k+', label: 'PKR 500,000+' },
  { value: 'to-be-discussed', label: 'To Be Discussed' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function QuotePage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [refNumber, setRefNumber] = useState('');
  const hasKey = !!siteConfig.forms.web3formsAccessKey;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      services: [],
      contactMethod: 'Email',
    },
  });

  const selectedServices = watch('services') ?? [];

  const onSubmit = async (data: QuoteFormData) => {
    setFormState('loading');
    const ref = generateRef();

    if (!siteConfig.forms.web3formsAccessKey) {
      setFormState('error');
      return;
    }

    try {
      const payload = {
        access_key: siteConfig.forms.web3formsAccessKey,
        subject: `Free Quote Request [${ref}] — ${data.services.join(', ')}`,
        from_name: data.fullName,
        email: data.email,
        message: `
Reference: ${ref}
Full Name: ${data.fullName}
Company: ${data.companyName || 'N/A'}
Phone: ${data.phone}
Services Required: ${data.services.join(', ')}
Approximate Budget: ${data.budget}
Preferred Start Date: ${data.startDate || 'Not specified'}
Preferred Contact: ${data.contactMethod}

Project Description:
${data.projectDescription}

Additional Requirements:
${data.additionalRequirements || 'None'}
        `.trim(),
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        setRefNumber(ref);
        setFormState('success');
        reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20 bg-slate-50/80 border-b border-slate-200/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(2,132,199,0.06) 0%, transparent 70%)',
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl text-center px-4"
        >
          <motion.span
            variants={fadeUp}
            className="mb-3 inline-block rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-2xs"
          >
            Itemised Estimate
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Request a{' '}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Free Quotation
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your requirements. Our technical solutions team will review everything
            and provide a detailed, itemised commercial proposal within 1–2 business days.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-2xs"
          >
            <FileText className="h-4 w-4 text-emerald-600" />
            No commitment required · 100% free consultation
          </motion.div>
        </motion.div>
      </section>

      {/* ── Form Section ── */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-4xl">
          {/* No key warning */}
          {!hasKey && (
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-5 shadow-2xs">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
              <div>
                <p className="font-bold text-amber-900">Form Submission Disabled</p>
                <p className="mt-1 text-sm text-amber-800">
                  The <code className="rounded bg-amber-100 px-1 font-mono text-xs">NEXT_PUBLIC_WEB3FORMS_KEY</code>{' '}
                  environment variable is not set. Get a free access key at{' '}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 font-semibold hover:text-amber-950"
                  >
                    web3forms.com
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {/* Success State */}
          {formState === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50/60 p-10 text-center shadow-md"
            >
              <CheckCircle2 className="mb-4 h-16 w-16 text-emerald-600" />
              <h2 className="mb-2 text-2xl font-bold text-slate-900">Quotation Request Received!</h2>
              <p className="mb-6 max-w-xl text-slate-600">
                Your quotation request has been successfully logged. Our engineering lead will review
                your specs and contact you within 24–48 hours with a customized commercial proposal.
              </p>
              <div className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 shadow-2xs">
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-500">Reference Number</p>
                <p className="text-2xl font-mono font-bold tracking-wider text-emerald-700">{refNumber}</p>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Please save this reference number for quick updates.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-6 text-sm font-semibold text-sky-600 underline underline-offset-4 hover:text-sky-800"
              >
                Submit another request
              </button>
            </motion.div>
          )}

          {/* Error State */}
          {formState === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-2xs">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
              <div>
                <p className="font-bold text-rose-900">Submission Could Not Complete</p>
                <p className="mt-0.5 text-sm text-rose-700">
                  {!hasKey
                    ? 'No Web3Forms key is configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY.'
                    : 'An error occurred during submission. Please contact our Karachi office directly at '}
                  {hasKey && (
                    <a
                      href={`mailto:${siteConfig.contact.salesEmail}`}
                      className="text-sky-700 font-semibold underline underline-offset-4"
                    >
                      {siteConfig.contact.salesEmail}
                    </a>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          {formState !== 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm"
            >
              <h2 className="mb-1 text-2xl font-bold text-slate-900">Quotation Request Form</h2>
              <p className="mb-8 text-sm text-slate-500">
                <span className="text-rose-500 font-bold">*</span> Marked fields are required for an accurate estimate
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-700">
                    1. Contact Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-fullName" className="mb-1.5 block text-sm font-semibold text-slate-800">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="q-fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="John Doe"
                        {...register('fullName')}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                        aria-invalid={!!errors.fullName}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="q-company" className="mb-1.5 block text-sm font-semibold text-slate-800">
                        Company Name
                      </label>
                      <input
                        id="q-company"
                        type="text"
                        placeholder="Your Company / Organization"
                        {...register('companyName')}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="q-email" className="mb-1.5 block text-sm font-semibold text-slate-800">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="q-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        {...register('email')}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="q-phone" className="mb-1.5 block text-sm font-semibold text-slate-800">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="q-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+92 300 1234567"
                        {...register('phone')}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div>
                  <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-700">
                    2. Services Required <span className="text-rose-500">*</span>
                  </h3>
                  <p className="mb-4 text-xs text-slate-500">Select one or multiple service categories</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceCheckboxes.map((svc) => {
                      const isSelected = selectedServices.includes(svc.label);
                      return (
                        <label
                          key={svc.id}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                            isSelected
                              ? 'border-sky-500 bg-sky-50/70 text-slate-900 ring-1 ring-sky-500 shadow-2xs'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            value={svc.label}
                            {...register('services')}
                            className="accent-sky-600 rounded"
                          />
                          <svc.icon className={`h-4 w-4 shrink-0 ${isSelected ? 'text-sky-600' : 'text-slate-400'}`} aria-hidden="true" />
                          <span className="text-xs sm:text-sm font-medium">{svc.label}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="mt-2 text-xs text-rose-500 font-medium">{errors.services.message}</p>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-700">
                    3. Project Specifications
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="q-description" className="mb-1.5 block text-sm font-semibold text-slate-800">
                        Project Description &amp; Objectives <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="q-description"
                        rows={4}
                        placeholder="Detail your requirements, scale, locations, user count, or timeline goals. The more context you provide, the more precise our proposal will be."
                        {...register('projectDescription')}
                        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                        aria-invalid={!!errors.projectDescription}
                      />
                      {errors.projectDescription && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.projectDescription.message}</p>
                      )}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="q-budget" className="mb-1.5 block text-sm font-semibold text-slate-800">
                          Estimated Budget Range <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="q-budget"
                          {...register('budget')}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                          aria-invalid={!!errors.budget}
                        >
                          <option value="">— Select budget range —</option>
                          {budgetOptions.map((b) => (
                            <option key={b.value} value={b.label}>
                              {b.label}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="mt-1 text-xs text-rose-500 font-medium">{errors.budget.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="q-startDate" className="mb-1.5 block text-sm font-semibold text-slate-800">
                          Target Start Date
                        </label>
                        <input
                          id="q-startDate"
                          type="date"
                          {...register('startDate')}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="q-additional" className="mb-1.5 block text-sm font-semibold text-slate-800">
                        Additional Notes or Requirements
                      </label>
                      <textarea
                        id="q-additional"
                        rows={2}
                        placeholder="Preferred tech stack, print dimensions & finishes, branding guidelines, or project deadlines..."
                        {...register('additionalRequirements')}
                        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Contact */}
                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-800">
                    Preferred Communication Channel <span className="text-rose-500">*</span>
                  </p>
                  <div className="flex flex-wrap gap-4" role="radiogroup">
                    {(['Phone', 'Email', 'WhatsApp'] as const).map((method) => (
                      <label
                        key={method}
                        className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                      >
                        <input
                          type="radio"
                          value={method}
                          {...register('contactMethod')}
                          className="accent-sky-600"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                  {errors.contactMethod && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.contactMethod.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'loading' || !hasKey}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-sky-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Request free quotation"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing Request…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Quotation Request
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  By submitting this request, you agree that AQUEVRA SOLUTIONS may reach out to discuss your technical requirements. We maintain strict non-disclosure integrity.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
