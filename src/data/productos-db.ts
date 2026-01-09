/**
 * Base de datos estática de productos
 * 
 * Este archivo contiene todos los productos de DR BRASS
 * La aplicación leerá estos datos si no hay conexión a MongoDB
 * o como fallback durante el desarrollo
 */

import type { Product } from '@/types/product';

export const productosDB: Product[] = [
  {
    _id: 'producto-001',
    
    // Información básica
    nombre: 'Saxofón Alto Punk Jazz',
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
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'altos',
    subcategoria: 'Semi-profesional',
    marca: 'Punk Jazz',
    modelo: 'Alto Vintage',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes y videos disponibles
    imagenPrincipal: '/productos/ssaxo1.jpeg',
    imagenes: [
      '/productos/sax1.jpeg',
      '/productos/saxo1.jpeg',
      '/productos/saxof1.jpeg',
      '/productos/saxofon1.jpeg',
      '/productos/saxofonn1.jpeg',
      '/productos/saxxo1.jpeg',
      '/productos/sax1.mp4',
      '/productos/saxo1.mp4',
      '/productos/saxx1.mp4',
      '/productos/saxxof1.mp4',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
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
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #2 - Saxofón Alto Punk Jazz Dorado
  // ============================================
  {
    _id: 'producto-002',
    
    // Información básica
    nombre: 'Saxofón Alto Punk Jazz Dorado',
    slug: 'saxofon-alto-punk-jazz-dorado',
    descripcion: `Este modelo es uno de los modelos semi profesionales laca dorada a un precio de mercado imbatible.

🎷 Acabado vintage de alta calidad
🎷 Super afinados y con un audio demoledor
🎷 Nacares blancos
🎷 Incluye estuche semi rígido, boquilla y holder
🎷 1 año de garantía

Ideal para estudiantes avanzados y músicos semi-profesionales que buscan un instrumento de calidad a excelente precio.`,
    descripcionCorta: 'Saxofón alto semi-profesional con laca dorada, super afinado y audio demoledor. Nacares blancos. Incluye estuche, boquilla y holder.',
    
    // Precios
    precio: 899,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'altos',
    subcategoria: 'Semi-profesional',
    marca: 'Punk Jazz',
    modelo: 'Alto Dorado',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes y videos del producto 2
    imagenPrincipal: '/productos/sax2.jpeg',
    imagenes: [
      '/productos/saxx2.jpeg',
      '/productos/saxxo2.jpeg',
      '/productos/saxxof2.jpeg',
      '/productos/saxofon2.jpeg',
      '/productos/ssaaxo2.mp4',
      '/productos/saaxo2.mp4',
      '/productos/ssaxo2.mp4',
      '/productos/saxxofon2.mp4',
      '/productos/saxo2.mp4',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Acabado', valor: 'Laca dorada vintage' },
      { clave: 'Material', valor: 'Latón' },
      { clave: 'Nacares', valor: 'Blancos' },
      { clave: 'Afinación', valor: 'Mi bemol (Eb)' },
      { clave: 'Nivel', valor: 'Semi-profesional' },
      { clave: 'Incluye', valor: 'Estuche semi-rígido, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxofón Alto Punk Jazz Dorado - Vintage Semi-profesional | DR BRASS',
    metaDescription: 'Saxofón alto semi-profesional con laca dorada, super afinado. Nacares blancos. Incluye estuche, boquilla y holder. 1 año de garantía. ¡Precio imbatible!',
    tags: [
      'saxofon-alto',
      'punk-jazz',
      'semi-profesional',
      'vintage',
      'dorado',
      'estudiante-avanzado',
      'nacares-blancos',
      'estuche-incluido',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #3 - Saxo Alto Punk Jazz Customshop
  // ============================================
  {
    _id: 'producto-003',
    
    // Información básica
    nombre: 'Saxo Alto Punk Jazz Customshop',
    slug: 'saxo-alto-punk-jazz-customshop',
    descripcion: `Saxo alto PUNK JAZZ CUSTOMSHOP de alta gama con características premium.

Tudel bañado en plata con portavoz invertido
Laca dorada de alta calidad
Inlays de abalon
Incluye estuche rígido ergonómico tipo mochila, boquilla y holder

Un saxofón con un carácter increíble, súper afinado y cómodo.

Un año de garantía`,
    descripcionCorta: 'Saxo alto Punk Jazz Customshop con tudel bañado en plata, laca dorada e inlays de abalon. Carácter increíble, súper afinado y cómodo.',
    
    // Precios
    precio: 1200,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'punk-jazz-customshop',
    subcategoria: 'Customshop',
    marca: 'Punk Jazz',
    modelo: 'Alto Customshop',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 3
    imagenPrincipal: '/productos/sax3.jpeg',
    imagenes: [
      '/productos/saax3.jpeg',
      '/productos/saxo3.jpeg',
      '/productos/saxofon3.jpeg',
      '/productos/saxofonn3.jpeg',
      '/productos/saxx3.jpeg',
      '/productos/saxxo3.jpeg',
      '/productos/saxxofon3.jpeg',
      '/productos/ssaax3.jpeg',
      '/productos/ssaaxxofon3.jpeg',
      '/productos/ssax3.jpeg',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Línea', valor: 'Punk Jazz Customshop' },
      { clave: 'Acabado', valor: 'Laca dorada' },
      { clave: 'Tudel', valor: 'Bañado en plata con portavoz invertido' },
      { clave: 'Inlays', valor: 'Abalon' },
      { clave: 'Material', valor: 'Latón' },
      { clave: 'Afinación', valor: 'Mi bemol (Eb)' },
      { clave: 'Nivel', valor: 'Profesional' },
      { clave: 'Incluye', valor: 'Estuche rígido ergonómico tipo mochila, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxo Alto Punk Jazz Customshop - Profesional | DR BRASS',
    metaDescription: 'Saxo alto Punk Jazz Customshop con tudel bañado en plata, laca dorada e inlays de abalon. Carácter increíble y súper afinado. $1200 USD.',
    tags: [
      'saxofon-alto',
      'punk-jazz',
      'customshop',
      'profesional',
      'laca-dorada',
      'tudel-plata',
      'abalon',
      'estuche-rigido',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #4 - Saxo Alto Punk Jazz Customshop Silver
  // ============================================
  {
    _id: 'producto-004',
    
    // Información básica
    nombre: 'Saxo Alto Punk Jazz Customshop Silver',
    slug: 'saxo-alto-punk-jazz-customshop-silver',
    descripcion: `Saxo alto PUNK JAZZ CUSTOMSHOP Silver - El modelo más premium de la línea.

Tudel bañado en plata con portavoz invertido
Bañado en plata completo
Inlays de abalon
Incluye estuche tipo mochila, boquilla y holder

Un saxofón con un carácter increíble, súper afinado y cómodo.

Un año de garantía`,
    descripcionCorta: 'Saxo alto Punk Jazz Customshop bañado en plata con tudel plateado, inlays de abalon. El modelo más premium con carácter increíble.',
    
    // Precios
    precio: 1300,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'punk-jazz-customshop',
    subcategoria: 'Customshop Premium',
    marca: 'Punk Jazz',
    modelo: 'Alto Customshop Silver',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 4
    imagenPrincipal: '/productos/saxo4.jpeg',
    imagenes: [
      '/productos/saxofon4.jpeg',
      '/productos/saxofonn4.jpeg',
      '/productos/saxofonnn4.jpeg',
      '/productos/saxofoon4.jpeg',
      '/productos/saxoo4.jpeg',
      '/productos/saxxofoon4.jpeg',
      '/productos/ssaax4.jpeg',
      '/productos/ssaaxxofon4.jpeg',
      '/productos/ssax4.jpeg',
      '/productos/ssaxofonnn4.jpeg',
      '/productos/sssax4.jpeg',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Línea', valor: 'Punk Jazz Customshop Silver' },
      { clave: 'Acabado', valor: 'Bañado en plata completo' },
      { clave: 'Tudel', valor: 'Bañado en plata con portavoz invertido' },
      { clave: 'Inlays', valor: 'Abalon' },
      { clave: 'Material', valor: 'Latón plateado' },
      { clave: 'Afinación', valor: 'Mi bemol (Eb)' },
      { clave: 'Nivel', valor: 'Profesional Premium' },
      { clave: 'Incluye', valor: 'Estuche tipo mochila, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxo Alto Punk Jazz Customshop Silver - Premium | DR BRASS',
    metaDescription: 'Saxo alto Punk Jazz Customshop bañado en plata con tudel plateado e inlays de abalon. El modelo más premium con carácter increíble. $1300 USD.',
    tags: [
      'saxofon-alto',
      'punk-jazz',
      'customshop',
      'profesional',
      'silver',
      'plata',
      'bañado-en-plata',
      'tudel-plata',
      'abalon',
      'premium',
      'estuche-mochila',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #5 - Saxo Barítono Punk Jazz Customshop Silver
  // ============================================
  {
    _id: 'producto-005',
    
    // Información básica
    nombre: 'Saxo Barítono Punk Jazz Customshop Silver',
    slug: 'saxo-baritono-punk-jazz-customshop-silver',
    descripcion: `Saxo barítono PUNK JAZZ CUSTOMSHOP Silver - Una pieza excepcional para profesionales exigentes.

Campana con llave de La grave
Bañado en plata completo
Inlays de abalon
Incluye estuche tipo mochila, boquilla y holder

Un baritono con un carácter increíble, súper afinado y cómodo.

Un año de garantía`,
    descripcionCorta: 'Saxo barítono Punk Jazz Customshop bañado en plata con campana con llave de La grave e inlays de abalon. Carácter increíble y súper afinado.',
    
    // Precios
    precio: 4000,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'baritonos',
    subcategoria: 'Customshop Premium',
    marca: 'Punk Jazz',
    modelo: 'Barítono Customshop Silver',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 5
    imagenPrincipal: '/productos/sax5.jpeg',
    imagenes: [
      '/productos/saax5.jpeg',
      '/productos/saxofon5.jpeg',
      '/productos/saxofonn5.jpeg',
      '/productos/saxofoon5.jpeg',
      '/productos/saxx5.jpeg',
      '/productos/ssaaxofon5.jpeg',
      '/productos/ssax5.jpeg',
      '/productos/ssaxofon5.jpeg',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón Barítono' },
      { clave: 'Línea', valor: 'Punk Jazz Customshop Silver' },
      { clave: 'Acabado', valor: 'Bañado en plata completo' },
      { clave: 'Campana', valor: 'Con llave de La grave' },
      { clave: 'Inlays', valor: 'Abalon' },
      { clave: 'Material', valor: 'Latón plateado' },
      { clave: 'Afinación', valor: 'Mi bemol (Eb)' },
      { clave: 'Nivel', valor: 'Profesional Premium' },
      { clave: 'Incluye', valor: 'Estuche tipo mochila, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxo Barítono Punk Jazz Customshop Silver - Premium | DR BRASS',
    metaDescription: 'Saxo barítono Punk Jazz Customshop bañado en plata con campana con llave de La grave. Carácter increíble, súper afinado. $4000 USD.',
    tags: [
      'saxofon-baritono',
      'baritono',
      'punk-jazz',
      'customshop',
      'profesional',
      'silver',
      'plata',
      'bañado-en-plata',
      'abalon',
      'premium',
      'llave-la-grave',
      'estuche-mochila',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #6 - Saxo Tenor Punk Jazz Customshop
  // ============================================
  {
    _id: 'producto-006',
    
    // Información básica
    nombre: 'Saxo Tenor Punk Jazz Customshop',
    slug: 'saxo-tenor-punk-jazz-customshop',
    descripcion: `Saxo tenor PUNK JAZZ CUSTOMSHOP - Profesional y versátil para todo tipo de música.

Tudel bañado en plata con portavoz invertido
Laca dorada de alta calidad
Inlays de abalon
Incluye estuche tipo mochila, boquilla y holder

Un saxofón con un carácter increíble, súper afinado y cómodo.

Un año de garantía`,
    descripcionCorta: 'Saxo tenor Punk Jazz Customshop con tudel bañado en plata, laca dorada e inlays de abalon. Carácter increíble, súper afinado y cómodo.',
    
    // Precios
    precio: 1500,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'tenores',
    subcategoria: 'Customshop',
    marca: 'Punk Jazz',
    modelo: 'Tenor Customshop',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes y video del producto 6
    imagenPrincipal: '/productos/saxo6.jpeg',
    imagenes: [
      '/productos/saax6.jpeg',
      '/productos/saaxo6.jpeg',
      '/productos/saxofon6.jpeg',
      '/productos/saxofonn6.jpeg',
      '/productos/saxofoon6.jpeg',
      '/productos/saxx6.jpeg',
      '/productos/ssaaxxofon6.jpeg',
      '/productos/ssaaxxx6.jpeg',
      '/productos/ssax6.jpeg',
      '/productos/sax6.mp4',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón Tenor' },
      { clave: 'Línea', valor: 'Punk Jazz Customshop' },
      { clave: 'Acabado', valor: 'Laca dorada' },
      { clave: 'Tudel', valor: 'Bañado en plata con portavoz invertido' },
      { clave: 'Inlays', valor: 'Abalon' },
      { clave: 'Material', valor: 'Latón' },
      { clave: 'Afinación', valor: 'Si bemol (Bb)' },
      { clave: 'Nivel', valor: 'Profesional' },
      { clave: 'Incluye', valor: 'Estuche tipo mochila, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxo Tenor Punk Jazz Customshop - Profesional | DR BRASS',
    metaDescription: 'Saxo tenor Punk Jazz Customshop con tudel bañado en plata, laca dorada e inlays de abalon. Carácter increíble y súper afinado. $1500 USD.',
    tags: [
      'saxofon-tenor',
      'tenor',
      'punk-jazz',
      'customshop',
      'profesional',
      'laca-dorada',
      'tudel-plata',
      'abalon',
      'estuche-mochila',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #7 - Saxo Tenor Punk Jazz Customshop Silver
  // ============================================
  {
    _id: 'producto-007',
    
    // Información básica
    nombre: 'Saxo Tenor Punk Jazz Customshop Silver',
    slug: 'saxo-tenor-punk-jazz-customshop-silver',
    descripcion: `Saxo tenor PUNK JAZZ CUSTOMSHOP Silver - La versión premium del tenor con acabado plateado.

Tudel bañado en plata con portavoz invertido
Bañado en plata completo
Inlays de abalon
Incluye estuche tipo mochila, boquilla y holder

Un saxofón con un carácter increíble, súper afinado y cómodo.

Un año de garantía`,
    descripcionCorta: 'Saxo tenor Punk Jazz Customshop bañado en plata con tudel plateado e inlays de abalon. Versión premium con carácter increíble.',
    
    // Precios
    precio: 1600,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'tenores',
    subcategoria: 'Customshop Premium',
    marca: 'Punk Jazz',
    modelo: 'Tenor Customshop Silver',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes y video del producto 7
    imagenPrincipal: '/productos/ssax7.jpeg',
    imagenes: [
      '/productos/saax7.jpeg',
      '/productos/saaxxo7.jpeg',
      '/productos/saxoffoon7.jpeg',
      '/productos/saxofonn7.jpeg',
      '/productos/saxofonnn7.jpeg',
      '/productos/saxx7.jpeg',
      '/productos/ssaaxx7.jpeg',
      '/productos/ssaxofon7.jpeg',
      '/productos/sax7.mp4',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón Tenor' },
      { clave: 'Línea', valor: 'Punk Jazz Customshop Silver' },
      { clave: 'Acabado', valor: 'Bañado en plata completo' },
      { clave: 'Tudel', valor: 'Bañado en plata con portavoz invertido' },
      { clave: 'Inlays', valor: 'Abalon' },
      { clave: 'Material', valor: 'Latón plateado' },
      { clave: 'Afinación', valor: 'Si bemol (Bb)' },
      { clave: 'Nivel', valor: 'Profesional Premium' },
      { clave: 'Incluye', valor: 'Estuche tipo mochila, boquilla, holder' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxo Tenor Punk Jazz Customshop Silver - Premium | DR BRASS',
    metaDescription: 'Saxo tenor Punk Jazz Customshop bañado en plata con tudel plateado e inlays de abalon. Carácter increíble y súper afinado. $1600 USD.',
    tags: [
      'saxofon-tenor',
      'tenor',
      'punk-jazz',
      'customshop',
      'profesional',
      'silver',
      'plata',
      'bañado-en-plata',
      'tudel-plata',
      'abalon',
      'premium',
      'estuche-mochila',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // PRODUCTO #8 - Saxo Soprano Punk Jazz Customshop
  // ============================================
  {
    _id: 'producto-008',
    
    // Información básica
    nombre: 'Saxo Soprano Punk Jazz Customshop Profesional',
    slug: 'saxo-soprano-punk-jazz-customshop-profesional',
    descripcion: `Saxo soprano PUNK JAZZ CUSTOMSHOP profesional - Un instrumento increíble con calidad exigente a precio único.

Cuerpo de una sola pieza
Llave de sol agudo
Nacares de madre perla real
Afinación y un timbre realmente exquisito
Super cómodo

NUEVOS!

UN AÑO DE GARANTÍA!

Un instrumento increíble, con una calidad exigente a un precio único!`,
    descripcionCorta: 'Saxo soprano Punk Jazz Customshop profesional de cuerpo único con llave de sol agudo y nacares de madre perla. Timbre exquisito y super cómodo.',
    
    // Precios
    precio: 1200,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'sopranos',
    subcategoria: 'Customshop Profesional',
    marca: 'Punk Jazz',
    modelo: 'Soprano Customshop',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes y video del producto 8
    imagenPrincipal: '/productos/sax8.jpeg',
    imagenes: [
      '/productos/saaxofon8.jpeg',
      '/productos/saxo8.jpeg',
      '/productos/saxoffon8.jpeg',
      '/productos/saxofon8.jpeg',
      '/productos/saxofonn8.jpeg',
      '/productos/saxoo8.jpeg',
      '/productos/saxoofoon8.jpeg',
      '/productos/saxxo8.jpeg',
      '/productos/saxxofon8.jpeg',
      '/productos/ssaaxx8.jpeg',
      '/productos/ssax8.jpeg',
      '/productos/saax8.mp4',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón Soprano' },
      { clave: 'Línea', valor: 'Punk Jazz Customshop Profesional' },
      { clave: 'Construcción', valor: 'Cuerpo de una sola pieza' },
      { clave: 'Llave especial', valor: 'Sol agudo' },
      { clave: 'Nacares', valor: 'Madre perla real' },
      { clave: 'Timbre', valor: 'Exquisito' },
      { clave: 'Afinación', valor: 'Si bemol (Bb)' },
      { clave: 'Nivel', valor: 'Profesional' },
      { clave: 'Comodidad', valor: 'Super cómodo' },
      { clave: 'Garantía', valor: '1 año' },
    ],
    
    // SEO
    metaTitle: 'Saxo Soprano Punk Jazz Customshop Profesional | DR BRASS',
    metaDescription: 'Saxo soprano Punk Jazz Customshop profesional de cuerpo único con llave de sol agudo y nacares de madre perla real. Timbre exquisito. $1200 USD.',
    tags: [
      'saxofon-soprano',
      'soprano',
      'punk-jazz',
      'customshop',
      'profesional',
      'cuerpo-unico',
      'sol-agudo',
      'madre-perla',
      'timbre-exquisito',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-08'),
    updatedAt: new Date('2026-01-08'),
  },
  
  // ============================================
  // AGREGAR MÁS PRODUCTOS AQUÍ
  // ============================================
  
  /*
  {
    _id: 'producto-002',
    nombre: 'Siguiente Producto',
    slug: 'siguiente-producto',
    // ... resto de campos
  },
  */
];

// Función helper para obtener productos con filtros
export function getProductosFromDB(filters?: {
  categoria?: string;
  marca?: string;
  condicion?: string;
  destacado?: boolean;
  activo?: boolean;
  search?: string;
}): Product[] {
  let productos = productosDB;

  // Filtrar por activo
  if (filters?.activo !== undefined) {
    productos = productos.filter(p => p.activo === filters.activo);
  } else {
    // Por defecto solo mostrar activos
    productos = productos.filter(p => p.activo);
  }

  // Filtrar por categoría
  if (filters?.categoria) {
    productos = productos.filter(p => p.categoria === filters.categoria);
  }

  // Filtrar por marca
  if (filters?.marca) {
    productos = productos.filter(p => 
      p.marca.toLowerCase().includes(filters.marca!.toLowerCase())
    );
  }

  // Filtrar por condición
  if (filters?.condicion) {
    productos = productos.filter(p => p.condicion === filters.condicion);
  }

  // Filtrar por destacado
  if (filters?.destacado !== undefined) {
    productos = productos.filter(p => p.destacado === filters.destacado);
  }

  // Búsqueda de texto
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    productos = productos.filter(p => 
      p.nombre.toLowerCase().includes(searchLower) ||
      p.descripcion.toLowerCase().includes(searchLower) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Ordenar: destacados primero, luego por fecha
  productos.sort((a, b) => {
    if (a.destacado && !b.destacado) return -1;
    if (!a.destacado && b.destacado) return 1;
    return (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0);
  });

  return productos;
}

// Función para obtener producto por slug
export function getProductoBySlugFromDB(slug: string): Product | undefined {
  return productosDB.find(p => p.slug === slug && p.activo);
}

// Función para obtener producto por ID
export function getProductoByIdFromDB(id: string): Product | undefined {
  return productosDB.find(p => p._id === id);
}

// Función para obtener productos destacados
export function getProductosDestacadosFromDB(limit?: number): Product[] {
  const destacados = productosDB.filter(p => p.destacado && p.activo);
  return limit ? destacados.slice(0, limit) : destacados;
}

// Exportar también el contador
export function getTotalProductosDB(): number {
  return productosDB.filter(p => p.activo).length;
}
