"use client";

import Link from "next/link";

export function HeroGarantia() {
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
              Garantía
              <span className="block text-gold mt-1">Total</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
              En DR BRASS, cada instrumento que adquieres está respaldado por nuestra garantía integral.
              Nos comprometemos con la calidad y durabilidad de nuestros productos.
            </p>

            <Link
              href="/productos"
              className="group inline-flex items-center gap-3 bg-brown-dark text-cream hover:bg-brown text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 hover:shadow-elegant"
            >
              Ver Catálogo
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right side - Feature cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: "Servicio Post-Venta", desc: "Soporte técnico especializado" },
                { title: "Reparaciones Cubiertas", desc: "Mantenimiento incluido" },
                { title: "Extensible", desc: "Amplía tu cobertura" },
                { title: "Cobertura Nacional", desc: "En todo el país" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gold/10 hover:border-gold/30 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-8 h-px bg-gold mb-4 group-hover:w-12 transition-all duration-300"></div>
                  <h3 className="font-serif font-bold text-brown-dark text-sm md:text-base mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-charcoal/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
