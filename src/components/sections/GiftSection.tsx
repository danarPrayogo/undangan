"use client";

import { useState } from "react";
import { Package, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import { weddingData } from "@/data/wedding";

export default function GiftSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [showAddress, setShowAddress] = useState(false);

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="relative z-10 max-w-md mx-auto">
        <SectionTitle title="Kirim Hadiah" subtitle="Gift & Wishes" />

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <GoldBorderCard className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 border border-gold/40 rounded-full flex items-center justify-center">
                <Package size={20} className="text-gold" />
              </div>
            </div>

            <p className="font-montserrat text-[11px] text-cream/60 text-center mb-5 leading-relaxed">
              Jika Anda ingin mengirimkan hadiah fisik, berikut adalah informasi pengiriman:
            </p>

            <p className="font-cormorant text-xl text-cream text-center mb-4">
              {weddingData.giftAddress.recipientName}
            </p>

            <button
              id="btn-show-address"
              onClick={() => setShowAddress(!showAddress)}
              className="group flex items-center justify-center gap-2 w-full py-2.5 border border-gold/40 text-gold font-montserrat text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-gold/70 hover:bg-gold/12 hover:shadow-[0_0_0_1px_rgba(201,164,92,0.14),0_0_12px_rgba(201,164,92,0.08)]"
            >
              <MapPin size={13} />
              {showAddress ? "SEMBUNYIKAN ALAMAT" : "LIHAT ALAMAT"}
              {showAddress ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>

            {showAddress && (
              <div className="mt-4 p-4 bg-darkwine/60 border border-gold/15 rounded-sm">
                <p className="font-montserrat text-xs text-cream/70 leading-relaxed whitespace-pre-line mb-3">
                  {weddingData.giftAddress.address}
                </p>
                <div className="h-px bg-gold/15 mb-3" />
                <p className="font-montserrat text-[10px] text-cream/50">
                  📱 {weddingData.giftAddress.phone}
                </p>
                <p className="font-montserrat text-[10px] text-cream/40 mt-1 italic">
                  * {weddingData.giftAddress.note}
                </p>
              </div>
            )}
          </GoldBorderCard>
        </div>
      </div>
    </section>
  );
}
