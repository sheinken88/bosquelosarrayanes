'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ForestSection() {
  const t = useTranslations('forest');

  const features = [
    { key: 'feature1', icon: '🌳' },
    { key: 'feature2', icon: '🎨' },
    { key: 'feature3', icon: '🏛️' },
    { key: 'feature4', icon: '🦋' },
  ];

  return (
    <section id="forest" className="py-20 bg-[var(--off-white)]">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/arrayanes-forest.jpg"
              alt="Bosque de Arrayanes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Description */}
          <div>
            <p className="text-lg text-[var(--charcoal)] leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.key}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[var(--earth-gold)]"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <p className="text-[var(--charcoal)] font-medium">
                    {t(feature.key)}
                  </p>
                </div>
              ))}
            </div>
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
