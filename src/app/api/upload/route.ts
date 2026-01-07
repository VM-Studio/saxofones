/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// POST /api/upload - Subir imagen
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No se proporcionó ningún archivo' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Tipo de archivo no permitido. Use JPG, PNG, WebP o GIF' },
        { status: 400 }
      );
    }

    // Validar tamaño (máx 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'El archivo excede el tamaño máximo de 5MB' },
        { status: 400 }
      );
    }

    // Crear directorio si no existe
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'productos');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generar nombre único
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const fileName = `${timestamp}-${randomString}.${extension}`;

    // Convertir a Buffer y guardar
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // URL pública
    const publicUrl = `/uploads/productos/${fileName}`;

    return NextResponse.json({
      success: true,
      data: {
        url: publicUrl,
        fileName: fileName,
        size: file.size,
        type: file.type,
      },
      message: 'Imagen subida exitosamente',
    });
  } catch (error: any) {
    console.error('Error subiendo imagen:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error al subir la imagen' },
      { status: 500 }
    );
  }
}

// Configuración para permitir archivos grandes
export const config = {
  api: {
    bodyParser: false,
  },
};
