'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Shield, Users, Target, Zap } from 'lucide-react';

const reasons: { key: 'r1' | 'r2' | 'r3' | 'r4'; icon: typeof Shield; gradient: string }[] = [
  { key: 'r1', icon: Shield, gradient: 'from-green-500 to-emerald-600' },
  { key: 'r2', icon: Users, gradient: 'from-blue-500 to-cyan-600' },
  { key: 'r3', icon: Target, gradient: 'from-amber-500 to-orange-600' },
  { key: 'r4', icon: Zap, gradient: 'from-purple-500 to-pink-600' },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            {t.whyChooseUs.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.whyChooseUs.title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ key, icon: Icon, gradient }) => (
            <div
              key={key}
              className="relative group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {t.whyChooseUs.reasons[key].title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t.whyChooseUs.reasons[key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
