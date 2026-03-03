import { HeroAsesoramiento } from "./components/HeroAsesoramiento";
import { ServiciosAsesoramiento } from "./components/ServiciosAsesoramiento";
import { CTAAsesoramiento } from "./components/CTAAsesoramiento";

export const metadata = {
  title: "Asesoramiento Profesional en Saxofones | DR BRASS",
  description: "Obtén asesoramiento experto de especialistas con 20+ años de experiencia. Encuentra el saxofón perfecto para ti sin costo de consulta inicial.",
  openGraph: {
    title: "Asesoramiento Profesional en Saxofones | DR BRASS",
    description: "Obtén asesoramiento experto de especialistas con 20+ años de experiencia.",
  },
};

export default function AsesoramientoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroAsesoramiento />

      {/* Servicios */}
      <ServiciosAsesoramiento />

      {/* CTA Final */}
      <CTAAsesoramiento />
    </main>
  );
}
