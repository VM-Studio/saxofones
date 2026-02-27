import { HeroLutheria } from "./components/HeroLutheria";
import { ServiciosLutheria } from "./components/ServiciosLutheria";
import { ProcesoLutheria } from "./components/ProcesoLutheria";
import { CTALutheria } from "./components/CTALutheria";

export const metadata = {
  title: "Luthería Profesional | Reparación y Restauración de Saxofones | DR BRASS",
  description: "Servicios profesionales de luthería. Reparación, restauración y personalización de saxofones por maestro lutier con 25+ años de experiencia.",
  openGraph: {
    title: "Luthería Profesional | DR BRASS",
    description: "Reparación, restauración y personalización de saxofones con garantía.",
  },
};

export default function LuthieriaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroLutheria />

      {/* Servicios */}
      <ServiciosLutheria />

      {/* Proceso */}
      <ProcesoLutheria />

      {/* CTA Final */}
      <CTALutheria />
    </main>
  );
}
