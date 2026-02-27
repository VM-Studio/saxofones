"use client";

import Link from "next/link";

export function HeroConsignaciones() {
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
                  Vende sin complicaciones
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-dark leading-tight">
                Programa de
                <span className="block text-gold">Consignaciones</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl">
                Vende tu instrumento a través de nuestra tienda sin complicaciones.
                Nosotros nos encargamos de todo mientras tú recibes una comisión justa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1 whitespace-nowrap"
              >
                Iniciar Consignación
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
                Consultar Vía WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.666-1.904 10.209 1.877 3.355 5.592 4.972 9.306 4.972h.004c2.487 0 4.905-.584 7.216-1.885a10.236 10.236 0 003.707-2.957 9.947 9.947 0 002.064-5.009c.393-1.991.196-4.131-.515-6.169a10.254 10.254 0 00-3.286-4.662 9.97 9.97 0 00-6.514-2.preferredStyle" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-gold/20 to-brown/20 rounded-3xl p-8 shadow-elegant-lg backdrop-blur-sm">
              <div className="space-y-6">
                {/* Consignment Icon */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="relative w-full h-full flex items-center justify-center bg-linear-to-br from-gold to-gold-dark rounded-3xl shadow-elegant-lg">
                      <svg className="w-16 h-16 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {[
                    { text: "Comisión competitiva (10-15%)", icon: "💰" },
                    { text: "Marketing profesional", icon: "📢" },
                    { text: "Pago seguro después de venta", icon: "🔒" },
                    { text: "Seguimiento en tiempo real", icon: "📊" }
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
