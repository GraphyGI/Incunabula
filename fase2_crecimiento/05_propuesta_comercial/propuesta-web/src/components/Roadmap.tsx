"use client";

import { roadmapFases } from "@/lib/data";
import { CheckCircle2, Clock, Zap, TrendingUp } from "lucide-react";

const coloresFase: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  "01": { bg: "#FEF3C7", border: "#FDE68A", text: "#92400E", badge: "#B45309" },
  "02": { bg: "#FEF3C7", border: "#FDE68A", text: "#92400E", badge: "#B45309" },
  "03": { bg: "#EFE8E1", border: "#D4C7BA", text: "#4A3123", badge: "#6E4B39" },
  "04": { bg: "#FDF3E1", border: "#F5DDB4", text: "#B85B14", badge: "#B85B14" },
  "05": { bg: "#E8E2D9", border: "#C4B6A6", text: "#2C241E", badge: "#4A3123" },
  "06": { bg: "#F9F6F0", border: "#E8E2D9", text: "#5C5248", badge: "#5C5248" },
};

const iconosFase: Record<string, string> = {
  "01": "📊",
  "02": "🛒",
  "03": "📧",
  "04": "🎨",
  "05": "✨",
  "06": "🔍",
};

export default function Roadmap() {
  return (
    <section
      style={{
        background: "var(--color-surface-alt)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">05 — Roadmap</p>
          <div className="divider" />
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--color-text)",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Plan de acción por fases
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px", lineHeight: 1.8, fontSize: "1.125rem" }}>
            Ordenado por impacto y facilidad. Las primeras 3 fases generan retorno inmediato.
          </p>
        </div>

        {/* Leyenda de prioridad */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { color: "#B45309", label: "Quick Wins (inmediato)" },
            { color: "#6E4B39", label: "Crecimiento (1 mes)" },
            { color: "#4A3123", label: "Escalado (2–3 meses)" },
            { color: "#5C5248", label: "Largo plazo" },
          ].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: l.color }} />
              <span style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{l.label}</span>
            </div>
          ))}
        </div>

        {/* Fases */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {roadmapFases.map((fase, index) => {
            const colores = coloresFase[fase.numero];
            return (
              <div
                key={fase.numero}
                className="card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  border: `1px solid ${colores.border}`,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  {/* Número de fase */}
                  <div
                    style={{
                      background: colores.bg,
                      borderRight: `1px solid ${colores.border}`,
                      padding: "1.75rem 1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "90px",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "1.75rem" }}>{iconosFase[fase.numero]}</span>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: colores.badge,
                      }}
                    >
                      {fase.numero}
                    </span>
                  </div>

                  {/* Contenido principal */}
                  <div style={{ padding: "1.75rem 2rem", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: "1.35rem",
                          color: "var(--color-text)",
                        }}
                      >
                        {fase.titulo}
                      </h3>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <span
                          style={{
                            background: colores.bg,
                            color: colores.badge,
                            border: `1px solid ${colores.border}`,
                            borderRadius: "999px",
                            padding: "3px 12px",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Clock size={11} />
                          {fase.tiempo}
                        </span>
                        {fase.inversion === "Incluido" || fase.inversion === "$0 (dentro del plan Brevo)" ? (
                          <span className="badge-success" style={{ fontSize: "0.72rem" }}>
                            <Zap size={11} />
                            {fase.inversion === "$0 (dentro del plan Brevo)" ? "Costo $0" : "Incluido"}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                      {fase.descripcion}
                    </p>

                    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                      {/* Items */}
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {fase.items.map((item) => (
                          <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                            <CheckCircle2 size={16} color={colores.badge} style={{ marginTop: "3px", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Impacto */}
                      <div
                        style={{
                          background: colores.bg,
                          border: `1px solid ${colores.border}`,
                          borderRadius: "10px",
                          padding: "0.875rem 1.125rem",
                          minWidth: "200px",
                          flexShrink: 0,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                          <TrendingUp size={13} color={colores.badge} />
                          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: colores.badge, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Impacto esperado
                          </span>
                        </div>
                        <p style={{ fontSize: "0.85rem", fontWeight: 700, color: colores.text, lineHeight: 1.4 }}>
                          {fase.impacto}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
