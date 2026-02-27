import { HeroCanjes } from "./components/HeroCanjes";
import { ProcesoCanjes } from "./components/ProcesoCanjes";
import { CTACanjes } from "./components/CTACanjes";

export const metadata = {
  title: "Programa de Canjes | DR BRASS",
  description: "Intercambia tu saxofón por uno nuevo. Los mejores valores de cambio del mercado. Evaluación profesional y proceso transparente.",
  openGraph: {
    title: "Programa de Canjes | DR BRASS",
    description: "Intercambia tu saxófón por uno nuevo. Los mejores valores de cambio del mercado.",
  },
};

export default function CanjesesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroCanjes />

      {/* Proceso */}
      <ProcesoCanjes />

      {/* CTA Final */}
      <CTACanjes />
    </main>
  );
}
