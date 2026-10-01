"use client";

import { BookOpen, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "oportunidades", label: "Oportunidades" },
  { id: "branding", label: "Branding" },
  { id: "prototipo", label: "Prototipo" },
  { id: "roadmap", label: "Roadmap" },
  { id: "propuesta", label: "Propuesta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "64px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(44,30,22,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(110,75,57,0.2)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
      }}
    >
      {/* ✅ BEST PRACTICE: el fondo del nav es full-width, pero el contenido respeta el ancho estandar de 1100px */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img 
          src="/logo-sin-fondo.png" 
          alt="Incunabula Logo" 
          className="logo-dark-bg"
          style={{
            height: "60px",
            width: "auto",
          }}
        />
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            id={`nav-${item.id}`}
            style={{
              background: "transparent",
              border: "none",
              color: activeSection === item.id ? "#D4C7BA" : "rgba(255,255,255,0.55)",
              fontSize: "0.78rem",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "color 0.2s ease, background 0.2s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.color = "#FFFFFF";
              (e.target as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.color =
                activeSection === item.id ? "#D4C7BA" : "rgba(255,255,255,0.55)";
              (e.target as HTMLButtonElement).style.background = "transparent";
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA Prototipo */}
      <Link
        href="/prototipo"
        id="nav-cta-prototipo"
        style={{
          background: "rgba(184,91,20,0.9)",
          color: "#FFF",
          fontSize: "0.78rem",
          fontWeight: 700,
          padding: "8px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          transition: "background 0.2s ease",
          letterSpacing: "0.03em",
          flexShrink: 0,
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <ExternalLink size={13} />
        Ver Prototipo
      </Link>
      </div>
    </nav>
  );
}
