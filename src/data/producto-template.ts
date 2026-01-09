/**
 * Template para agregar nuevos productos
 * 
 * Copia este template y rellena con los datos del nuevo producto
 * Luego agrégalo al array de productos en productos-mock.ts
 */

import type { CreateProductInput } from '@/types/product';

export const nuevoProductoTemplate: CreateProductInput = {
  // ==========================================
  // INFORMACIÓN BÁSICA (REQUERIDO)
  // ==========================================
  nombre: '', // Ej: "Saxofón Tenor Selmer"
  slug: '', // Se genera automático si lo dejas vacío
  descripcion: ``, // Descripción completa (usa backticks para múltiples líneas)
  descripcionCorta: '', // Max 300 caracteres
  
  // ==========================================
  // PRECIOS (REQUERIDO)
  // ==========================================
  precio: 0, // Ej: 1500
  moneda: 'USD', // 'USD' o 'ARS'
  precioAnterior: undefined, // Opcional: para mostrar descuentos
  
  // ==========================================
  // CATEGORIZACIÓN (REQUERIDO)
  // ==========================================
  categoria: 'altos', // Opciones: vintages | punk-jazz-customshop | boquillas | 
                       // articulos-punk-jazz | altos | tenores | sopranos | 
                       // baritonos | accesorios
  marca: '', // Ej: "Selmer", "Yamaha", "Punk Jazz"
  condicion: 'nuevo', // nuevo | usado | restaurado | vintage
  
  // ==========================================
  // OPCIONALES
  // ==========================================
  subcategoria: '', // Ej: "Profesional", "Estudiante"
  modelo: '', // Ej: "Mark VI", "YAS-280"
  año: undefined, // Ej: 2024, importante para vintages
  
  // ==========================================
  // IMÁGENES (REQUERIDO)
  // ==========================================
  // IMPORTANTE: Primero sube las imágenes a /public/uploads/productos/
  imagenPrincipal: '/uploads/productos/', // Imagen de portada
  imagenes: [
    // Galería de imágenes adicionales
    '/uploads/productos/',
    '/uploads/productos/',
  ],
  
  // ==========================================
  // ENLACES EXTERNOS (OPCIONAL)
  // ==========================================
  mercadoLibreUrl: '', // URL de Mercado Libre si está publicado
  
  // ==========================================
  // CARACTERÍSTICAS TÉCNICAS (OPCIONAL)
  // ==========================================
  caracteristicas: [
    { clave: 'Material', valor: '' },
    { clave: 'Acabado', valor: '' },
    { clave: 'Afinación', valor: '' },
    { clave: 'Incluye', valor: '' },
    { clave: 'Garantía', valor: '' },
    // Agregar más según necesites
  ],
  
  // ==========================================
  // SEO (OPCIONAL PERO RECOMENDADO)
  // ==========================================
  metaTitle: '', // Max 70 caracteres
  metaDescription: '', // Max 160 caracteres
  tags: [
    // Palabras clave para búsqueda
    '',
    '',
  ],
  
  // ==========================================
  // CONTROL (REQUERIDO)
  // ==========================================
  destacado: false, // true para mostrar en home
  activo: true, // false para ocultar del catálogo
  stock: 1, // Cantidad disponible
};

// ==========================================
// EJEMPLO COMPLETO
// ==========================================

export const ejemploProductoCompleto: CreateProductInput = {
  nombre: 'Saxofón Tenor Selmer Mark VI',
  slug: 'saxofon-tenor-selmer-mark-vi',
  descripcion: `Saxofón tenor vintage Selmer Mark VI en excelente condición.

🎷 Año: 1965
🎷 Serial: 123456
🎷 Laca original 85%
🎷 Recientemente revisado y ajustado
🎷 Sonido característico del Mark VI
🎷 Estuche original incluido

Instrumento icónico en perfecto estado de funcionamiento.`,
  descripcionCorta: 'Saxofón tenor vintage Selmer Mark VI 1965. Laca original 85%, sonido excepcional.',
  
  precio: 8500,
  moneda: 'USD',
  precioAnterior: 9500,
  
  categoria: 'vintages',
  subcategoria: 'Profesional',
  marca: 'Selmer',
  modelo: 'Mark VI',
  condicion: 'vintage',
  año: 1965,
  
  imagenPrincipal: '/uploads/productos/selmer-mark-vi-main.jpeg',
  imagenes: [
    '/uploads/productos/selmer-mark-vi-1.jpeg',
    '/uploads/productos/selmer-mark-vi-2.jpeg',
    '/uploads/productos/selmer-mark-vi-3.jpeg',
  ],
  
  mercadoLibreUrl: 'https://articulo.mercadolibre.com.ar/...',
  
  caracteristicas: [
    { clave: 'Marca', valor: 'Selmer Paris' },
    { clave: 'Modelo', valor: 'Mark VI' },
    { clave: 'Año', valor: '1965' },
    { clave: 'Serial', valor: '123456' },
    { clave: 'Material', valor: 'Latón' },
    { clave: 'Acabado', valor: 'Laca dorada original (85%)' },
    { clave: 'Afinación', valor: 'Si bemol (Bb)' },
    { clave: 'Estado', valor: 'Vintage en excelente condición' },
    { clave: 'Incluye', valor: 'Estuche original' },
  ],
  
  metaTitle: 'Saxofón Tenor Selmer Mark VI 1965 Vintage | DR BRASS',
  metaDescription: 'Saxofón tenor Selmer Mark VI 1965 en excelente condición. Laca original 85%, sonido icónico. Estuche incluido.',
  tags: [
    'selmer',
    'mark-vi',
    'vintage',
    'tenor',
    '1965',
    'profesional',
    'coleccionable',
  ],
  
  destacado: true,
  activo: true,
  stock: 1,
};
