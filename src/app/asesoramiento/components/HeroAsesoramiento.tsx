"use client";

import Link from "next/link";

export function HeroAsesoramiento() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center bg-warm overflow-hidden pt-8 md:pt-10">
      {/* Modern geometric decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-gold/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div className="flex flex-col items-start space-y-6 md:space-y-8">
            <div className="w-12 h-px bg-gold"></div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-brown-dark leading-tight tracking-tight">
              Asesoramiento <span className="text-gold">Profesional</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
              Nuestros expertos te guiarán para encontrar el saxofón perfecto según tu nivel,
              estilo musical y presupuesto. Asesoramiento sin obligación de compra.
            </p>

            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 bg-brown-dark text-cream hover:bg-brown text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 hover:shadow-elegant"
            >
              Contáctanos
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right side - Features */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "01", text: "20+ años de experiencia" },
                { num: "02", text: "Asesoramiento personalizado" },
                { num: "03", text: "Consulta gratuita" },
                { num: "04", text: "Seguimiento post-compra" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white p-3 md:p-4 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_10px_0_rgba(107,86,53,0.06)] hover:shadow-[0_3px_16px_0_rgba(107,86,53,0.12)]"
                >
                  <span className="text-gold/30 font-serif text-lg font-bold group-hover:text-gold/60 transition-colors duration-300">
                    {item.num}
                  </span>
                  <p className="text-xs md:text-sm font-medium text-brown-dark mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
