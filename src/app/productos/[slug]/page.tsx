import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getFeaturedProducts } from '@/actions/products';
import { CATEGORIAS, CONDICIONES } from '@/types/product';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProductBySlug(slug);

  if (!result.success || !result.data) {
    return {
      title: 'Producto no encontrado - DR BRASS',
    };
  }

  const producto = result.data;

  return {
    title: producto.metaTitle || `${producto.nombre} - DR BRASS`,
    description: producto.metaDescription || producto.descripcionCorta,
    openGraph: {
      title: producto.metaTitle || producto.nombre,
      description: producto.metaDescription || producto.descripcionCorta,
      images: [producto.imagenPrincipal],
    },
    keywords: producto.tags,
  };
}

export default async function ProductoDetallePage({ params }: PageProps) {
  const { slug } = await params;
  
  const result = await getProductBySlug(slug);

  if (!result.success || !result.data) {
    notFound();
  }

  const producto = result.data;

  // Obtener productos relacionados (destacados)
  const relacionadosResult = await getFeaturedProducts(4);
  const relacionados = relacionadosResult.success
    ? relacionadosResult.data?.filter((p) => p._id !== producto._id).slice(0, 3) || []
    : [];

  const categoriaLabel =
    CATEGORIAS.find((c) => c.value === producto.categoria)?.label || producto.categoria;
  const condicionLabel =
    CONDICIONES.find((c) => c.value === producto.condicion)?.label || producto.condicion;

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 bg-drmatte min-h-screen">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-drgray">
          <li>
            <Link href="/" className="hover:text-drgold transition-colors">
              Inicio
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/productos" className="hover:text-drgold transition-colors">
              Productos
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/productos?categoria=${producto.categoria}`}
              className="hover:text-drgold transition-colors"
            >
              {categoriaLabel}
            </Link>
          </li>
          <li>/</li>
          <li className="text-drgold">{producto.nombre}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          {/* Imagen principal */}
          <div className="relative aspect-square bg-drblack rounded-lg border-2 border-drgold overflow-hidden">
            {producto.imagenPrincipal ? (
              <Image
                src={producto.imagenPrincipal}
                alt={producto.nombre}
                fill
                className="object-contain p-4"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-drgray">
                Sin imagen
              </div>
            )}
            {producto.destacado && (
              <span className="absolute top-4 right-4 bg-drgold text-drblack px-3 py-1 text-sm font-bold rounded">
                DESTACADO
              </span>
            )}
            {producto.precioAnterior && (
              <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
                OFERTA
              </span>
            )}
          </div>

          {/* Miniaturas */}
          {producto.imagenes && producto.imagenes.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              <div className="w-20 h-20 flex-shrink-0 rounded-lg border-2 border-drgold bg-drblack p-1 overflow-hidden">
                <Image
                  src={producto.imagenPrincipal}
                  alt={producto.nombre}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              {producto.imagenes.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20 flex-shrink-0 rounded-lg border-2 border-drgold/50 bg-drblack p-1 overflow-hidden hover:border-drgold transition-colors"
                >
                  <Image
                    src={img}
                    alt={`${producto.nombre} - imagen ${index + 2}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <span className="text-drgold/70 text-sm uppercase tracking-wider">
              {producto.marca}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-drgold mt-1 uppercase tracking-wide">
              {producto.nombre}
            </h1>
          </div>

          {/* Precio */}
          <div className="flex items-baseline gap-4">
            {producto.precioAnterior && (
              <span className="text-drgray line-through text-xl">
                ${producto.precioAnterior.toLocaleString()} {producto.moneda}
              </span>
            )}
            <span className="text-3xl font-bold text-drgold">
              ${producto.precio.toLocaleString()} {producto.moneda}
            </span>
            {producto.precioAnterior && (
              <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold rounded">
                -
                {Math.round(
                  ((producto.precioAnterior - producto.precio) / producto.precioAnterior) * 100
                )}
                %
              </span>
            )}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-drgold/20 text-drgold px-3 py-1 rounded-full text-sm">
              {categoriaLabel}
            </span>
            <span className="bg-drgold/20 text-drgold px-3 py-1 rounded-full text-sm">
              {condicionLabel}
            </span>
            {producto.año && (
              <span className="bg-drgold/20 text-drgold px-3 py-1 rounded-full text-sm">
                Año: {producto.año}
              </span>
            )}
            {producto.stock > 0 ? (
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                En stock
              </span>
            ) : (
              <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                Sin stock
              </span>
            )}
          </div>

          {/* Descripción corta */}
          <p className="text-lg text-drgray leading-relaxed">{producto.descripcionCorta}</p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            {producto.mercadoLibreUrl ? (
              <a
                href={producto.mercadoLibreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-8 py-4 text-lg font-bold bg-drgold text-drblack hover:bg-drgold2 transition-colors w-full sm:w-auto text-center"
              >
                Comprar en Mercado Libre
              </a>
            ) : (
              <Link
                href="/contacto"
                className="btn px-8 py-4 text-lg font-bold bg-drgold text-drblack hover:bg-drgold2 transition-colors w-full sm:w-auto text-center"
              >
                Consultar Disponibilidad
              </Link>
            )}
            <Link
              href="/contacto"
              className="btn px-8 py-4 text-lg font-bold border-2 border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full sm:w-auto text-center"
            >
              Consultar
            </Link>
          </div>

          {/* Descripción completa */}
          <div className="border-t border-drgold/30 pt-6">
            <h2 className="text-xl font-serif font-bold text-drgold mb-4">Descripción</h2>
            <div className="text-drgray leading-relaxed whitespace-pre-line">
              {producto.descripcion}
            </div>
          </div>

          {/* Características */}
          {producto.caracteristicas && producto.caracteristicas.length > 0 && (
            <div className="border-t border-drgold/30 pt-6">
              <h2 className="text-xl font-serif font-bold text-drgold mb-4">
                Características Técnicas
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {producto.caracteristicas.map((car, index) => (
                  <div key={index} className="bg-drblack/50 rounded-lg p-4">
                    <dt className="text-drgold/70 text-sm uppercase tracking-wider">
                      {car.clave}
                    </dt>
                    <dd className="text-drgray text-lg mt-1">{car.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Tags */}
          {producto.tags && producto.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {producto.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-drgray/70 text-sm bg-drblack/50 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Productos relacionados */}
      {relacionados.length > 0 && (
        <section className="mt-16 pt-16 border-t border-drgold/30">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-drgold text-center mb-10 uppercase tracking-wider">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relacionados.map((prod) => (
              <Link
                key={prod._id}
                href={`/productos/${prod.slug}`}
                className="card p-6 flex flex-col items-center transition-transform hover:scale-105 bg-drblack rounded shadow-dr border-2 border-drgold group"
              >
                <div className="relative w-full aspect-square mb-4 rounded bg-drblack p-2 border-2 border-drgold overflow-hidden">
                  {prod.imagenPrincipal ? (
                    <Image
                      src={prod.imagenPrincipal}
                      alt={prod.nombre}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-drgray">
                      Sin imagen
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">
                  {prod.nombre}
                </h3>
                <span className="text-lg font-bold text-drgold">
                  ${prod.precio.toLocaleString()} {prod.moneda}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
