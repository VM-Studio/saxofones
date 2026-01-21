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
    nombre: 'Saxofón Alto Punk Jazz Dorado CUSTOMSHOP',
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
  // PRODUCTO #9 - Boquilla Punk Jazz
  // ============================================
  {
    _id: 'producto-009',
    
    // Información básica
    nombre: 'Boquilla Punk Jazz',
    slug: 'boquilla-punk-jazz',
    descripcion: `Boquilla de autor fabricada en Hard rubber y bronce, inspirada en el sonido de las grandes leyendas del saxofón.

Diseñada y fabricada por Punk Jazz
Material: Hard rubber y bronce
Calidad premium
Sonido inspirado en las leyendas del saxofón

Una boquilla única que te permitirá explorar nuevas posibilidades sonoras con tu saxofón.`,
    descripcionCorta: 'Boquilla de autor fabricada en Hard rubber y bronce, inspirada en el sonido de las grandes leyendas del saxofón.',
    
    // Precios
    precio: 90,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'boquillas',
    subcategoria: 'Autor',
    marca: 'Punk Jazz',
    modelo: 'Boquilla Hard Rubber & Bronce',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 9
    imagenPrincipal: '/productos/sax9.png',
    imagenes: [
      '/productos/s9.png',
      '/productos/sa9.png',
      '/productos/saxo9.png',
      '/productos/saxof9.png',
      '/productos/saxofo9.png',
      '/productos/saxofon9.png',
      '/productos/saxofonn9.png',
      '/productos/saxofoon9.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Boquilla para saxofón' },
      { clave: 'Fabricante', valor: 'Punk Jazz (autor)' },
      { clave: 'Material', valor: 'Hard rubber y bronce' },
      { clave: 'Inspiración', valor: 'Sonido de grandes leyendas' },
      { clave: 'Calidad', valor: 'Premium' },
      { clave: 'Compatible', valor: 'Saxofones alto y tenor' },
    ],
    
    // SEO
    metaTitle: 'Boquilla Punk Jazz - Hard Rubber & Bronce | DR BRASS',
    metaDescription: 'Boquilla de autor Punk Jazz fabricada en Hard rubber y bronce. Inspirada en el sonido de las grandes leyendas del saxofón. ARS $90.',
    tags: [
      'boquilla',
      'punk-jazz',
      'hard-rubber',
      'bronce',
      'autor',
      'premium',
      'leyendas',
      'saxofon',
    ],
    
    // Control
    destacado: false,
    activo: true,
    stock: 10,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #10 - Otto Link Súper Tone Master (Barítono)
  // ============================================
  {
    _id: 'producto-010',
    
    // Información básica
    nombre: 'Otto Link Súper Tone Master (Barítono)',
    slug: 'otto-link-super-tone-master-baritono',
    descripcion: `Otto link súper tone Master 6 (SAXO BARÍTONO)

Sin retoques, excelente estado, punta rieles y tablas de fábrica!

REVISEN EL PRECIO DE LO QUE PIDEN EN MERCADO LIBRE!

¡ÉSTA ES UNA EXCELENTE OPORTUNIDAD!

Una boquilla legendaria Otto Link en condiciones excepcionales. Perfect para saxofonistas profesionales que buscan el clásico sonido Otto Link en saxo barítono.

Estado: Sin modificaciones
Punta, rieles y tablas originales de fábrica
Condición: Excelente
Oportunidad única de precio`,
    descripcionCorta: 'Otto link súper tone Master 6 para saxo barítono. Sin retoques, excelente estado, punta rieles y tablas de fábrica.',
    
    // Precios
    precio: 300,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'boquillas',
    subcategoria: 'Barítono',
    marca: 'Otto Link',
    modelo: 'Súper Tone Master 6',
    
    // Estado
    condicion: 'usado',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 10
    imagenPrincipal: '/productos/boqui10.png',
    imagenes: [
      '/productos/boq10.png',
      '/productos/bo10.png',
      '/productos/b10.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Boquilla para saxofón barítono' },
      { clave: 'Marca', valor: 'Otto Link' },
      { clave: 'Modelo', valor: 'Súper Tone Master 6' },
      { clave: 'Abertura', valor: '6' },
      { clave: 'Estado', valor: 'Sin retoques, original de fábrica' },
      { clave: 'Condición', valor: 'Excelente' },
      { clave: 'Punta y rieles', valor: 'Originales de fábrica' },
      { clave: 'Compatible', valor: 'Saxofón barítono' },
    ],
    
    // SEO
    metaTitle: 'Otto Link Súper Tone Master 6 Barítono | DR BRASS',
    metaDescription: 'Boquilla Otto Link Súper Tone Master 6 para saxo barítono. Sin retoques, excelente estado, punta y tablas originales. USD $300.',
    tags: [
      'boquilla',
      'otto-link',
      'super-tone-master',
      'baritono',
      'profesional',
      'vintage',
      'original',
      'excelente-estado',
    ],
    
    // Control
    destacado: false,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #11 - Boquillas PUNK JAZZ (Nuevos Modelos)
  // ============================================
  {
    _id: 'producto-011',
    
    // Información básica
    nombre: 'Boquillas PUNK JAZZ - Nuevos Modelos',
    slug: 'boquillas-punk-jazz-nuevos-modelos',
    descripcion: `Nuevos modelos de híbridas y hard rubber!

¡Aprovecha la promo!

Disponibles para todos los saxofones:
🎷 Soprano
🎷 Alto
🎷 Tenor
🎷 Barítono

Enviamos a todo el país!

💳 Aceptamos todos los medios de pago!

Boquillas Punk Jazz de última generación, fabricadas con los mejores materiales. Perfectas para explorar nuevos sonidos y obtener la mejor respuesta de tu saxofón.

Modelos híbridos y hard rubber disponibles
Compatible con todos los tipos de saxofón
Envíos a todo el país
Múltiples medios de pago aceptados`,
    descripcionCorta: 'Nuevos modelos de boquillas Punk Jazz: híbridas y hard rubber. Disponibles para soprano, alto, tenor y barítono. ¡Aprovecha la promo!',
    
    // Precios
    precio: 90000,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'boquillas',
    subcategoria: 'Todos los tipos',
    marca: 'Punk Jazz',
    modelo: 'Nuevos Modelos 2026',
    
    // Estado
    condicion: 'nuevo',
    año: 2026,
    
    // Imágenes - TODAS las imágenes del producto 11
    imagenPrincipal: '/productos/boquilla11.png',
    imagenes: [
      '/productos/boqui11.png',
      '/productos/boqu11.png',
      '/productos/boq11.png',
      '/productos/bo11.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Boquillas para saxofón' },
      { clave: 'Fabricante', valor: 'Punk Jazz' },
      { clave: 'Materiales', valor: 'Híbridas y Hard rubber' },
      { clave: 'Compatible con', valor: 'Soprano, Alto, Tenor, Barítono' },
      { clave: 'Año', valor: '2026 - Nuevos modelos' },
      { clave: 'Envíos', valor: 'Todo el país' },
      { clave: 'Medios de pago', valor: 'Todos aceptados' },
      { clave: 'Promoción', valor: 'Precio especial' },
    ],
    
    // SEO
    metaTitle: 'Boquillas PUNK JAZZ 2026 - Nuevos Modelos | DR BRASS',
    metaDescription: 'Nuevos modelos de boquillas Punk Jazz: híbridas y hard rubber. Para soprano, alto, tenor y barítono. Envíos a todo el país. ARS $90.000.',
    tags: [
      'boquilla',
      'punk-jazz',
      'hibridas',
      'hard-rubber',
      'soprano',
      'alto',
      'tenor',
      'baritono',
      'nuevos-modelos',
      'promo',
      '2026',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 20,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #12 - Tudeles con tratamiento acústico
  // ============================================
  {
    _id: 'producto-012',
    
    // Información básica
    nombre: 'Tudeles con tratamiento acústico',
    slug: 'tudeles-tratamiento-acustico',
    descripcion: `¿Querés mejorar la calidad tímbrica de tu saxo?
¡Tudeles con tratamiento acústico!

Consultá por marca y modelo de tu saxo, la diferencia es muy notoria si tenés un saxo de estudio o de gama media!

¡Pasá a probarlos!

Los tudeles con tratamiento acústico de DR BRASS están diseñados para mejorar significativamente la calidad del sonido de tu saxofón. Especialmente notorio en saxofones de estudio y gama media.

Mejora notable en la calidad tímbrica
Compatible con diferentes marcas y modelos
Tratamiento acústico profesional
Ideal para saxos de estudio y gama media
Disponible para prueba en tienda

Consultanos por tu marca y modelo específico para asegurarte de que tenemos el tudel perfecto para tu saxofón.`,
    descripcionCorta: 'Tudeles con tratamiento acústico para mejorar la calidad tímbrica de tu saxo. Consultá por marca y modelo. ¡Pasá a probarlos!',
    
    // Precios
    precio: 120,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'accesorios',
    subcategoria: 'Tudeles',
    marca: 'DR BRASS',
    modelo: 'Tratamiento Acústico',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 12
    imagenPrincipal: '/productos/tudeles1.png',
    imagenes: [
      '/productos/tudele1.png',
      '/productos/tudel1.png',
      '/productos/tude1.png',
      '/productos/tud1.png',
      '/productos/tu1.png',
      '/productos/t1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Tudel para saxofón' },
      { clave: 'Tratamiento', valor: 'Acústico profesional' },
      { clave: 'Fabricante', valor: 'DR BRASS' },
      { clave: 'Mejora', valor: 'Calidad tímbrica notable' },
      { clave: 'Ideal para', valor: 'Saxos de estudio y gama media' },
      { clave: 'Compatibilidad', valor: 'Consultar por marca/modelo' },
      { clave: 'Prueba', valor: 'Disponible en tienda' },
    ],
    
    // SEO
    metaTitle: 'Tudeles con Tratamiento Acústico | DR BRASS',
    metaDescription: 'Tudeles con tratamiento acústico para mejorar la calidad tímbrica de tu saxofón. Ideal para saxos de estudio y gama media. ARS $120.',
    tags: [
      'tudel',
      'tratamiento-acustico',
      'mejora-sonido',
      'calidad-timbrica',
      'accesorios',
      'dr-brass',
      'saxofon',
      'profesional',
    ],
    
    // Control
    destacado: false,
    activo: true,
    stock: 15,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #13 - Tornillos de masa nodal
  // ============================================
  {
    _id: 'producto-013',
    
    // Información básica
    nombre: 'Tornillos de masa nodal',
    slug: 'tornillos-masa-nodal',
    descripcion: `¡Tornillos de masa nodal!

Elimina esos armónicos fuera del rango de la vibración que pasa por el tudel, realmente es notoria la diferencia, si sos de esas personas que le gusta hilar fino en su audio, ¡pasá a probarlos!!!

Los tornillos de masa nodal son una innovación en accesorios para saxofón que te permiten mejorar significativamente la calidad de tu sonido al eliminar armónicos indeseados.

Elimina armónicos no deseados
Mejora el rango de vibración del tudel
Diferencia notoria en la calidad del audio
Ideal para músicos exigentes
Perfectos para afinar tu sonido
Disponible para prueba en tienda

Si sos de los que les gusta cuidar cada detalle de su sonido, estos tornillos son para vos.`,
    descripcionCorta: 'Tornillos de masa nodal que eliminan armónicos fuera del rango. Mejora notoria en la calidad del audio. ¡Pasá a probarlos!',
    
    // Precios
    precio: 40,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'accesorios',
    subcategoria: 'Tornillos',
    marca: 'DR BRASS',
    modelo: 'Masa Nodal',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 13
    imagenPrincipal: '/productos/tornillo.png',
    imagenes: [
      '/productos/torni1.png',
      '/productos/tor1.png',
      '/productos/to1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Tornillos de masa nodal' },
      { clave: 'Fabricante', valor: 'DR BRASS' },
      { clave: 'Función', valor: 'Elimina armónicos indeseados' },
      { clave: 'Mejora', valor: 'Rango de vibración del tudel' },
      { clave: 'Efecto', valor: 'Notoria mejora en calidad de audio' },
      { clave: 'Ideal para', valor: 'Músicos que cuidan cada detalle' },
      { clave: 'Prueba', valor: 'Disponible en tienda' },
    ],
    
    // SEO
    metaTitle: 'Tornillos de Masa Nodal para Saxofón | DR BRASS',
    metaDescription: 'Tornillos de masa nodal que eliminan armónicos indeseados y mejoran la calidad del sonido. Diferencia notoria en el audio. USD $40.',
    tags: [
      'tornillos',
      'masa-nodal',
      'accesorios',
      'mejora-sonido',
      'armonicos',
      'tudel',
      'calidad-audio',
      'dr-brass',
    ],
    
    // Control
    destacado: false,
    activo: true,
    stock: 25,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #14 - Saxo tenor Julius Keilwert tone king modell 2
  // ============================================
  {
    _id: 'producto-014',
    
    // Información básica
    nombre: 'Saxo tenor Julius Keilwert tone king modell 2',
    slug: 'saxo-tenor-julius-keilwert-tone-king-modell-2',
    descripcion: `Saxo tenor profesional Julius Keilwert modell tone king 2

🎷 Mecánica cómoda, considerando su época de fabricación
🎷 Enorme sonido, oscuro, potente
🎷 Excelente condición estética y estructural
🎷 Baño de plata en dos tonos
Campana bañada en oro
🎷 Chimeneas enrolladas (rolled tone holes)
🎷 Zapatillado completo nuevo

Garantía de 6 meses.

Tomamos tu saxo al mejor valor de la argentina.

Un saxofón profesional vintage de la prestigiosa marca alemana Julius Keilwert. Este instrumento combina la calidad de construcción europea con características únicas que lo hacen ideal para músicos profesionales que buscan un sonido oscuro y potente.

El modelo Tone King 2 es conocido por su excepcional calidad de sonido y su construcción robusta. Este ejemplar ha sido completamente restaurado con zapatillado nuevo y se encuentra en excelente condición tanto estética como estructural.`,
    descripcionCorta: 'Saxo tenor profesional Julius Keilwert Tone King 2. Sonido oscuro y potente, baño de plata en dos tonos, campana dorada. Zapatillado nuevo.',
    
    // Precios
    precio: 1800,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'tenores',
    subcategoria: 'Profesional',
    marca: 'Julius Keilwert',
    modelo: 'Tone King Modell 2',
    
    // Estado
    condicion: 'usado',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 14
    imagenPrincipal: '/productos/tenor6.png',
    imagenes: [
      '/productos/tenor5.png',
      '/productos/tenor4.png',
      '/productos/tenor3.png',
      '/productos/tenor2.png',
      '/productos/tenor1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón tenor profesional' },
      { clave: 'Marca', valor: 'Julius Keilwert (Alemania)' },
      { clave: 'Modelo', valor: 'Tone King Modell 2' },
      { clave: 'Sonido', valor: 'Oscuro, potente, enorme' },
      { clave: 'Acabado', valor: 'Baño de plata en dos tonos' },
      { clave: 'Campana', valor: 'Bañada en oro' },
      { clave: 'Chimeneas', valor: 'Enrolladas (rolled tone holes)' },
      { clave: 'Zapatillado', valor: 'Completo nuevo' },
      { clave: 'Mecánica', valor: 'Cómoda' },
      { clave: 'Condición', valor: 'Excelente estética y estructural' },
      { clave: 'Garantía', valor: '6 meses' },
      { clave: 'Permuta', valor: 'Tomamos tu saxo al mejor valor' },
    ],
    
    // SEO
    metaTitle: 'Saxo Tenor Julius Keilwert Tone King Modell 2 | DR BRASS',
    metaDescription: 'Saxo tenor profesional Julius Keilwert Tone King 2. Sonido oscuro y potente, baño de plata, campana dorada, zapatillado nuevo. Garantía 6 meses. USD $1,800.',
    tags: [
      'saxo-tenor',
      'julius-keilwert',
      'tone-king',
      'profesional',
      'vintage',
      'aleman',
      'baño-plata',
      'campana-dorada',
      'rolled-tone-holes',
      'zapatillado-nuevo',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #15 - Saxo tenor YAMAHA YTS 61
  // ============================================
  {
    _id: 'producto-015',
    
    // Información básica
    nombre: 'Saxo tenor YAMAHA YTS 61',
    slug: 'saxo-tenor-yamaha-yts-61',
    descripcion: `Saxo tenor Yamaha YTS 61 logo purpura (profesional)

Excelente estado de conservación, laca al 90%
Década del 70 diseñado por Yanagisawa para la marca.
A mi entender, muy superior al YTS 62, con un sonido muchísimo más grande, oscuro y con muchísimo volumen, mundialmente comparado con el audio del mark VI...

Excelente estado de zapatillas, calibrado, 100% operativo y sonando en todo el registro.
Un caño inobjetable para verdaderos exigentes...

🎷 6 meses de garantía.

🎷 Se entrega con estuche Pro Tec...

🎷 Boquilla punk jazz y correa de neopreno.

¡ACEPTAMOS TU SAXO EN PARTE DE PAGO!

Un saxofón tenor profesional de la legendaria serie YTS 61, fabricado en la década del 70 con el diseño de Yanagisawa. Este instrumento es considerado por muchos superior al YTS 62, con un sonido comparable al mítico Mark VI: grande, oscuro y con muchísimo volumen.

Estado de conservación excepcional con laca al 90%, zapatillas en excelente estado, perfectamente calibrado y operativo en todo el registro. Un instrumento profesional para músicos verdaderamente exigentes.`,
    descripcionCorta: 'Yamaha YTS 61 profesional (década 70). Diseño Yanagisawa, sonido comparable al Mark VI. Laca 90%, incluye estuche Pro Tec, boquilla Punk Jazz.',
    
    // Precios
    precio: 3000,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'tenores',
    subcategoria: 'Profesional',
    marca: 'Yamaha',
    modelo: 'YTS 61 Logo Púrpura',
    
    // Estado
    condicion: 'usado',
    año: 1970,
    
    // Imágenes - TODAS las imágenes del producto 15
    imagenPrincipal: '/productos/yamaha10.png',
    imagenes: [
      '/productos/yamaha9.png',
      '/productos/yamaha8.png',
      '/productos/yamaha7.png',
      '/productos/yamaha6.png',
      '/productos/yamaha5.png',
      '/productos/yamaha4.png',
      '/productos/yamaha3.png',
      '/productos/yamaha2.png',
      '/productos/yamaha1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón tenor profesional' },
      { clave: 'Marca', valor: 'Yamaha' },
      { clave: 'Modelo', valor: 'YTS 61 Logo Púrpura' },
      { clave: 'Época', valor: 'Década del 70' },
      { clave: 'Diseño', valor: 'Por Yanagisawa para Yamaha' },
      { clave: 'Sonido', valor: 'Grande, oscuro, voluminoso' },
      { clave: 'Comparación', valor: 'Similar al Selmer Mark VI' },
      { clave: 'Laca', valor: '90% conservada' },
      { clave: 'Zapatillas', valor: 'Excelente estado' },
      { clave: 'Estado', valor: '100% operativo, calibrado' },
      { clave: 'Garantía', valor: '6 meses' },
      { clave: 'Incluye', valor: 'Estuche Pro Tec' },
      { clave: 'Incluye', valor: 'Boquilla Punk Jazz' },
      { clave: 'Incluye', valor: 'Correa de neopreno' },
      { clave: 'Permuta', valor: 'Aceptamos tu saxo como parte de pago' },
    ],
    
    // SEO
    metaTitle: 'Saxo Tenor Yamaha YTS 61 Profesional Década 70 | DR BRASS',
    metaDescription: 'Yamaha YTS 61 profesional diseñado por Yanagisawa. Sonido comparable al Mark VI, laca 90%. Incluye estuche Pro Tec y boquilla Punk Jazz. USD $3,000.',
    tags: [
      'saxo-tenor',
      'yamaha',
      'yts-61',
      'profesional',
      'vintage',
      'yanagisawa',
      'mark-vi',
      'decada-70',
      'logo-purpura',
      'pro-tec',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #16 - Saxo tenor "The Martin" committe III
  // ============================================
  {
    _id: 'producto-016',
    
    // Información básica
    nombre: 'Saxo tenor "The Martin" committe III',
    slug: 'saxo-tenor-the-martin-committe-iii',
    descripcion: `Pongo a la venta "mi tenor"

Es un "The Martin" committe III
serial number 311998 (década del 50)

Recientemente calibrado y puesto a punto, sin golpes y estructuralmente perfecto..

Sonido realmente demoledor y súper cómodo, como verán, está casi deslaqueado en su totalidad.

El caño es una verdadera bomba, simplemente lo vendo porque no le estoy dando el uso que se merece...

Un saxofón tenor legendario de la mítica marca americana The Martin. El modelo Committee III es uno de los saxofones más buscados y apreciados por coleccionistas y músicos profesionales alrededor del mundo.

Este ejemplar del serial 311998, fabricado en la década del 50, representa la época dorada de la fabricación de saxofones Martin. A pesar de estar casi completamente deslaqueado, el instrumento se encuentra en perfecto estado estructural, sin golpes, recientemente calibrado y listo para tocar.

El sonido es simplemente demoledor, con la calidez y potencia características de los Martin vintage. La ergonomía es excepcional, haciendo que sea súper cómodo de tocar. Una verdadera joya para coleccionistas y músicos exigentes.`,
    descripcionCorta: 'The Martin Committee III (década 50, serial 311998). Recientemente calibrado, sin golpes, estructuralmente perfecto. Sonido demoledor y súper cómodo.',
    
    // Precios
    precio: 3500,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'tenores',
    subcategoria: 'Profesional Vintage',
    marca: 'The Martin',
    modelo: 'Committee III',
    
    // Estado
    condicion: 'usado',
    año: 1950,
    
    // Imágenes - TODAS las imágenes del producto 16
    imagenPrincipal: '/productos/martin10.png',
    imagenes: [
      '/productos/martin9.png',
      '/productos/martin8.png',
      '/productos/martin7.png',
      '/productos/martin6.png',
      '/productos/martin5.png',
      '/productos/martin4.png',
      '/productos/martin3.png',
      '/productos/martin2.png',
      '/productos/martin1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón tenor profesional vintage' },
      { clave: 'Marca', valor: 'The Martin (USA)' },
      { clave: 'Modelo', valor: 'Committee III' },
      { clave: 'Serial Number', valor: '311998' },
      { clave: 'Época', valor: 'Década del 50' },
      { clave: 'Estado estructural', valor: 'Perfecto, sin golpes' },
      { clave: 'Calibración', valor: 'Recientemente calibrado y a punto' },
      { clave: 'Laca', valor: 'Casi completamente deslaqueado (vintage)' },
      { clave: 'Sonido', valor: 'Demoledor, cálido, potente' },
      { clave: 'Ergonomía', valor: 'Súper cómodo' },
      { clave: 'Coleccionable', valor: 'Altamente buscado por coleccionistas' },
    ],
    
    // SEO
    metaTitle: 'Saxo Tenor The Martin Committee III Década 50 | DR BRASS',
    metaDescription: 'The Martin Committee III (serial 311998, década 50). Legendario saxo tenor vintage, sonido demoledor, recientemente calibrado. Pieza de colección. USD $3,500.',
    tags: [
      'saxo-tenor',
      'the-martin',
      'martin-committee',
      'committee-iii',
      'vintage',
      'decada-50',
      'usa',
      'coleccionable',
      'profesional',
      'legendario',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #17 - Saxo tenor selmer Bundy II PUNK JAZZ CUSTOMSHOP
  // ============================================
  {
    _id: 'producto-017',
    
    // Información básica
    nombre: 'Saxo tenor selmer Bundy II PUNK JAZZ CUSTOMSHOP',
    slug: 'saxo-tenor-selmer-bundy-ii-punk-jazz-customshop',
    descripcion: `Saxo tenor selmer Bundy II PUNK JAZZ CUSTOMSHOP, con tratamiento acústico por ultrasonido y granallado con micro.

🎷 Mejora ergonómica.
🎷 Baño de plata líquida.
🎷 Tudel Phill Barone.
🎷 Incluye tudel original
🎷 Boquilla punk jazz de regalo si es en pago efectivo.
🎷 Calibrado 100% operativo.
🎷 6 meses de garantía!

Tomamos tu usado al mejor precio del país

Un Selmer Bundy II completamente transformado por PUNK JAZZ CUSTOMSHOP. Este instrumento ha pasado por un proceso de mejora integral que incluye tratamiento acústico profesional por ultrasonido y granallado con micro, mejorando significativamente sus características sonoras y estéticas.

El Bundy II es conocido por ser un saxofón robusto y confiable fabricado por Selmer USA. Esta versión customizada lleva el instrumento a un nivel completamente superior, con mejoras ergonómicas, baño de plata líquida, y un tudel premium Phill Barone que transforma por completo el sonido del instrumento.

Perfecto para músicos que buscan un tenor de calidad profesional con características únicas a un precio excepcional.`,
    descripcionCorta: 'Selmer Bundy II customizado por Punk Jazz. Tratamiento acústico ultrasonido, baño plata líquida, tudel Phill Barone. Boquilla de regalo en efectivo.',
    
    // Precios
    precio: 1500,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'tenores',
    subcategoria: 'Customizado',
    marca: 'Selmer (Punk Jazz Customshop)',
    modelo: 'Bundy II Custom',
    
    // Estado
    condicion: 'usado',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 17
    imagenPrincipal: '/productos/selmer7.png',
    imagenes: [
      '/productos/selmer6.png',
      '/productos/selmer5.png',
      '/productos/selmer4.png',
      '/productos/selmer3.png',
      '/productos/selmer2.png',
      '/productos/selmer1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón tenor customizado' },
      { clave: 'Marca original', valor: 'Selmer USA' },
      { clave: 'Modelo', valor: 'Bundy II' },
      { clave: 'Customizado por', valor: 'PUNK JAZZ CUSTOMSHOP' },
      { clave: 'Tratamiento', valor: 'Acústico por ultrasonido' },
      { clave: 'Acabado', valor: 'Granallado con micro + baño plata líquida' },
      { clave: 'Mejoras', valor: 'Ergonómicas' },
      { clave: 'Tudel incluido', valor: 'Phill Barone (premium)' },
      { clave: 'Tudel original', valor: 'También incluido' },
      { clave: 'Estado', valor: 'Calibrado 100% operativo' },
      { clave: 'Bono', valor: 'Boquilla Punk Jazz de regalo (pago efectivo)' },
      { clave: 'Garantía', valor: '6 meses' },
      { clave: 'Permuta', valor: 'Tomamos tu usado al mejor precio' },
    ],
    
    // SEO
    metaTitle: 'Saxo Tenor Selmer Bundy II Punk Jazz Customshop | DR BRASS',
    metaDescription: 'Selmer Bundy II customizado: tratamiento acústico ultrasonido, baño plata líquida, tudel Phill Barone. Garantía 6 meses. USD $1,500.',
    tags: [
      'saxo-tenor',
      'selmer',
      'bundy-ii',
      'customshop',
      'punk-jazz',
      'customizado',
      'baño-plata',
      'phill-barone',
      'tratamiento-acustico',
      'ultrasonido',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #18 - Saxofón soprano Júpiter 547
  // ============================================
  {
    _id: 'producto-018',
    
    // Información básica
    nombre: 'Saxofón soprano Júpiter 547',
    slug: 'saxofon-soprano-jupiter-547',
    descripcion: `Saxofón soprano Júpiter 547

Tubo y tudel de una sola pieza, realmente es un instrumento increíble, con una afinación y un timbre que muy pocos sopranos de esa gama y precio pueden igualar.

Este soprano es mío desde nuevo, y está conmigo desde mis 12 años (hace 31 años)

Siempre muy bien cuidado y en un estado óptimo!

Precio 1400 dólares!

Un saxofón soprano de construcción única con tubo y tudel de una sola pieza, lo que proporciona una afinación excepcional y un timbre superior. El Júpiter 547 es reconocido por su calidad de construcción y su capacidad de competir con instrumentos de gamas mucho más altas.

Este instrumento particular tiene una historia especial: ha sido cuidado meticulosamente durante 31 años por su dueño desde que lo adquirió nuevo a los 12 años. El cuidado constante y profesional se refleja en su estado óptimo actual.

Ideal para músicos que buscan un soprano de alta calidad con características profesionales a un precio accesible. La construcción de una pieza es una característica poco común que mejora significativamente la respuesta y afinación del instrumento.`,
    descripcionCorta: 'Júpiter 547 soprano. Tubo y tudel de una pieza, afinación y timbre excepcionales. 31 años de cuidado profesional, estado óptimo.',
    
    // Precios
    precio: 1400,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'sopranos',
    subcategoria: 'Semi-profesional',
    marca: 'Júpiter',
    modelo: '547',
    
    // Estado
    condicion: 'usado',
    año: 1995,
    
    // Imágenes - TODAS las imágenes del producto 18
    imagenPrincipal: '/productos/jupiter.png',
    imagenes: [],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón soprano' },
      { clave: 'Marca', valor: 'Júpiter' },
      { clave: 'Modelo', valor: '547' },
      { clave: 'Construcción', valor: 'Tubo y tudel de una sola pieza' },
      { clave: 'Afinación', valor: 'Excepcional' },
      { clave: 'Timbre', valor: 'Superior para su gama' },
      { clave: 'Antigüedad', valor: '31 años (desde 1995)' },
      { clave: 'Historia', valor: 'Dueño único desde nuevo' },
      { clave: 'Cuidado', valor: 'Profesional y constante' },
      { clave: 'Estado', valor: 'Óptimo' },
      { clave: 'Ventaja', valor: 'Construcción de una pieza mejora respuesta' },
    ],
    
    // SEO
    metaTitle: 'Saxofón Soprano Júpiter 547 - Tubo de Una Pieza | DR BRASS',
    metaDescription: 'Júpiter 547 soprano con tubo y tudel de una pieza. Afinación y timbre excepcionales, 31 años de cuidado profesional, estado óptimo. USD $1,400.',
    tags: [
      'saxofon-soprano',
      'jupiter',
      '547',
      'una-pieza',
      'afinacion-excepcional',
      'timbre-superior',
      'semi-profesional',
      'vintage',
      'bien-cuidado',
    ],
    
    // Control
    destacado: false,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #19 - Saxo barítono CONN 12M NAKED LADY
  // ============================================
  {
    _id: 'producto-019',
    
    // Información básica
    nombre: 'Saxo barítono CONN 12M NAKED LADY',
    slug: 'saxo-baritono-conn-12m-naked-lady',
    descripcion: `🎷 Saxofon baritono CONN 12M Naked lady Made in USA.

Año 1956 por su número de serie.
Excelente estado de zapatillas y estructural.
Laca de fábrica.

🎷 Incluye estuche semi rígido Pro-Tec, boquilla punk jazz y arnes bg.

🎷 Garantía técnica de 6 meses.

Puedo tomar barítono en parte de pago...

Precio 4000 dólares

Un saxofón barítono legendario de la mítica serie CONN 12M "Naked Lady". Este modelo, fabricado en USA en 1956, es considerado uno de los mejores saxofones barítono jamás fabricados y es altamente buscado por coleccionistas y músicos profesionales en todo el mundo.

El apodo "Naked Lady" proviene del grabado de una figura femenina que aparece en la campana del instrumento, característico de los CONN de esta época. Estos instrumentos son conocidos por su sonido profundo, cálido y potente, con una proyección excepcional.

Este ejemplar se encuentra en excelente estado, conservando su laca de fábrica original y con zapatillas en perfecto estado. Un instrumento de colección que además es completamente funcional para uso profesional.`,
    descripcionCorta: 'CONN 12M Naked Lady barítono (1956, Made in USA). Excelente estado, laca de fábrica. Incluye estuche Pro-Tec, boquilla Punk Jazz y arnés.',
    
    // Precios
    precio: 4000,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'baritonos',
    subcategoria: 'Profesional Vintage',
    marca: 'CONN',
    modelo: '12M Naked Lady',
    
    // Estado
    condicion: 'usado',
    año: 1956,
    
    // Imágenes - TODAS las imágenes del producto 19
    imagenPrincipal: '/productos/lady9.png',
    imagenes: [
      '/productos/lady8.png',
      '/productos/lady7.png',
      '/productos/lady6.png',
      '/productos/lady5.png',
      '/productos/lady4.png',
      '/productos/lady3.png',
      '/productos/lady2.png',
      '/productos/lady1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón barítono profesional vintage' },
      { clave: 'Marca', valor: 'CONN (USA)' },
      { clave: 'Modelo', valor: '12M Naked Lady' },
      { clave: 'Año', valor: '1956 (verificado por serial)' },
      { clave: 'Fabricación', valor: 'Made in USA' },
      { clave: 'Serie', valor: 'Legendaria 12M' },
      { clave: 'Característica', valor: 'Grabado "Naked Lady" en campana' },
      { clave: 'Laca', valor: 'Original de fábrica' },
      { clave: 'Zapatillas', valor: 'Excelente estado' },
      { clave: 'Estado estructural', valor: 'Excelente' },
      { clave: 'Sonido', valor: 'Profundo, cálido, potente' },
      { clave: 'Incluye', valor: 'Estuche Pro-Tec semi rígido' },
      { clave: 'Incluye', valor: 'Boquilla Punk Jazz' },
      { clave: 'Incluye', valor: 'Arnés BG' },
      { clave: 'Garantía', valor: '6 meses técnica' },
      { clave: 'Permuta', valor: 'Acepta barítono como parte de pago' },
    ],
    
    // SEO
    metaTitle: 'Saxo Barítono CONN 12M Naked Lady 1956 USA | DR BRASS',
    metaDescription: 'Legendario CONN 12M Naked Lady barítono (1956, Made in USA). Laca original, excelente estado. Incluye Pro-Tec, boquilla, arnés. USD $4,000.',
    tags: [
      'saxo-baritono',
      'conn',
      '12m',
      'naked-lady',
      'vintage',
      '1956',
      'usa',
      'legendario',
      'coleccionable',
      'profesional',
      'laca-original',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #20 - Saxo barítono PUNK JAZZ CUSTOMSHop
  // ============================================
  {
    _id: 'producto-020',
    
    // Información básica
    nombre: 'Saxo barítono PUNK JAZZ CUSTOMSHop',
    slug: 'saxo-baritono-punk-jazz-customshop',
    descripcion: `🎷 Saxo baritono PUNK JAZZ CUSTOMSHOP. Silver

🎷 Campana con llave de La grave.
🎷 Bañado en plata.
🎷 Inlays de abalon.
🎷 Incluye estuche tipo mochila, boquilla y holder.

✅ Un barítono con un carácter increíble, súper afinado y cómodo.

✅ Un año de garantía

4000 dólares

Saxofón barítono profesional customizado por PUNK JAZZ CUSTOMSHOP. Este instrumento representa lo mejor de la luthería moderna de saxofones, con características premium y un diseño pensado para músicos profesionales exigentes.

El baño de plata no solo proporciona un acabado estético excepcional, sino que también influye en las características sonoras del instrumento, proporcionando un timbre brillante y proyección superior. Los inlays de ábalo añaden un toque de elegancia y distinción.

La campana con llave de La grave es una característica profesional que permite alcanzar notas más graves, extendiendo el rango del instrumento más allá de lo que ofrecen los barítonos estándar. Esta característica es especialmente valorada por músicos de jazz y música contemporánea.

Súper afinado, cómodo y con un carácter sonoro increíble, este barítono es ideal para músicos que buscan un instrumento de alta gama con características únicas.`,
    descripcionCorta: 'Barítono Punk Jazz Customshop Silver. Campana con llave La grave, bañado en plata, inlays de ábalo. Súper afinado y cómodo. Incluye mochila.',
    
    // Precios
    precio: 4000,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'baritonos',
    subcategoria: 'Profesional',
    marca: 'Punk Jazz',
    modelo: 'Customshop Silver',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 20
    imagenPrincipal: '/productos/bari9.png',
    imagenes: [
      '/productos/bari8.png',
      '/productos/bari7.png',
      '/productos/bari6.png',
      '/productos/bari5.png',
      '/productos/bari4.png',
      '/productos/bari3.png',
      '/productos/bari2.png',
      '/productos/bari1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón barítono profesional' },
      { clave: 'Marca', valor: 'Punk Jazz Customshop' },
      { clave: 'Acabado', valor: 'Bañado en plata (Silver)' },
      { clave: 'Campana', valor: 'Con llave de La grave' },
      { clave: 'Inlays', valor: 'Ábalo (madreperla)' },
      { clave: 'Afinación', valor: 'Súper afinado' },
      { clave: 'Ergonomía', valor: 'Súper cómodo' },
      { clave: 'Carácter', valor: 'Increíble' },
      { clave: 'Rango extendido', valor: 'Hasta La grave' },
      { clave: 'Incluye', valor: 'Estuche tipo mochila' },
      { clave: 'Incluye', valor: 'Boquilla' },
      { clave: 'Incluye', valor: 'Holder' },
      { clave: 'Garantía', valor: '1 año completo' },
    ],
    
    // SEO
    metaTitle: 'Saxo Barítono Punk Jazz Customshop Silver | DR BRASS',
    metaDescription: 'Barítono Punk Jazz Customshop bañado en plata, llave La grave, inlays de ábalo. Súper afinado y cómodo. Garantía 1 año. USD $4,000.',
    tags: [
      'saxo-baritono',
      'punk-jazz',
      'customshop',
      'silver',
      'baño-plata',
      'llave-la-grave',
      'abalon',
      'profesional',
      'nuevo',
      'garantia',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #21 - Sax straps
  // ============================================
  {
    _id: 'producto-021',
    
    // Información básica
    nombre: 'Sax straps',
    slug: 'sax-straps',
    descripcion: `Acaban de entrar estos sax holders de una excelentísima calidad y terminación a un tercio de lo que salen los jazz lab...

¡Precio promocional!
Los primeros 10 AL COSTO!

$60.000!!!

¡NO DUERMAS Y PASA LA DATA!

Correas para saxofón (sax straps/holders) de calidad premium con una terminación excelente. Estos holders ofrecen la misma calidad que marcas reconocidas como Jazz Lab, pero a una fracción del precio.

Diseñados para proporcionar máximo confort durante largas sesiones de práctica o presentaciones en vivo. La calidad de construcción y los materiales utilizados garantizan durabilidad y comodidad.

¡Precio especial de lanzamiento! Los primeros 10 clientes obtienen estas correas premium AL COSTO. Una oportunidad única para obtener un accesorio esencial de alta calidad a un precio excepcional.

Ideal para todos los saxofonistas que buscan comodidad y calidad sin gastar una fortuna. Compatible con todos los tipos de saxofón: soprano, alto, tenor y barítono.`,
    descripcionCorta: 'Sax holders premium de excelente calidad y terminación. ¡Los primeros 10 AL COSTO! Precio promocional $60.',
    
    // Precios
    precio: 60,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'accesorios',
    subcategoria: 'Correas/Holders',
    marca: 'DR BRASS',
    modelo: 'Sax Straps Premium',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 21
    imagenPrincipal: '/productos/straps5.png',
    imagenes: [
      '/productos/straps4.png',
      '/productos/straps3.png',
      '/productos/straps2.png',
      '/productos/straps1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Correa/Holder para saxofón' },
      { clave: 'Calidad', valor: 'Premium - Excelente terminación' },
      { clave: 'Comparable a', valor: 'Jazz Lab y marcas premium' },
      { clave: 'Material', valor: 'Alta calidad' },
      { clave: 'Confort', valor: 'Máximo para largas sesiones' },
      { clave: 'Durabilidad', valor: 'Construcción robusta' },
      { clave: 'Compatible', valor: 'Todos los saxofones (soprano, alto, tenor, barítono)' },
      { clave: 'Precio', valor: 'Al costo - Precio promocional' },
      { clave: 'Promoción', valor: 'Primeros 10 clientes' },
    ],
    
    // SEO
    metaTitle: 'Sax Straps Premium - Correas para Saxofón | DR BRASS',
    metaDescription: 'Sax holders premium de excelente calidad, comparable a Jazz Lab. ¡Primeros 10 AL COSTO! Precio promocional. Compatible con todos los saxofones. USD $60.',
    tags: [
      'sax-straps',
      'correa-saxofon',
      'holder',
      'accesorios',
      'premium',
      'confort',
      'jazz-lab',
      'promocion',
      'al-costo',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 10,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #22 - Saxofón alto Buescher True Tone (Low pitch)
  // ============================================
  {
    _id: 'producto-022',
    
    // Información básica
    nombre: 'Saxofón alto Buescher True Tone (Low pitch)',
    slug: 'saxofon-alto-buescher-true-tone-low-pitch',
    descripcion: `Buescher True Tone "Low pitch" Silver

Año 1929 por su número de serie

Un saxofón profesional en un excelentísimo estado.

🎷 Llave de "fa" frontal.
🎷 Baño de plata en un 98%.
🎷 Service recién hecho, sonando al 100% y con zapatillas en excelente estado.
🎷 Garantía de 6 meses.

Valor USD 1500

El Buescher True Tone es uno de los saxofones vintage más codiciados del mundo. Fabricado en 1929, este instrumento representa la época dorada de la fabricación americana de saxofones. El modelo "Low Pitch" indica que está afinado en el estándar moderno (A=440Hz), a diferencia de los modelos "High Pitch" más antiguos.

La característica "True Tone" de Buescher era su sistema de diseño que prometía un tono más puro y consistente. Estos instrumentos son especialmente apreciados por músicos de jazz tradicional y coleccionistas.

Este ejemplar en particular se encuentra en un estado excepcional, conservando el 98% de su baño de plata original. La llave de Fa frontal es una característica distintiva de estos saxofones vintage que muchos músicos prefieren por su ergonomía.

Recientemente sometido a un service completo profesional, el instrumento suena al 100% con zapatillas en excelente estado. Una pieza de colección completamente funcional para uso profesional.`,
    descripcionCorta: 'Buescher True Tone Low Pitch Silver (1929). Llave Fa frontal, baño plata 98%, service recién hecho. Excelente estado, sonando al 100%.',
    
    // Precios
    precio: 1500,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'altos',
    subcategoria: 'Profesional Vintage',
    marca: 'Buescher',
    modelo: 'True Tone Low Pitch',
    
    // Estado
    condicion: 'usado',
    año: 1929,
    
    // Imágenes - TODAS las imágenes del producto 22
    imagenPrincipal: '/productos/bues10.png',
    imagenes: [
      '/productos/bues9.png',
      '/productos/bues8.png',
      '/productos/bues7.png',
      '/productos/bues6.png',
      '/productos/bues5.png',
      '/productos/bues4.png',
      '/productos/bues3.png',
      '/productos/bues2.png',
      '/productos/bues1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón alto profesional vintage' },
      { clave: 'Marca', valor: 'Buescher (USA)' },
      { clave: 'Modelo', valor: 'True Tone Low Pitch' },
      { clave: 'Año', valor: '1929 (verificado por serial)' },
      { clave: 'Afinación', valor: 'Low Pitch (A=440Hz - estándar moderno)' },
      { clave: 'Acabado', valor: 'Baño de plata conservado al 98%' },
      { clave: 'Llave Fa', valor: 'Frontal (característica vintage)' },
      { clave: 'Service', valor: 'Recién realizado - Profesional' },
      { clave: 'Zapatillas', valor: 'Excelente estado' },
      { clave: 'Funcionamiento', valor: 'Sonando al 100%' },
      { clave: 'Estado general', valor: 'Excelentísimo' },
      { clave: 'Época', valor: 'Era dorada de saxofones americanos' },
      { clave: 'Coleccionable', valor: 'Altamente codiciado' },
      { clave: 'Garantía', valor: '6 meses' },
    ],
    
    // SEO
    metaTitle: 'Saxofón Alto Buescher True Tone 1929 Low Pitch Silver | DR BRASS',
    metaDescription: 'Buescher True Tone 1929 Low Pitch, baño plata 98%, llave Fa frontal. Service recién hecho, excelente estado. Pieza de colección. USD $1,500.',
    tags: [
      'saxofon-alto',
      'buescher',
      'true-tone',
      'low-pitch',
      'vintage',
      '1929',
      'baño-plata',
      'coleccionable',
      'profesional',
      'jazz',
      'llave-fa-frontal',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
  },
  
  // ============================================
  // PRODUCTO #23 - Saxo Soprano PUNK JAZZ CUSTOMSHOP
  // ============================================
  {
    _id: 'producto-023',
    
    // Información básica
    nombre: 'Saxo Soprano PUNK JAZZ CUSTOMSHOP',
    slug: 'saxo-soprano-punk-jazz-customshop',
    descripcion: `Saxo Soprano PUNK JAZZ CUSTOMSHOP

El tratamiento acústico con ultrasonido lleva a los saxofones a un nivel único.

Sonido súper profesional, y una afinación sublime, que para los sopranos no es nada poco.

Un saxofón soprano profesional transformado completamente por el proceso exclusivo de PUNK JAZZ CUSTOMSHOP. El tratamiento acústico con ultrasonido es una técnica avanzada que modifica las propiedades resonantes del metal, mejorando dramáticamente la respuesta, proyección y características tímbricas del instrumento.

El soprano es conocido por ser uno de los saxofones más difíciles de afinar y controlar. Sin embargo, este tratamiento especial proporciona una afinación sublime y estabilidad excepcional en todo el registro, una característica que raramente se encuentra en saxofones soprano incluso de gamas muy altas.

El sonido resultante es súper profesional, con una calidez, proyección y claridad que normalmente solo se encuentra en instrumentos de gama alta de marcas boutique. Ideal para músicos exigentes que buscan un soprano de calidad excepcional.

Construcción de cuerpo único (one piece) para mejor resonancia y afinación. Un instrumento transformado que compite con los mejores sopranos del mercado.`,
    descripcionCorta: 'Soprano Punk Jazz Customshop con tratamiento acústico ultrasonido. Sonido súper profesional y afinación sublime. Cuerpo único.',
    
    // Precios
    precio: 1200,
    moneda: 'USD',
    precioAnterior: undefined,
    
    // Categorización
    categoria: 'sopranos',
    subcategoria: 'Profesional',
    marca: 'Punk Jazz',
    modelo: 'Customshop Soprano',
    
    // Estado
    condicion: 'nuevo',
    año: undefined,
    
    // Imágenes - TODAS las imágenes del producto 23
    imagenPrincipal: '/productos/soprano9.png',
    imagenes: [
      '/productos/soprano8.png',
      '/productos/soprano7.png',
      '/productos/soprano6.png',
      '/productos/soprano5.png',
      '/productos/soprano4.png',
      '/productos/soprano3.png',
      '/productos/soprano2.png',
      '/productos/soprano1.png',
    ],
    
    // Enlaces externos
    mercadoLibreUrl: '',
    
    // Características técnicas
    caracteristicas: [
      { clave: 'Tipo', valor: 'Saxofón soprano profesional' },
      { clave: 'Marca', valor: 'Punk Jazz Customshop' },
      { clave: 'Tratamiento', valor: 'Acústico con ultrasonido' },
      { clave: 'Construcción', valor: 'Cuerpo único (one piece)' },
      { clave: 'Sonido', valor: 'Súper profesional' },
      { clave: 'Afinación', valor: 'Sublime - Excepcional para soprano' },
      { clave: 'Estabilidad', valor: 'Excepcional en todo el registro' },
      { clave: 'Proyección', valor: 'Superior' },
      { clave: 'Resonancia', valor: 'Mejorada por tratamiento ultrasonido' },
      { clave: 'Control', valor: 'Fácil para un soprano' },
      { clave: 'Nivel', valor: 'Único - Proceso exclusivo' },
      { clave: 'Comparable a', valor: 'Sopranos boutique de alta gama' },
    ],
    
    // SEO
    metaTitle: 'Saxo Soprano Punk Jazz Customshop - Tratamiento Ultrasonido | DR BRASS',
    metaDescription: 'Soprano Punk Jazz Customshop con tratamiento acústico ultrasonido. Sonido profesional, afinación sublime, cuerpo único. USD $1,200.',
    tags: [
      'saxo-soprano',
      'punk-jazz',
      'customshop',
      'tratamiento-acustico',
      'ultrasonido',
      'profesional',
      'afinacion-sublime',
      'cuerpo-unico',
      'nuevo',
    ],
    
    // Control
    destacado: true,
    activo: true,
    stock: 1,
    
    // Timestamps
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
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
