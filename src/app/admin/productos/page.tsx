import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/actions/products';
import { CATEGORIAS, CONDICIONES } from '@/types/product';
import { ProductActions } from './ProductActions';

interface PageProps {
  searchParams: Promise<{
    page?: string;
    categoria?: string;
    destacado?: string;
    activo?: string;
    search?: string;
  }>;
}

export default async function AdminProductsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  const page = parseInt(params.page || '1');
  const filters: any = {};

  if (params.categoria) filters.categoria = params.categoria;
  if (params.destacado) filters.destacado = params.destacado === 'true';
  if (params.activo) filters.activo = params.activo === 'true';
  if (params.search) filters.search = params.search;

  // En admin mostrar todos (activos e inactivos) por defecto
  if (params.activo === undefined) {
    delete filters.activo;
  }

  const result = await getProducts(filters, page, 20);

  const products = result.success ? result.data?.data || [] : [];
  const totalPages = result.success ? result.data?.totalPages || 1 : 1;
  const total = result.success ? result.data?.total || 0 : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Productos</h1>
          <p className="text-zinc-400 mt-1">{total} productos encontrados</p>
        </div>
        <Link
          href="/admin/productos/nuevo"
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-colors"
        >
          + Nuevo Producto
        </Link>
      </div>

      {/* Filtros */}
      <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
        <form className="flex flex-wrap gap-4" method="GET">
          <select
            name="categoria"
            defaultValue={params.categoria || ''}
            className="bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          >
            <option value="">Todas las categorías</option>
            {CATEGORIAS.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>

          <select
            name="destacado"
            defaultValue={params.destacado || ''}
            className="bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          >
            <option value="">Todos</option>
            <option value="true">Solo Destacados</option>
            <option value="false">No Destacados</option>
          </select>

          <select
            name="activo"
            defaultValue={params.activo || ''}
            className="bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          >
            <option value="">Todos</option>
            <option value="true">Solo Activos</option>
            <option value="false">Solo Inactivos</option>
          </select>

          <input
            type="text"
            name="search"
            placeholder="Buscar..."
            defaultValue={params.search || ''}
            className="bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none flex-1 min-w-[200px]"
          />

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 rounded-lg transition-colors"
          >
            Filtrar
          </button>
          
          <Link
            href="/admin/productos"
            className="bg-zinc-600 hover:bg-zinc-500 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Limpiar
          </Link>
        </form>
      </div>

      {/* Tabla de productos */}
      <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-700/50">
              <tr>
                <th className="text-left px-4 py-3 text-zinc-300 font-medium">Imagen</th>
                <th className="text-left px-4 py-3 text-zinc-300 font-medium">Producto</th>
                <th className="text-left px-4 py-3 text-zinc-300 font-medium">Categoría</th>
                <th className="text-left px-4 py-3 text-zinc-300 font-medium">Precio</th>
                <th className="text-center px-4 py-3 text-zinc-300 font-medium">Destacado</th>
                <th className="text-center px-4 py-3 text-zinc-300 font-medium">Activo</th>
                <th className="text-right px-4 py-3 text-zinc-300 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-700">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-zinc-400">
                    No se encontraron productos
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-zinc-700/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="w-16 h-16 bg-zinc-700 rounded-lg overflow-hidden">
                        {product.imagenPrincipal ? (
                          <Image
                            src={product.imagenPrincipal}
                            alt={product.nombre}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-500">
                            Sin img
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-white font-medium">{product.nombre}</p>
                        <p className="text-zinc-400 text-sm">{product.marca}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-zinc-700 text-zinc-200 px-3 py-1 rounded-full text-sm">
                        {CATEGORIAS.find((c) => c.value === product.categoria)?.label ||
                          product.categoria}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white">
                      ${product.precio.toLocaleString()} {product.moneda}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ProductActions
                        productId={product._id!}
                        type="featured"
                        currentValue={product.destacado}
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ProductActions
                        productId={product._id!}
                        type="active"
                        currentValue={product.activo}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/productos/${product._id}`}
                          className="bg-zinc-600 hover:bg-zinc-500 text-white px-3 py-1.5 rounded text-sm transition-colors"
                        >
                          Editar
                        </Link>
                        <Link
                          href={`/productos/${product.slug}`}
                          target="_blank"
                          className="bg-zinc-700 hover:bg-zinc-600 text-zinc-300 px-3 py-1.5 rounded text-sm transition-colors"
                        >
                          Ver
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          {page > 1 && (
            <Link
              href={`/admin/productos?page=${page - 1}${params.categoria ? `&categoria=${params.categoria}` : ''}${params.destacado ? `&destacado=${params.destacado}` : ''}${params.activo ? `&activo=${params.activo}` : ''}`}
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ← Anterior
            </Link>
          )}
          <span className="text-zinc-400 px-4">
            Página {page} de {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/admin/productos?page=${page + 1}${params.categoria ? `&categoria=${params.categoria}` : ''}${params.destacado ? `&destacado=${params.destacado}` : ''}${params.activo ? `&activo=${params.activo}` : ''}`}
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Siguiente →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
