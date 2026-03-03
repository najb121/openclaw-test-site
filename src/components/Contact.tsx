'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function Contact() {
  const { t } = useLanguage();

  const contactCards = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+212 6XX-XXXXXX',
      href: 'tel:+212600000000',
      gradient: 'from-green-500 to-emerald-600',
      hoverColor: 'green',
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: 'coach@example.com',
      href: 'mailto:coach@example.com',
      gradient: 'from-blue-500 to-cyan-600',
      hoverColor: 'blue',
    },
    {
      icon: MapPin,
      title: t.contact.location,
      value: 'Casablanca, Morocco',
      href: null,
      gradient: 'from-amber-500 to-orange-600',
      hoverColor: 'amber',
    },
    {
      icon: Clock,
      title: t.contact.hours,
      value: t.contact.hoursValue,
      href: null,
      gradient: 'from-rose-500 to-pink-600',
      hoverColor: 'rose',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"></div>
      
      {/* Decorative Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-600 dark:text-green-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle className="w-4 h-4" />
              {t.contact.badge}
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">
                {t.contact.title}
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {contactCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="group relative overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {card.href ? (
                  <a href={card.href} className="block">
                    <ContactCardContent card={card} />
                  </a>
                ) : (
                  <div>
                    <ContactCardContent card={card} />
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* WhatsApp CTA */}
        <ScrollReveal delay={0.5}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-green-600 font-semibold text-xl shadow-xl shadow-green-500/30 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle className="w-7 h-7" />
              </motion.div>
              <span>{t.contact.whatsapp}</span>
              <motion.div
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactCardContent({ card }: { card: {
  icon: React.ElementType;
  title: string;
  value: string;
  gradient: string;
}}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 p-6 text-center transition-all duration-300 group-hover:border-slate-300 dark:group-hover:border-white/20 shadow-sm">
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Glow Effect */}
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

      <div className="relative">
        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <card.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{card.title}</h3>
        <p className="text-slate-600 dark:text-gray-400 text-sm">{card.value}</p>
      </div>
    </div>
  );
}
