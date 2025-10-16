"use client";

import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  // Sample testimonials - replace with real ones
  const testimonials = [
    {
      name: "María González",
      location: "Buenos Aires, Argentina",
      rating: 5,
      text: "Una experiencia inolvidable. El bosque es mágico y el catamarán muy cómodo. Totalmente recomendable.",
      avatar: "👩",
    },
    {
      name: "John Smith",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely stunning! The forest is unique and the boat tour was perfect. Professional crew and beautiful scenery.",
      avatar: "👨",
    },
    {
      name: "Ana Silva",
      location: "São Paulo, Brasil",
      rating: 5,
      text: "Maravilhoso! A floresta é única no mundo e vale muito a pena conhecer. O passeio de catamarã é muito agradável.",
      avatar: "👩",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-[var(--forest-dark)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
            {t("title")}
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--earth-gold)] font-light italic">
            {t("subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--earth-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 border-t border-white/20 pt-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TripAdvisor Badge Placeholder */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20">
            <p className="text-lg mb-2">⭐⭐⭐⭐⭐</p>
            <p className="text-white/80">Rated 5.0 on TripAdvisor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
