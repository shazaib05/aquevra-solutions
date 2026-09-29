'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { Facebook, Instagram, Linkedin } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/site.config';
import { generateRef } from '@/lib/utils';

// ─── Schema ──────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  contactMethod: z.enum(['Phone', 'Email', 'WhatsApp'], {
    required_error: 'Please select a preferred contact method',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Constants ───────────────────────────────────────────────────────────────

const services = [
  'Website & Software Solutions',
  'Graphic Design & Creative Services',
  'Digital Marketing',
  'Corporate Gifting & Printing',
  'Other',
];

const budgetRanges = [
  'Under PKR 10,000',
  'PKR 10,000 – 50,000',
  'PKR 50,000 – 100,000',
  'PKR 100,000 – 500,000',
  'PKR 500,000+',
  'To Be Discussed',
];

const contactInfoCards = [
  {
    icon: Phone,
    label: 'Call Direct',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    icon: Mail,
    label: 'Email Inquiries',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Quick Chat',
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon: MapPin,
    label: 'Main Office',
    value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.area}, ${siteConfig.contact.address.city}`,
    href: '#map',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
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

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [refNumber, setRefNumber] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { contactMethod: 'Email' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState('loading');
    const ref = generateRef();

    const accessKey = siteConfig.forms.web3formsAccessKey;
    if (!accessKey) {
      setFormState('error');
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Contact Inquiry [${ref}] — ${data.service}`,
        from_name: data.fullName,
        email: data.email,
        message: `
Reference: ${ref}
Full Name: ${data.fullName}
Company: ${data.companyName || 'N/A'}
Phone: ${data.phone}
Service: ${data.service}
Budget: ${data.budget || 'Not specified'}
Preferred Contact: ${data.contactMethod}

Message:
${data.message}
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
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20 bg-slate-50/80 border-b border-slate-200/70 px-4">
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
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-3 inline-block rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-2xs"
          >
            Direct Contact
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind, an IT emergency, or need a commercial quote? Contact our Karachi team and we will respond within one business day.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
          {/* ── LEFT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm"
          >
            <h2 className="mb-1 text-2xl font-bold text-slate-900">Send an Inquiry</h2>
            <p className="mb-8 text-sm text-slate-500">
              <span className="text-rose-500 font-bold">*</span> Fields marked are required for fast routing
            </p>

            {/* ── Success State ── */}
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center"
              >
                <CheckCircle2 className="mb-3 h-14 w-14 text-emerald-600" />
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  Message Dispatched Successfully!
                </h3>
                <p className="mb-4 text-slate-600 text-sm max-w-md">
                  Thank you for reaching out to AQUEVRA SOLUTIONS. Our client desk will contact you within 1 business day.
                </p>
                <div className="rounded-xl border border-emerald-300 bg-white px-4 py-2 shadow-2xs">
                  <span className="text-sm font-mono font-bold text-emerald-700">
                    Reference: {refNumber}
                  </span>
                </div>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-5 text-sm font-semibold text-sky-600 underline underline-offset-4 hover:text-sky-800"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}

            {/* ── Error State ── */}
            {formState === 'error' && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-2xs">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="font-bold text-rose-900">Message Could Not Send</p>
                  <p className="mt-0.5 text-sm text-rose-700">
                    Please contact our support team directly at{' '}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sky-700 font-semibold underline underline-offset-4"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* ── Form ── */}
            {formState !== 'success' && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                {/* Row: Full Name + Company */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
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
                    <label htmlFor="companyName" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your Company / Brand"
                      {...register('companyName')}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
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
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
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

                {/* Row: Service + Budget */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Select Service Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      aria-invalid={!!errors.service}
                    >
                      <option value="">— Choose a category —</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.service.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Project Budget Range
                    </label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    >
                      <option value="">— Budget range (optional) —</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    Message / Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements, existing issues, or project timeline..."
                    {...register('message')}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-800">
                    Preferred Communication Channel <span className="text-rose-500">*</span>
                  </p>
                  <div className="flex flex-wrap gap-4" role="radiogroup" aria-label="Preferred contact method">
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

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-sky-500 active:scale-[0.99] disabled:opacity-60"
                    aria-label="Send inquiry"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Transmitting…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Request an Itemised Quote
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: Info Sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info Cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-base font-bold text-slate-900">Direct Contact Channels</h2>
              <div className="flex flex-col gap-3.5">
                {contactInfoCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.label === 'WhatsApp Quick Chat' ? '_blank' : undefined}
                    rel={card.label === 'WhatsApp Quick Chat' ? 'noopener noreferrer' : undefined}
                    className={`flex items-start gap-3.5 rounded-xl border p-3.5 transition hover:shadow-xs ${card.bg} ${card.border}`}
                    aria-label={`${card.label}: ${card.value}`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                      <card.icon className={`h-4 w-4 ${card.color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {card.label}
                      </p>
                      <p className={`mt-0.5 truncate text-sm font-bold ${card.color}`}>
                        {card.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3.5 flex items-center gap-2 text-slate-900">
                <Clock className="h-5 w-5 text-sky-600" />
                <h2 className="font-bold text-base">Office Hours</h2>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-medium">Monday – Saturday</span>
                  <span className="font-bold text-slate-900">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-600 font-medium">Sunday</span>
                  <span className="font-semibold text-sky-700">Emergency &amp; By Appt</span>
                </div>
              </div>
              <p className="mt-3.5 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-500">
                {siteConfig.businessHours.note}
              </p>
            </div>

            {/* Google Maps */}
            <div
              id="map"
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AQUEVRA SOLUTIONS Location on Google Maps"
                className="block w-full"
              />
            </div>

            {/* Social Links */}
            {(siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.linkedin) && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Connect on Social
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Facebook className="h-3.5 w-3.5" />
                      Facebook
                      <ExternalLink className="h-3 w-3 opacity-40" />
                    </a>
                  )}
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      Instagram
                      <ExternalLink className="h-3 w-3 opacity-40" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect on LinkedIn"
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                      <ExternalLink className="h-3 w-3 opacity-40" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
