'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  Cpu,
  Monitor,
  Network,
  Camera,
  Globe,
  Code2,
  HardDrive,
  Wifi,
  UserCheck,
  Briefcase,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Paperclip,
} from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { generateRef } from '@/lib/utils';

// ─── Schema ──────────────────────────────────────────────────────────────────

const supportSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  category: z.string().min(1, 'Please select a support category'),
  problemDescription: z
    .string()
    .min(30, 'Please describe your issue in at least 30 characters'),
  contactMethod: z.enum(['Phone', 'Email', 'WhatsApp'], {
    required_error: 'Please select a preferred contact method',
  }),
});

type SupportFormData = z.infer<typeof supportSchema>;

// ─── Support Categories ───────────────────────────────────────────────────────

const supportCategories = [
  {
    id: 'it-support',
    label: 'IT Support & Systems',
    description: 'General IT troubleshooting, operating systems, and user setups',
    icon: Cpu,
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    id: 'computer-laptop',
    label: 'Computer & Hardware',
    description: 'Hardware diagnostics, upgrades, and component replacements',
    icon: Monitor,
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    id: 'network',
    label: 'Network & Wi-Fi',
    description: 'Connectivity, router configs, VLANs, and LAN/WAN cabling',
    icon: Network,
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 'cctv',
    label: 'CCTV & Security',
    description: 'Camera video feeds, DVR/NVR storage, and mobile view errors',
    icon: Camera,
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    id: 'website-maintenance',
    label: 'Website & Hosting',
    description: 'SSL renewals, website bugs, database fixes, and domain issues',
    icon: Globe,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    id: 'corporate-printing',
    label: 'Corporate & Printing',
    description: 'Stationery reorders, corporate print runs, and branding assets',
    icon: Briefcase,
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    id: 'software',
    label: 'Software Support',
    description: 'Custom software glitches, ERP/POS errors, and API integration',
    icon: Code2,
    color: 'text-pink-700',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    id: 'backup-maintenance',
    label: 'Backup & Recovery',
    description: 'Cloud backups, NAS storage verification, and disaster recovery',
    icon: HardDrive,
    color: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
  },
  {
    id: 'remote-support',
    label: 'Remote Helpdesk',
    description: 'Instant remote desktop assistance and software configuration',
    icon: Wifi,
    color: 'text-cyan-700',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    id: 'onsite-support',
    label: 'On-Site Engineer Visit',
    description: 'Scheduled on-premises technical inspection across Karachi',
    icon: UserCheck,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function SupportPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [refNumber, setRefNumber] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
    defaultValues: { contactMethod: 'Phone' },
  });

  const onSubmit = async (data: SupportFormData) => {
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
        subject: `Support Request [${ref}] — ${data.category}`,
        from_name: data.fullName,
        email: data.email,
        message: `
Reference: ${ref}
Full Name: ${data.fullName}
Company: ${data.companyName || 'N/A'}
Phone: ${data.phone}
Support Category: ${data.category}
Preferred Contact: ${data.contactMethod}

Problem Description:
${data.problemDescription}
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
            Responsive Helpdesk
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Technical Support{' '}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              When You Need It Most
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Log your issue or ticket with our technical team. We troubleshoot, diagnose, and resolve technical challenges promptly across Karachi.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Support Categories Grid ── */}
      <section className="px-4 py-14 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Select Your Technical Discipline
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Our specialists cover physical hardware, network infrastructure, CCTV security, software, and corporate printing.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
          >
            {supportCategories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                className={`flex flex-col items-center rounded-2xl border p-4 text-center transition hover:shadow-sm ${cat.bg} ${cat.border}`}
              >
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <cat.icon className={`h-5 w-5 ${cat.color}`} aria-hidden="true" />
                </div>
                <h3 className={`mb-1 text-xs font-bold leading-tight ${cat.color}`}>{cat.label}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500">{cat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main Content: Form + Sidebar ── */}
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px]">
          {/* ── Support Request Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm"
          >
            <h2 className="mb-1 text-2xl font-bold text-slate-900">Submit a Support Ticket</h2>
            <p className="mb-6 text-sm text-slate-500">
              <span className="text-rose-500 font-bold">*</span> Fields marked are required for immediate assignment
            </p>

            {/* Urgent Notice */}
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-2xs">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-amber-900">
                <span className="font-bold">For critical downtime or server emergencies:</span> call our Karachi emergency desk directly at{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="font-bold underline hover:text-amber-950">
                  {siteConfig.contact.phone}
                </a>.
              </p>
            </div>

            {/* Success */}
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center"
              >
                <CheckCircle2 className="mb-3 h-14 w-14 text-emerald-600" />
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  Support Ticket Dispatched!
                </h3>
                <p className="mb-4 text-slate-600 text-sm max-w-md">
                  Our duty engineer has received your report and will reach out promptly to troubleshoot.
                </p>
                <div className="rounded-xl border border-emerald-300 bg-white px-4 py-2 shadow-2xs">
                  <span className="text-sm font-mono font-bold text-emerald-700">Ticket Reference: {refNumber}</span>
                </div>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-5 text-sm font-semibold text-sky-600 underline underline-offset-4 hover:text-sky-800"
                >
                  Submit another ticket
                </button>
              </motion.div>
            )}

            {/* Error */}
            {formState === 'error' && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-2xs">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="font-bold text-rose-900">Ticket Could Not Be Sent</p>
                  <p className="mt-0.5 text-sm text-rose-700">
                    Please contact our technical desk directly at{' '}
                    <a
                      href={`mailto:${siteConfig.contact.supportEmail}`}
                      className="text-sky-700 font-semibold underline underline-offset-4"
                    >
                      {siteConfig.contact.supportEmail}
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* Form */}
            {formState !== 'success' && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                {/* Row: Name + Company */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="sp-fullName" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="sp-fullName"
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
                    <label htmlFor="sp-company" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Company Name
                    </label>
                    <input
                      id="sp-company"
                      type="text"
                      placeholder="Your Company (optional)"
                      {...register('companyName')}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="sp-email" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="sp-email"
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
                    <label htmlFor="sp-phone" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="sp-phone"
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

                {/* Category */}
                <div>
                  <label htmlFor="sp-category" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    Support Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="sp-category"
                    {...register('category')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    aria-invalid={!!errors.category}
                  >
                    <option value="">— Select support category —</option>
                    {supportCategories.map((c) => (
                      <option key={c.id} value={c.label}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.category.message}</p>
                  )}
                </div>

                {/* Problem Description */}
                <div>
                  <label htmlFor="sp-problem" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    Problem Description &amp; Error Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="sp-problem"
                    rows={4}
                    placeholder="Describe what occurred, when it started, device models involved, error codes or symptoms..."
                    {...register('problemDescription')}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    aria-invalid={!!errors.problemDescription}
                  />
                  {errors.problemDescription && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.problemDescription.message}</p>
                  )}
                </div>

                {/* File attachment note */}
                <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Paperclip className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                  <p className="text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Logs &amp; Screenshots:</span> Please describe any logs or attach links above. Our engineer will request original files if needed during diagnosis.
                  </p>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-800">
                    Preferred Follow-up Method <span className="text-rose-500">*</span>
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
                  disabled={formState === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-sky-500 active:scale-[0.99] disabled:opacity-60"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Logging Ticket…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Technical Support Ticket
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Sidebar: Contact Info ── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Urgent Notice Card */}
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 shadow-2xs">
              <div className="mb-2.5 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-amber-900">Urgent Outage?</h3>
              </div>
              <p className="mb-4 text-xs sm:text-sm leading-relaxed text-amber-800">
                If your production network or CCTV security is down, call our Karachi dispatch center immediately.
              </p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700"
              >
                <Phone className="h-4 w-4" />
                Emergency Line: {siteConfig.contact.phone}
              </a>
            </div>

            {/* Contact Methods */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3.5 font-bold text-slate-900">Direct Support Channels</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs sm:text-sm font-semibold text-sky-800 transition hover:bg-sky-100"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky-600" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.supportEmail}`}
                  className="flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-xs sm:text-sm font-semibold text-indigo-800 transition hover:bg-indigo-100"
                >
                  <Mail className="h-4 w-4 shrink-0 text-indigo-600" />
                  <span>{siteConfig.contact.supportEmail}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>WhatsApp: {siteConfig.contact.whatsapp}</span>
                </a>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <span>
                    {siteConfig.contact.address.area}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3.5 font-bold text-slate-900">Coverage Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-medium">Monday – Saturday</span>
                  <span className="font-bold text-slate-900">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-600 font-medium">Sunday</span>
                  <span className="font-semibold text-sky-700">Contract Clients (AMC)</span>
                </div>
              </div>
              <p className="mt-3.5 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-500">
                {siteConfig.businessHours.note}
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
