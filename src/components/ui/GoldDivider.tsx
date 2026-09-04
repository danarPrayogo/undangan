export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="#C9A45C" opacity="0.8" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-gold via-gold to-transparent opacity-60" />
    </div>
  );
}
