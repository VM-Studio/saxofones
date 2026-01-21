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

export async function CategoriasSection() {
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
    <section className="py-24 bg-cream-dark relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-white px-4 py-1.5 rounded-full mb-4">
            Explora nuestro catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Categorías
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
        </div>

        {/* Grid de categorías - MEJORADO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categoriasConProductos.map((cat, idx) => {
            const count = counts.find(c => c.categoria === cat.value)?.count || 0;
            
            return (
              <Link
                key={cat.value}
                href={`/productos?categoria=${cat.value}`}
                className="group relative bg-white rounded-2xl border-2 border-brown-light/20 hover:border-gold/60 p-8 transition-all duration-500 hover:shadow-elegant-lg overflow-hidden"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Fondo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Emoji con animación */}
                  <div className="text-5xl mb-4 transition-transform duration-500">
                    {CATEGORY_ICONS[cat.value] || "🎵"}
                  </div>
                  
                  <h3 className="text-brown-dark font-bold text-base mb-2 group-hover:text-gold transition-colors">
                    {cat.label}
                  </h3>
                  
                  <span className="text-charcoal-light text-sm font-medium bg-cream px-3 py-1 rounded-full">
                    {count} {count === 1 ? "producto" : "productos"}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 text-brown-light group-hover:text-gold transition-colors">
                  <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
