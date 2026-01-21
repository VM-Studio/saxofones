"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIAS } from '@/types/product';
import type { Product } from '@/types/product';

export function ProductCard({ producto }: { producto: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoriaLabel = CATEGORIAS.find(c => c.value === producto.categoria)?.label || producto.categoria || "Saxofón";

  // Determinar qué imagen mostrar
  const imagenAMostrar = isHovered && producto.imagenes && producto.imagenes.length > 0
    ? producto.imagenes[0]
    : producto.imagenPrincipal;

  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group transition-all duration-500 overflow-hidden"
    >
      {/* Imagen */}
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
          className="object-contain p-8 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {producto.precioAnterior && (
            <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-lg animate-pulse-subtle">
              🔥 Oferta
            </span>
          )}
        </div>
        
        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-brown text-xs font-semibold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-md border border-brown-light/20">
          {categoriaLabel}
        </span>
      </div>

      {/* Info */}
      <div className="p-6 relative">
        <span className="text-brown-light text-xs font-bold uppercase tracking-widest mb-2 block">
          {producto.marca}
        </span>
        <h3 className="text-brown-dark font-bold text-lg mb-3 group-hover:text-gold transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
          {producto.nombre}
        </h3>
        <p className="text-charcoal-light text-sm mb-4 line-clamp-2 leading-relaxed">
          {producto.descripcionCorta}
        </p>
        
        {/* Precio destacado */}
        <div className="flex items-baseline gap-3 pt-4 border-t border-brown-light/10">
          {producto.precioAnterior && (
            <span className="text-xs text-charcoal-light line-through">
              {producto.moneda} {producto.precioAnterior.toLocaleString()}
            </span>
          )}
          <span className="text-lg font-black text-gold">
            {producto.moneda} {producto.precio.toLocaleString()}
          </span>
        </div>

        {/* Línea decorativa animada */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold via-gold-light to-gold-dark group-hover:w-full transition-all duration-700"></div>
      </div>
    </Link>
  );
}
