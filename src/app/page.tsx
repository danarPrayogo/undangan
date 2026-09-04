"use client";

import { useState, useEffect } from "react";
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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [coverVisible, setCoverVisible] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    // Animate cover out
    setTimeout(() => setCoverVisible(false), 800);
    // Scroll to top of content
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  };

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
          <OpeningCover onOpen={handleOpen} />
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
