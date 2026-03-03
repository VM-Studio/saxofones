"use client";

import Link from "next/link";

export function CTAConsignaciones() {
  return (
    <section className="py-16 md:py-24 bg-brown-dark relative overflow-hidden">
      {/* Geometric decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight tracking-tight">
              Vende tu Saxofón Hoy
            </h2>
          </div>

          {/* Key points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/10">
            {[
              { label: "Venta Rápida" },
              { label: "90% de tu dinero" },
              { label: "Sin complicaciones" },
            ].map((item, i) => (
              <div key={i} className="bg-brown-dark/80 p-3 sm:p-4 md:p-6 text-center">
                <span className="text-cream/80 font-medium text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 bg-gold text-brown-dark hover:bg-gold-light text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4"
            >
              Comenzar Consignación
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Trust line */}
          <div className="pt-8 border-t border-cream/10">
            <span className="text-cream/40 text-xs sm:text-sm tracking-wide">Más de 1500 instrumentos consignados exitosamente</span>
          </div>
        </div>
      </div>
    </section>
  );
}
