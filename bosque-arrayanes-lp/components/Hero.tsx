'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-forest.jpg"
          alt="Bosque de Arrayanes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-dark)]/60 via-[var(--forest-dark)]/40 to-[var(--forest-dark)]/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight animate-fade-in">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            {t('subtitle')}
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block bg-[var(--earth-gold)] hover:bg-[var(--earth-amber)] text-[var(--forest-dark)] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-delay-2"
          >
            {t('cta')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Organic wave transition to next section */}
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s backwards;
        }
      `}</style>
    </section>
  );
}
