'use client';

import { useTranslations } from 'next-intl';

export default function VideoSection() {
  const t = useTranslations('video');

  return (
    <section id="video" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[var(--forest-dark)] mb-4">
            {t('title')}
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--earth-amber)] font-light italic">
            {t('subtitle')}
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/c5BHDquvKIk"
              title="Bosque de Arrayanes Tour Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="relative mt-12">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="var(--forest-dark)"
          />
        </svg>
      </div>
    </section>
  );
}
