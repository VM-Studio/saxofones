import {
  HeroSection,
  ProductosDestacadosSection,
  ServiciosSection,
  SobreNosotrosSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen bg-drblack">
      {/* Hero con productos destacados */}
      <HeroSection />

      {/* Servicios */}
      <ServiciosSection />

      {/* Productos destacados */}
      <ProductosDestacadosSection />

      {/* Sobre nosotros */}
      <SobreNosotrosSection />

    </main>
  );
}
