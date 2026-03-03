'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      key: 'beginner',
      name: t.programs.beginner.name,
      price: t.programs.beginner.price,
      period: t.programs.beginner.period,
      description: t.programs.beginner.description,
      features: t.programs.beginner.features,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      icon: Rocket,
      popular: false,
    },
    {
      key: 'intermediate',
      name: t.programs.intermediate.name,
      price: t.programs.intermediate.price,
      period: t.programs.intermediate.period,
      description: t.programs.intermediate.description,
      features: t.programs.intermediate.features,
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      icon: Zap,
      popular: true,
    },
    {
      key: 'advanced',
      name: t.programs.advanced.name,
      price: t.programs.advanced.price,
      period: t.programs.advanced.period,
      description: t.programs.advanced.description,
      features: t.programs.advanced.features,
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500/30',
      icon: Crown,
      popular: false,
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4" />
              {t.programs.badge}
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="heading-lg mb-4">
              {t.programs.title} <span className="gradient-text">{t.programs.titleHighlight}</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
              {t.programs.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Programs Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {programs.map((program, idx) => (
            <StaggerItem key={program.key}>
              <motion.div
                className={`relative rounded-3xl border ${program.borderColor} bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm p-6 lg:p-8 overflow-hidden group ${
                  program.popular ? 'ring-2 ring-green-500/50' : ''
                }`}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Popular Badge */}
                {program.popular && (
                  <motion.div 
                    className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                
                {program.popular && (
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-sm font-semibold shadow-lg shadow-green-500/30"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Popular
                    </motion.div>
                  </div>
                )}

                {/* Icon */}
                <motion.div 
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${program.color} mb-5 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <program.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Title & Price */}
                <h3 className="text-2xl font-bold text-white mb-2">{program.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{program.price}</span>
                  <span className="text-gray-400">MAD{program.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{program.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, fidx) => (
                    <motion.li 
                      key={fidx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: fidx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center shrink-0 mt-0.5`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#register"
                  className={`block w-full py-3.5 rounded-full font-semibold text-center transition-all ${
                    program.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30'
                      : 'border border-white/20 hover:bg-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.programs.cta}
                </motion.a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
