"use client";

import { useState, useEffect } from "react";
import { Home, Users, Calendar, MapPin, Heart } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "mempelai", label: "Mempelai", icon: Users },
  { id: "acara", label: "Acara", icon: Calendar },
  { id: "lokasi", label: "Lokasi", icon: MapPin },
  { id: "rsvp", label: "RSVP", icon: Heart },
];

const desktopLinks = [
  { id: "home", label: "HOME" },
  { id: "mempelai", label: "MEMPELAI" },
  { id: "acara", label: "ACARA" },
  { id: "lokasi", label: "LOKASI" },
  { id: "rsvp", label: "RSVP" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <>
      {/* Desktop top navigation */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-40 items-center justify-center gap-8 px-8 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-darkwine/90 backdrop-blur-sm border-b border-gold/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {desktopLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`font-montserrat text-[10px] tracking-[0.3em] transition-colors duration-300 relative group ${
              active === link.id ? "text-gold" : "text-cream/50 hover:text-cream/80"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 right-0 h-px bg-gold transition-transform duration-300 origin-left ${
                active === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-2 py-2 bg-darkwine/95 backdrop-blur-sm border-t border-gold/20">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex flex-col items-center gap-1 px-3 py-1 transition-all duration-300 ${
              active === id ? "text-gold" : "text-cream/40"
            }`}
          >
            <Icon size={18} strokeWidth={active === id ? 1.5 : 1} />
            <span className="font-montserrat text-[8px] tracking-wider">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
