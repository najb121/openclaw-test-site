'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#programs', label: t.nav.programs },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20"
              whileHover={{ rotate: [0, -5, 5, 0] }}
            >
              <span className="text-xl">🧤</span>
            </motion.div>
            <span className="text-xl font-bold gradient-text">Goalkeeper Pro</span>
          </motion.a>

          {/* Copyright */}
          <motion.div 
            className="text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>© {currentYear} Goalkeeper Pro. {t.footer.rights}</p>
            <p className="mt-2 flex items-center justify-center gap-1.5">
              {t.footer.made}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-rose-500 fill-current" />
              </motion.span>
            </p>
          </motion.div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            {links.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ color: '#fff', y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
