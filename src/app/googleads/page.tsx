import { HeroGoogleAds } from "./components/HeroGoogleAds";
import { BannerEnvios } from "./components/BannerEnvios";
import { ProductosDestacadosCarruselGoogleAds } from "./components/ProductosDestacadosCarruselGoogleAds";
import { CategoriasGoogleAds } from "./components/CategoriasGoogleAds";

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <HeroGoogleAds />

      {/* Banner sobre Envíos */}
      <BannerEnvios />

      {/* Productos Destacados */}
      <ProductosDestacadosCarruselGoogleAds />

      {/* Tarjetas de Categorías */}
      <CategoriasGoogleAds />
    </main>
  );
}