"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProductoByIdFromDB } from "@/data/productos-db";
import { CATEGORIAS } from "@/types/product";
import type { Product } from "@/types/product";

// Componente para cada producto con hover de imagen
function ProductCard({ producto, index }: { producto: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoriaLabel = CATEGORIAS.find(c => c.value === producto.categoria)?.label || producto.categoria || "Saxofón";
  
  // Para el tercer producto (barítono), usar más padding
  const imageClassName = index === 2 
    ? "object-contain p-12 group-hover:scale-110 transition-transform duration-700"
    : "object-contain p-8 group-hover:scale-110 transition-transform duration-700";

  // Determinar qué imagen mostrar
  const imagenAMostrar = isHovered && producto.imagenes && producto.imagenes.length > 0
    ? producto.imagenes[0]
    : producto.imagenPrincipal;

  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group relative bg-gradient-to-br from-white to-cream transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Imagen con fondo elegante */}
      <div 
        className="relative aspect-square bg-gradient-to-br from-cream via-ivory to-cream-dark overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorador de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <Image
          src={imagenAMostrar}
          alt={producto.nombre}
          fill
          className={imageClassName}
        />

        {/* Badge de oferta mejorado */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {producto.precioAnterior && (
            <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-lg animate-pulse-subtle">
              🔥 Oferta
            </span>
          )}
        </div>
        
        {/* Badge de categoría mejorado */}
        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-brown text-xs font-semibold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-md border border-brown-light/20">
          {categoriaLabel}
        </span>
      </div>

      {/* Info - DISEÑO MEJORADO */}
      <div className="p-6 bg-white relative">
        {/* Marca */}
        <span className="text-brown-light text-xs font-bold uppercase tracking-widest mb-2 block">
          {producto.marca}
        </span>

        {/* Nombre con mejor tipografía */}
        <h3 className="text-brown-dark font-bold text-lg mb-3 group-hover:text-gold transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
          {producto.nombre}
        </h3>

        {/* Descripción corta */}
        <p className="text-charcoal-light text-sm mb-4 line-clamp-2 leading-relaxed">
          {producto.descripcionCorta}
        </p>

        {/* Precio destacado */}
        <div className="flex items-baseline gap-3 pt-4 border-t border-brown-light/10">
          {producto.precioAnterior && (
            <span className="text-sm text-charcoal-light line-through">
              {producto.moneda} {producto.precioAnterior.toLocaleString()}
            </span>
          )}
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold">
            {producto.moneda} {producto.precio.toLocaleString()}
          </span>
        </div>

        {/* CTA mejorado */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-brown group-hover:text-gold transition-colors font-semibold text-sm flex items-center gap-2">
            Ver detalles
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        {/* Línea decorativa animada */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold via-gold-light to-gold-dark group-hover:w-full transition-all duration-700"></div>
      </div>
    </Link>
  );
}

export function ProductosDestacadosSection() {
  // Obtener específicamente los productos 001, 002 y 003
  const producto1 = getProductoByIdFromDB('producto-001');
  const producto2 = getProductoByIdFromDB('producto-002');
  const producto3 = getProductoByIdFromDB('producto-019');
  
  const productos = [producto1, producto2, producto3].filter((p): p is Product => p !== undefined);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decoradores de fondo animados */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-brown/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Instrumentos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"></div>
        </div>

        {/* Grid de productos - DISEÑO MEJORADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <ProductCard key={producto._id} producto={producto} index={index} />
          ))}
        </div>

        {/* Ver catálogo completo - Botón al final */}
        <div className="mt-16 text-center">
          <Link
            href="/productos"
            className="group inline-flex items-center gap-2 bg-brown hover:bg-brown-dark text-cream text-base font-semibold transition-all px-8 py-4 shadow-[0_4px_6px_-1px_rgba(139,111,71,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(139,111,71,0.4)]"
          >
            Ver catálogo completo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
