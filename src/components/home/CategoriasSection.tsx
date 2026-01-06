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
    <section className="py-20 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-drgold/80 text-sm font-medium tracking-[0.2em] uppercase">
            Explora nuestro catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold mt-2 uppercase tracking-wide">
            Categorías
          </h2>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoriasConProductos.map((cat) => {
            const count = counts.find(c => c.categoria === cat.value)?.count || 0;
            
            return (
              <Link
                key={cat.value}
                href={`/productos?categoria=${cat.value}`}
                className="group relative bg-zinc-950 border border-zinc-800 hover:border-drgold/50 p-6 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-3">
                    {CATEGORY_ICONS[cat.value] || "🎵"}
                  </span>
                  <h3 className="text-white font-medium group-hover:text-drgold transition-colors">
                    {cat.label}
                  </h3>
                  <span className="text-zinc-600 text-sm mt-1">
                    {count} {count === 1 ? "producto" : "productos"}
                  </span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-drgold/0 group-hover:border-drgold/50 transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-drgold/0 group-hover:border-drgold/50 transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
