"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ForestSection() {
  const t = useTranslations("forest");

  return (
    <section
      id="forest"
      className="py-24 bg-[var(--off-white)] relative overflow-hidden"
    >
      {/* Subtle misty atmosphere effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--sage-mist)]/5 via-transparent to-[var(--sage-mist)]/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[var(--forest-dark)] mb-6 leading-tight max-w-4xl">
            {t("title")}
          </h2>
          <p className="text-2xl sm:text-3xl text-[var(--charcoal)]/70 font-light max-w-3xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Modern Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Large Featured Card - Spans 2 columns */}
          <div className="lg:col-span-2 lg:row-span-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://blogdeviajes.com.ar/wp-content/uploads/arrayanes3.jpg"
              alt="Bosque de Arrayanes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--near-black)]/90 via-[var(--near-black)]/40 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="inline-block bg-[var(--earth-gold)] text-[var(--forest-dark)] px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
                {t("featured") || "Featured"}
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                {t("feature1") || "Ancient Arrayán Forest"}
              </h3>
              <p className="text-lg text-white/90 max-w-2xl">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Smaller Card 1 */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://www.tangol.com/blog/Fotos/Galeria/bariloche_0_202011121114220.PNG"
              alt="Conservation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/90 via-[var(--forest-dark)]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-3xl mb-2">🌳</div>
              <h4 className="text-xl font-serif font-bold">
                {t("feature2") || "Biodiversity"}
              </h4>
            </div>
          </div>

          {/* Smaller Card 2 */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl group bg-[var(--forest-dark)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--forest-medium)] to-[var(--forest-dark)]" />
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">
              <div className="text-5xl mb-4">🏛️</div>
              <h4 className="text-xl font-serif font-bold mb-2">
                {t("feature3") || "Cultural Heritage"}
              </h4>
              <p className="text-sm text-white/80">
                {t("feature3Desc") || "Protected UNESCO site"}
              </p>
            </div>
          </div>

          {/* Video/Interactive Card */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://blogdeviajes.com.ar/wp-content/uploads/arrayanes3.jpg"
              alt="Forest Conservation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-[var(--near-black)]/50 group-hover:bg-[var(--near-black)]/40 transition-colors duration-300" />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[var(--forest-dark)] border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-lg font-serif font-bold">
                {t("videoTitle") || "Forest Conservation"}
              </h4>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--earth-gold)] to-[var(--earth-amber)]">
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-[var(--forest-dark)]">
              <div className="text-6xl font-bold mb-2">12km</div>
              <h4 className="text-xl font-serif font-bold uppercase tracking-wide">
                {t("trailLength") || "Nature Trail"}
              </h4>
              <p className="text-sm mt-2">
                {t("trailDesc") || "Through ancient forest"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
