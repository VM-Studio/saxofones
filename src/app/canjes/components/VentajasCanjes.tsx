"use client";

export function VentajasCanjes() {
  const ventajas = [
    {
      titulo: "Mejor Valor de Cambio",
      descripcion: "Ofrecemos las tasaciones más competitivas del mercado local.",
      icono: "💎"
    },
    {
      titulo: "Proceso Transparente",
      descripcion: "Sin costos ocultos. Sabes exactamente qué recibes a cambio.",
      icono: "👁️"
    },
    {
      titulo: "Evaluación Profesional",
      descripcion: "Nuestros expertos evalúan cada detalle de tu instrumento.",
      icono: "🏆"
    },
    {
      titulo: "Amplio Catálogo",
      descripcion: "Elige de cientos de saxofones nuevos y usados de calidad.",
      icono: "📚"
    },
    {
      titulo: "Garantía Incluida",
      descripcion: "Tu nuevo instrumento incluye nuestra garantía integral.",
      icono: "✅"
    },
    {
      titulo: "Financiación Flexible",
      descripcion: "Opciones de pago para completar tu compra cómodamente.",
      icono: "💳"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-cream via-ivory to-cream-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-gold/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-white/80 px-4 py-2 rounded-full mb-4 shadow-md">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-6">
            Ventajas del Programa de Canjes
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Grid de ventajas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventajas.map((ventaja, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/20 hover:border-gold/50 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-5xl">{ventaja.icono}</div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-brown-dark">
                  {ventaja.titulo}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {ventaja.descripcion}
                </p>

                {/* Arrow */}
                <div className="flex justify-end pt-4 border-t border-gold/20 group-hover:border-gold/40 transition-colors">
                  <svg className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison box */}
        <div className="mt-16 bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-elegant-lg border border-gold/30">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="text-xl font-serif font-bold text-brown-dark mb-3">Tiendas Comunes</h3>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Tasación injusta</li>
                <li>• Proceso lento</li>
                <li>• Sin transparencia</li>
                <li>• Stock limitado</li>
              </ul>
            </div>

            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold/20 to-transparent rounded-3xl"></div>
              <div className="relative text-center z-10 bg-white p-6 rounded-2xl shadow-elegant">
                <svg className="w-12 h-12 text-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V16a1 1 0 11-2 0V7.414L7.707 10.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-semibold text-brown-dark">DR BRASS</p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-serif font-bold text-brown-dark mb-3">DR BRASS</h3>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Mejor valor de cambio</li>
                <li>• Proceso rápido (1 día)</li>
                <li>• 100% transparente</li>
                <li>• Amplio catálogo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
