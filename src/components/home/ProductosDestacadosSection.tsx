import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/actions/products";
import { CATEGORIAS } from "@/types/product";
import FotoSaxo from "../../../public/saxo.png"; // Reutilizamos la misma imagen estática
import FotoSaxo1 from "../../../public/sax1.jpeg";
import FotoSaxo2 from "../../../public/sax2.jpeg";
import FotoSaxo3 from "../../../public/sax3.jpeg";
export async function ProductosDestacadosSection() {
  const result = await getProducts({ activo: true, destacado: true }, 1, 6);
  const productos = result.success ? result.data?.data || [] : [];

  // ========== MOCK DATA para desarrollo ==========
  const mockProductos = [
    {
      _id: "mock1",
      slug: "yanagisawa-awo10",
      nombre: "Yanagisawa A-WO10 Alto Saxophone",
      marca: "Yanagisawa",
      categoria: "alto",
      descripcionCorta: "Alto profesional lacado en oro. Sonido cálido y proyección excepcional.",
      precio: 2850000,
      precioAnterior: 3200000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo1.src,
    },
    {
      _id: "mock2",
      slug: "selmer-reference-54",
      nombre: "Selmer Reference 54 Tenor",
      marca: "Selmer Paris",
      categoria: "tenor",
      descripcionCorta: "Inspirado en el legendario Mark VI. Tono oscuro y centrado.",
      precio: 4200000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo2.src,
    },
    {
      _id: "mock3",
      slug: "yamaha-yas-82z",
      nombre: "Yamaha YAS-82Z Custom Z",
      marca: "Yamaha",
      categoria: "alto",
      descripcionCorta: "Alto Custom Z con mecánica mejorada y respuesta rápida.",
      precio: 1980000,
      precioAnterior: 2200000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo3.src,
    },
    {
      _id: "mock4",
      slug: "keilwerth-sx90r",
      nombre: "Keilwerth SX90R Shadow",
      marca: "Julius Keilwerth",
      categoria: "tenor",
      descripcionCorta: "Acabado negro níquel. Sonido potente y contemporáneo.",
      precio: 3500000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo.src,
    },

  ];

  // Usamos productos reales si existen, si no, mock
  const productosAMostrar = productos.length > 0 ? productos : mockProductos;

  // Siempre renderizamos la sección (incluso con mock)
  return (
    <section className="py-20 bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-drgold/80 text-sm font-medium tracking-[0.2em] uppercase">
              Selección Premium
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold mt-2 uppercase tracking-wide">
              Instrumentos Destacados
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group"
          >
            Ver catálogo completo
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosAMostrar.map((producto) => {
            const categoriaLabel = CATEGORIAS.find(c => c.value === producto.categoria)?.label || producto.categoria || "Saxofón";

            return (
              <Link
                key={producto._id}
                href={
                  productos.length > 0
                    ? `/productos/${producto.slug}`
                    : "/productos" // Si es mock, va al catálogo general
                }
                className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative aspect-square bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                  <Image
                    src={producto.imagenPrincipal || FotoSaxo}
                    alt={producto.nombre}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {producto.precioAnterior && (
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        Oferta
                      </span>
                    )}
                  </div>
                  <span className="absolute top-3 right-3 bg-zinc-800/90 text-zinc-400 text-[10px] font-medium px-2 py-1 uppercase tracking-wider">
                    {categoriaLabel}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                    {producto.marca}
                  </span>
                  <h3 className="text-white font-medium mt-1 mb-2 group-hover:text-drgold transition-colors line-clamp-1">
                    {producto.nombre}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                    {producto.descripcionCorta || "Instrumento profesional de alta gama con excelentes prestaciones."}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      {producto.precioAnterior && (
                        <span className="text-zinc-600 line-through text-sm">
                          ${producto.precioAnterior.toLocaleString()}
                        </span>
                      )}
                      <span className="text-drgold font-bold text-lg">
                        ${producto.precio.toLocaleString()}
                      </span>
                      <span className="text-zinc-500 text-sm">{producto.moneda}</span>
                    </div>
                    <span className="text-zinc-600 group-hover:text-drgold transition-colors">
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