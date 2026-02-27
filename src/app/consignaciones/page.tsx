import { HeroConsignaciones } from "./components/HeroConsignaciones";
import { VentajasConsignaciones } from "./components/VentajasConsignaciones";
import { ProcesoConsignaciones } from "./components/ProcesoConsignaciones";
import { CTAConsignaciones } from "./components/CTAConsignaciones";

export const metadata = {
  title: "Programa de Consignaciones | DR BRASS",
  description: "Vende tu saxofón a través de nuestro programa de consignación. 90% de comisión, marketing profesional, pago seguro. Sin complicaciones.",
  openGraph: {
    title: "Programa de Consignaciones | DR BRASS",
    description: "Vende tu saxófón sin complicaciones. Marketing profesional, pago seguro.",
  },
};

export default function ConsignacionesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroConsignaciones />

      {/* Ventajas */}
      <VentajasConsignaciones />

      {/* Proceso */}
      <ProcesoConsignaciones />

      {/* CTA Final */}
      <CTAConsignaciones />
    </main>
  );
}
