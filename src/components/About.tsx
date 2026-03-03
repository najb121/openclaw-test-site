'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Award, BookOpen, Heart, Target, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function About() {
  const { t, dir } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.about.features.experience,
      desc: t.about.features.experienceDesc,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: BookOpen,
      title: t.about.features.methodology,
      desc: t.about.features.methodologyDesc,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: Heart,
      title: t.about.features.passion,
      desc: t.about.features.passionDesc,
      gradient: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${dir === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Side */}
          <ScrollReveal direction="left" className={`relative ${dir === 'rtl' ? 'lg:col-start-2' : ''}`}>
            <div className="relative">
              {/* Main Image Container */}
              <motion.div 
                className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-600/10 to-amber-500/20"></div>
                
                {/* Mesh Pattern */}
                <div className="absolute inset-0 mesh-gradient opacity-50"></div>
                
                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-[180px] md:text-[220px] opacity-30"
                  >
                    🧤
                  </motion.div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 border border-green-500/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border border-amber-500/30 rounded-xl rotate-12"></div>
              </motion.div>
              
              {/* Experience Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="glass-card rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30"
                      animate={{ boxShadow: ['0 10px 30px rgba(34, 197, 94, 0.3)', '0 10px 40px rgba(34, 197, 94, 0.5)', '0 10px 30px rgba(34, 197, 94, 0.3)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-2xl">⭐</span>
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Stats Badge */}
              <motion.div 
                className="absolute -top-4 -left-4 md:top-8 md:left-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="glass-card rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-white">Licensed Coach</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div className={dir === 'rtl' ? 'lg:col-start-1 lg:row-start-1' : ''}>
            <ScrollReveal>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-4 h-4" />
                {t.about.badge}
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="heading-lg mb-6">
                <span className="gradient-text">{t.about.title}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-gray-400 mb-10">
                {t.about.description}
              </p>
            </ScrollReveal>

            {/* Features */}
            <StaggerContainer className="space-y-4" staggerDelay={0.15}>
              {features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <motion.div 
                    className={`group flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                    whileHover={{ x: dir === 'rtl' ? -8 : 8 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className={dir === 'rtl' ? 'text-end' : ''}>
                      <h3 className="font-semibold text-white mb-1 text-lg">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
