"use client";

import { useState, useRef, useEffect } from "react";
import { Disc, VolumeX, Volume2 } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.loop = true;

    // Auto play when component mounts (invitation opened)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.src} preload="auto" autoPlay loop />
      <div className="fixed bottom-20 right-4 md:bottom-8 md:right-6 z-40">
        <button
          id="btn-play-music"
          onClick={togglePlay}
          aria-label={isPlaying ? "Matikan Musik" : "Putar Musik"}
          className={`relative w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg ${
            isPlaying
              ? "border-gold bg-darkwine/90 text-gold shadow-[0_0_20px_rgba(201,164,92,0.4)]"
              : "border-gold/30 bg-darkwine/80 text-cream/40 hover:border-gold/60 hover:text-gold"
          }`}
        >
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping opacity-30 pointer-events-none" />
          )}
          {isPlaying ? (
            <Disc className="w-5 h-5 text-gold animate-spin" style={{ animationDuration: "4s" }} />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
}
