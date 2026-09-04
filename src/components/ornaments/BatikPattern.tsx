export default function BatikPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="batikPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Central diamond motif */}
          <path
            d="M40 10 L60 40 L40 70 L20 40 Z"
            stroke="#C9A45C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.12"
          />
          {/* Inner diamond */}
          <path
            d="M40 22 L52 40 L40 58 L28 40 Z"
            stroke="#C9A45C"
            strokeWidth="0.4"
            fill="none"
            opacity="0.1"
          />
          {/* Corner dots */}
          <circle cx="40" cy="10" r="1.5" fill="#C9A45C" opacity="0.15" />
          <circle cx="60" cy="40" r="1.5" fill="#C9A45C" opacity="0.15" />
          <circle cx="40" cy="70" r="1.5" fill="#C9A45C" opacity="0.15" />
          <circle cx="20" cy="40" r="1.5" fill="#C9A45C" opacity="0.15" />
          {/* Center dot */}
          <circle cx="40" cy="40" r="2" fill="#C9A45C" opacity="0.12" />
          {/* Cross lines */}
          <line x1="40" y1="0" x2="40" y2="80" stroke="#C9A45C" strokeWidth="0.3" opacity="0.06" />
          <line x1="0" y1="40" x2="80" y2="40" stroke="#C9A45C" strokeWidth="0.3" opacity="0.06" />
          {/* Corner florals */}
          <circle cx="0" cy="0" r="3" fill="none" stroke="#C9A45C" strokeWidth="0.4" opacity="0.1" />
          <circle cx="80" cy="0" r="3" fill="none" stroke="#C9A45C" strokeWidth="0.4" opacity="0.1" />
          <circle cx="0" cy="80" r="3" fill="none" stroke="#C9A45C" strokeWidth="0.4" opacity="0.1" />
          <circle cx="80" cy="80" r="3" fill="none" stroke="#C9A45C" strokeWidth="0.4" opacity="0.1" />
          {/* Parang-like curves */}
          <path
            d="M0 20 Q10 15 20 20 Q30 25 40 20"
            stroke="#C9A45C"
            strokeWidth="0.4"
            fill="none"
            opacity="0.08"
          />
          <path
            d="M40 60 Q50 55 60 60 Q70 65 80 60"
            stroke="#C9A45C"
            strokeWidth="0.4"
            fill="none"
            opacity="0.08"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batikPattern)" />
    </svg>
  );
}
