import { HeroConsignaciones } from "./components/HeroConsignaciones";
import { ProcesoConsignaciones } from "./components/ProcesoConsignaciones";

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

      {/* Proceso */}
      <ProcesoConsignaciones />
    </main>
  );
}
