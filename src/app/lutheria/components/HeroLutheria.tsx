"use client";

import Link from "next/link";

export function HeroLutheria() {
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
              <div className="inline-block">
                <span className="text-gold text-sm font-semibold tracking-wider uppercase bg-gold/10 px-4 py-2 rounded-full">
                  Arte y Precisión
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-dark leading-tight">
                Luthería
                <span className="block text-gold">Profesional</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl">
                Reparación, restauración y personalización de saxofones por maestros lutieres
                con décadas de experiencia en el arte de la luthería.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 whitespace-nowrap"
              >
                Solicitar Servicio
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="https://wa.me/5493413999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border-2 border-brown-dark text-brown-dark hover:bg-brown-dark hover:text-cream text-lg font-semibold transition-all px-8 py-4"
              >
                Consultar Presupuesto
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-gold/20 to-brown/20 rounded-3xl p-8 shadow-elegant-lg backdrop-blur-sm">
              <div className="space-y-6">
                {/* Luthier Icon */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="relative w-full h-full flex items-center justify-center bg-linear-to-br from-gold to-gold-dark rounded-3xl shadow-elegant-lg">
                      <svg className="w-16 h-16 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Services highlight */}
                <div className="space-y-4">
                  {[
                    { text: "Maestro Lutier con 25+ años", icon: "👨‍🔧" },
                    { text: "Restauración completa", icon: "🛠️" },
                    { text: "Personalización única", icon: "✨" },
                    { text: "Garantía en trabajos", icon: "🤝" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-charcoal-light">{item.text}</span>
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
