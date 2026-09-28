'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { faqs } from '@/lib/faq.data';

const answerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

interface AccordionItemProps {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <article
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-sky-300 bg-white shadow-sm'
          : 'border-slate-200/80 bg-white/80 hover:border-slate-300 hover:bg-white shadow-2xs'
      }`}
      aria-expanded={isOpen}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-expanded={isOpen}
        aria-controls={`answer-${faq.id}`}
        id={`question-${faq.id}`}
      >
        <span
          className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-sky-600 font-bold' : 'text-slate-900 group-hover:text-sky-600'
          }`}
        >
          {faq.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-200 ${
              isOpen ? 'text-sky-600' : 'text-slate-400'
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="region"
            id={`answer-${faq.id}`}
            aria-labelledby={`question-${faq.id}`}
          >
            <div className="px-5 pb-5 pt-1">
              <div className="h-px bg-slate-100 mb-3.5" />
              <p className="text-slate-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
              {faq.category && (
                <span className="mt-3.5 inline-block text-[11px] font-semibold tracking-wider uppercase text-sky-700 bg-sky-50 border border-sky-100 rounded-full px-2.5 py-0.5">
                  {faq.category}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Split faqs into two columns for desktop
  const half = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  return (
    <section
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/80 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="flex justify-center mb-3.5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 shadow-2xs">
              <HelpCircle className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
          <p className="text-sky-600 text-xs font-bold tracking-[0.2em] uppercase mb-2 inline-block">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Clear Answers to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              Common Questions
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about working with AQUEVRA SOLUTIONS in Karachi and beyond.
          </p>
        </motion.div>

        {/* Accordion grid — single col mobile, 2-col desktop */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left column */}
          <div className="space-y-3">
            {leftCol.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-3">
            {rightCol.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-block rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm max-w-xl mx-auto">
            <p className="text-slate-500 text-sm mb-1 font-medium">
              Have a specific question not covered here?
            </p>
            <p className="text-slate-900 text-xl font-bold mb-4">
              Speak Directly with Our Solutions Engineers
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-xl shadow-xs transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Get in Touch Today
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
