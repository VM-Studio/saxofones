"use client";

import Link from "next/link";

export function CTAAsesoramiento() {
  return (
    <section className="py-20 bg-linear-to-r from-brown-dark/95 to-brown/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/8 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight">
              Encuentra Tu Saxofón Ideal
            </h2>
            <p className="text-xl text-cream/90 max-w-2xl mx-auto">
              Nuestros especialistas están listos para ayudarte a encontrar el instrumento perfecto.
              La primera consulta es completamente gratuita.
            </p>
          </div>

          {/* Key points */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-cream font-semibold">Sin compromiso</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <span className="text-cream font-semibold">Expertos certificados</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-cream font-semibold">Precios transparentes</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-brown-dark hover:bg-gold-light text-lg font-semibold transition-all px-10 py-4 shadow-elegant hover:shadow-gold transform hover:-translate-y-1"
            >
              Agendar Consulta Gratuita
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/productos"
              className="group inline-flex items-center justify-center gap-3 border-2 border-cream text-cream hover:bg-cream/10 text-lg font-semibold transition-all px-10 py-4"
            >
              Ver Catálogo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-3 pt-8 border-t border-cream/20">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-cream/90">Más de 500 clientes satisfechos cada año</span>
          </div>
        </div>
      </div>
    </section>
  );
}
