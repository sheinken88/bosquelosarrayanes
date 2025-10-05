'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CatamaranSection() {
  const t = useTranslations('catamaran');

  const features = [
    { key: 'capacity', icon: '👥' },
    { key: 'comfort', icon: '🛋️' },
    { key: 'safety', icon: '🛡️' },
    { key: 'crew', icon: '⚓' },
  ];

  return (
    <section id="catamaran" className="py-20 bg-[var(--forest-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
            {t('title')}
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--earth-gold)] font-light italic">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Content Grid - Reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Description - First on desktop */}
          <div className="order-2 lg:order-1">
            <p className="text-lg leading-relaxed mb-8 text-white/90">
              {t('description')}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.key}
                  className="bg-white/10 backdrop-blur-sm p-5 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-4"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <p className="text-white font-medium flex-1">
                    {t(feature.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Second on desktop */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group order-1 lg:order-2">
            <Image
              src="/images/catamaran.jpg"
              alt="Catamarán Futaleufú"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="var(--cream)"
          />
        </svg>
      </div>
    </section>
  );
}
