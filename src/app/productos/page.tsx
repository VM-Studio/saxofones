import Link from 'next/link';
import { getProductsStatic } from '@/actions/products-static';
import { CategoriaFilter } from './CategoriaFilter';
import { ProductCard } from './ProductCard';
import { CATEGORIAS } from '@/types/product';
import type { ProductFilters } from '@/types/product';

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

  const filters: ProductFilters = { activo: true };
  if (params.categoria) {
    const categoriaValue = CATEGORIAS.find((cat) => cat.value === params.categoria)?.value;
    if (categoriaValue) {
      filters.categoria = categoriaValue;
    }
  }

  const result = await getProductsStatic(filters, page, pageSize);

  const productos = result.success ? result.data?.data || [] : [];
  const totalPages = result.success ? result.data?.totalPages || 1 : 1;
  const total = result.success ? result.data?.total || 0 : 0;

  return (
    <main className="max-w-6xl mx-auto py-10 px-2 sm:px-6 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark text-center mb-4 tracking-wider">
        Catálogo de Instrumentos
      </h1>
      <h2 className="text-xl md:text-2xl font-serif text-brown text-center mb-10">
        Descubre nuestra selección premium de saxofones y vientos
      </h2>

      {/* Filtros por categoría - Diseño minimalista */}
      <CategoriaFilter />

      {/* Contador */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 bg-brown-light/30"></div>
        <p className="text-charcoal-light text-sm font-medium">
          {total} {total === 1 ? 'producto' : 'productos'}
        </p>
        <div className="h-px w-12 bg-brown-light/30"></div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <p className="text-charcoal-light text-xl">No hay productos disponibles en esta categoría.</p>
            <Link href="/productos" className="text-gold hover:underline mt-4 inline-block">
              Ver todos los productos
            </Link>
          </div>
        ) : (
          productos.map((producto) => (
            <ProductCard key={producto._id} producto={producto} />
          ))
        )}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          {page > 1 && (
            <Link
              href={`/productos?page=${page - 1}${params.categoria ? `&categoria=${params.categoria}` : ''}`}
              className="px-6 py-2.5 text-base font-semibold border border-brown-light/30 text-brown hover:bg-gold hover:text-white hover:border-gold transition-all"
            >
              Anterior
            </Link>
          )}
          <span className="text-brown font-serif text-lg">
            Página {page} de {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/productos?page=${page + 1}${params.categoria ? `&categoria=${params.categoria}` : ''}`}
              className="px-6 py-2.5 text-base font-semibold border border-brown-light/30 text-brown hover:bg-gold hover:text-white hover:border-gold transition-all"
            >
              Siguiente
            </Link>
          )}
        </div>
      )}

    </main>
  );
}
