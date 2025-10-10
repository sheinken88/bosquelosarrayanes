'use client';

import { useTranslations } from 'next-intl';

export default function TourSection() {
  const t = useTranslations('tour');

  const includedItems = [0, 1, 2, 3].map((i) => t(`includedItems.${i}`));

  return (
    <section id="tour" className="py-24 bg-[var(--cream)] relative overflow-hidden">
      {/* Subtle misty atmosphere effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--sage-mist)]/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[var(--forest-dark)] mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-2xl sm:text-3xl text-[var(--charcoal)]/70 font-light max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Tour Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Duration */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-6xl mb-6">⏱️</div>
            <h3 className="text-2xl font-serif text-[var(--forest-dark)] mb-3 font-bold">
              {t('duration')}
            </h3>
            <p className="text-lg text-[var(--charcoal)]">{t('durationValue')}</p>
          </div>

          {/* Departure */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-6xl mb-6">🚢</div>
            <h3 className="text-2xl font-serif text-[var(--forest-dark)] mb-3 font-bold">
              {t('departure')}
            </h3>
            <p className="text-lg text-[var(--charcoal)]">{t('departureValue')}</p>
          </div>

          {/* Schedule */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="text-6xl mb-6">📅</div>
            <h3 className="text-2xl font-serif text-[var(--forest-dark)] mb-3 font-bold">
              {t('schedule')}
            </h3>
            <p className="text-lg text-[var(--charcoal)]">{t('scheduleInfo')}</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-br from-[var(--forest-dark)] to-[var(--forest-medium)] p-10 md:p-16 rounded-3xl text-white shadow-2xl">
          <h3 className="text-4xl sm:text-5xl font-serif mb-12 text-center font-bold">
            {t('included')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-[var(--earth-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
