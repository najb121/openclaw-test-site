'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ChevronDown, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, FloatingElement } from './animations';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
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
      
      {/* Floating Elements */}
      <FloatingElement className="absolute top-32 right-10 md:right-32 text-6xl md:text-8xl opacity-20 pointer-events-none">
        🧤
      </FloatingElement>
      <FloatingElement className="absolute bottom-32 left-10 md:left-32 text-6xl md:text-8xl opacity-20 pointer-events-none">
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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.span>
          <span>{t.hero.badge}</span>
          <Sparkles className="w-4 h-4 text-amber-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl mb-6"
        >
          <span className="text-white">{t.hero.title}</span>
          <br />
          <span className="gradient-text">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#register"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-lg overflow-hidden"
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
            className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:border-green-500/50 hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: Users, value: '150+', label: t.hero.stats.students, color: 'green', iconColor: 'text-green-400' },
            { icon: Award, value: '15+', label: t.hero.stats.years, color: 'amber', iconColor: 'text-amber-400' },
            { icon: TrendingUp, value: '95%', label: t.hero.stats.success, color: 'emerald', iconColor: 'text-emerald-400' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-2xl p-5 md:p-6 card-hover"
              whileHover={{ y: -5 }}
            >
              <div className={`flex items-center justify-center gap-2 ${stat.iconColor} mb-2`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
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
        <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2">
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
