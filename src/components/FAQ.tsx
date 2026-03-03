'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.faq.title}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqKeys.map((key, index) => (
            <div
              key={key}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-white pr-4">
                  {t.faq.items[key].question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-400" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6 text-gray-400 leading-relaxed">
                  {t.faq.items[key].answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
