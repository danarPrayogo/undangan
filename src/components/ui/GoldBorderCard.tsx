import { ReactNode } from "react";

interface GoldBorderCardProps {
  children: ReactNode;
  className?: string;
}

export default function GoldBorderCard({ children, className = "" }: GoldBorderCardProps) {
  return (
    <div
      className={`group relative border border-gold/30 bg-wine/40 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:border-gold/40 hover:backdrop-blur-md ${className}`}
      style={{
        boxShadow: "0 0 20px rgba(201, 164, 92, 0.04), inset 0 0 12px rgba(0,0,0,0.12)",
      }}
    >
      {/* subtle gold outline on hover (uses group-hover) */}
      <div className="absolute inset-0 pointer-events-none rounded-sm border border-transparent group-hover:border-gold/20 transition-colors duration-300" />
      {/* glassy gradient overlay + inner glow (appears on hover) */}
      <div
        className="absolute inset-0 pointer-events-none rounded-sm opacity-0 group-hover:opacity-60 transition-opacity duration-400"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(201,164,92,0.02))",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ boxShadow: "inset 0 0 40px rgba(201,164,92,0.05)" }}
      />
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/60" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/60" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/60" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/60" />
      {children}
    </div>
  );
}
