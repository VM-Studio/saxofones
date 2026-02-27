"use client";

import Link from "next/link";

export function HeroGarantia() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-cream via-ivory to-cream-dark overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brown/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col items-start">
            <div className="space-y-6 mb-0">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-dark leading-tight">
                Garantía
                <span className="block text-gold">Total</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl">
                En DR BRASS, cada instrumento que adquieres está respaldado por nuestra garantía integral.
                Nos comprometemos con la calidad y durabilidad de nuestros productos.
              </p>

              <Link
                href="/productos"
                className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 whitespace-nowrap"
              >
                Ver Catálogo
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gold/20 to-brown/20 rounded-3xl p-8 shadow-elegant-lg backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">

                {/* Feature 1 */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-elegant transition-all">
                  <h3 className="font-serif font-bold text-brown-dark mb-2">Servicio Post-Venta</h3>
                  <p className="text-sm text-charcoal-light">Soporte técnico especializado</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-elegant transition-all">
                  <h3 className="font-serif font-bold text-brown-dark mb-2">Reparaciones Cubiertas</h3>
                  <p className="text-sm text-charcoal-light">Mantenimiento incluido</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-elegant transition-all">
                  <h3 className="font-serif font-bold text-brown-dark mb-2">Extensible</h3>
                  <p className="text-sm text-charcoal-light">Amplía tu cobertura</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-elegant transition-all">
                  <h3 className="font-serif font-bold text-brown-dark mb-2">Cobertura Nacional</h3>
                  <p className="text-sm text-charcoal-light">En todo el país</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
