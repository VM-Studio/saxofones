"use client";

import Link from "next/link";

export function HeroCanjes() {
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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-dark leading-tight">
                Programa de
                <span className="block text-gold">Canjes</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl">
                Intercambia tu saxofón actual por uno nuevo o usado en mejores condiciones.
                En DR BRASS ofrecemos los mejores valores en canjes del mercado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 whitespace-nowrap"
              >
                Ver Nuestro Stock
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-gold/20 to-brown/20 rounded-3xl p-8 shadow-elegant-lg backdrop-blur-sm">
              <div className="space-y-6">
                {/* Swap Icon */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="relative w-full h-full flex items-center justify-center bg-linear-to-br from-gold to-gold-dark rounded-3xl shadow-elegant-lg">
                      <svg className="w-16 h-16 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="space-y-4">
                  {[
                    { num: "1", text: "Evalúa tu instrumento", icon: "🎷" },
                    { num: "2", text: "Recibe nuestra tasación", icon: "💰" },
                    { num: "3", text: "Elige tu nuevo saxofón", icon: "✨" },
                    { num: "4", text: "¡Listo! Tu nuevo instrumento", icon: "🎉" }
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/20 text-brown-dark font-bold shrink-0 font-serif">
                        {step.num}
                      </div>
                      <span className="text-sm font-semibold text-brown-dark font-serif">{step.text}</span>
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
