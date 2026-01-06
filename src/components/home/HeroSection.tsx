import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/actions/products";
import FotoSaxo1 from "../../../public/sax1.jpeg";
import FotoSaxo2 from "../../../public/sax2.jpeg";
import FotoSaxo3 from "../../../public/sax3.jpeg";

export async function HeroSection() {
  const result = await getFeaturedProducts(4);
  const productos = result.success ? result.data || [] : [];

  // ========== MOCK DATA (solo se usa si no hay productos reales) ==========
  const mockProductos = [
    {
      _id: "mock1",
      slug: "saxofon-alto-yanagisawa-awo10",
      nombre: "Yanagisawa A-WO10 Alto Saxophone",
      precio: 2850000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo1.src, // usamos la imagen estática que ya importaste
      destacado: true,
    },
    {
      _id: "mock2",
      slug: "selmer-reference-54-tenor",
      nombre: "Selmer Reference 54 Tenor",
      precio: 4200000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo2.src,
      destacado: false,
    },
    {
      _id: "mock3",
      slug: "yamaha-yas-82z",
      nombre: "Yamaha YAS-82Z Custom Z Alto",
      precio: 1980000,
      moneda: "ARS",
      imagenPrincipal: FotoSaxo3.src,
      destacado: true,
    },

  ];

  // Usamos mock solo si no hay productos reales
  const productosAMostrar = productos.length > 0 ? productos.slice(0, 4) : mockProductos;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-drblack border-b border-zinc-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Texto principal */}
          <div className="flex flex-col gap-6 py-12 lg:py-0">
            <div className="space-y-2">
              <span className="text-drgold/80 text-sm font-medium tracking-[0.2em] uppercase">
                Rosario, Argentina
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-drgold leading-[1.1] tracking-wide uppercase">
                Saxofones y Vientos Premium
              </h1>
            </div>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              Asesoramiento profesional para saxofonistas: compra, venta, canje y consignaciones de saxofones e instrumentos de viento.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link
                href="/contacto"
                className="px-8 py-4 text-base font-medium bg-drgold text-drblack hover:bg-drgold/90 transition-colors text-center"
              >
                Contactar
              </Link>
              <Link
                href="/productos"
                className="px-8 py-4 text-base font-medium border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-colors text-center"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>

          {/* Grid de productos destacados */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {productosAMostrar.map((producto, index) => (
                <Link
                  key={producto._id}
                  href={
                    productos.length > 0
                      ? `/productos/${producto.slug}`
                      : "/productos" // si es mock, lleva al catálogo general
                  }
                  className={`group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden ${
                    index === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                  }`}
                >
                  <div className="absolute inset-0 p-4 flex items-center justify-center">
                    <Image
                      src={producto.imagenPrincipal}
                      alt={producto.nombre}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay con info */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <p className="text-white text-sm font-medium truncate">
                      {producto.nombre}
                    </p>
                    <p className="text-drgold text-sm font-bold">
                      ${producto.precio.toLocaleString()} {producto.moneda}
                    </p>
                  </div>

                  {producto.destacado && (
                    <span className="absolute top-3 right-3 bg-drgold text-drblack text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      Destacado
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Decorador */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-drgold/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}