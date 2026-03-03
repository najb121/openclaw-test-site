'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    alt: 'Goalkeeper training session',
  },
  {
    src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
    alt: 'Soccer training',
  },
  {
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    alt: 'Goalkeeper diving',
  },
  {
    src: 'https://images.unsplash.com/photo-1508098689400-52d30e07d4d2?w=800&q=80',
    alt: 'Soccer field training',
  },
  {
    src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&q=80',
    alt: 'Goalkeeper gloves',
  },
  {
    src: 'https://images.unsplash.com/photo-1551956217-1ef0b3b5d40a?w=800&q=80',
    alt: 'Soccer ball on field',
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            {t.gallery.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.gallery.title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}
