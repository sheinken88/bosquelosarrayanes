"use client";

import Image from "next/image";

interface StatsCardProps {
  number: string;
  label: string;
  subtext?: string;
  imageSrc?: string;
  className?: string;
}

export default function StatsCard({
  number,
  label,
  subtext,
  imageSrc,
  className = "",
}: StatsCardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-white/95 to-[var(--sage-light)]/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl ${className}`}
    >
      <div className="flex items-stretch">
        {/* Stats Content */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="text-5xl sm:text-6xl font-bold text-[var(--forest-dark)] mb-2 leading-none">
            {number}
          </div>
          <div className="text-lg font-semibold text-[var(--charcoal)] uppercase tracking-wide">
            {label}
          </div>
          {subtext && (
            <div className="text-sm text-[var(--charcoal)]/70 mt-1">
              {subtext}
            </div>
          )}
        </div>

        {/* Optional Image */}
        {imageSrc && (
          <div className="relative w-32 sm:w-40">
            <Image
              src={imageSrc}
              alt={label}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        )}
      </div>
    </div>
  );
}
