"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import FloralOrnament from "@/components/ornaments/FloralOrnament";
import { weddingData } from "@/data/wedding";

interface OpeningCoverProps {
  onOpen: () => void;
}

export default function OpeningCover({ onOpen }: OpeningCoverProps) {
  const handleOpen = () => {
    onOpen();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-darkwine">
      {/* Velvet texture overlay */}
      <div className="absolute inset-0 velvet-texture opacity-40 pointer-events-none" />

      {/* Curtain drapery left */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-darkwine via-wine/80 to-transparent pointer-events-none" />
      {/* Curtain drapery right */}
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-darkwine via-wine/80 to-transparent pointer-events-none" />

      {/* Floral left */}
      <div className="absolute left-0 bottom-0 pointer-events-none animate-float-slow">
        <FloralOrnament size={180} className="opacity-70" />
      </div>
      {/* Floral right */}
      <div className="absolute right-0 bottom-0 pointer-events-none animate-float-slow-reverse">
        <FloralOrnament size={180} flip className="opacity-70" />
      </div>

      {/* Top border ornament */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-sm mx-auto">
        {/* Top ornament */}
        <div className="mb-5">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 5 L35 15 L45 15 L37 22 L40 32 L30 25 L20 32 L23 22 L15 15 L25 15 Z" fill="#C9A45C" opacity="0.9" />
            <line x1="0" y1="38" x2="60" y2="38" stroke="#C9A45C" strokeWidth="0.8" opacity="0.5" />
            <line x1="8" y1="35" x2="52" y2="35" stroke="#C9A45C" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>

        {/* Undangan label */}
        <p className="font-montserrat text-[10px] tracking-[0.4em] text-gold uppercase mb-1 opacity-90">
          UNDANGAN PERNIKAHAN
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-gold opacity-50" />
          <p className="font-cormorant text-xs tracking-[0.25em] text-gold/80 italic">
            — UNDANGAN PERNIKAHAN —
          </p>
          <div className="h-px w-10 bg-gold opacity-50" />
        </div>

        {/* Couple photo */}
        <div className="relative w-48 h-56 mb-6 mx-auto">
          <div className="absolute inset-0 border border-gold/40 rounded-sm" />
          <div className="absolute inset-1 border border-gold/20 rounded-sm" />
          <Image
            src={weddingData.couplePhoto}
            alt="Sigit & Wike"
            fill
            sizes="(max-width: 768px) 192px, 224px"
            className="object-cover object-top rounded-sm"
            priority
          />
          {/* Gold overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-darkwine/60 via-transparent to-darkwine/20 rounded-sm" />
        </div>

        {/* Names */}
        <h1 className="font-cormorant text-5xl md:text-6xl text-cream font-light leading-tight mb-1">
          {weddingData.groom.nickname}
        </h1>
        <div className="font-cormorant text-3xl text-gold italic mb-1">&</div>
        <h1 className="font-cormorant text-5xl md:text-6xl text-cream font-light leading-tight mb-6">
          {weddingData.bride.nickname}
        </h1>

        {/* Invitation text */}
        <p className="font-montserrat text-[10px] leading-relaxed text-cream/70 text-center mb-8 tracking-wide">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
        </p>

        {/* Open button */}
        <button
          id="btn-open-undangan"
          onClick={handleOpen}
          className="group relative px-8 py-3 border border-gold/60 text-gold font-montserrat text-xs tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:border-gold/80 hover:shadow-[0_0_0_1px_rgba(201,164,92,0.18),0_0_16px_rgba(201,164,92,0.12)]"
        >
          <span className="absolute inset-0 bg-gold/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            BUKA UNDANGAN
          </span>
        </button>
      </div>
    </div>
  );
}
