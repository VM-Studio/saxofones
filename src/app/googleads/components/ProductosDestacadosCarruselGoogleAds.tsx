"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productosDB } from '@/data/productos-db';
import type { Product } from '@/types/product';

export function ProductosDestacadosCarruselGoogleAds() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtrar productos destacados y tomar los primeros 6
  const productosDestacados = productosDB
    .filter(product => product.destacado && product.activo)
    .slice(0, 6);

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === productosDestacados.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [productosDestacados.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productosDestacados.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productosDestacados.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (productosDestacados.length === 0) {
    return null;
  }

  const currentProduct = productosDestacados[currentIndex];

  return (
    <section className="relative py-12 bg-gradient-to-br from-cream/50 via-ivory/30 to-cream-dark/40 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brown/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Layout con carrusel a la izquierda y botón a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Carrusel Container - Ocupa 2 columnas en desktop */}
          <div className="lg:col-span-2">
            <div className="relative max-w-3xl mx-auto lg:mx-0">
              {/* Main Product Display */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold/10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[280px]">
                  {/* Product Image */}
                  <div className="relative bg-gradient-to-br from-cream via-ivory to-cream-dark p-4 flex items-center justify-center lg:col-span-1">
                    <div className="relative w-full h-48 lg:h-56">
                      <Image
                        src={currentProduct.imagenPrincipal}
                        alt={currentProduct.nombre}
                        fill
                        className="object-contain transition-all duration-700 hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-brown-dark/90 backdrop-blur-sm text-cream text-xs font-bold px-2 py-1 uppercase tracking-wider shadow-lg rounded-full">
                        {currentProduct.categoria || "Premium"}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 lg:p-6 flex flex-col justify-center lg:col-span-2">
                <div className="space-y-3">
                  {/* Brand */}
                  <span className="text-brown-light text-xs font-bold uppercase tracking-widest">
                    {currentProduct.marca}
                  </span>

                  {/* Product Name */}
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-brown-dark leading-tight">
                    {currentProduct.nombre}
                  </h3>

                  {/* Short Description */}
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {currentProduct.descripcionCorta}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-brown-dark text-sm">Características destacadas:</h4>
                    <ul className="space-y-1">
                      {currentProduct.caracteristicas?.slice(0, 3).map((caracteristica, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-charcoal">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                          <span><strong>{caracteristica.clave}:</strong> {caracteristica.valor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      href={`/productos/${currentProduct.slug}`}
                      className="group inline-flex items-center justify-center gap-2 bg-brown-dark hover:bg-brown text-cream text-sm font-semibold transition-all px-5 py-2.5 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5 w-full lg:w-auto"
                    >
                      Ver Detalles
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-xl hover:bg-white shadow-lg hover:shadow-xl text-brown-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              aria-label="Producto anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-xl hover:bg-white shadow-lg hover:shadow-xl text-brown-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              aria-label="Producto siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {productosDestacados.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-6 h-2 bg-gold'
                      : 'w-2 h-2 bg-brown-light/40 hover:bg-brown-light/60'
                  }`}
                  aria-label={`Ir al producto ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Counter */}
            <div className="text-center mt-3">
              <span className="text-xs text-charcoal-light font-medium">
                {currentIndex + 1} de {productosDestacados.length}
              </span>
            </div>
            </div>
          </div>

          {/* Botón "Ver todos los productos" - Columna derecha */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
          <Link
            href="/productos"
            className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-brown-dark font-bold text-lg px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 transition-all duration-300 rounded-full"
          >
            Ver todos los productos
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}