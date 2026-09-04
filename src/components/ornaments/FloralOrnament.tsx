export default function FloralOrnament({
  className = "",
  size = 200,
  flip = false,
}: {
  className?: string;
  size?: number;
  flip?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      {/* Main stem */}
      <path
        d="M100 280 C100 260, 95 240, 90 220 C85 200, 88 180, 95 160 C102 140, 98 120, 100 100"
        stroke="#C9A45C"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Large center flower */}
      <g transform="translate(100, 90)">
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(0)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(45)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(90)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(135)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(180)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(225)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(270)" />
        <ellipse cx="0" cy="-18" rx="10" ry="18" fill="#C9A45C" opacity="0.25" transform="rotate(315)" />
        <circle cx="0" cy="0" r="8" fill="#C9A45C" opacity="0.6" />
        <circle cx="0" cy="0" r="4" fill="#E8C98A" opacity="0.8" />
      </g>
      {/* Left branch */}
      <path
        d="M95 160 C80 155, 65 148, 52 138"
        stroke="#C9A45C"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Left small flower */}
      <g transform="translate(52, 138)">
        <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#C9A45C" opacity="0.2" transform="rotate(0)" />
        <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#C9A45C" opacity="0.2" transform="rotate(60)" />
        <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#C9A45C" opacity="0.2" transform="rotate(120)" />
        <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#C9A45C" opacity="0.2" transform="rotate(180)" />
        <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#C9A45C" opacity="0.2" transform="rotate(240)" />
        <ellipse cx="0" cy="-12" rx="7" ry="12" fill="#C9A45C" opacity="0.2" transform="rotate(300)" />
        <circle cx="0" cy="0" r="5" fill="#C9A45C" opacity="0.5" />
      </g>
      {/* Right branch */}
      <path
        d="M95 200 C110 195, 125 188, 138 178"
        stroke="#C9A45C"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Right small flower */}
      <g transform="translate(138, 178)">
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#C9A45C" opacity="0.2" transform="rotate(0)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#C9A45C" opacity="0.2" transform="rotate(60)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#C9A45C" opacity="0.2" transform="rotate(120)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#C9A45C" opacity="0.2" transform="rotate(180)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#C9A45C" opacity="0.2" transform="rotate(240)" />
        <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#C9A45C" opacity="0.2" transform="rotate(300)" />
        <circle cx="0" cy="0" r="4" fill="#C9A45C" opacity="0.5" />
      </g>
      {/* Leaves */}
      <path d="M90 220 C75 218, 65 212, 60 200 C70 205, 80 210, 90 220Z" fill="#C9A45C" opacity="0.2" />
      <path d="M92 240 C108 235, 118 225, 122 212 C112 220, 102 228, 92 240Z" fill="#C9A45C" opacity="0.2" />
      {/* Top decorative ornament */}
      <g transform="translate(100, 20)">
        <path d="M0 0 L-8 20 M0 0 L8 20 M0 0 L0 22" stroke="#C9A45C" strokeWidth="1" opacity="0.6" />
        <circle cx="-8" cy="20" r="3" fill="#C9A45C" opacity="0.5" />
        <circle cx="8" cy="20" r="3" fill="#C9A45C" opacity="0.5" />
        <circle cx="0" cy="22" r="3" fill="#C9A45C" opacity="0.5" />
        <path
          d="M-20 0 C-15 -5, -5 -8, 0 0 C5 -8, 15 -5, 20 0"
          stroke="#C9A45C"
          strokeWidth="1.2"
          fill="none"
          opacity="0.7"
        />
        <circle cx="0" cy="0" r="4" fill="#C9A45C" opacity="0.6" />
      </g>
    </svg>
  );
}
