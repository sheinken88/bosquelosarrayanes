"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ForestSection() {
  const t = useTranslations("forest");

  return (
    <section id="forest" className="relative overflow-hidden">
      {/* Full-bleed Hero Section with Video Background */}
      <div className="relative h-[70vh] min-h-[600px] w-full">
        {/* Background Image/Video */}
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Forest Conservation"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-1" />
          </div>
        </div>

        {/* Text Overlay - Lower Left Quadrant */}
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 text-white max-w-2xl">
          <div className="text-sm sm:text-base font-sans text-[var(--earth-gold)] uppercase tracking-wider mb-2">
            {t("conservation.eyebrow")}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            {t("conservation.title")}
          </h2>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="bg-[var(--near-black)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Community Guardians Card */}
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
