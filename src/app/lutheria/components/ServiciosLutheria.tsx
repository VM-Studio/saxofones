"use client";

import Link from "next/link";

export function ServiciosLutheria() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-12 h-px bg-gold mb-8 mx-auto"></div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-10">
          ¿Querés saber qué incluye este servicio?
        </h2>

        <Link
          href="https://wa.me/5493413814852?text=Hola%2C%20quiero%20saber%20más%20sobre%20el%20servicio%20de%20luthería"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-brown-dark text-cream hover:bg-brown text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-300 px-8 sm:px-10 py-3.5 sm:py-4 hover:shadow-elegant"
        >
          Averigualo
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
