import Prototipo from "@/components/Prototipo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ✅ BEST PRACTICE: El prototipo ocupa toda la pantalla, sin barra superior que robe espacio.
// El botón flotante da acceso a volver sin interrumpir el layout.
export default function PrototipoPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Botón flotante: volver a la propuesta */}
      <Link
        href="/"
        id="btn-volver-propuesta"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(44,30,22,0.95)",
          color: "#D4C7BA",
          textDecoration: "none",
          fontSize: "0.82rem",
          fontWeight: 700,
          padding: "12px 20px",
          borderRadius: "999px",
          border: "1px solid rgba(212,199,186,0.25)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          letterSpacing: "0.03em",
          transition: "all 0.2s ease",
        }}
      >
        <ArrowLeft size={16} />
        Volver a la Propuesta
      </Link>

      <Prototipo />
    </main>
  );
}
