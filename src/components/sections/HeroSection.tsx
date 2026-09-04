"use client";

import Image from "next/image";
import FloralOrnament from "@/components/ornaments/FloralOrnament";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { weddingData } from "@/data/wedding";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Batik background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <BatikPattern />
      </div>

      {/* Curtain effect on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-darkwine to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-darkwine to-transparent pointer-events-none" />

      {/* Floral left */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 pointer-events-none animate-float-slow">
        <FloralOrnament size={220} className="opacity-60" />
      </div>
      {/* Floral right */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 pointer-events-none animate-float-slow-reverse">
        <FloralOrnament size={220} flip className="opacity-60" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 text-center px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* THE WEDDING OF label */}
        <p className="font-montserrat text-[9px] md:text-[11px] tracking-[0.5em] text-gold/80 uppercase mb-8">
          THE WEDDING OF
        </p>

        {/* Top ornament */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold opacity-60" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5Z" fill="#C9A45C" opacity="0.8" />
          </svg>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold opacity-60" />
        </div>

        {/* Names */}
        <h1 className="font-cormorant text-7xl md:text-9xl text-cream font-extralight tracking-wide leading-none mb-2">
          {weddingData.groom.nickname}
        </h1>
        <p className="font-cormorant text-4xl md:text-5xl text-gold italic font-light mb-2">&amp;</p>
        <h1 className="font-cormorant text-7xl md:text-9xl text-cream font-extralight tracking-wide leading-none mb-10">
          {weddingData.bride.nickname}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-1.5 h-1.5 bg-gold/60 rotate-45" />
          <div className="h-px w-16 bg-gold/40" />
        </div>

        {/* Date */}
        <div className="inline-block border border-gold/30 px-8 py-3 relative">
          <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold/60" />
          <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/60" />
          <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/60" />
          <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold/60" />
          <p className="font-montserrat text-xs md:text-sm tracking-[0.2em] text-cream/80 uppercase">
            {weddingData.event.dateDisplay}
          </p>
        </div>

        {/* Couple photo */}
        <div className="mt-12 relative w-64 h-80 md:w-80 md:h-96 mx-auto">
          <div className="absolute inset-0 border border-gold/30 rounded-sm" />
          <Image
            src={weddingData.couplePhoto}
            alt={`${weddingData.groom.nickname} & ${weddingData.bride.nickname}`}
            fill
            className="object-cover object-top rounded-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkwine/50 via-transparent to-transparent rounded-sm" />
        </div>
      </div>
    </section>
  );
}
