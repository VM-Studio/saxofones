"use client";

import Link from "next/link";

export function HeroAsesoramiento() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-linear-to-br from-cream via-ivory to-cream-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brown/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brown-dark leading-tight">
                Asesoramiento
                <span className="block text-gold">Profesional</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl">
                Nuestros expertos te guiarán para encontrar el saxofón perfecto según tu nivel,
                estilo musical y presupuesto. Asesoramiento sin obligación de compra.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 whitespace-nowrap"
              >
                Contáctanos
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative rounded-3xl p-8">
              <div className="space-y-6">

                {/* Features */}
                <div className="space-y-4">
                  {[
                    { text: "Expertos con 20+ años de experiencia", icon: "👨‍🏫" },
                    { text: "Asesoramiento personalizado", icon: "🎯" },
                    { text: "Consulta gratuita sin compromiso", icon: "✨" },
                    { text: "Seguimiento post-compra", icon: "📞" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                      <span className="text-sm font-semibold text-brown-dark font-serif">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
