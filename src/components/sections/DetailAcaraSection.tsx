"use client";

import { Calendar, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

function EventCard({
  title,
  date,
  time,
  delay = 0,
}: {
  title: string;
  date: string;
  time: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <GoldBorderCard className="p-6 md:p-8 text-center">
        {/* Title */}
        <p className="font-montserrat text-[9px] tracking-[0.4em] text-gold/70 uppercase mb-3">
          {title}
        </p>

        {/* Ornament */}
        <div className="flex justify-center mb-4">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <path d="M20 2 L23 8 L29 8 L24 12 L26 18 L20 14 L14 18 L16 12 L11 8 L17 8 Z" fill="#C9A45C" opacity="0.6" />
          </svg>
        </div>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar size={14} className="text-gold/60" />
          <span className="font-montserrat text-xs text-cream/80">{date}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/20 my-3" />

        {/* Time */}
        <div className="flex items-center justify-center gap-2">
          <Clock size={14} className="text-gold/60" />
          <span className="font-cormorant text-xl text-cream">{time}</span>
        </div>
      </GoldBorderCard>
    </div>
  );
}

export default function DetailAcaraSection() {
  return (
    <section id="acara" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <BatikPattern />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <SectionTitle title="Detail Acara" subtitle="Turut Mengundang" />

        <div className="grid grid-cols-1 gap-5 mt-8">
          <EventCard
            title={weddingData.event.akad.label}
            date={weddingData.event.dateDisplay}
            time={weddingData.event.akad.timeDisplay}
            delay={0}
          />
          <EventCard
            title={weddingData.event.reception.label}
            date={weddingData.event.dateDisplay}
            time={weddingData.event.reception.timeDisplay}
            delay={200}
          />
        </div>

        {/* Dress code note */}
        <div className="mt-8 text-center">
          <p className="font-montserrat text-[10px] text-cream/40 tracking-wider">
            DRESS CODE: FORMAL — MAROON / GOLD / CREAM
          </p>
        </div>
      </div>
    </section>
  );
}
