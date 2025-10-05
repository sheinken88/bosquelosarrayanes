'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function GallerySection() {
  const t = useTranslations('gallery');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - replace with actual images
  const galleryImages = [
    { src: '/images/gallery-1.jpg', alt: 'Arrayanes trees with cinnamon bark' },
    { src: '/images/gallery-2.jpg', alt: 'Catamaran on Lake Nahuel Huapi' },
    { src: '/images/gallery-3.jpg', alt: 'Forest path through Arrayanes' },
    { src: '/images/gallery-4.jpg', alt: 'Mountain views from the lake' },
    { src: '/images/gallery-5.jpg', alt: 'Close-up of Arrayanes bark' },
    { src: '/images/gallery-6.jpg', alt: 'Sunset over the forest' },
  ];

  return (
    <section id="gallery" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[var(--forest-dark)] mb-4">
            {t('title')}
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--earth-amber)] font-light italic">
            {t('subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[var(--forest-dark)]/0 group-hover:bg-[var(--forest-dark)]/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--earth-gold)] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          {/* Navigation arrows */}
          <button
            className="absolute left-4 text-white text-4xl hover:text-[var(--earth-gold)] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 text-white text-4xl hover:text-[var(--earth-gold)] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % galleryImages.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
