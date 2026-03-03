'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Ahmed M.',
      role: 'Parent',
      text: 'My son has improved tremendously under the coach\'s guidance. His confidence and skills have grown so much in just 6 months!',
      rating: 5,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Youssef K.',
      role: 'Student, 16',
      text: 'The best goalkeeper training I\'ve ever had. The coach understands exactly what I need to improve and pushes me to be better every session.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Fatima B.',
      role: 'Parent',
      text: 'Professional, patient, and truly passionate about developing young talent. My daughter loves every training session!',
      rating: 5,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Omar T.',
      role: 'Student, 14',
      text: 'I went from being a bench player to the starting goalkeeper for my team. The training here made all the difference!',
      rating: 5,
      gradient: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent"></div>
      
      {/* Decorative Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare className="w-4 h-4" />
              {t.testimonials.badge}
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="heading-lg">
              <span className="gradient-text">{t.testimonials.title}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {testimonials.map((testimonial, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm group overflow-hidden"
                whileHover={{ 
                  y: -8,
                  borderColor: 'rgba(34, 197, 94, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-amber-500/0 group-hover:from-green-500/5 group-hover:to-amber-500/5 transition-all duration-500" />
                
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-green-500/10 group-hover:text-green-500/20 transition-colors" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-5 text-sm leading-relaxed relative z-10">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div 
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-lg font-semibold shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {testimonial.name[0]}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
