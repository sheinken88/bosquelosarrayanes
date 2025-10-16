"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import StatsCard from "./StatsCard";

export default function CatamaranSection() {
  const t = useTranslations("catamaran");

  const features = [
    { key: "capacity", icon: "👥", color: "from-blue-500 to-blue-600" },
    { key: "comfort", icon: "🛋️", color: "from-purple-500 to-purple-600" },
    { key: "safety", icon: "🛡️", color: "from-green-500 to-green-600" },
    { key: "crew", icon: "⚓", color: "from-orange-500 to-orange-600" },
  ];

  return (
    <section
      id="catamaran"
      className="py-24 bg-[var(--forest-dark)] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 leading-tight max-w-4xl">
            {t("title")}
          </h2>
          <p className="text-2xl sm:text-3xl text-[var(--earth-gold)] font-light max-w-3xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Main Content Area with Layered Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Large Image Card with Overlay */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/catamaran.jpg"
                alt="Catamarán Futaleufú"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--near-black)]/90 via-[var(--near-black)]/30 to-transparent" />
              {/* Floating text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xl text-white/90 leading-relaxed">
                  {t("description")}
                </p>
              </div>
            </div>

            {/* Overlapping Stats Card */}
            <div className="absolute -bottom-8 -right-8 hidden lg:block z-10">
              <StatsCard
                number="100+"
                label={t("stats.passengers") || "Passengers"}
                subtext={t("stats.perYear") || "Per Year"}
                className="w-64 shadow-2xl"
              />
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                {/* Content */}
                <div className="relative p-6 flex items-center space-x-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">
                      {t(feature.key)}
                    </h4>
                  </div>
                  {/* Hover arrow */}
                  <div className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stats Card */}
        <div className="lg:hidden mb-8">
          <StatsCard
            number="100+"
            label={t("stats.passengers") || "Passengers"}
            subtext={t("stats.perYear") || "Per Year"}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Bottom Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="relative h-40 rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src={
                  idx === 1
                    ? "/images/catamaran.jpg"
                    : "https://blogdeviajes.com.ar/wp-content/uploads/arrayanes3.jpg"
                }
                alt={`Gallery ${idx}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[var(--forest-dark)]/30 group-hover:bg-[var(--forest-dark)]/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
