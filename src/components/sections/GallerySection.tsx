"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = weddingData.gallery;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const nextPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <BatikPattern />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionTitle title="Our Moments" subtitle="Kenangan Bersama" />

        {/* Gallery grid */}
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-gold/30 hover:border-gold/70 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(201,164,92,0.25)] aspect-[3/4]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              {/* Corner gold accents */}
              <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />
              <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />
              <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-darkwine/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/80 flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={18} className="text-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-darkwine/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-lg w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-cream/60 hover:text-gold transition-colors z-10"
              aria-label="Tutup"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative w-full h-[60vh] border border-gold/30 rounded-sm overflow-hidden">
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevPhoto}
                className="flex items-center gap-1 text-cream/60 hover:text-gold transition-colors font-montserrat text-xs"
                aria-label="Sebelumnya"
              >
                <ChevronLeft size={18} /> Sebelumnya
              </button>
              <span className="font-montserrat text-xs text-gold/60">
                {lightboxIndex + 1} / {photos.length}
              </span>
              <button
                onClick={nextPhoto}
                className="flex items-center gap-1 text-cream/60 hover:text-gold transition-colors font-montserrat text-xs"
                aria-label="Berikutnya"
              >
                Berikutnya <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
