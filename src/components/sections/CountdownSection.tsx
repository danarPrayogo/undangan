"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { padZero } from "@/lib/utils";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import SectionTitle from "@/components/ui/SectionTitle";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center group">
      <GoldBorderCard className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-105">
        <span className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-gold font-light tabular-nums">
          {padZero(value)}
        </span>
      </GoldBorderCard>
      <span className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.2em] text-cream/60 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { years, months, days, hours, minutes, seconds, isExpired } = useCountdown(
    weddingData.event.countdownTarget
  );

  const showYears = years > 0;
  const showMonths = months > 0 || showYears;

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <BatikPattern />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionTitle title="Hitung Mundur" subtitle="Menuju Akad Nikah" />

          {isExpired ? (
            <div className="mt-8 max-w-lg mx-auto">
              <GoldBorderCard className="p-8">
                <p className="font-cormorant text-2xl text-gold italic">
                  Acara telah berlangsung
                </p>
                <p className="font-montserrat text-xs text-cream/60 mt-2">
                  Terima kasih telah menjadi bagian dari hari istimewa kami
                </p>
              </GoldBorderCard>
            </div>
          ) : (
            <div className="mt-8">
              <GoldBorderCard className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-center gap-2 sm:gap-3 md:gap-4">
                  {showYears && (
                    <>
                      <CountdownBox value={years} label="Tahun" />
                      <span className="font-cormorant text-2xl sm:text-3xl text-gold/60 mt-2 sm:mt-3">:</span>
                    </>
                  )}
                  {showMonths && (
                    <>
                      <CountdownBox value={months} label="Bulan" />
                      <span className="font-cormorant text-2xl sm:text-3xl text-gold/60 mt-2 sm:mt-3">:</span>
                    </>
                  )}
                  <CountdownBox value={days} label="Hari" />
                  <span className="font-cormorant text-2xl sm:text-3xl text-gold/60 mt-2 sm:mt-3">:</span>
                  <CountdownBox value={hours} label="Jam" />
                  <span className="font-cormorant text-2xl sm:text-3xl text-gold/60 mt-2 sm:mt-3">:</span>
                  <CountdownBox value={minutes} label="Menit" />
                  <span className="font-cormorant text-2xl sm:text-3xl text-gold/60 mt-2 sm:mt-3">:</span>
                  <CountdownBox value={seconds} label="Detik" />
                </div>
              </GoldBorderCard>
              <p className="font-montserrat text-[10px] sm:text-xs text-cream/60 mt-4 tracking-widest uppercase">
                Menuju Akad Nikah — {weddingData.event.dateDisplay} ({weddingData.event.akad.timeDisplay})
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
