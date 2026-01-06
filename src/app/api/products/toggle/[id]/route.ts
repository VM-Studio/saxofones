import { NextRequest, NextResponse } from 'next/server';
import { toggleFeatured, toggleActive } from '@/actions/products';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// POST /api/products/toggle/[id] - Toggle destacado o activo
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'featured' o 'active'

    if (!type || !['featured', 'active'].includes(type)) {
      return NextResponse.json(
        { success: false, error: 'Tipo inválido. Use "featured" o "active"' },
        { status: 400 }
      );
    }

    const result =
      type === 'featured'
        ? await toggleFeatured(id)
        : await toggleActive(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error en POST /api/products/toggle/[id]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
