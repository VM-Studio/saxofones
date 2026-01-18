'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  imagenPrincipal: string;
  imagenes: string[];
  nombre: string;
}

// Función helper para detectar si es un video
const isVideo = (url: string) => {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
};

export function ProductGallery({
  imagenPrincipal,
  imagenes,
  nombre,
}: ProductGalleryProps) {
  const [imagenActual, setImagenActual] = useState(imagenPrincipal);
  
  // Combinar imagen principal + galería para navegación
  const todasLasImagenes = [imagenPrincipal, ...imagenes];
  const indexActual = todasLasImagenes.indexOf(imagenActual);
  
  // Solo usar las imágenes de la galería para miniaturas (sin incluir la principal)
  const imagenesGaleria = imagenes;

  // Funciones de navegación
  const irAnterior = () => {
    const nuevoIndex = indexActual === 0 ? todasLasImagenes.length - 1 : indexActual - 1;
    setImagenActual(todasLasImagenes[nuevoIndex]);
  };

  const irSiguiente = () => {
    const nuevoIndex = indexActual === todasLasImagenes.length - 1 ? 0 : indexActual + 1;
    setImagenActual(todasLasImagenes[nuevoIndex]);
  };

  return (
    <div className="space-y-4">
      {/* Imagen/Video principal */}
      <div className="relative aspect-square bg-drblack rounded-lg overflow-hidden group">
        {imagenActual ? (
          isVideo(imagenActual) ? (
            <video
              src={imagenActual}
              controls
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={imagenActual}
              alt={nombre}
              fill
              className="object-cover"
              priority
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center text-drgray">
            Sin imagen
          </div>
        )}
        
        {/* Flecha Izquierda */}
        <button
          onClick={irAnterior}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 transition-all opacity-0 group-hover:opacity-100 z-20"
          aria-label="Imagen anterior"
        >
          <svg className="w-8 h-8 drop-shadow-lg" fill="black" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Flecha Derecha */}
        <button
          onClick={irSiguiente}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 transition-all opacity-0 group-hover:opacity-100 z-20"
          aria-label="Imagen siguiente"
        >
          <svg className="w-8 h-8 drop-shadow-lg" fill="black" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        {/* Indicador de posición */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-drblack/80 text-drgold px-3 py-1 rounded-full text-sm font-bold z-20">
          {indexActual + 1} / {todasLasImagenes.length}
        </div>
      </div>

      {/* Miniaturas */}
      {imagenesGaleria.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {imagenesGaleria.map((img, index) => (
            <button
              key={index}
              onClick={() => setImagenActual(img)}
              className="relative w-20 h-20 shrink-0 bg-drblack overflow-hidden transition-all"
            >
              {isVideo(img) ? (
                <>
                  <video
                    src={img}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </>
              ) : (
                <Image
                  src={img}
                  alt={`${nombre} - imagen ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
