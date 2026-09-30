import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 📚 LEARN: Next.js carga fuentes de Google de forma optimizada (sin layout shift)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Propuesta de Crecimiento — Incunabula Librería",
  description:
    "Diagnóstico y plan estratégico basado en datos para el crecimiento de Incunabula.co. Análisis de e-commerce, UX, branding y conversión.",
  robots: "noindex, nofollow", // 📚 LEARN: noindex para que no aparezca en Google (es un documento interno)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
