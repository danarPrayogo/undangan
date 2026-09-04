"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import BatikPattern from "@/components/ornaments/BatikPattern";
import { weddingData } from "@/data/wedding";

function BankLogo({ bank }: { bank: string }) {
  const logos: Record<string, string> = {
    BCA: "🏦",
    MANDIRI: "🏦",
  };
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center">
        <span className="font-montserrat text-xs font-bold text-gold tracking-tight">
          {bank === "BCA" ? "BCA" : bank === "MANDIRI" ? "MDR" : bank.slice(0, 3)}
        </span>
      </div>
      <span className="font-montserrat text-xs text-cream/80 uppercase tracking-wider">
        {bank === "MANDIRI" ? "Bank Mandiri" : bank}
      </span>
    </div>
  );
}

function AccountCard({
  bank,
  accountNumber,
  accountNumberRaw,
  accountName,
}: {
  bank: string;
  accountNumber: string;
  accountNumberRaw: string;
  accountName: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumberRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <GoldBorderCard className="p-5">
      <div className="flex items-center justify-between mb-3">
        <BankLogo bank={bank} />
      </div>
      <div className="h-px bg-gold/15 mb-3" />
      <p className="font-cormorant text-xl text-cream tracking-widest mb-1">
        {accountNumber}
      </p>
      <p className="font-montserrat text-[10px] text-cream/50 mb-4">a.n. {accountName}</p>
      <button
        onClick={handleCopy}
        className={`group flex items-center justify-center gap-2 w-full py-2.5 border text-xs font-montserrat tracking-[0.2em] uppercase transition-all duration-300 ${
          copied
            ? "border-emerald-500/50 text-emerald-400"
            : "border-gold/40 text-gold hover:border-gold hover:bg-gold/10"
        }`}
      >
        {copied ? (
          <>
            <Check size={13} />
            BERHASIL DISALIN ✓
          </>
        ) : (
          <>
            <Copy size={13} />
            SALIN NOMOR REKENING
          </>
        )}
      </button>
    </GoldBorderCard>
  );
}

export default function AmplopDigitalSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <BatikPattern />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-md mx-auto">
        <SectionTitle title="Amplop Digital" subtitle="Tanda Kasih" />

        <p className="font-cormorant text-center text-lg text-cream/70 italic mb-2 px-4">
          &ldquo;Doa restu Anda merupakan karunia yang sangat berarti bagi kami.&rdquo;
        </p>
        <p className="font-montserrat text-center text-[11px] text-cream/50 mb-8 leading-relaxed px-4">
          Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberikannya melalui:
        </p>

        <div
          ref={ref}
          className={`space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {weddingData.bankAccounts.map((account, i) => (
            <AccountCard key={i} {...account} />
          ))}
        </div>

        {/* Closing note */}
        <p className="font-cormorant text-center text-base text-gold/60 italic mt-8">
          Terima kasih atas doa dan restu yang diberikan.
        </p>
        <div className="flex justify-center mt-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A45C" opacity="0.5">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.498 3.498 1 6.191 1c1.928 0 3.736 1.031 4.809 2.676C12.072 2.031 13.88 1 15.808 1 18.502 1 21 3.498 21 7.191c0 4.105-5.369 8.863-11 14.402z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
