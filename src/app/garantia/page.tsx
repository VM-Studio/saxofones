import { HeroGarantia } from "./components/HeroGarantia";
import { TestimoniosGarantia } from "./components/TestimoniosGarantia";
import { CTAGarantia } from "./components/CTAGarantia";

export const metadata = {
  title: "Garantía Total en Saxofones | DR BRASS",
  description: "Descubre nuestra garantía integral para todos nuestros instrumentos. Cobertura completa, reparación, mantenimiento y tranquilidad garantizada.",
  openGraph: {
    title: "Garantía Total en Saxofones | DR BRASS",
    description: "Descubre nuestra garantía integral para todos nuestros instrumentos. Cobertura completa, reparación, mantenimiento y tranquilidad garantizada.",
  },
};

export default function GarantiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroGarantia />
      <TestimoniosGarantia />
      <CTAGarantia />
    </main>
  );
}
