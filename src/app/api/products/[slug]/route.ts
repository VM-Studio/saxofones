import { NextRequest, NextResponse } from 'next/server';
import {
  getProductBySlug,
  getProductById,
  updateProduct,
  deleteProduct,
  hardDeleteProduct,
} from '@/actions/products';
import type { UpdateProductInput } from '@/types/product';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// GET /api/products/[slug] - Obtener producto por slug o ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;

    // Intentar primero por slug, luego por ID
    let result = await getProductBySlug(slug);

    // Si no se encuentra por slug, intentar por ID (útil para admin)
    if (!result.success && slug.match(/^[0-9a-fA-F]{24}$/)) {
      result = await getProductById(slug);
    }

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error en GET /api/products/[slug]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT /api/products/[slug] - Actualizar producto
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const body = await request.json();

    // El slug aquí debería ser el ID para actualizar
    const updateData: UpdateProductInput = {
      _id: slug,
      ...body,
    };

    const result = await updateProduct(updateData);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error en PUT /api/products/[slug]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE /api/products/[slug] - Eliminar producto
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const hard = searchParams.get('hard') === 'true';

    // El slug aquí debería ser el ID para eliminar
    const result = hard
      ? await hardDeleteProduct(slug)
      : await deleteProduct(slug);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error en DELETE /api/products/[slug]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
