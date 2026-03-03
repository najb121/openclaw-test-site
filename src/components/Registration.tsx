'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useState } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, Calendar, Award, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './animations';
import { toast } from 'sonner';

export default function Registration() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    experience: '',
    message: '',
  });

  const validateForm = () => {
    if (!formData.parentName.trim()) {
      toast.error('Parent name is required');
      return false;
    }
    if (!formData.studentName.trim()) {
      toast.error('Student name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!formData.age || parseInt(formData.age) < 6 || parseInt(formData.age) > 25) {
      toast.error('Age must be between 6 and 25');
      return false;
    }
    if (!formData.program) {
      toast.error('Please select a program');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    
    toast.success('🎉 Registration submitted successfully! We\'ll contact you soon.', {
      duration: 5000,
      action: {
        label: 'Dismiss',
        onClick: () => {},
      },
    });
    
    setFormData({
      parentName: '',
      studentName: '',
      email: '',
      phone: '',
      age: '',
      program: '',
      experience: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const formFields = [
    { name: 'parentName', label: t.registration.form.parentName, type: 'text', icon: User, col: 'md:col-span-1' },
    { name: 'studentName', label: t.registration.form.studentName, type: 'text', icon: User, col: 'md:col-span-1' },
    { name: 'email', label: t.registration.form.email, type: 'email', icon: Mail, col: 'md:col-span-1' },
    { name: 'phone', label: t.registration.form.phone, type: 'tel', icon: Phone, col: 'md:col-span-1' },
    { name: 'age', label: t.registration.form.age, type: 'number', icon: Calendar, col: 'md:col-span-1' },
  ];

  return (
    <section id="register" className="py-20 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 dark:bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 dot-pattern opacity-20 dark:opacity-20 opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4" />
              {t.registration.badge}
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">{t.registration.title}</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-gray-600 dark:text-gray-400">
              {t.registration.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Form */}
        <ScrollReveal delay={0.3}>
          <motion.form 
            onSubmit={handleSubmit} 
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Form Background */}
            <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5 border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none"></div>
            <div className="absolute inset-0 backdrop-blur-xl dark:backdrop-blur-xl rounded-3xl"></div>
            
            {/* Form Content */}
            <div className="relative p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Standard Fields */}
                {formFields.map((field, idx) => (
                  <motion.div 
                    key={field.name}
                    className={field.col}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <div className="relative group">
                      <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-green-500 transition-colors" />
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        {...(field.type === 'number' ? { min: '6', max: '25' } : {})}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Program Select */}
                <motion.div 
                  className="md:col-span-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.registration.form.program}
                  </label>
                  <div className="relative group">
                    <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-green-500 transition-colors" />
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-white dark:bg-slate-900">{t.registration.form.program}</option>
                      <option value="beginner" className="bg-white dark:bg-slate-900">{t.registration.form.programBeginner}</option>
                      <option value="intermediate" className="bg-white dark:bg-slate-900">{t.registration.form.programIntermediate}</option>
                      <option value="advanced" className="bg-white dark:bg-slate-900">{t.registration.form.programAdvanced}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Select */}
                <motion.div 
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.registration.form.experience}
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-green-500 transition-colors" />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-white dark:bg-slate-900">{t.registration.form.experience}</option>
                      <option value="none" className="bg-white dark:bg-slate-900">{t.registration.form.experienceNone}</option>
                      <option value="some" className="bg-white dark:bg-slate-900">{t.registration.form.experienceSome}</option>
                      <option value="experienced" className="bg-white dark:bg-slate-900">{t.registration.form.experienceExperienced}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div 
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.registration.form.message}
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-green-500 transition-colors" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t.registration.form.messagePlaceholder}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-white"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-3"
                      >
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.registration.form.submitting}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-3"
                      >
                        <Send className="w-5 h-5" />
                        {t.registration.form.submit}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
          </motion.form>
        </ScrollReveal>
      </div>
    </section>
  );
}
