import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diagnostico from "@/components/Diagnostico";
import DineroEnMesa from "@/components/DineroEnMesa";
import Branding from "@/components/Branding";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";

// ✅ BEST PRACTICE: Page es un Server Component — importa Client Components que necesiten interactividad
export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="diagnostico">
        <Diagnostico />
      </section>

      <section id="oportunidades">
        <DineroEnMesa />
      </section>

      <section id="branding">
        <Branding />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      <section id="propuesta">
        <CTA />
      </section>
    </main>
  );
}
