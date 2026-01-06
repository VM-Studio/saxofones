import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/actions/products';
import { CATEGORIAS } from '@/types/product';

interface PageProps {
  searchParams: Promise<{
    page?: string;
    categoria?: string;
  }>;
}

export default async function ProductosPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  const page = parseInt(params.page || '1');
  const pageSize = 9;

  const filters: any = { activo: true };
  if (params.categoria) {
    filters.categoria = params.categoria;
  }

  const result = await getProducts(filters, page, pageSize);

  const productos = result.success ? result.data?.data || [] : [];
  const totalPages = result.success ? result.data?.totalPages || 1 : 1;
  const total = result.success ? result.data?.total || 0 : 0;

  return (
    <main className="max-w-6xl mx-auto py-10 px-2 sm:px-6 bg-drmatte min-h-screen">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-4 tracking-wider uppercase">
        Catálogo de Instrumentos
      </h1>
      <h2 className="text-xl md:text-2xl font-serif text-drgold text-center mb-10">
        Descubre nuestra selección premium de saxofones y vientos
      </h2>

      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link
          href="/productos"
          className={`px-4 py-2 rounded-lg border-2 transition-colors ${
            !params.categoria
              ? 'bg-drgold text-drblack border-drgold'
              : 'border-drgold text-drgold hover:bg-drgold hover:text-drblack'
          }`}
        >
          Todos
        </Link>
        {CATEGORIAS.map((cat) => (
          <Link
            key={cat.value}
            href={`/productos?categoria=${cat.value}`}
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              params.categoria === cat.value
                ? 'bg-drgold text-drblack border-drgold'
                : 'border-drgold text-drgold hover:bg-drgold hover:text-drblack'
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Contador */}
      <p className="text-center text-drgray mb-6">{total} productos encontrados</p>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <p className="text-drgray text-xl">No hay productos disponibles en esta categoría.</p>
            <Link href="/productos" className="text-drgold hover:underline mt-4 inline-block">
              Ver todos los productos
            </Link>
          </div>
        ) : (
          productos.map((producto) => (
            <Link
              key={producto._id}
              href={`/productos/${producto.slug}`}
              className="card p-6 sm:p-8 flex flex-col items-center transition-transform hover:scale-105 bg-drblack rounded shadow-dr border-2 border-drgold group"
            >
              <div className="relative w-full aspect-square mb-6 rounded bg-drblack p-2 border-2 border-drgold overflow-hidden">
                {producto.imagenPrincipal ? (
                  <Image
                    src={producto.imagenPrincipal}
                    alt={producto.nombre}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-drgray">
                    Sin imagen
                  </div>
                )}
                {producto.destacado && (
                  <span className="absolute top-2 right-2 bg-drgold text-drblack px-2 py-1 text-xs font-bold rounded">
                    DESTACADO
                  </span>
                )}
                {producto.precioAnterior && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                    OFERTA
                  </span>
                )}
              </div>
              <h2 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">
                {producto.nombre}
              </h2>
              <p className="text-base text-drgray mb-4 text-center line-clamp-2">
                {producto.descripcionCorta}
              </p>
              <div className="flex items-center gap-2 mb-4">
                {producto.precioAnterior && (
                  <span className="text-drgray line-through text-sm">
                    ${producto.precioAnterior.toLocaleString()} {producto.moneda}
                  </span>
                )}
                <span className="text-lg font-bold text-drgold">
                  ${producto.precio.toLocaleString()} {producto.moneda}
                </span>
              </div>
              <span className="btn px-6 py-2 text-base font-bold border-drgold text-drgold group-hover:bg-drgold group-hover:text-drblack transition-colors w-full text-center">
                Ver Detalles
              </span>
            </Link>
          ))
        )}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          {page > 1 && (
            <Link
              href={`/productos?page=${page - 1}${params.categoria ? `&categoria=${params.categoria}` : ''}`}
              className="btn px-4 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors"
            >
              Anterior
            </Link>
          )}
          <span className="text-drgold font-serif text-lg">
            Página {page} de {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/productos?page=${page + 1}${params.categoria ? `&categoria=${params.categoria}` : ''}`}
              className="btn px-4 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors"
            >
              Siguiente
            </Link>
          )}
        </div>
      )}

      {/* Newsletter al final */}
      <section className="py-10 flex justify-center items-center">
        <div className="max-w-xl w-full mx-4 p-6 sm:p-10 bg-drblack rounded shadow-dr border-2 border-drgold flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold text-center mb-4 tracking-wider uppercase">
            Novedades y Ofertas
          </h2>
          <p className="text-base text-drgray text-center mb-8">
            Suscríbete para enterarte de nuevos productos y ofertas exclusivas de saxos e instrumentos de viento.
          </p>
          <form className="w-full flex flex-col gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Tu email"
              className="px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2"
            />
            <button
              type="submit"
              className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
