/**
 * Script para cargar productos a la base de datos MongoDB
 * 
 * Este script lee los productos desde productos-mock.ts y los carga en la BD
 * 
 * Uso:
 * 1. Asegúrate de tener las imágenes en /public/uploads/productos/
 * 2. Ejecuta: npm run seed:productos
 * 
 * O desde Node:
 * node --loader ts-node/esm scripts/seed-productos.ts
 */

import dbConnect from '../src/lib/mongodb';
import ProductModel from '../src/models/Product';
import { productos } from '../src/data/productos-mock';

async function seedProductos() {
  try {
    console.log('🌱 Iniciando seed de productos...');
    
    // Conectar a la base de datos
    await dbConnect();
    console.log('✅ Conectado a MongoDB');

    // Cargar cada producto
    for (const productoData of productos) {
      try {
        // Verificar si ya existe un producto con ese slug
        const existente = await ProductModel.findOne({ slug: productoData.slug });
        
        if (existente) {
          console.log(`⚠️  Producto "${productoData.nombre}" ya existe (slug: ${productoData.slug})`);
          console.log('   Saltando...');
          continue;
        }

        // Crear el producto
        const producto = await ProductModel.create(productoData);
        console.log(`✅ Producto creado: "${producto.nombre}" (ID: ${producto._id})`);
      } catch (error: any) {
        console.error(`❌ Error creando producto "${productoData.nombre}":`, error.message);
      }
    }

    console.log('\n🎉 Seed completado!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en el seed:', error);
    process.exit(1);
  }
}

// Ejecutar el seed
seedProductos();
