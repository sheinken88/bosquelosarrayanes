"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function ForestSection() {
  const t = useTranslations("forest");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="forest" className="relative overflow-hidden">
      {/* Full-bleed Hero Section with Video Background */}
      <div className="relative h-[70vh] min-h-[600px] w-full">
        {/* Video Background - Click to Play */}
        <div className="absolute inset-0 w-full h-full">
          {!isPlaying && (
            <>
              {/* Thumbnail Background */}
              <img
                src="https://img.youtube.com/vi/ZcQPZdNYkBI/maxresdefault.jpg"
                alt="Forest Conservation Video Thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Centered Play Button */}
              <button
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full 
                         flex items-center justify-center transition-all duration-300
                         hover:scale-110 shadow-2xl backdrop-blur-sm"
                aria-label="Play video"
              >
                {/* Play Icon */}
                <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-1" />
              </button>
            </>
          )}

          {isPlaying && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ZcQPZdNYkBI?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0"
              title="Forest Conservation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Text Overlay - Lower Left Quadrant */}
        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <div className="text-sm sm:text-base font-sans text-[var(--earth-gold)] uppercase tracking-wider mb-2">
            {t("conservation.eyebrow")}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            {t("conservation.title")}
          </h2>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="bg-[var(--near-black)]">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Community Guardians Card */}
            <div className="relative h-[300px] overflow-hidden group cursor-pointer">
              <Image
                src="/images/forest1.png"
                alt="Community Guardians"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {t("conservation.cards.community.title")}
                </h3>
                <p className="text-sm text-white/90">
                  {t("conservation.cards.community.description")}
                </p>
              </div>
            </div>

            {/* Reforestation Revolution Card - Highlighted */}
            <div className="relative h-[300px] overflow-hidden group cursor-pointer">
              <Image
                src="/images/forest2.png"
                alt="Reforestation Revolution"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2 relative">
                  {t("conservation.cards.reforestation.title")}
                  {/* Golden underline highlight */}
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-[var(--earth-gold)]"></div>
                </h3>
                <p className="text-sm text-white/90">
                  {t("conservation.cards.reforestation.description")}
                </p>
              </div>
            </div>

            {/* The Deforestation Challenge Card */}
            <div className="relative h-[300px] overflow-hidden group cursor-pointer">
              <Image
                src="/images/forest3.png"
                alt="The Deforestation Challenge"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {t("conservation.cards.deforestation.title")}
                </h3>
                <p className="text-sm text-white/90">
                  {t("conservation.cards.deforestation.description")}
                </p>
              </div>
            </div>

            {/* Wildlife Corridors Card */}
            <div className="relative h-[300px] overflow-hidden group cursor-pointer">
              <Image
                src="/images/Forest4.png"
                alt="Wildlife Corridors"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {t("conservation.cards.wildlife.title")}
                </h3>
                <p className="text-sm text-white/90">
                  {t("conservation.cards.wildlife.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
