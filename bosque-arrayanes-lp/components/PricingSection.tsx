'use client';

import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('pricing');

  const pricingTiers = [
    {
      title: t('general'),
      price: '$$$',
      icon: '👤',
    },
    {
      title: t('children'),
      price: '$$',
      icon: '👶',
    },
    {
      title: t('seniors'),
      price: '$$',
      icon: '👴',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[var(--forest-dark)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="text-[300px]">🌲</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
            {t('title')}
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--earth-gold)] font-light italic">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 border border-white/20"
            >
              <div className="text-6xl mb-4 text-center">{tier.icon}</div>
              <h3 className="text-2xl font-serif text-center mb-4">
                {tier.title}
              </h3>
              <div className="text-4xl font-bold text-center mb-6 text-[var(--earth-gold)]">
                {tier.price}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Infants */}
          <div className="bg-[var(--earth-gold)] text-[var(--forest-dark)] p-6 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">🍼</span>
              <div>
                <h4 className="font-bold text-lg">{t('infants')}</h4>
                <p className="text-sm">{t('infantsPrice')}</p>
              </div>
            </div>
          </div>

          {/* Groups */}
          <div className="bg-[var(--earth-amber)] text-[var(--forest-dark)] p-6 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">👥</span>
              <div>
                <h4 className="font-bold text-lg">{t('groups')}</h4>
                <p className="text-sm">{t('groupsInfo')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center mb-8">
          <p className="text-white/80 italic">{t('note')}</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[var(--earth-gold)] hover:bg-[var(--earth-amber)] text-[var(--forest-dark)] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('bookNow')}
          </a>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>
    </section>
  );
}
