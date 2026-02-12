import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlugStatic, getFeaturedProductsStatic } from '@/actions/products-static';
import { CATEGORIAS, CONDICIONES } from '@/types/product';
import type { Metadata } from 'next';
import { ProductGallery } from '@/components/ProductGallery';
import { ProductCard } from '@/app/productos/ProductCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProductBySlugStatic(slug);

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
  
  const result = await getProductBySlugStatic(slug);

  if (!result.success || !result.data) {
    notFound();
  }

  const producto = result.data;

  // Obtener productos relacionados (destacados)
  const relacionadosResult = await getFeaturedProductsStatic(4);
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
        <ProductGallery
          imagenPrincipal={producto.imagenPrincipal}
          imagenes={producto.imagenes}
          nombre={producto.nombre}
        />

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
                className="btn px-6 py-3 text-base font-bold transition-colors w-full sm:w-auto text-center"
                style={{ backgroundColor: '#8a6f48', color: '#FAF7F2', border: 'none' }}
              >
                Comprar en Mercado Libre
              </a>
            ) : (
              <Link
                href="/contacto"
                className="btn px-6 py-3 text-base font-bold transition-colors w-full sm:w-auto text-center"
                style={{ backgroundColor: '#8a6f48', color: '#FAF7F2', border: 'none' }}
              >
                Consultar Disponibilidad
              </Link>
            )}
          </div>

          {/* Descripción completa */}
          <div className="border-t border-drgold/30 pt-6">
            <h2 className="text-xl font-serif font-bold text-drgold mb-4">Descripción</h2>
            <div className="text-drgray leading-relaxed whitespace-pre-line">
              {producto.descripcion.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')}
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
              <ProductCard key={prod._id} producto={prod} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
