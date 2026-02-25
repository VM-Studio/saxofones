import Link from "next/link";
import { getProductCountByCategory } from "@/actions/products";
import { CATEGORIAS } from "@/types/product";

const CATEGORY_ICONS: Record<string, string> = {
  "vintages": "🎷",
  "punk-jazz-customshop": "🔧",
  "boquillas": "🎵",
  "articulos-punk-jazz": "⚡",
  "altos": "🎺",
  "tenores": "🎻",
  "sopranos": "🎼",
  "baritonos": "📯",
  "accesorios": "🛠️",
};

export async function CategoriasGoogleAds() {
  const result = await getProductCountByCategory();
  const counts = result.success ? result.data || [] : [];

  // Solo mostrar categorías con productos
  const categoriasConProductos = CATEGORIAS.filter(cat =>
    counts.some(c => c.categoria === cat.value && c.count > 0)
  );

  if (categoriasConProductos.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gold/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-brown/5 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-cream px-4 py-1.5 rounded-full mb-4 shadow-md">
            Explora por categoría
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Encuentra tu Instrumento Ideal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
          <p className="text-lg text-charcoal-light mt-6 max-w-2xl mx-auto">
            Navega por nuestras categorías especializadas y encuentra exactamente lo que buscas
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categoriasConProductos.map((cat, idx) => {
            const count = counts.find(c => c.categoria === cat.value)?.count || 0;
            const icon = CATEGORY_ICONS[cat.value] || "🎵";

            return (
              <Link
                key={cat.value}
                href={`/productos?categoria=${cat.value}`}
                className="group relative bg-gradient-to-br from-white to-cream hover:from-cream hover:to-cream-dark transition-all duration-300 p-6 shadow-md hover:shadow-elegant transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-full blur-xl group-hover:bg-gold/20 transition-colors"></div>

                <div className="relative z-10 text-center space-y-4">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-brown-dark group-hover:text-gold transition-colors">
                    {cat.label}
                  </h3>

                  {/* Count */}
                  <p className="text-sm text-charcoal-light">
                    {count} {count === 1 ? 'producto' : 'productos'}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <p className="text-charcoal-light mb-6">
            ¿No encuentras lo que buscas? Contáctanos para asesoramiento personalizado
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-brown-dark font-semibold px-8 py-3 transition-all shadow-md hover:shadow-lg"
          >
            Consultar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}