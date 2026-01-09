import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProductsStatic } from '@/actions/products-static';

export async function ProductosDestacados() {
  const result = await getFeaturedProductsStatic(6);
  const productos = result.success ? result.data || [] : [];

  if (productos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-drmatte">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold text-center mb-12 tracking-wider uppercase">
          Instrumentos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <Link
              key={producto._id}
              href={`/productos/${producto.slug}`}
              className="card p-8 flex flex-col items-center transition-transform hover:scale-105 bg-drblack rounded shadow-dr border-2 border-drgold group"
            >
              <div className="relative w-full aspect-square mb-6 rounded bg-drblack border-2 border-drgold overflow-hidden">
                {producto.imagenPrincipal ? (
                  <Image
                    src={producto.imagenPrincipal}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-drgray">
                    Sin imagen
                  </div>
                )}
                {producto.precioAnterior && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                    OFERTA
                  </span>
                )}
              </div>
              <h3 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">
                {producto.nombre}
              </h3>
              <p className="text-base text-drgray mb-4 text-center line-clamp-2">
                {producto.descripcionCorta}
              </p>
              <div className="flex items-center gap-2 mb-4">
                {producto.precioAnterior && (
                  <span className="text-drgray line-through text-sm">
                    ${producto.precioAnterior.toLocaleString()}
                  </span>
                )}
                <span className="text-lg font-bold text-drgold">
                  ${producto.precio.toLocaleString()} {producto.moneda}
                </span>
              </div>
              <span className="btn px-6 py-2 text-base font-bold border-drgold text-drgold group-hover:bg-drgold group-hover:text-drblack transition-colors">
                Ver Detalles
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/productos"
            className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors inline-block"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
