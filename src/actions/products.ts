'use server';

import dbConnect from '@/lib/mongodb';
import ProductModel from '@/models/Product';
import type {
  Product,
  CreateProductInput,
  UpdateProductInput,
  ProductFilters,
  PaginatedResponse,
  ApiResponse,
} from '@/types/product';
import { revalidatePath } from 'next/cache';

// Función helper para convertir documento de Mongoose a objeto plano
function toPlainObject<T>(doc: any): T {
  return JSON.parse(JSON.stringify(doc));
}

// ============================================
// CREAR PRODUCTO
// ============================================
export async function createProduct(
  input: CreateProductInput
): Promise<ApiResponse<Product>> {
  try {
    await dbConnect();

    // Generar slug si no existe
    if (!input.slug) {
      input.slug = input.nombre
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    // Verificar slug único
    const existingProduct = await ProductModel.findOne({ slug: input.slug });
    if (existingProduct) {
      // Agregar sufijo único
      input.slug = `${input.slug}-${Date.now()}`;
    }

    const product = await ProductModel.create(input);

    // Revalidar páginas que muestran productos
    revalidatePath('/');
    revalidatePath('/productos');
    revalidatePath('/admin/productos');

    return {
      success: true,
      data: toPlainObject<Product>(product),
      message: 'Producto creado exitosamente',
    };
  } catch (error: any) {
    console.error('Error creando producto:', error);
    return {
      success: false,
      error: error.message || 'Error al crear el producto',
    };
  }
}

// ============================================
// OBTENER TODOS LOS PRODUCTOS (con filtros y paginación)
// ============================================
export async function getProducts(
  filters: ProductFilters = {},
  page: number = 1,
  limit: number = 12
): Promise<ApiResponse<PaginatedResponse<Product>>> {
  try {
    await dbConnect();

    // Construir query
    const query: any = {};

    if (filters.categoria) {
      query.categoria = filters.categoria;
    }

    if (filters.marca) {
      query.marca = { $regex: filters.marca, $options: 'i' };
    }

    if (filters.condicion) {
      query.condicion = filters.condicion;
    }

    if (filters.destacado !== undefined) {
      query.destacado = filters.destacado;
    }

    if (filters.activo !== undefined) {
      query.activo = filters.activo;
    } else {
      // Por defecto solo mostrar activos
      query.activo = true;
    }

    if (filters.precioMin !== undefined || filters.precioMax !== undefined) {
      query.precio = {};
      if (filters.precioMin !== undefined) {
        query.precio.$gte = filters.precioMin;
      }
      if (filters.precioMax !== undefined) {
        query.precio.$lte = filters.precioMax;
      }
    }

    if (filters.search) {
      query.$text = { $search: filters.search };
    }

    // Calcular skip para paginación
    const skip = (page - 1) * limit;

    // Ejecutar query
    const [products, total] = await Promise.all([
      ProductModel.find(query)
        .sort({ destacado: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      ProductModel.countDocuments(query),
    ]);

    return {
      success: true,
      data: {
        data: toPlainObject<Product[]>(products),
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error: any) {
    console.error('Error obteniendo productos:', error);
    return {
      success: false,
      error: error.message || 'Error al obtener productos',
    };
  }
}

// ============================================
// OBTENER PRODUCTO POR SLUG
// ============================================
export async function getProductBySlug(
  slug: string
): Promise<ApiResponse<Product>> {
  try {
    await dbConnect();

    const product = await ProductModel.findOne({ slug, activo: true }).lean();

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    return {
      success: true,
      data: toPlainObject<Product>(product),
    };
  } catch (error: any) {
    console.error('Error obteniendo producto:', error);
    return {
      success: false,
      error: error.message || 'Error al obtener el producto',
    };
  }
}

// ============================================
// OBTENER PRODUCTO POR ID
// ============================================
export async function getProductById(
  id: string
): Promise<ApiResponse<Product>> {
  try {
    await dbConnect();

    const product = await ProductModel.findById(id).lean();

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    return {
      success: true,
      data: toPlainObject<Product>(product),
    };
  } catch (error: any) {
    console.error('Error obteniendo producto:', error);
    return {
      success: false,
      error: error.message || 'Error al obtener el producto',
    };
  }
}

// ============================================
// ACTUALIZAR PRODUCTO
// ============================================
export async function updateProduct(
  input: UpdateProductInput
): Promise<ApiResponse<Product>> {
  try {
    await dbConnect();

    const { _id, ...updateData } = input;

    const product = await ProductModel.findByIdAndUpdate(
      _id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).lean();

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    // Revalidar páginas
    revalidatePath('/');
    revalidatePath('/productos');
    revalidatePath(`/productos/${product.slug}`);
    revalidatePath('/admin/productos');

    return {
      success: true,
      data: toPlainObject<Product>(product),
      message: 'Producto actualizado exitosamente',
    };
  } catch (error: any) {
    console.error('Error actualizando producto:', error);
    return {
      success: false,
      error: error.message || 'Error al actualizar el producto',
    };
  }
}

// ============================================
// ELIMINAR PRODUCTO (soft delete)
// ============================================
export async function deleteProduct(id: string): Promise<ApiResponse<null>> {
  try {
    await dbConnect();

    // Soft delete - solo desactivar
    const product = await ProductModel.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true }
    );

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    // Revalidar páginas
    revalidatePath('/');
    revalidatePath('/productos');
    revalidatePath('/admin/productos');

    return {
      success: true,
      message: 'Producto eliminado exitosamente',
    };
  } catch (error: any) {
    console.error('Error eliminando producto:', error);
    return {
      success: false,
      error: error.message || 'Error al eliminar el producto',
    };
  }
}

// ============================================
// ELIMINAR PRODUCTO PERMANENTEMENTE
// ============================================
export async function hardDeleteProduct(id: string): Promise<ApiResponse<null>> {
  try {
    await dbConnect();

    const product = await ProductModel.findByIdAndDelete(id);

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    // Revalidar páginas
    revalidatePath('/');
    revalidatePath('/productos');
    revalidatePath('/admin/productos');

    return {
      success: true,
      message: 'Producto eliminado permanentemente',
    };
  } catch (error: any) {
    console.error('Error eliminando producto:', error);
    return {
      success: false,
      error: error.message || 'Error al eliminar el producto',
    };
  }
}

// ============================================
// OBTENER PRODUCTOS DESTACADOS
// ============================================
export async function getFeaturedProducts(
  limit: number = 6
): Promise<ApiResponse<Product[]>> {
  try {
    await dbConnect();

    const products = await ProductModel.find({ destacado: true, activo: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return {
      success: true,
      data: toPlainObject<Product[]>(products),
    };
  } catch (error: any) {
    console.error('Error obteniendo productos destacados:', error);
    return {
      success: false,
      error: error.message || 'Error al obtener productos destacados',
    };
  }
}

// ============================================
// OBTENER PRODUCTOS POR CATEGORÍA
// ============================================
export async function getProductsByCategory(
  categoria: string,
  page: number = 1,
  limit: number = 12
): Promise<ApiResponse<PaginatedResponse<Product>>> {
  return getProducts({ categoria: categoria as any, activo: true }, page, limit);
}

// ============================================
// TOGGLE DESTACADO
// ============================================
export async function toggleFeatured(
  id: string
): Promise<ApiResponse<Product>> {
  try {
    await dbConnect();

    const product = await ProductModel.findById(id);

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    product.destacado = !product.destacado;
    await product.save();

    // Revalidar páginas
    revalidatePath('/');
    revalidatePath('/productos');
    revalidatePath('/admin/productos');

    return {
      success: true,
      data: toPlainObject<Product>(product),
      message: product.destacado
        ? 'Producto marcado como destacado'
        : 'Producto desmarcado como destacado',
    };
  } catch (error: any) {
    console.error('Error toggling destacado:', error);
    return {
      success: false,
      error: error.message || 'Error al cambiar estado destacado',
    };
  }
}

// ============================================
// TOGGLE ACTIVO
// ============================================
export async function toggleActive(id: string): Promise<ApiResponse<Product>> {
  try {
    await dbConnect();

    const product = await ProductModel.findById(id);

    if (!product) {
      return {
        success: false,
        error: 'Producto no encontrado',
      };
    }

    product.activo = !product.activo;
    await product.save();

    // Revalidar páginas
    revalidatePath('/');
    revalidatePath('/productos');
    revalidatePath('/admin/productos');

    return {
      success: true,
      data: toPlainObject<Product>(product),
      message: product.activo ? 'Producto activado' : 'Producto desactivado',
    };
  } catch (error: any) {
    console.error('Error toggling activo:', error);
    return {
      success: false,
      error: error.message || 'Error al cambiar estado activo',
    };
  }
}

// ============================================
// OBTENER MARCAS ÚNICAS
// ============================================
export async function getUniqueBrands(): Promise<ApiResponse<string[]>> {
  try {
    await dbConnect();

    const brands = await ProductModel.distinct('marca', { activo: true });

    return {
      success: true,
      data: brands.sort(),
    };
  } catch (error: any) {
    console.error('Error obteniendo marcas:', error);
    return {
      success: false,
      error: error.message || 'Error al obtener marcas',
    };
  }
}

// ============================================
// CONTAR PRODUCTOS POR CATEGORÍA
// ============================================
export async function getProductCountByCategory(): Promise<
  ApiResponse<{ categoria: string; count: number }[]>
> {
  try {
    await dbConnect();

    const counts = await ProductModel.aggregate([
      { $match: { activo: true } },
      { $group: { _id: '$categoria', count: { $sum: 1 } } },
      { $project: { categoria: '$_id', count: 1, _id: 0 } },
    ]);

    return {
      success: true,
      data: counts,
    };
  } catch (error: any) {
    console.error('Error contando productos:', error);
    return {
      success: false,
      error: error.message || 'Error al contar productos',
    };
  }
}
