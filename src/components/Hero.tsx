'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ChevronDown, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, FloatingElement } from './animations';

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 dark:opacity-30"></div>
      
      {/* Animated Orbs */}
      <motion.div 
        className="orb orb-green w-[600px] h-[600px] -top-20 -left-20"
        animate={{ 
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="orb orb-gold w-[500px] h-[500px] -bottom-20 -right-20"
        animate={{ 
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="orb orb-mixed w-[400px] h-[400px] top-1/3 right-1/4"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Floating Elements - mirrored for RTL */}
      <FloatingElement className={`absolute top-32 text-6xl md:text-8xl opacity-20 pointer-events-none ${dir === 'rtl' ? 'left-10 md:left-32' : 'right-10 md:right-32'}`}>
        🧤
      </FloatingElement>
      <FloatingElement className={`absolute bottom-32 text-6xl md:text-8xl opacity-20 pointer-events-none ${dir === 'rtl' ? 'right-10 md:right-32' : 'left-10 md:left-32'}`}>
        ⚽
      </FloatingElement>
      
      {/* Decorative Glow Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-300 dark:border-green-500/20 text-green-800 dark:text-green-400 text-sm font-medium mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.span>
          <span>{t.hero.badge}</span>
          <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl mb-6"
        >
          <span className="text-slate-900 dark:text-white">{t.hero.title}</span>
          <br />
          <span className="gradient-text">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-slate-700 dark:text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}
        >
          <motion.a
            href="#register"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-lg overflow-hidden text-white shadow-lg shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t.hero.cta}
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#programs"
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:border-green-500 hover:bg-green-50 dark:hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* Stats - High contrast cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: Users, value: '150+', label: t.hero.stats.students, gradient: 'from-green-500 to-emerald-600' },
            { icon: Award, value: '15+', label: t.hero.stats.years, gradient: 'from-amber-500 to-orange-600' },
            { icon: TrendingUp, value: '95%', label: t.hero.stats.success, gradient: 'from-emerald-500 to-teal-600' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl p-5 md:p-6 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-none overflow-hidden group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Subtle gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative flex items-center justify-center gap-2 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Value */}
              <div className="relative text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              
              {/* Label */}
              <div className="relative text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-500 flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-green-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
