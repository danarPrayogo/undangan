"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import BatikPattern from "@/components/ornaments/BatikPattern";

interface Ucapan {
  id: string;
  timestamp: string;
  name: string;
  message: string;
  date: string;
}

interface WishesApiItem {
  timestamp: string;
  name: string;
  message: string;
}

const toTimeValue = (timestamp: string): number => {
  const parsedTime = Date.parse(timestamp);
  return Number.isNaN(parsedTime) ? 0 : parsedTime;
};

const formatDate = (timestamp: string): string => {
  const parsedTime = Date.parse(timestamp);
  if (Number.isNaN(parsedTime)) {
    return timestamp || "-";
  }

  return new Date(parsedTime).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function UcapanSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoadingWishes, setIsLoadingWishes] = useState(true);
  const [wishesError, setWishesError] = useState<string | null>(null);

  const parseWishesResponse = (data: unknown): Ucapan[] => {
    if (!data || typeof data !== "object") {
      return [];
    }

    const responseData = data as { success?: boolean; data?: WishesApiItem[] };
    if (!responseData.success || !Array.isArray(responseData.data)) {
      return [];
    }

    return responseData.data
      .map((item, index) => ({
        id: `${item.timestamp}-${item.name}-${index}`,
        timestamp: item.timestamp,
        name: item.name,
        message: item.message,
        date: formatDate(item.timestamp),
      }))
      .sort((first, second) => toTimeValue(second.timestamp) - toTimeValue(first.timestamp));
  };

  const fetchWishes = async () => {
    setIsLoadingWishes(true);
    setWishesError(null);

    try {
      const response = await fetch("/api/wishes", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json().catch(() => null);
      const normalizedList = parseWishesResponse(data);

      if (!response.ok) {
        throw new Error(data?.error || "Belum dapat memuat ucapan.");
      }

      setUcapanList(normalizedList);
    } catch (error) {
      console.error("Wishes fetch error:", error);
      setUcapanList([]);
      setWishesError("Belum dapat memuat ucapan.");
    } finally {
      setIsLoadingWishes(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadInitialWishes = async () => {
      try {
        const response = await fetch("/api/wishes", {
          method: "GET",
          cache: "no-store",
        });

        const data = await response.json().catch(() => null);
        const normalizedList = parseWishesResponse(data);

        if (!response.ok) {
          throw new Error(data?.error || "Belum dapat memuat ucapan.");
        }

        if (isMounted) {
          setUcapanList(normalizedList);
          setWishesError(null);
        }
      } catch (error) {
        console.error("Initial wishes fetch error:", error);
        if (isMounted) {
          setUcapanList([]);
          setWishesError("Belum dapat memuat ucapan.");
        }
      } finally {
        if (isMounted) {
          setIsLoadingWishes(false);
        }
      }
    };

    void loadInitialWishes();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setSubmitError(data.error || "Gagal mengirim ucapan. Silakan coba lagi.");
        return;
      }

      setName("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      await fetchWishes();
    } catch (error) {
      console.error("Wishes submit error:", error);
      setSubmitError("Gagal mengirim ucapan. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-darkwine/60 border border-gold/20 rounded-sm px-4 py-3 font-montserrat text-xs text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 transition-colors";

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <BatikPattern />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-lg mx-auto">
        <SectionTitle title="Ucapan & Doa" subtitle="Sampaikan Doa Terbaik" />

        {/* Send ucapan form */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <GoldBorderCard className="p-5 mb-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${inputClass} mb-3`}
                required
              />
              <textarea
                placeholder="Tulis doa dan ucapan untuk mempelai..."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none mb-3`}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full py-3 border border-gold/50 text-gold font-montserrat text-[10px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:border-gold/80 hover:shadow-[0_0_0_1px_rgba(201,164,92,0.16),0_0_14px_rgba(201,164,92,0.10)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gold/12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />
                <span className="relative flex items-center justify-center gap-2">
                  <Send size={12} />
                  {loading ? "MENGIRIM..." : submitted ? "TERKIRIM ✓" : "KIRIM UCAPAN"}
                </span>
              </button>
              {submitError && (
                <p className="font-montserrat text-xs text-red-400 text-center mt-3">{submitError}</p>
              )}
            </form>
          </GoldBorderCard>

          {/* Ucapan list */}
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1 custom-scrollbar">
            {isLoadingWishes ? (
              <GoldBorderCard className="p-4">
                <p className="font-montserrat text-xs text-cream/60 text-center">Memuat ucapan...</p>
              </GoldBorderCard>
            ) : wishesError ? (
              <GoldBorderCard className="p-4">
                <p className="font-montserrat text-xs text-cream/60 text-center">Belum dapat memuat ucapan.</p>
              </GoldBorderCard>
            ) : ucapanList.length === 0 ? (
              <GoldBorderCard className="p-4">
                <p className="font-montserrat text-xs text-cream/60 text-center">
                  Belum ada ucapan. Jadilah yang pertama memberikan doa.
                </p>
              </GoldBorderCard>
            ) : (
              ucapanList.map((u) => (
                <GoldBorderCard key={u.id} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                        <span className="font-cormorant text-sm text-gold">
                          {u.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-montserrat text-xs text-cream font-medium">{u.name}</span>
                    </div>
                    <span className="font-montserrat text-[9px] text-cream/40">{u.date}</span>
                  </div>
                  <p className="font-montserrat text-[11px] text-cream/70 leading-relaxed pl-9">
                    {u.message}
                  </p>
                </GoldBorderCard>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
