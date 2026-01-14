import Image from "next/image";
import Link from "next/link";
import { getProductoByIdFromDB } from "@/data/productos-db";
import { CATEGORIAS } from "@/types/product";
import type { Product } from "@/types/product";

export async function ProductosDestacadosSection() {
  // Obtener específicamente los productos 001, 002 y 003
  const producto1 = getProductoByIdFromDB('producto-001');
  const producto2 = getProductoByIdFromDB('producto-002');
  const producto3 = getProductoByIdFromDB('producto-019');
  
  const productos = [producto1, producto2, producto3].filter((p): p is Product => p !== undefined);

  return (
    <section className="py-20 bg-white border-y border-brown-light/20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-brown text-sm font-medium tracking-wider uppercase">
              Selección Premium
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mt-2 tracking-wide">
              Instrumentos Destacados
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-charcoal-light hover:text-gold text-sm font-medium transition-colors flex items-center gap-2 group"
          >
            Ver catálogo completo
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto, index) => {
            const categoriaLabel = CATEGORIAS.find(c => c.value === producto.categoria)?.label || producto.categoria || "Saxofón";
            // Para el tercer producto (barítono), usar más padding
            const imageClassName = index === 2 
              ? "object-contain p-12 group-hover:scale-105 transition-transform duration-500"
              : "object-contain p-8 group-hover:scale-105 transition-transform duration-500";

            return (
              <Link
                key={producto._id}
                href={`/productos/${producto.slug}`}
                className="group bg-white border border-brown-light/30 hover:border-gold/50 transition-all duration-300 rounded-xl overflow-hidden shadow-elegant hover:shadow-elegant-lg"
              >
                {/* Imagen */}
                <div className="relative aspect-square bg-cream border-b border-brown-light/20 overflow-hidden">
                  <Image
                    src={producto.imagenPrincipal}
                    alt={producto.nombre}
                    fill
                    className={imageClassName}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {producto.precioAnterior && (
                      <span className="bg-gold text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                        Oferta
                      </span>
                    )}
                  </div>
                  <span className="absolute top-3 right-3 bg-white/90 text-brown text-[10px] font-medium px-2 py-1 uppercase tracking-wider rounded">
                    {categoriaLabel}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 bg-white">
                  <span className="text-brown text-xs font-medium uppercase tracking-wider">
                    {producto.marca}
                  </span>
                  <h3 className="text-brown-dark font-semibold mt-1 mb-2 group-hover:text-gold transition-colors line-clamp-1">
                    {producto.nombre}
                  </h3>
                  <p className="text-charcoal-light text-sm mb-4 line-clamp-2">
                    {producto.descripcionCorta}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      {producto.precioAnterior && (
                        <span className="text-charcoal-light line-through text-sm">
                          {producto.moneda} {producto.precioAnterior.toLocaleString()}
                        </span>
                      )}
                      <span className="text-gold font-bold text-xl">
                        {producto.moneda} {producto.precio.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-brown group-hover:text-gold transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
