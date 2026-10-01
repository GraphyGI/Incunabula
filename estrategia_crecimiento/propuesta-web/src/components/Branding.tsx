"use client";

import { brandingGaps, preguntasClientes } from "@/lib/data";
import { AlertTriangle, MessageCircle, Palette, Type, Shield, Star } from "lucide-react";

export default function Branding() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">04 — Branding e Identidad</p>
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
            Una identidad que aún no existe
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px", lineHeight: 1.8, fontSize: "1.125rem" }}>
            Incunabula tiene un logo, pero carece de una marca. Construiremos esa diferencia para que el cliente siempre recuerde volver.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>

          {/* Las 3 preguntas que nadie responde */}
          <div>
            <div className="card card-danger" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <MessageCircle size={24} color="#C83532" />
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem", color: "var(--color-text)" }}>
                  Las 3 preguntas sin respuesta
                </h3>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                Las dudas en WhatsApp antes de comprar son ventas en riesgo por falta de confianza visual.
              </p>
              {preguntasClientes.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid #FECACA",
                    borderLeft: "4px solid #DC2626",
                    borderRadius: "8px",
                    padding: "0.875rem 1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "4px" }}>
                    "{p.pregunta}"
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#C83532", fontWeight: 700 }}>
                    Frecuencia: {p.frecuencia} · {p.categoria}
                  </p>
                </div>
              ))}
              <div
                style={{
                  background: "rgba(220,38,38,0.06)",
                  borderRadius: "8px",
                  padding: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#C83532", fontWeight: 600, lineHeight: 1.6 }}>
                  → Solución: Insignias de estado literario claras (Nuevo, Usado — Como Nuevo, Buen Estado) + envío y garantía en cada producto.
                </p>
              </div>
            </div>

            {/* El referente */}
            <div className="card" style={{ padding: "1.75rem" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)", textTransform: "uppercase", marginBottom: "1rem" }}>
                Referente literario moderno
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem", marginBottom: "1rem" }}>
                recyclivre.com
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Diseño limpio, juvenil y accesible",
                  "Botón de 'vender / donar libros'",
                  "Sección de libros a menos de $2",
                  "Sistema de recomendaciones editoriales",
                  "Paleta: verde natural + fondos neutros",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <Star size={14} color="var(--color-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gaps de branding + paleta propuesta */}
          <div>
            {/* Gaps */}
            <div className="card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <AlertTriangle size={24} color="var(--color-accent)" />
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem" }}>
                  Brechas identificadas
                </h3>
              </div>
              {brandingGaps.map((gap) => (
                <div
                  key={gap.gap}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.625rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1rem", color: "var(--color-text)" }}>{gap.gap}</span>
                  <span
                    className={gap.impacto === "alto" ? "badge-danger" : "badge-warning"}
                    style={{ flexShrink: 0, fontSize: "0.85rem" }}
                  >
                    {gap.impacto === "alto" ? "Alta" : "Media"}
                  </span>
                </div>
              ))}
            </div>

            {/* Paleta propuesta */}
            <div className="card card-success" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <Palette size={24} color="var(--color-primary)" />
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem" }}>
                  Paleta literaria clásica
                </h3>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                Inspirada en el cuero de libros antiguos y papel clásico
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { nombre: "Marrón Cuero (Primario)", hex: "#4A3123", descripcion: "Botones, links, identidad" },
                  { nombre: "Crema Antiguo (Fondo)", hex: "#F9F6F0", descripcion: "Páginas de un libro clásico" },
                  { nombre: "Ámbar Literario (Acento)", hex: "#B85B14", descripcion: "Llamados a la acción" },
                  { nombre: "Tinta Oscura (Texto)", hex: "#2C241E", descripcion: "Alta legibilidad" },
                  { nombre: "Marrón Suave (Secundario)", hex: "#5C5248", descripcion: "Textos de apoyo" },
                ].map((color) => (
                  <div
                    key={color.hex}
                    style={{ display: "flex", alignItems: "center", gap: "12px" }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: color.hex,
                        flexShrink: 0,
                        border: color.hex === "#F7F4EF" ? "1px solid var(--color-border)" : "none",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
                      }}
                    />
                    <div>
                      <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.3 }}>{color.nombre}</p>
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                        {color.hex} — {color.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tono de voz */}
        <div className="card" style={{ padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
            <Type size={28} color="var(--color-primary)" />
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem" }}>
              Tono de voz — La esencia de la marca
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              {
                titulo: "Minimalista pero cercano",
                descripcion: "No hablar como librería académica. Hablar como el amigo lector que sabe más que tú.",
                icon: "📚",
              },
              {
                titulo: "Clásico pero accesible",
                descripcion: "El catálogo es de libros clásicos y literarios, pero el tono no debe intimidar a los nativos digitales.",
                icon: "✨",
              },
              {
                titulo: "Confianza sin solemnidad",
                descripcion: "Que dé confianza para comprar. No necesita sonar formal para ser serio.",
                icon: "🤝",
              },
              {
                titulo: "3 palabras clave de Laura",
                descripcion: '"Libros físicos clásicos" — La esencia de la marca en pocas palabras.',
                icon: "💬",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                style={{
                  background: "var(--color-surface-alt)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--color-text)", marginBottom: "0.6rem" }}>{item.titulo}</p>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
