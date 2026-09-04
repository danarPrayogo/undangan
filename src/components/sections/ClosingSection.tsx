"use client";

import FloralOrnament from "@/components/ornaments/FloralOrnament";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { weddingData } from "@/data/wedding";

export default function ClosingSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-8 overflow-hidden">
      {/* Batik background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <BatikPattern />
      </div>

      {/* Curtain sides */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-darkwine to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-darkwine to-transparent pointer-events-none" />

      {/* Floral ornaments */}
      <div className="absolute left-0 bottom-0 pointer-events-none animate-float-slow">
        <FloralOrnament size={180} className="opacity-60" />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none animate-float-slow-reverse">
        <FloralOrnament size={180} flip className="opacity-60" />
      </div>

      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div
        ref={ref}
        className={`relative z-10 text-center max-w-sm mx-auto transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Top ornament */}
        <div className="mb-8">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 5 L45 18 L58 18 L47 27 L51 40 L40 31 L29 40 L33 27 L22 18 L35 18 Z" fill="#C9A45C" opacity="0.7" />
            <line x1="0" y1="48" x2="80" y2="48" stroke="#C9A45C" strokeWidth="0.8" opacity="0.4" />
            <line x1="10" y1="45" x2="70" y2="45" stroke="#C9A45C" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

        {/* Closing text */}
        <p className="font-cormorant text-lg md:text-xl text-cream/80 italic leading-relaxed mb-8">
          &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.&rdquo;
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-1.5 h-1.5 bg-gold/60 rotate-45" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Thank you */}
        <p className="font-montserrat text-[10px] tracking-[0.4em] text-gold/70 uppercase mb-4">
          Dengan Penuh Kasih
        </p>
        <p className="font-montserrat text-xs tracking-[0.3em] text-cream/80 mb-6">
          Terima Kasih
        </p>

        {/* Names */}
        <h2 className="font-cormorant text-5xl md:text-6xl text-cream font-light tracking-wide mb-2">
          {weddingData.groom.nickname}
        </h2>
        <p className="font-cormorant text-2xl text-gold italic mb-2">&</p>
        <h2 className="font-cormorant text-5xl md:text-6xl text-cream font-light tracking-wide mb-8">
          {weddingData.bride.nickname}
        </h2>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A45C" opacity="0.6">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.498 3.498 1 6.191 1c1.928 0 3.736 1.031 4.809 2.676C12.072 2.031 13.88 1 15.808 1 18.502 1 21 3.498 21 7.191c0 4.105-5.369 8.863-11 14.402z" />
          </svg>
        </div>

        {/* Bottom note */}
        <p className="font-montserrat text-[9px] tracking-[0.3em] text-cream/30 mt-8 uppercase">
          {weddingData.event.dateDisplay}
        </p>
      </div>
    </section>
  );
}
