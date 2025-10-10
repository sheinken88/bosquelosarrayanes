"use client";

import { useTranslations } from "next-intl";

export default function VideoSection() {
  const t = useTranslations("video");

  return (
    <section id="video" className="py-24 bg-[var(--forest-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-2xl sm:text-3xl text-[var(--earth-gold)] font-light max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Video Container - Full Width */}
        <div className="w-full">
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/c5BHDquvKIk"
              title="Bosque de Arrayanes Tour Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
