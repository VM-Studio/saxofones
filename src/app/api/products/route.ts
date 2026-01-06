import { NextRequest, NextResponse } from 'next/server';
import {
  getProducts,
  createProduct,
} from '@/actions/products';
import type { ProductFilters, CreateProductInput } from '@/types/product';

// GET /api/products - Obtener productos con filtros
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Parsear filtros desde query params
    const filters: ProductFilters = {};

    const categoria = searchParams.get('categoria');
    if (categoria) filters.categoria = categoria as any;

    const marca = searchParams.get('marca');
    if (marca) filters.marca = marca;

    const condicion = searchParams.get('condicion');
    if (condicion) filters.condicion = condicion as any;

    const precioMin = searchParams.get('precioMin');
    if (precioMin) filters.precioMin = parseFloat(precioMin);

    const precioMax = searchParams.get('precioMax');
    if (precioMax) filters.precioMax = parseFloat(precioMax);

    const destacado = searchParams.get('destacado');
    if (destacado) filters.destacado = destacado === 'true';

    const activo = searchParams.get('activo');
    if (activo) filters.activo = activo === 'true';

    const search = searchParams.get('search');
    if (search) filters.search = search;

    // Paginación
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    const result = await getProducts(filters, page, limit);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error en GET /api/products:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST /api/products - Crear producto
export async function POST(request: NextRequest) {
  try {
    const body: CreateProductInput = await request.json();

    // Validación básica
    if (!body.nombre || !body.descripcion || !body.precio || !body.categoria) {
      return NextResponse.json(
        {
          success: false,
          error: 'Campos requeridos faltantes: nombre, descripcion, precio, categoria',
        },
        { status: 400 }
      );
    }

    const result = await createProduct(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error('Error en POST /api/products:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
