/**
 * Script simple para cargar el primer producto
 * 
 * Ejecutar desde la terminal:
 * node scripts/seed-producto-simple.js
 */

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor define MONGODB_URI en .env.local');
}

const ProductSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    descripcionCorta: { type: String, required: true },
    precio: { type: Number, required: true },
    moneda: { type: String, enum: ['USD', 'ARS'], default: 'USD' },
    precioAnterior: Number,
    categoria: { type: String, required: true },
    subcategoria: String,
    marca: { type: String, required: true },
    modelo: String,
    condicion: { type: String, required: true },
    año: Number,
    imagenPrincipal: { type: String, required: true },
    imagenes: [String],
    mercadoLibreUrl: String,
    caracteristicas: [{ clave: String, valor: String }],
    metaTitle: String,
    metaDescription: String,
    tags: [String],
    destacado: { type: Boolean, default: false },
    activo: { type: Boolean, default: true },
    stock: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

const primerProducto = {
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
  precio: 899,
  moneda: 'USD',
  categoria: 'altos',
  subcategoria: 'Semi-profesional',
  marca: 'Punk Jazz',
  modelo: 'Alto Vintage',
  condicion: 'nuevo',
  imagenPrincipal: '/uploads/productos/saxo1.jpeg',
  imagenes: [
    '/uploads/productos/sax1.jpeg',
    '/uploads/productos/saxxo1.jpeg',
    '/uploads/productos/saxof1.jpeg',
    '/uploads/productos/saxofon1.jpeg',
    '/uploads/productos/saxofonn1.jpeg',
    '/uploads/productos/ssaxo1.jpeg',
  ],
  mercadoLibreUrl: '',
  caracteristicas: [
    { clave: 'Acabado', valor: 'Vintage' },
    { clave: 'Material', valor: 'Latón' },
    { clave: 'Nacares', valor: 'Madre perla real' },
    { clave: 'Afinación', valor: 'Mi bemol (Eb)' },
    { clave: 'Nivel', valor: 'Semi-profesional' },
    { clave: 'Incluye', valor: 'Estuche semi-rígido, boquilla, holder' },
    { clave: 'Garantía', valor: '1 año' },
  ],
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
  destacado: true,
  activo: true,
  stock: 1,
};

async function seed() {
  try {
    console.log('🌱 Conectando a MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conectado!');

    const existente = await Product.findOne({ slug: primerProducto.slug });
    
    if (existente) {
      console.log('⚠️  El producto ya existe en la base de datos');
      console.log(`   ID: ${existente._id}`);
      await mongoose.connection.close();
      return;
    }

    const producto = await Product.create(primerProducto);
    console.log('✅ Producto creado exitosamente!');
    console.log(`   Nombre: ${producto.nombre}`);
    console.log(`   ID: ${producto._id}`);
    console.log(`   URL: /productos/${producto.slug}`);

    await mongoose.connection.close();
    console.log('\n🎉 Proceso completado!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seed();
