"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import { weddingData } from "@/data/wedding";

export default function OurStorySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Side gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-darkwine to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-darkwine to-transparent" />

      <div className="relative z-10 max-w-lg mx-auto">
        <SectionTitle title="Our Story" subtitle="Kisah Kami" />

        <div
          ref={ref}
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

          <div className="space-y-10 pl-16">
            {weddingData.ourStory.map((item, i) => (
              <div key={i} className="relative">
                {/* Year dot */}
                <div className="absolute -left-10 top-1 flex flex-col items-center">
                  <div className="w-3 h-3 border-2 border-gold bg-darkwine rotate-45" />
                </div>

                {/* Year */}
                <p className="font-montserrat text-[10px] tracking-[0.3em] text-gold uppercase mb-1">
                  {item.year}
                </p>
                {/* Title */}
                <h4 className="font-cormorant text-xl md:text-2xl text-cream font-light mb-2">
                  {item.title}
                </h4>
                {/* Description */}
                <p className="font-montserrat text-[11px] text-cream/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
