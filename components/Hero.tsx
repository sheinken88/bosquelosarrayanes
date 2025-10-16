"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://www.tangol.com/blog/Fotos/Galeria/bariloche_0_202011121114220.PNG"
          alt="Bosque de Arrayanes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Light misty forest overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--forest-dark)]/70 via-[var(--forest-dark)]/45 to-[var(--forest-dark)]/60" />
        {/* Subtle misty accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/15 via-[var(--sage-mist)]/12 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] animate-fade-in font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Descubre un Bosque Único en el Mundo a bordo del{" "}
                <span className="text-[var(--earth-gold)] font-medium relative">
                  Catamarán Futaleufú
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--earth-gold)]/30"></div>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed animate-fade-in-delay drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                {t("subtitle")}
              </p>

              {/* CTA Button - More Prominent */}
              <div className="animate-fade-in-delay-2">
                <a
                  href="#contact"
                  className="inline-block bg-[var(--earth-gold)] hover:bg-[var(--earth-sunset)] text-[var(--forest-dark)] font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl uppercase tracking-wide"
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1.2s ease-out 0.4s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1.2s ease-out 0.8s backwards;
        }
      `}</style>
    </section>
  );
}
