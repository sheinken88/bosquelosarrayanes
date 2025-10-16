"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function VideoSection() {
  const t = useTranslations("video");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="video" className="py-24 bg-[var(--forest-dark)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: 0 }}>
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
            className="relative overflow-hidden shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            {!isPlaying && (
              <>
                {/* Thumbnail */}
                <img
                  src="https://img.youtube.com/vi/c5BHDquvKIk/maxresdefault.jpg"
                  alt="Video thumbnail"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Custom Play Button */}
                <button
                  onClick={handlePlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           w-20 h-20 bg-white/90 hover:bg-white rounded-full 
                           flex items-center justify-center transition-all duration-300
                           hover:scale-110 shadow-2xl group"
                  aria-label="Play video"
                >
                  {/* Play Icon */}
                  <svg
                    className="w-8 h-8 text-[var(--forest-dark)] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}

            {isPlaying && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/c5BHDquvKIk?autoplay=1&rel=0&modestbranding=1"
                title="Bosque de Arrayanes Tour Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
