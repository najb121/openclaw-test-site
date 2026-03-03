'use client';

import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Testimonials from '@/components/Testimonials';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-slate-950 dark:bg-slate-950 bg-white flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            scale: { duration: 1, repeat: Infinity },
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' }
          }}
          className="text-6xl mb-4"
        >
          🧤
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full max-w-[200px] mx-auto"
        />
      </div>
    </motion.div>
  );
}

function HomeContent() {
  const { dir } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <motion.div 
        dir={dir} 
        className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-white dark:text-white text-slate-900 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Noise Overlay - subtle in light mode */}
        <div className="fixed inset-0 noise-overlay pointer-events-none z-50 opacity-100 dark:opacity-100 opacity-30"></div>
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Testimonials />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
