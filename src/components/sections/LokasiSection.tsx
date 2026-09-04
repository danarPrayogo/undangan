"use client";

import { MapPin, Map } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

export default function LokasiSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="lokasi" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <BatikPattern />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <SectionTitle title="Lokasi Acara" subtitle="Temukan Kami Di" />

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <GoldBorderCard className="p-6 md:p-8">
            {/* Location icon */}
            <div className="flex justify-center mb-5">
              <div className="w-10 h-10 border border-gold/40 rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-gold" />
              </div>
            </div>

            {/* Venue name */}
            <h3 className="font-cormorant text-2xl md:text-3xl text-cream text-center font-light tracking-wide mb-2">
              {weddingData.event.venue}
            </h3>

            {/* Divider */}
            <div className="h-px bg-gold/20 my-4" />

            {/* Address */}
            <p className="font-montserrat text-xs text-cream/60 text-center leading-relaxed whitespace-pre-line mb-6">
              {weddingData.event.address}
            </p>

            {/* Maps embed */}
            <div className="relative w-full h-44 mb-5 rounded-sm overflow-hidden border border-gold/20">
              <iframe
                src={weddingData.event.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi"
              />
            </div>

            {/* Maps button */}
            <a
              id="btn-open-maps"
              href={weddingData.event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-3 border border-gold/50 text-gold font-montserrat text-xs tracking-[0.2em] uppercase relative overflow-hidden transition-all duration-300 hover:border-gold/80 hover:shadow-[0_0_0_1px_rgba(201,164,92,0.16),0_0_14px_rgba(201,164,92,0.10)]"
            >
              <span className="absolute inset-0 bg-gold/12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />
              <Map size={14} className="relative z-10" />
              <span className="relative z-10">BUKA GOOGLE MAPS</span>
            </a>
          </GoldBorderCard>
        </div>
      </div>
    </section>
  );
}
