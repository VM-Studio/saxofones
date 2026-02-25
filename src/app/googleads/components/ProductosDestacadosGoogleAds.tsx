"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getFeaturedProducts } from "@/actions/products";
import { CATEGORIAS } from "@/types/product";
import type { Product } from "@/types/product";

// Componente para cada producto
function ProductCard({ producto, index }: { producto: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const categoriaLabel = CATEGORIAS.find(c => c.value === producto.categoria)?.label || producto.categoria || "Saxofón";

  // Determinar qué imagen mostrar
  const imagenAMostrar = isHovered && producto.imagenes && producto.imagenes.length > 0
    ? producto.imagenes[0]
    : producto.imagenPrincipal;

  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group relative bg-white hover:bg-cream transition-all duration-500 overflow-hidden shadow-md hover:shadow-elegant transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Imagen */}
      <div
        className="relative aspect-square bg-gradient-to-br from-cream via-ivory to-cream-dark overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imagenAMostrar}
          alt={producto.nombre}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {producto.precioAnterior && (
            <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-lg">
              🔥 Oferta
            </span>
          )}
        </div>

        <span className="absolute top-4 right-4 bg-brown/95 backdrop-blur-sm text-cream text-xs font-semibold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-md">
          {categoriaLabel}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-serif font-bold text-brown-dark line-clamp-2 group-hover:text-gold transition-colors">
            {producto.nombre}
          </h3>
          <p className="text-sm text-charcoal-light mt-1 line-clamp-2">
            {producto.descripcion}
          </p>
        </div>

        {/* Precio */}
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

        {/* CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-brown group-hover:text-gold transition-colors font-semibold text-sm flex items-center gap-2">
            Ver detalles
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProductosDestacadosGoogleAds() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const result = await getFeaturedProducts(10); // Obtener hasta 10 productos destacados
        if (result.success && result.data) {
          setProductos(result.data);
        }
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
            <p className="mt-4 text-charcoal">Cargando productos destacados...</p>
          </div>
        </div>
      </section>
    );
  }

  if (productos.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-cream-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-brown/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-white px-4 py-1.5 rounded-full mb-4 shadow-md">
            Lo más vendido
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Instrumentos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"></div>
          <p className="text-lg text-charcoal-light mt-6 max-w-2xl mx-auto">
            Descubre nuestra selección premium de saxofones y accesorios más populares
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productos.map((producto, index) => (
            <ProductCard key={producto._id} producto={producto} index={index} />
          ))}
        </div>

        {/* Ver catálogo completo */}
        <div className="mt-16 text-center">
          <Link
            href="/productos"
            className="group inline-flex items-center gap-3 bg-brown hover:bg-brown-dark text-cream text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1"
          >
            Ver Catálogo Completo
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}