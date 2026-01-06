import Link from 'next/link';
import { getProducts, getProductCountByCategory } from '@/actions/products';
import { CATEGORIAS } from '@/types/product';

export default async function AdminDashboard() {
  // Obtener estadísticas
  const [productsResult, countsResult] = await Promise.all([
    getProducts({}, 1, 1), // Solo para obtener el total
    getProductCountByCategory(),
  ]);

  const totalProducts = productsResult.success ? productsResult.data?.total || 0 : 0;
  const categoryCounts = countsResult.success ? countsResult.data || [] : [];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Panel de Administración</h1>
        <Link
          href="/admin/productos/nuevo"
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-colors"
        >
          + Nuevo Producto
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <h3 className="text-zinc-400 text-sm font-medium">Total Productos</h3>
          <p className="text-3xl font-bold text-white mt-2">{totalProducts}</p>
        </div>
        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <h3 className="text-zinc-400 text-sm font-medium">Categorías Activas</h3>
          <p className="text-3xl font-bold text-white mt-2">{categoryCounts.length}</p>
        </div>
      </div>

      {/* Productos por Categoría */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
        <h2 className="text-xl font-bold text-white mb-4">Productos por Categoría</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIAS.map((cat) => {
            const count = categoryCounts.find((c) => c.categoria === cat.value)?.count || 0;
            return (
              <Link
                key={cat.value}
                href={`/admin/productos?categoria=${cat.value}`}
                className="flex items-center justify-between p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <span className="text-zinc-200">{cat.label}</span>
                <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-sm font-medium">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
        <h2 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/productos"
            className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
          >
            Ver Todos los Productos
          </Link>
          <Link
            href="/admin/productos?destacado=true"
            className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
          >
            Ver Destacados
          </Link>
          <Link
            href="/admin/productos?activo=false"
            className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
          >
            Ver Inactivos
          </Link>
        </div>
      </div>
    </div>
  );
}
