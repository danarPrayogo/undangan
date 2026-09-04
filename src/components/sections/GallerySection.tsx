"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RefreshCw } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = weddingData.gallery;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const [zoom, setZoom] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isPanningRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });
  const lastTranslateRef = useRef({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(1);
  };
  const prevPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const nextPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null));

  const zoomIn = () => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)));
  const resetZoom = () => {
    setZoom(1);
    setTranslate({ x: 0, y: 0 });
    lastTranslateRef.current = { x: 0, y: 0 };
  };
  const toggleZoom = () => setZoom((z) => (z === 1 ? 2 : 1));

  useEffect(() => {
    // Reset translate when zoom goes back to 1
    if (zoom === 1) {
      setTranslate({ x: 0, y: 0 });
      lastTranslateRef.current = { x: 0, y: 0 };
    }
  }, [zoom]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (zoom === 1) return;
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    isPanningRef.current = true;
    startRef.current = { x: e.clientX, y: e.clientY };
    lastTranslateRef.current = translate;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanningRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    const next = { x: lastTranslateRef.current.x + dx, y: lastTranslateRef.current.y + dy };
    setTranslate(next);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanningRef.current) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    isPanningRef.current = false;
    lastTranslateRef.current = translate;
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => {
      const next = Math.min(3, Math.max(1, +(z + delta).toFixed(2)));
      return next;
    });
  };

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
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-gold/30 hover:border-gold/70 transform transition-all duration-500 aspect-[3/4] hover:-translate-y-1 hover:scale-105 hover:rotate-[1deg] hover:shadow-[0_10px_30px_rgba(201,164,92,0.18)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />
              <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />
              <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-gold/50 z-10 pointer-events-none group-hover:border-gold opacity-60 group-hover:opacity-100 transition-all" />

              <div
                className={`absolute inset-0 bg-darkwine/50 transition-opacity duration-300 flex items-center justify-center z-20 ${
                  lightboxIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-gold/20 border border-gold/80 flex items-center justify-center backdrop-blur-sm transform scale-90 transition-transform duration-300 ${
                    lightboxIndex === index ? "scale-100" : "group-hover:scale-100"
                  }`}
                >
                  <ZoomIn size={18} strokeWidth={1.5} className="text-gold" />
                </div>
              </div>
              {/* animated outline */}
              <div
                className={`absolute inset-0 pointer-events-none rounded-sm border-2 transform scale-95 transition-all duration-500 ${
                  lightboxIndex === index
                    ? "opacity-80 border-gold/20 scale-100"
                    : "opacity-0 group-hover:opacity-80 group-hover:border-gold/20"
                }`}
              />
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
            {/* Close button removed - lightbox closes by clicking the overlay */}

            {/* Image (zoom & pan) */}
            <div className="relative">
              <div className="absolute -top-12 right-0 flex items-center gap-3 z-20">
                <button
                  onClick={zoomOut}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gold/10 border border-gold/30 text-cream/80 hover:bg-gold/20 transition-shadow shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gold/40 transform transition-transform duration-200 hover:scale-110"
                  aria-label="Perkecil"
                >
                  <ZoomOut size={18} strokeWidth={1.5} className="text-gold" />
                </button>
                <button
                  onClick={resetZoom}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gold/10 border border-gold/30 text-cream/80 hover:bg-gold/20 transition-shadow shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gold/40 transform transition-transform duration-200 hover:scale-110"
                  aria-label="Reset zoom"
                >
                  <RefreshCw size={18} strokeWidth={1.5} className="text-gold" />
                </button>
                <button
                  onClick={zoomIn}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gold/10 border border-gold/30 text-cream/80 hover:bg-gold/20 transition-shadow shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gold/40 transform transition-transform duration-200 hover:scale-110"
                  aria-label="Perbesar"
                >
                  <ZoomIn size={18} strokeWidth={1.5} className="text-gold" />
                </button>
              </div>

              <div
                ref={containerRef}
                className={`relative w-full h-[60vh] border border-gold/30 rounded-sm overflow-hidden ${
                  zoom > 1 ? "cursor-grab" : ""
                }`}
                onDoubleClick={toggleZoom}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onWheel={onWheel}
                style={{ touchAction: "none" }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-100"
                  style={{
                    transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
                    transformOrigin: "center",
                  }}
                >
                  <Image
                    src={photos[lightboxIndex].src}
                    alt={photos[lightboxIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              </div>
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
