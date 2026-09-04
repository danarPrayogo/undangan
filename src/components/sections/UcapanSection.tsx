"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import BatikPattern from "@/components/ornaments/BatikPattern";

interface Ucapan {
  id: number;
  name: string;
  message: string;
  date: string;
  attendance: string;
}

const initialUcapan: Ucapan[] = [
  {
    id: 1,
    name: "Siti Nurhaliza",
    message:
      "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Selamat menempuh hidup baru!",
    date: "24 Mei 2026",
    attendance: "Hadir",
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    message: "Barakallahu lakuma wa baraka 'alaykuma wa jama'a baynakuma fi khayrin. Aamiin.",
    date: "24 Mei 2026",
    attendance: "Hadir",
  },
  {
    id: 3,
    name: "Dewi Rahayu",
    message:
      "Semoga pernikahan ini menjadi awal dari kehidupan yang penuh berkah dan kebahagiaan.",
    date: "24 Mei 2026",
    attendance: "Tidak Hadir",
  },
];

export default function UcapanSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [ucapanList, setUcapanList] = useState<Ucapan[]>(initialUcapan);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newUcapan: Ucapan = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      attendance: "",
    };
    setUcapanList([newUcapan, ...ucapanList]);
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
                className="group relative w-full py-3 border border-gold/50 text-gold font-montserrat text-[10px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:text-darkwine"
              >
                <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative flex items-center justify-center gap-2">
                  <Send size={12} />
                  {submitted ? "TERKIRIM ✓" : "KIRIM UCAPAN"}
                </span>
              </button>
            </form>
          </GoldBorderCard>

          {/* Ucapan list */}
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1 custom-scrollbar">
            {ucapanList.map((u) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
