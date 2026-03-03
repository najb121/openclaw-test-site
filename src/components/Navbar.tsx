'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#programs', label: t.nav.programs },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/90 dark:bg-slate-950/90 bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/20 dark:shadow-black/20 border-b border-white/5 dark:border-white/5 border-slate-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 md:h-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 relative overflow-hidden"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-xl md:text-2xl relative z-10">🧤</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <span className="text-lg md:text-xl font-bold gradient-text hidden sm:block">Goalkeeper Pro</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 dark:text-gray-300 text-slate-600 hover:text-white dark:hover:text-white hover:text-slate-900 transition-colors text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200 transition-all text-sm font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4 text-gray-400 dark:text-gray-400 text-slate-500 group-hover:text-green-400 dark:group-hover:text-green-400 transition-colors" />
              <span className="text-gray-300 dark:text-gray-300 text-slate-600 group-hover:text-white dark:group-hover:text-white group-hover:text-slate-900 transition-colors">{language === 'en' ? 'عربي' : 'EN'}</span>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#register"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-sm font-semibold shadow-lg shadow-green-500/20 text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t.nav.register}
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 dark:text-gray-300 text-slate-600 hover:text-white dark:hover:text-white hover:text-slate-900 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-white/10 dark:border-white/10 border-slate-200">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-4 py-3 text-gray-300 dark:text-gray-300 text-slate-600 hover:text-white dark:hover:text-white hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100 rounded-xl transition-all"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#register"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="mx-4 mt-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-sm font-semibold text-center shadow-lg shadow-green-500/20 text-white"
                  >
                    {t.nav.register}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
