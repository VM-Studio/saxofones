/**
 * Mock data para productos DR BRASS
 * 
 * Este archivo contiene los datos de productos para cargar en la base de datos.
 * Cada producto debe seguir la estructura del modelo Product definido en @/types/product
 * 
 * Para cargar estos productos:
 * 1. Manual: Usar el admin en /admin/productos/nuevo
 * 2. Por código: Crear un script de seed que lea este archivo
 */

import type { CreateProductInput } from '@/types/product';

export const productos: CreateProductInput[] = [
  {
    // Información básica
    nombre: 'Saxofón Alto Punk Jazz CUSTOMSHOP',
    slug: 'saxofon-alto-punk-jazz',
    descripcion: `Este modelo es uno de los modelos semi profesionales a un precio de mercado imbatible.

🎷 Acabado vintage de alta calidad
🎷 Super afinados y con un audio demoledor
🎷 Nacares de madre perla real
🎷 Incluye estuche semi rígido, boquilla y holder
🎷 1 año de garantía

Ideal para estudiantes avanzados y músicos semi-profesionales que buscan un instrumento de calidad a excelente precio.`,
    descripcionCorta: 'Saxofón alto semi-profesional con acabado vintage, super afinado y audio demoledor. Incluye estuche, boquilla y holder.',
    
    // Precios
    precio: 899,
    moneda: 'USD',
    // precioAnterior: 1200, // Descomentar si hay oferta
    
    // Categorización
    categoria: 'altos',
    subcategoria: 'Semi-profesional',
    marca: 'Punk Jazz',
    modelo: 'Alto Vintage',
    
    // Estado
    condicion: 'nuevo',
    // año: 2025,
    
    // Imágenes - Basadas en los archivos que me mostraste
    // IMPORTANTE: Subir estas imágenes primero a /public/uploads/productos/
    // Nombres de archivos según la imagen adjunta:
    // - saxo1.jpeg (imagen principal)
    // - sax1.jpeg, saxx1.mp4, saxo1.mp4, saxxo1.jpeg, saxof1.jpeg, 
    //   saxxof1.mp4, saxofon1.jpeg, saxofonn1.jpeg, ssaxo1.jpeg
    imagenPrincipal: '/uploads/productos/saxo1.jpeg',
    imagenes: [
      '/uploads/productos/sax1.jpeg',
      '/uploads/productos/saxxo1.jpeg',
      '/uploads/productos/saxof1.jpeg',
      '/uploads/productos/saxofon1.jpeg',
      '/uploads/productos/saxofonn1.jpeg',
      '/uploads/productos/ssaxo1.jpeg',
      // Videos (pueden agregarse si tu sistema soporta videos)
      // '/uploads/productos/saxx1.mp4',
      // '/uploads/productos/saxo1.mp4',
      // '/uploads/productos/saxxof1.mp4',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '', // Agregar cuando esté disponible
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Acabado', valor: 'Vintage' },
      { clave: 'Material', valor: 'Latón' },
      { clave: 'Nacares', valor: 'Madre perla real' },
      { clave: 'Afinación', valor: 'Mi bemol (Eb)' },
      { clave: 'Nivel', valor: 'Semi-profesional' },
      { clave: 'Incluye', valor: 'Estuche semi-rígido, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxofón Alto Punk Jazz - Vintage Semi-profesional | DR BRASS',
    metaDescription: 'Saxofón alto semi-profesional con acabado vintage, super afinado. Incluye estuche, boquilla y holder. 1 año de garantía. ¡Precio imbatible!',
    tags: [
      'saxofon-alto',
      'punk-jazz',
      'semi-profesional',
      'vintage',
      'estudiante-avanzado',
      'madre-perla',
      'estuche-incluido',
      'garantia',
    ],
    
    // Control
    destacado: true, // Es un producto destacado
    activo: true,
    stock: 1,
  },
];

// Exportar también el primer producto para testing
export const primerProducto = productos[0];
