"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { revenueData, ga4Data } from "@/lib/data";
import { Eye, MousePointerClick, Clock, TrendingDown, Wifi } from "lucide-react";

function formatMillones(value: number): string {
  return `$${(value / 1000000).toFixed(1)}M`;
}

// 📚 LEARN: Tooltip personalizado para Recharts — recibe los datos del punto activo
const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#2C1E16",
          border: "1px solid rgba(110,75,57,0.4)",
          borderRadius: "10px",
          padding: "0.875rem 1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <p style={{ color: "#D4C7BA", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>{label}</p>
        <p style={{ color: "#FFFFFF", fontSize: "1.125rem", fontWeight: 700 }}>
          {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export default function Diagnostico() {
  const maxSesiones = Math.max(...ga4Data.canales.map((c) => c.sesiones));

  return (
    <section
      style={{
        background: "var(--color-bg)",
        padding: "5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header de sección */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">02 — Diagnóstico</p>
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
            La realidad detrás de los números
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px", lineHeight: 1.8, fontSize: "1.125rem" }}>
            Los datos revelan tres problemas estructurales. Corregirlos puede duplicar la conversión en 90 días.
          </p>
        </div>

        {/* Gráfico de ingresos */}
        <div className="card" style={{ marginBottom: "2rem", padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>
                Ingresos mensuales — Enero a Julio 2026
              </h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem" }}>
                Tendencia de caída sostenida de 6 meses consecutivos
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#FEF2F2",
                border: "1px solid #FECACA",
                borderRadius: "8px",
                padding: "8px 14px",
              }}
            >
              <TrendingDown size={16} color="#DC2626" />
              <span style={{ color: "#DC2626", fontWeight: 700, fontSize: "0.875rem" }}>-38% en 6 meses</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="gradientIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4A3123" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4A3123" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E7E5E4" vertical={false} />
              <XAxis
                dataKey="mes"
                tick={{ fill: "#57534E", fontSize: 12, fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={formatMillones}
                tick={{ fill: "#57534E", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={55}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="ingresos"
                stroke="#4A3123"
                strokeWidth={2.5}
                fill="url(#gradientIngresos)"
                dot={{ fill: "#4A3123", r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "#B85B14", strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Dos columnas: Canales GA4 + 3 problemas estructurales */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          {/* Canales de tráfico */}
          <div className="card">
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem", marginBottom: "0.5rem" }}>
              Tráfico por canal
            </h3>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              May–Ago 2026 · Fuente: GA4
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {ga4Data.canales.map((canal) => (
                <div key={canal.canal}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text)" }}>{canal.canal}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                      {(canal.sesiones / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div style={{ background: "var(--color-border)", borderRadius: "999px", height: "6px" }}>
                    <div
                      style={{
                        background: canal.canal === "Directo" ? "var(--color-primary)" : "var(--color-primary-light)",
                        borderRadius: "999px",
                        height: "100%",
                        width: `${(canal.sesiones / maxSesiones) * 100}%`,
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement por navegador — EL INSIGHT CLAVE */}
          <div className="card card-success">
            <div className="badge-success" style={{ marginBottom: "0.875rem" }}>
              💡 Insight clave
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem", marginBottom: "0.5rem" }}>
              Los usuarios de Instagram son los más engaged
            </h3>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              Tiempo promedio en el sitio por origen
            </p>
            {ga4Data.engagementPorNavegador.map((nav) => (
              <div key={nav.navegador} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text)" }}>{nav.navegador}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: nav.navegador.includes("Instagram") ? "var(--color-primary)" : "var(--color-text-secondary)" }}>
                    {Math.floor(nav.tiempoSeg / 60)}m {nav.tiempoSeg % 60}s
                  </span>
                </div>
                <div style={{ background: "rgba(45,80,22,0.12)", borderRadius: "999px", height: "6px" }}>
                  <div
                    style={{
                      background: nav.color,
                      borderRadius: "999px",
                      height: "100%",
                      width: `${(nav.tiempoSeg / 167) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
            <p style={{ fontSize: "0.95rem", color: "var(--color-primary)", fontWeight: 600, marginTop: "1rem", lineHeight: 1.5 }}>
              → Los usuarios de Instagram pasan 3× más tiempo que los de Chrome.
              La tienda no está convirtiendo este interés genuino.
            </p>
          </div>
        </div>

        {/* Los 3 problemas estructurales */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {[
            {
              numero: "01",
              icono: <Eye size={20} />,
              titulo: "0 conversiones GA4",
              descripcion:
                "Google Analytics muestra $0. Gastas $2.7M/mes en pauta sin saber qué canal genera ventas reales.",
              severidad: "Crítico",
              color: "danger",
            },
            {
              numero: "02",
              icono: <MousePointerClick size={20} />,
              titulo: "El 63% rebota sin interactuar",
              descripcion:
                "La tasa de conversión es 0.6% (5× menor al sector). Cada 100 personas, menos de 1 compra.",
              severidad: "Crítico",
              color: "danger",
            },
            {
              numero: "03",
              icono: <Clock size={20} />,
              titulo: "Los clientes no vuelven",
              descripcion:
                "Retención semanal de 1.2%. Sin email marketing o programa de lealtad, cada venta es de una sola vez.",
              severidad: "Crítico",
              color: "danger",
            },
          ].map((problema) => (
            <div key={problema.numero} className="card card-danger" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div
                  style={{
                    background: "rgba(220,38,38,0.15)",
                    borderRadius: "10px",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#DC2626",
                  }}
                >
                  {problema.icono}
                </div>
                <span className="badge-danger">⚡ {problema.severidad}</span>
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.875rem",
                }}
              >
                {problema.titulo}
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                {problema.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
