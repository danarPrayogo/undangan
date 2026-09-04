import { ReactNode } from "react";

interface GoldBorderCardProps {
  children: ReactNode;
  className?: string;
}

export default function GoldBorderCard({ children, className = "" }: GoldBorderCardProps) {
  return (
    <div
      className={`relative border border-gold/30 bg-wine/40 backdrop-blur-sm rounded-sm overflow-hidden ${className}`}
      style={{
        boxShadow: "0 0 20px rgba(201, 164, 92, 0.08), inset 0 0 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/60" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/60" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/60" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/60" />
      {children}
    </div>
  );
}
