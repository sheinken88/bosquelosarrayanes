'use client';

import { useTranslations } from 'next-intl';

export default function TourSection() {
  const t = useTranslations('tour');

  const includedItems = [0, 1, 2, 3].map((i) => t(`includedItems.${i}`));

  return (
    <section id="tour" className="py-20 bg-[var(--cream)]">
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

        {/* Tour Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Duration */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl mb-4">⏱️</div>
            <h3 className="text-xl font-serif text-[var(--forest-dark)] mb-2">
              {t('duration')}
            </h3>
            <p className="text-[var(--charcoal)]">{t('durationValue')}</p>
          </div>

          {/* Departure */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl mb-4">🚢</div>
            <h3 className="text-xl font-serif text-[var(--forest-dark)] mb-2">
              {t('departure')}
            </h3>
            <p className="text-[var(--charcoal)]">{t('departureValue')}</p>
          </div>

          {/* Schedule */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-serif text-[var(--forest-dark)] mb-2">
              {t('schedule')}
            </h3>
            <p className="text-[var(--charcoal)]">{t('scheduleInfo')}</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-br from-[var(--forest-dark)] to-[var(--forest-medium)] p-8 md:p-12 rounded-2xl text-white">
          <h3 className="text-3xl font-serif mb-8 text-center">
            {t('included')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--earth-gold)]"
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
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
