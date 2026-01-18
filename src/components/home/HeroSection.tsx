"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProductoByIdFromDB } from "@/data/productos-db";
import { Product } from "@/types/product";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Obtener 10 productos para el loop
  const producto1 = getProductoByIdFromDB('producto-001');
  const producto2 = getProductoByIdFromDB('producto-002');
  const producto3 = getProductoByIdFromDB('producto-003');
  const producto4 = getProductoByIdFromDB('producto-004');
  const producto5 = getProductoByIdFromDB('producto-005');
  const producto6 = getProductoByIdFromDB('producto-006');
  const producto7 = getProductoByIdFromDB('producto-007');
  const producto8 = getProductoByIdFromDB('producto-008');
  const producto9 = getProductoByIdFromDB('producto-009');
  const producto10 = getProductoByIdFromDB('producto-010');
  
  const productos = [
    producto1, 
    producto2, 
    producto3, 
    producto4, 
    producto5, 
    producto6, 
    producto7, 
    producto8, 
    producto9, 
    producto10
  ].filter((p): p is Product => p !== undefined);

  // Auto-rotate cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % productos.length);
        setIsTransitioning(false);
      }, 600);
    }, 6000);

    return () => clearInterval(interval);
  }, [productos.length]);

  const currentProduct = productos[currentIndex];

  if (!currentProduct) return null;

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-4 pb-8">
      {/* Gradient Background con animación sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-ivory to-cream-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,111,71,0.06),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto principal */}
          <div className="flex flex-col gap-6 py-8 lg:py-2 animate-fade-in">
            <div className="space-y-3">
              <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-gold/10 px-4 py-1.5">
                Rosario, Argentina
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-dark leading-[1.1] tracking-tight">
                Saxofones y Vientos
                <span className="block text-gold mt-2">Premium</span>
              </h1>
            </div>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-xl">
              Asesoramiento profesional para saxofonistas: compra, venta, canje y consignaciones de saxofones e instrumentos de viento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contacto"
                className="px-8 py-3 text-base font-semibold border-2 border-brown text-brown hover:bg-brown hover:text-white transition-all duration-300 text-center transform hover:-translate-y-0.5"
              >
                Contactar
              </Link>
              <Link
                href="/productos"
                className="group px-8 py-3 text-base font-semibold bg-gradient-to-r from-gold to-gold-dark text-brown-dark hover:shadow-elegant-lg transition-all duration-300 text-center transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-2">
                  Ver Catálogo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* CARRUSEL AUTOMÁTICO DE PRODUCTO - DISEÑO COMPACTO */}
          <div className="relative animate-fade-in-delayed max-w-lg mx-auto">
            <Link
              href={`/productos/${currentProduct.slug}`}
              className="group relative transition-all duration-700 flex flex-col"
            >
              {/* Sección de Imagen - Altura fija */}
              <div className="relative h-[420px] bg-gradient-to-br from-cream via-ivory to-cream-dark overflow-hidden flex-shrink-0 transform hover:scale-105 transition-transform duration-700">
                {/* Imagen del producto con transición suave */}
                <div className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-600 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  <Image
                    src={currentProduct.imagenPrincipal}
                    alt={currentProduct.nombre}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Badge de categoría - cuadrado */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-brown text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider shadow-md border border-brown-light/20">
                    {currentProduct.categoria || "Premium"}
                  </span>
                </div>

                {/* Indicadores de posición (dots) */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {productos.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 transition-all duration-500 ${
                        idx === currentIndex 
                          ? 'bg-gold w-6' 
                          : 'bg-brown-light/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Badge de oferta si aplica - cuadrado */}
                {currentProduct.precioAnterior && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-black px-4 py-1.5 uppercase tracking-wider shadow-lg animate-pulse-subtle">
                      🔥 Oferta
                    </span>
                  </div>
                )}
              </div>

              {/* Sección de Información - Altura fija */}
              <div className="p-5 h-[180px] flex-shrink-0 flex flex-col">
                <div className={`transition-all duration-600 flex-1 flex flex-col ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {/* Marca */}
                  <span className="text-brown-light text-[10px] font-bold uppercase tracking-widest mb-2 block flex-shrink-0">
                    {currentProduct.marca}
                  </span>
                  
                  {/* Nombre del producto - 2 líneas máximo, altura fija */}
                  <h3 className="text-brown-dark text-lg font-bold line-clamp-2 leading-none flex-shrink-0 overflow-hidden mb-1">
                    {currentProduct.nombre}
                  </h3>

                  {/* Botón Ver más con flecha - pegado al título */}
                  <div className="flex items-center justify-between flex-shrink-0">
                    <span className="text-gold text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Ver más
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    
                    {/* Icono circular decorativo - más pequeño */}
                    <div className="bg-gold/10 group-hover:bg-gold p-2 transition-all duration-300">
                      <svg className="w-4 h-4 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}