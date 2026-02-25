"use client";

import Link from "next/link";

export function HeroGoogleAds() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-cream via-ivory to-cream-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brown/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-dark leading-tight">
                DR BRASS
                <span className="block text-gold">Rosario</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl">
                La mejor tienda de instrumentos musicales de Rosario.
                Saxofones, luthería, reparación y asesoramiento profesional.
              </p>
            </div>

            <div className="space-y-6">
              <Link
                href="/productos"
                className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 whitespace-nowrap"
              >
                Explorar Catálogo
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - VSL Video */}
          <div className="relative">
            <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-6 shadow-elegant-lg">
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                {/* VSL Video Placeholder - Replace with actual video embed */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual VSL video URL
                  title="Video Sales Letter - DR BRASS"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Video overlay info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-cream">
                <h3 className="font-semibold text-lg mb-2">¿Por qué elegir DR BRASS?</h3>
                <p className="text-sm text-cream/90">
                  Más de 20 años de experiencia en instrumentos musicales.
                  Servicio personalizado y garantía en todos nuestros productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}