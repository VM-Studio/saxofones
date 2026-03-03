"use client";

import Link from "next/link";

export function HeroCanjes() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center bg-warm overflow-hidden pt-16 md:pt-20">
      {/* Modern geometric decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-gold/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div className="flex flex-col items-start space-y-6 md:space-y-8">
            <div className="w-12 h-px bg-gold"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-brown-dark leading-tight tracking-tight">
              Programa de
              <span className="block text-gold mt-1">Canjes</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
              Intercambia tu saxofón actual por uno nuevo o usado en mejores condiciones.
              En DR BRASS ofrecemos los mejores valores en canjes del mercado.
            </p>

            <Link
              href="/productos"
              className="group inline-flex items-center gap-3 bg-brown-dark text-cream hover:bg-brown text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 hover:shadow-elegant"
            >
              Ver Nuestro Stock
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right side - Process steps */}
          <div className="relative">
            <div className="space-y-3">
              {[
                { num: "01", text: "Evalúa tu instrumento" },
                { num: "02", text: "Recibe nuestra tasación" },
                { num: "03", text: "Elige tu nuevo saxofón" },
                { num: "04", text: "Tu nuevo instrumento" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 md:gap-6 bg-white border border-gold/10 hover:border-gold/30 p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="font-serif text-gold text-lg md:text-xl font-bold tracking-wider min-w-10">{step.num}</span>
                  <div className="w-px h-6 bg-gold/20"></div>
                  <span className="text-sm md:text-base font-medium text-brown-dark">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
