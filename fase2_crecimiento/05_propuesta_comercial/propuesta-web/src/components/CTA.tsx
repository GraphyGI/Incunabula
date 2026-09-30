"use client";

import { Mail, Calendar, CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const urgencias = [
    {
      icono: "🛒",
      titulo: "Carritos abandonados — Sistema detenido",
      detalle: "$2.846.900 en carritos recuperables en este momento. Los correos de recuperación no se están enviando.",
      accion: "Reactivar en Fase 01",
    },
    {
      icono: "📊",
      titulo: "GA4 sin tracking de e-commerce",
      detalle: "Se están invirtiendo $2.7M/mes en pauta sin saber qué canal genera las ventas reales.",
      accion: "Configurar en Fase 01",
    },
    {
      icono: "📧",
      titulo: "4.847 clientes sin contactar nunca",
      detalle: "La base de clientes más valiosa — construida en años — nunca ha recibido un email de marketing.",
      accion: "Activar en Fase 03",
    },
  ];

  const loQueIncluyeElProyecto = [
    "Diagnóstico técnico completo y auditoría de performance",
    "Configuración de GA4 e-commerce tracking + Clarity heatmaps",
    "Reactivación y optimización de correos de carritos abandonados",
    "Primera campaña de email a 4.847 clientes existentes",
    "Design System completo (paleta, tipografía, guía de estilos)",
    "Rediseño del PDP con sistema de estado de libros usados",
    "Plantillas de correos transaccionales con branding",
    "Reportes mensuales de seguimiento de KPIs",
  ];

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #2C1E16 0%, #4A3123 60%, #6E4B39 100%)",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo decorativo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(184,91,20,0.12) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(110,75,57,0.1) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#D4C7BA",
              marginBottom: "1rem",
            }}
          >
            06 — Próximos pasos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Tres problemas urgentes.
            <br />
            <span style={{ color: "#D4C7BA" }}>Un plan claro para resolverlos.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            Los ingresos llevan 6 meses cayendo. Mientras no se contrate esta fase, el dinero
            que está sobre la mesa seguirá sin recogerse.
          </p>
        </div>

        {/* Urgencias */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {urgencias.map((u) => (
            <div
              key={u.titulo}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "1.75rem",
                transition: "background 0.2s ease",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{u.icono}</div>
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.0625rem",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {u.titulo}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                {u.detalle}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(180,83,9,0.25)",
                  border: "1px solid rgba(180,83,9,0.4)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#FCD34D",
                }}
              >
                <ArrowRight size={12} />
                {u.accion}
              </div>
            </div>
          ))}
        </div>

        {/* Lo que incluye el proyecto */}
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "20px",
            padding: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.5rem",
              color: "#FFFFFF",
              marginBottom: "0.5rem",
            }}
          >
            ¿Qué incluye esta fase del proyecto?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "2rem" }}>
            Alcance propuesto — detalle de inversión en reunión
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
            {loQueIncluyeElProyecto.map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <CheckCircle2 size={16} color="#D4C7BA" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
            ¿Tienes preguntas sobre el alcance o los tiempos?
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/prototipo"
              className="btn-accent"
              style={{ fontSize: "1.05rem", padding: "14px 28px" }}
              id="cta-ver-prototipo"
            >
              Ver Prototipo Interactivo
            </Link>
            <a
              href="mailto:contacto@incunabula.co"
              className="btn-primary"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "1rem",
              }}
              id="cta-email-propuesta"
            >
              <Mail size={18} />
              Hablemos del proyecto
            </a>
            <a
              href="#roadmap"
              className="btn-primary"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "1rem",
              }}
              id="cta-revisar-roadmap"
            >
              <Calendar size={18} />
              Revisar el roadmap
            </a>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.75rem",
              marginTop: "2rem",
              letterSpacing: "0.04em",
            }}
          >
            Propuesta preparada por GraphyGI para Incunabula Librería · Agosto 2026
          </p>
        </div>
      </div>
    </section>
  );
}
