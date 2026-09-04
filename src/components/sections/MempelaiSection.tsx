"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

function MempelaiCard({
  name,
  parents,
  photo,
  role,
  delay = 0,
}: {
  name: string;
  parents: string;
  photo: string;
  role: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo frame */}
      <div className="relative w-44 h-56 md:w-52 md:h-64 mb-6">
        {/* Outer gold border */}
        <div className="absolute -inset-1 border border-gold/40 rounded-sm" />
        {/* Inner gold border */}
        <div className="absolute inset-0 border border-gold/20 rounded-sm z-10" />
        {/* Corner accents */}
        <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gold/70 z-20" />
        <span className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gold/70 z-20" />
        <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-gold/70 z-20" />
        <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gold/70 z-20" />
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 176px, 208px"
          className="object-cover object-top rounded-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkwine/40 via-transparent to-transparent rounded-sm z-10" />
      </div>

      {/* Role label */}
      <p className="font-montserrat text-[9px] tracking-[0.35em] text-gold/70 uppercase mb-2">
        {role}
      </p>
      {/* Name */}
      <h3 className="font-cormorant text-3xl md:text-4xl text-cream font-light tracking-wide mb-3">
        {name}
      </h3>
      {/* Divider */}
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px w-8 bg-gold/40" />
        <div className="w-1 h-1 bg-gold/50 rounded-full" />
        <div className="h-px w-8 bg-gold/40" />
      </div>
      {/* Parents */}
      <p className="font-montserrat text-[11px] text-cream/60 leading-relaxed max-w-[200px]">
        {parents}
      </p>
    </div>
  );
}

export default function MempelaiSection() {
  return (
    <section id="mempelai" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <BatikPattern />
      </div>

      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionTitle title="Pasangan Mempelai" subtitle="Bismillahirrahmanirrahim" />

        <div className="grid grid-cols-2 gap-8 md:gap-16 mt-10">
          {/* Bride first on mobile (local convention) */}
          <MempelaiCard
            name={weddingData.bride.name}
            parents={weddingData.bride.parents}
            photo={weddingData.bride.photo}
            role="Mempelai Wanita"
            delay={100}
          />
          <MempelaiCard
            name={weddingData.groom.name}
            parents={weddingData.groom.parents}
            photo={weddingData.groom.photo}
            role="Mempelai Pria"
            delay={300}
          />
        </div>

        {/* Center ampersand */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2">
          <div className="relative">
            <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center bg-darkwine">
              <span className="font-cormorant text-2xl text-gold italic">&</span>
            </div>
          </div>
        </div>

        {/* Blessing text */}
        <div className="text-center mt-12 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6" />
          <p className="font-cormorant text-lg md:text-xl text-cream/70 italic leading-relaxed">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
            isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
            kepadanya.&rdquo;
          </p>
          <p className="font-montserrat text-[10px] text-gold/60 mt-3 tracking-widest">
            — QS. AR-RUM: 21 —
          </p>
        </div>
      </div>
    </section>
  );
}
