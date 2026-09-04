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
          className={`grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-sm border border-gold/20 hover:border-gold/50 transition-all duration-300 ${
                index === 0 || index === 3 ? "row-span-1" : ""
              }`}
              style={{ aspectRatio: index % 3 === 0 ? "3/4" : "4/3" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-darkwine/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-gold" />
              </div>
              {/* Gold border overlay */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300 rounded-sm" />
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
