"use client";

import { useEffect, useRef, useState } from "react";
import OpeningCover from "@/components/sections/OpeningCover";
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import MempelaiSection from "@/components/sections/MempelaiSection";
import DetailAcaraSection from "@/components/sections/DetailAcaraSection";
import LokasiSection from "@/components/sections/LokasiSection";
import OurStorySection from "@/components/sections/OurStorySection";
import GallerySection from "@/components/sections/GallerySection";
import RsvpSection from "@/components/sections/RsvpSection";
import UcapanSection from "@/components/sections/UcapanSection";
import AmplopDigitalSection from "@/components/sections/AmplopDigitalSection";
import GiftSection from "@/components/sections/GiftSection";
import ClosingSection from "@/components/sections/ClosingSection";
import Navigation from "@/components/layout/Navigation";
import MusicPlayer from "@/components/layout/MusicPlayer";

type HomePageClientProps = {
  guestName: string;
};

export default function HomePageClient({ guestName }: HomePageClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coverVisible, setCoverVisible] = useState(true);
  const autoScrollFrameRef = useRef<number | null>(null);
  const autoScrollTimerRef = useRef<number | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: "auto" });

    // Animate cover out
    setTimeout(() => setCoverVisible(false), 800);
  };

  useEffect(() => {
    if (!isOpen || coverVisible) {
      return;
    }

    const interactionEvents: Array<keyof WindowEventMap> = [
      "wheel",
      "touchstart",
      "pointerdown",
      "mousedown",
      "keydown",
    ];

    let stopped = false;

    const stopAutoScroll = () => {
      if (stopped) {
        return;
      }

      stopped = true;

      if (autoScrollFrameRef.current !== null) {
        cancelAnimationFrame(autoScrollFrameRef.current);
        autoScrollFrameRef.current = null;
      }

      if (autoScrollTimerRef.current !== null) {
        window.clearTimeout(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }

      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, stopAutoScroll);
      });
    };

    const targetScrollDistance = Math.min(
      document.documentElement.scrollHeight - window.innerHeight,
      window.innerHeight * 1.75
    );

    const runAutoScroll = () => {
      if (stopped) {
        return;
      }

      const currentY = window.scrollY;
      const remaining = targetScrollDistance - currentY;

      if (remaining <= 1) {
        stopAutoScroll();
        return;
      }

      const step = Math.max(1, Math.min(14, remaining * 0.045));
      window.scrollTo({ top: currentY + step, behavior: "auto" });
      autoScrollFrameRef.current = window.requestAnimationFrame(runAutoScroll);
    };

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, stopAutoScroll);
    });

    autoScrollTimerRef.current = window.setTimeout(() => {
      autoScrollFrameRef.current = window.requestAnimationFrame(runAutoScroll);
    }, 120);

    return () => {
      stopAutoScroll();
    };
  }, [isOpen, coverVisible]);

  // Prevent body scroll when cover is showing
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Opening cover overlay */}
      {coverVisible && (
        <div
          className={`transition-all duration-800 ${
            isOpen ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
          }`}
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <OpeningCover onOpen={handleOpen} guestName={guestName} />
        </div>
      )}

      {/* Main content */}
      <div
        className={`transition-opacity duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isOpen && (
          <>
            <Navigation />
            <main className="relative">
              <HeroSection />
              <CountdownSection />
              <MempelaiSection />
              <DetailAcaraSection />
              <LokasiSection />
              <OurStorySection />
              <GallerySection />
              <RsvpSection />
              <UcapanSection />
              <AmplopDigitalSection />
              <GiftSection />
              <ClosingSection />
            </main>
          </>
        )}
        <MusicPlayer shouldPlay={isOpen} />
      </div>
    </>
  );
}