"use client";

import { cartAbandonmentData, kpiData, socialData } from "@/lib/data";
import { ShoppingCart, Mail, Heart, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function DineroEnMesa() {
  const totalCarritosDetectados =
    cartAbandonmentData.recuperados +
    cartAbandonmentData.perdidos +
    cartAbandonmentData.recuperables;

  return (
    <section
      style={{
        background: "var(--color-surface-alt, #F0EDE8)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">03 — Oportunidades Inmediatas</p>
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
            El dinero que ya está sobre la mesa
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px", lineHeight: 1.8, fontSize: "1.125rem" }}>
            Tres fuentes de ingreso identificadas que pueden activarse sin inversión significativa.
          </p>
        </div>

        {/* OPORTUNIDAD 1: Carritos abandonados */}
        <div
          className="card"
          style={{
            marginBottom: "2rem",
            padding: "2.5rem",
            border: "1px solid #FDE68A",
            background: "linear-gradient(135deg, #FFFFFF 60%, #FFFBEB 100%)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  background: "var(--color-accent-light)",
                  borderRadius: "12px",
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                }}
              >
                <ShoppingCart size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  Carritos abandonados
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                  Sistema activo — pero los correos están detenidos
                </p>
              </div>
            </div>
            <div className="badge-warning">⏸ Sistema en pausa</div>
          </div>

          {/* Métricas de carritos */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {[
              {
                label: "Ya recuperados",
                value: formatCOP(cartAbandonmentData.ingresosRecuperados),
                sub: `${cartAbandonmentData.recuperados} pedidos`,
                icon: <CheckCircle2 size={16} />,
                color: "var(--color-primary)",
                bg: "var(--color-primary-muted)",
              },
              {
                label: "Recuperables AHORA",
                value: formatCOP(cartAbandonmentData.ingresosRecuperables),
                sub: `${cartAbandonmentData.recuperables} carritos activos`,
                icon: <AlertCircle size={16} />,
                color: "var(--color-accent)",
                bg: "var(--color-accent-light)",
              },
              {
                label: "Tasa de recuperación",
                value: `${cartAbandonmentData.tasaRecuperacion}%`,
                sub: "Promedio industria: 5–15%",
                icon: <TrendingUp size={16} />,
                color: "var(--color-primary)",
                bg: "var(--color-primary-muted)",
              },
              {
                label: "Carritos perdidos",
                value: `${cartAbandonmentData.perdidos}`,
                sub: "No se pudo recuperar",
                icon: <ShoppingCart size={16} />,
                color: "#DC2626",
                bg: "#FEF2F2",
              },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: m.bg,
                  borderRadius: "12px",
                  padding: "1.25rem",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: m.color, marginBottom: "0.5rem" }}>
                  {m.icon}
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {m.label}
                  </span>
                </div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: m.color }}>{m.value}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "4px" }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Barra de progreso de recuperación */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-secondary)" }}>
                Distribución de {totalCarritosDetectados} carritos detectados
              </span>
            </div>
            <div style={{ display: "flex", height: "12px", borderRadius: "999px", overflow: "hidden", gap: "2px" }}>
              <div
                style={{
                  width: `${(cartAbandonmentData.recuperados / totalCarritosDetectados) * 100}%`,
                  background: "var(--color-primary)",
                }}
                title="Recuperados"
              />
              <div
                style={{
                  width: `${(cartAbandonmentData.recuperables / totalCarritosDetectados) * 100}%`,
                  background: "var(--color-accent)",
                }}
                title="Recuperables"
              />
              <div
                style={{
                  width: `${(cartAbandonmentData.perdidos / totalCarritosDetectados) * 100}%`,
                  background: "#FCA5A5",
                }}
                title="Perdidos"
              />
            </div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "10px", flexWrap: "wrap" }}>
              {[
                { color: "var(--color-primary)", label: `Recuperados (${cartAbandonmentData.recuperados})` },
                { color: "var(--color-accent)", label: `Recuperables (${cartAbandonmentData.recuperables})` },
                { color: "#FCA5A5", label: `Perdidos (${cartAbandonmentData.perdidos})` },
              ].map((l) => (
                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: l.color }} />
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dos columnas: Email marketing + Instagram */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>

          {/* OPORTUNIDAD 2: Email marketing */}
          <div className="card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div
                style={{
                  background: "var(--color-primary-muted)",
                  borderRadius: "12px",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem" }}>
                  Email marketing
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Costo operativo: $0</p>
              </div>
            </div>

            <div
              style={{
                background: "var(--color-primary-muted)",
                borderRadius: "12px",
                padding: "1.25rem",
                marginBottom: "1.25rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-primary)" }}>
                4.847
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                clientes registrados en WooCommerce
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: "4px" }}>
                Nunca han recibido un correo de marketing
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "1 email de reactivación → ~3–5% conversión = ~240 ventas",
                "Newsletter mensual a costo $0 (Plan gratuito actual)",
                "LTV actual: " + formatCOP(kpiData.ltv) + " por cliente",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OPORTUNIDAD 3: Instagram → tienda */}
          <div className="card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div
                style={{
                  background: "#FFF0F9",
                  borderRadius: "12px",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#BE185D",
                }}
              >
                <Heart size={22} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem" }}>
                  Instagram → Tienda
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>83.400 seguidores subutilizados</p>
              </div>
            </div>

            {/* Ratio seguidores vs sesiones */}
            <div
              style={{
                background: "#FFF0F9",
                border: "1px solid #FBCFE8",
                borderRadius: "12px",
                padding: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#BE185D" }}>Seguidores</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#BE185D" }}>83.400</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-secondary)" }}>Sesiones orgánicas/3 meses</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-secondary)" }}>4.900</span>
              </div>
              <div style={{ background: "#FBCFE8", borderRadius: "999px", height: "6px", marginTop: "10px" }}>
                <div style={{ background: "#BE185D", borderRadius: "999px", height: "100%", width: `${(4900 / 83400) * 100}%` }} />
              </div>
              <p style={{ fontSize: "0.75rem", color: "#BE185D", fontWeight: 700, marginTop: "8px" }}>
                Solo el 5.9% de seguidores visita la tienda
              </p>
            </div>

            <div
              style={{
                background: "var(--color-primary-muted)",
                borderRadius: "12px",
                padding: "1.25rem",
                border: "1px solid #D4C7BA",
              }}
            >
              <p style={{ fontSize: "0.95rem", color: "var(--color-primary)", fontWeight: 700, marginBottom: "8px" }}>
                ✨ El potencial está ahí
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                Los usuarios de Instagram ya son los más engaged (2:47 min vs 54 seg).
                Con un PDP mejorado y badges de estado, esta audiencia se convertirá en
                el canal orgánico más rentable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
