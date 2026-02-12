'use server';

import type {
  Product,
  ProductFilters,
  PaginatedResponse,
  ApiResponse,
} from '@/types/product';
import { 
  getProductosFromDB, 
  getProductoBySlugFromDB, 
  getProductosDestacadosFromDB,
} from '@/data/productos-db';

const getErrorMessage = (error: unknown, fallback: string) =>
  error instanceof Error ? error.message : fallback;

// ============================================
// OBTENER TODOS LOS PRODUCTOS (con filtros y paginación)
// ============================================
export async function getProductsStatic(
  filters: ProductFilters = {},
  page: number = 1,
  limit: number = 12
): Promise<ApiResponse<PaginatedResponse<Product>>> {
  try {
    // Obtener productos del archivo estático con filtros
    const todosLosProductos = getProductosFromDB({
      categoria: filters.categoria,
      marca: filters.marca,
      condicion: filters.condicion,
      destacado: filters.destacado,
      activo: filters.activo,
      search: filters.search,
    });

    // Filtrar por rango de precios si es necesario
    let productosFiltrados = todosLosProductos;
    if (filters.precioMin !== undefined || filters.precioMax !== undefined) {
      productosFiltrados = todosLosProductos.filter(p => {
        if (filters.precioMin !== undefined && p.precio < filters.precioMin) {
          return false;
        }
        if (filters.precioMax !== undefined && p.precio > filters.precioMax) {
          return false;
        }
        return true;
      });
    }

    const total = productosFiltrados.length;
    const totalPages = Math.ceil(total / limit);

    // Aplicar paginación
    const skip = (page - 1) * limit;
    const productosPaginados = productosFiltrados.slice(skip, skip + limit);

    return {
      success: true,
      data: {
        data: productosPaginados,
        total,
        page,
        limit,
        totalPages,
      },
    };
  } catch (error: unknown) {
    console.error('Error obteniendo productos:', error);
    return {
      success: false,
      error: getErrorMessage(error, 'Error al obtener productos'),
    };
  }
}

// ============================================
// OBTENER PRODUCTO POR SLUG
// ============================================
export async function getProductBySlugStatic(
  slug: string
): Promise<ApiResponse<Product>> {
  try {
    const product = getProductoBySlugFromDB(slug);

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    return {
      success: true,
      data: product,
    };
  } catch (error: unknown) {
    console.error('Error obteniendo producto:', error);
    return {
      success: false,
      error: getErrorMessage(error, 'Error al obtener el producto'),
    };
  }
}

// ============================================
// OBTENER PRODUCTOS DESTACADOS
// ============================================
export async function getFeaturedProductsStatic(
  limit: number = 4
): Promise<ApiResponse<Product[]>> {
  try {
    const productos = getProductosDestacadosFromDB(limit);

    return {
      success: true,
      data: productos,
    };
  } catch (error: unknown) {
    console.error('Error obteniendo productos destacados:', error);
    return {
      success: false,
      error: getErrorMessage(error, 'Error al obtener productos destacados'),
    };
  }
}

// ============================================
// OBTENER ESTADÍSTICAS
// ============================================
export async function getProductStatsStatic(): Promise<ApiResponse<{
  total: number;
  destacados: number;
  categorias: { [key: string]: number };
}>> {
  try {
    const todosLosProductos = getProductosFromDB({ activo: true });
    const destacados = getProductosDestacadosFromDB();

    // Contar por categorías
    const categorias: { [key: string]: number } = {};
    todosLosProductos.forEach(p => {
      categorias[p.categoria] = (categorias[p.categoria] || 0) + 1;
    });

    return {
      success: true,
      data: {
        total: todosLosProductos.length,
        destacados: destacados.length,
        categorias,
      },
    };
  } catch (error: unknown) {
    console.error('Error obteniendo estadísticas:', error);
    return {
      success: false,
      error: getErrorMessage(error, 'Error al obtener estadísticas'),
    };
  }
}
