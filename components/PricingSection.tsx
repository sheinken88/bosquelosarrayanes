"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import StatsCard from "./StatsCard";

export default function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section
      id="pricing"
      className="py-24 bg-[var(--forest-dark)] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="text-[400px]">🌲</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 leading-tight max-w-4xl">
            {t("title")}
          </h2>
          <p className="text-2xl sm:text-3xl text-[var(--earth-gold)] font-light max-w-3xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Modern Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Large Featured Pricing Card - General */}
          <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://blogdeviajes.com.ar/wp-content/uploads/arrayanes3.jpg"
              alt="Bosque de Arrayanes Tour"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--near-black)]/95 via-[var(--near-black)]/60 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <div className="inline-block bg-[var(--earth-gold)] text-[var(--forest-dark)] px-4 py-2 rounded-full text-sm font-bold uppercase mb-6 w-fit">
                {t("popular") || "Most Popular"}
              </div>
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="text-6xl mb-4">👤</div>
                  <h3 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
                    {t("general")}
                  </h3>
                  <p className="text-lg text-white/80 mb-4">
                    {t("generalDesc") || "Full experience tour for adults"}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-bold text-[var(--earth-gold)]">
                    $$$
                  </div>
                  <p className="text-sm text-white/70 mt-2">
                    {t("perPerson") || "Per Person"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Children Pricing Card */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800" />
            <Image
              src="https://www.tangol.com/blog/Fotos/Galeria/bariloche_0_202011121114220.PNG"
              alt="Children Tour"
              fill
              className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
              <div className="text-6xl mb-4">👶</div>
              <h3 className="text-2xl font-serif font-bold mb-3">
                {t("children")}
              </h3>
              <div className="text-5xl font-bold text-[var(--earth-gold)]">
                $$
              </div>
              <p className="text-sm mt-2 text-white/80">
                {t("childrenDesc") || "Ages 3-12"}
              </p>
            </div>
          </div>

          {/* Seniors Pricing Card */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
            <Image
              src="https://blogdeviajes.com.ar/wp-content/uploads/arrayanes3.jpg"
              alt="Seniors Tour"
              fill
              className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
              <div className="text-6xl mb-4">👴</div>
              <h3 className="text-2xl font-serif font-bold mb-3">
                {t("seniors")}
              </h3>
              <div className="text-5xl font-bold text-[var(--earth-gold)]">
                $$
              </div>
              <p className="text-sm mt-2 text-white/80">
                {t("seniorsDesc") || "65+ years"}
              </p>
            </div>
          </div>

          {/* Infants Card */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--earth-gold)] to-[var(--earth-amber)]">
            <div className="relative h-full flex items-center p-8 text-[var(--forest-dark)]">
              <div className="text-6xl mr-6">🍼</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">{t("infants")}</h4>
                <p className="text-lg font-semibold">{t("infantsPrice")}</p>
                <p className="text-sm mt-1 opacity-80">
                  {t("infantsDesc") || "Under 3 years"}
                </p>
              </div>
            </div>
          </div>

          {/* Groups Card */}
          <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--earth-amber)] to-orange-600">
            <div className="relative h-full flex items-center p-8 text-white">
              <div className="text-6xl mr-6">👥</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">{t("groups")}</h4>
                <p className="text-lg font-semibold">{t("groupsInfo")}</p>
                <p className="text-sm mt-1 opacity-90">
                  {t("groupsDesc") || "10+ people"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl mb-12 shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-6 text-center">
            {t("included") || "What's Included"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚢", text: t("includeItem1") || "Catamaran Transport" },
              { icon: "🎫", text: t("includeItem2") || "Park Entrance" },
              { icon: "👨‍✈️", text: t("includeItem3") || "Expert Guide" },
              { icon: "📸", text: t("includeItem4") || "Photo Opportunities" },
              { icon: "🌳", text: t("includeItem5") || "Forest Walk" },
              { icon: "☕", text: t("includeItem6") || "Refreshments" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="text-3xl">{item.icon}</div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center mb-12">
          <p className="text-lg text-white/80 italic">{t("note")}</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[var(--earth-gold)] hover:bg-[var(--earth-sunset)] text-[var(--forest-dark)] font-bold px-12 py-5 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl uppercase tracking-wide"
          >
            {t("bookNow")}
          </a>
        </div>
      </div>
    </section>
  );
}
