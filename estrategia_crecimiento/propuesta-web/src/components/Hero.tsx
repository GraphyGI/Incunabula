"use client";

import { TrendingDown, AlertTriangle, BookOpen, Users, ShoppingCart, Target, ExternalLink, ArrowRight } from "lucide-react";
import { revenueData, kpiData } from "@/lib/data";
import Link from "next/link";

// 📚 LEARN: formatCOP convierte un número a formato de moneda colombiana (sin decimales)
function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

const maxIngresos = Math.max(...revenueData.map((d) => d.ingresos));

export default function Hero() {
  const caida = Math.round(
    ((revenueData[0].ingresos - revenueData[revenueData.length - 1].ingresos) /
      revenueData[0].ingresos) *
      100
  );

  const oportunidades = [
    {
      icon: <ShoppingCart size={18} />,
      label: "$2.8M en carritos abandonados",
      sub: "sin sistema de recuperación activo",
    },
    {
      icon: <Users size={18} />,
      label: "4.847 clientes sin contactar",
      sub: "base de datos sin email marketing",
    },
    {
      icon: <BookOpen size={18} />,
      label: "Segunda mano: diferenciador clave",
      sub: "potencial sin comunicar ni posicionar",
    },
    {
      icon: <Target size={18} />,
      label: "Conversión al 0.6%",
      sub: "la industria rinde entre 1% y 3%",
    },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Imagen de fondo con overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/proposal-hero-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Overlay gradiente: oscuro izquierda, semi-transparente derecha */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(22,14,9,0.97) 0%, rgba(44,30,22,0.92) 55%, rgba(44,30,22,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Contenido ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          padding: "8rem 2rem 5rem",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Columna izquierda: mensaje principal */}
        <div style={{ animation: "fadeInUp 0.6s ease-out" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(184,91,20,0.2)",
              border: "1px solid rgba(184,91,20,0.4)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "2rem",
            }}
          >
            <BookOpen size={13} color="#FCD34D" />
            <span
              style={{
                color: "#FCD34D",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Propuesta Estratégica · Agosto 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.75rem, 5vw, 4.25rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Incunabula tiene un problema.{" "}
            <span style={{ color: "#D4C7BA" }}>Y también su solución.</span>
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "560px",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Los ingresos cayeron{" "}
            <strong style={{ color: "#FCD34D" }}>{caida}%</strong> en 6 meses.
            Mientras tanto, hay{" "}
            <strong style={{ color: "#D4C7BA" }}>
              $2.8M en carritos sin recuperar
            </strong>
            , 4.847 clientes sin contactar y un diferenciador{" "}
            <strong style={{ color: "#D4C7BA" }}>
              sin explotar: los libros de segunda mano
            </strong>
            . Esta propuesta muestra el camino.
          </p>

          {/* CTAs */}
          <div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
          >
            <Link
              href="/prototipo"
              id="hero-cta-prototipo"
              style={{
                background: "#B85B14",
                color: "#FFF",
                padding: "14px 28px",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 25px rgba(184,91,20,0.45)",
                transition: "all 0.2s ease",
              }}
            >
              <ExternalLink size={17} />
              Ver Prototipo de la Tienda
            </Link>
            <button
              onClick={() => {
                const el = document.getElementById("diagnostico");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#FFF",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "14px 28px",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "background 0.2s ease",
              }}
            >
              Ver el diagnóstico <ArrowRight size={17} />
            </button>
          </div>

          {/* Stat rápido de caída */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              { value: `-${caida}%`, label: "Caída de ingresos en 6 meses", danger: true },
              { value: "0.6%", label: "Tasa de conversión (industria: 1–3%)", danger: true },
              { value: "4.847", label: "Clientes sin email marketing", danger: false },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: s.danger ? "#FCA5A5" : "#D4C7BA",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: oportunidades + mini chart */}
        <div style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
          {/* Gráfico de barras — mejorado */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Ingresos mensuales 2026
                </p>
                <p style={{ color: "#FFF", fontSize: "0.88rem", fontWeight: 600 }}>
                  Tendencia a la baja
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(220,38,38,0.15)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderRadius: "999px",
                  padding: "5px 12px",
                }}
              >
                <TrendingDown size={14} color="#FCA5A5" />
                <span style={{ color: "#FCA5A5", fontSize: "0.78rem", fontWeight: 700 }}>
                  -{caida}%
                </span>
              </div>
            </div>

            {/* Barras */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "110px" }}>
              {revenueData.map((d, i) => {
                const height = (d.ingresos / maxIngresos) * 100;
                const isLast = i === revenueData.length - 1;
                const isFirst = i === 0;
                return (
                  <div
                    key={d.mes}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: `${height}%`,
                        background: isLast
                          ? "linear-gradient(180deg, #EF4444 0%, #B91C1C 100%)"
                          : isFirst
                          ? "linear-gradient(180deg, #D4C7BA 0%, #B8A79A 100%)"
                          : `rgba(212,199,186,${0.15 + (height / 100) * 0.3})`,
                        borderRadius: "4px 4px 0 0",
                        transition: "height 1s ease",
                        boxShadow: isLast ? "0 0 12px rgba(239,68,68,0.4)" : "none",
                      }}
                    />
                    <span
                      style={{
                        color: isLast ? "#FCA5A5" : "rgba(255,255,255,0.4)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {d.mes}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Leyenda debajo */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
                Máximo:{" "}
                <strong style={{ color: "#D4C7BA" }}>
                  {formatCOP(revenueData[0].ingresos)}
                </strong>
              </span>
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
                Julio:{" "}
                <strong style={{ color: "#FCA5A5" }}>
                  {formatCOP(revenueData[revenueData.length - 1].ingresos)}
                </strong>
              </span>
            </div>
          </div>

          {/* Oportunidades */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Oportunidades identificadas
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {oportunidades.map((op) => (
                <div
                  key={op.label}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#FCD34D",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    {op.icon}
                  </div>
                  <div>
                    <p style={{ color: "#FFF", fontSize: "0.83rem", fontWeight: 600, marginBottom: "2px" }}>
                      {op.label}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.73rem" }}>
                      {op.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
