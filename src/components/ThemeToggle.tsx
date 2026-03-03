'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
    );
  }

  const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'system', icon: Monitor, label: 'System' },
  ];

  return (
    <motion.div 
      className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 dark:border-white/10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;
        
        return (
          <motion.button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className="relative p-2 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${t.label} theme`}
          >
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
            )}
            <Icon className={`w-4 h-4 relative z-10 transition-colors ${
              isActive ? 'text-white' : 'text-gray-400 hover:text-gray-300'
            }`} />
          </motion.button>
        );
      })}
    </motion.div>
  );
}
