import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkwine: "#260707",
        burgundy: "#3B0D0D",
        wine: "#4a1212",
        gold: "#C9A45C",
        "gold-light": "#E8C98A",
        "gold-dark": "#A07A38",
        cream: "#F4E7CE",
        "cream-muted": "#d4c8b0",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-slow-reverse": "float-slow-reverse 7s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "cover-reveal": "cover-reveal 1s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(1deg)" },
          "66%": { transform: "translateY(-4px) rotate(-0.5deg)" },
        },
        "float-slow-reverse": {
          "0%, 100%": { transform: "scaleX(-1) translateY(0px)" },
          "33%": { transform: "scaleX(-1) translateY(-6px)" },
          "66%": { transform: "scaleX(-1) translateY(-10px)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "cover-reveal": {
          from: { opacity: "0", transform: "scale(1.02)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 164, 92, 0.2)" },
          "50%": { boxShadow: "0 0 0 8px rgba(201, 164, 92, 0)" },
        },
      },
      backgroundImage: {
        "velvet-texture":
          "radial-gradient(ellipse at 20% 50%, rgba(58, 13, 13, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(38, 7, 7, 0.4) 0%, transparent 50%)",
      },
      transitionDuration: {
        "1500": "1500ms",
        "2000": "2000ms",
      },
    },
  },
  plugins: [],
};

export default config;
