"use client";

export function VentajasConsignaciones() {
  const ventajas = [
    {
      titulo: "Comisión Justa",
      descripcion: "Solo pagas 10-15% de comisión. El resto es tuyo. Sin costos ocultos.",
      icono: "💎"
    },
    {
      titulo: "Marketing Profesional",
      descripcion: "Tu instrumento se promociona en nuestra tienda, sitio web y redes sociales.",
      icono: "📸"
    },
    {
      titulo: "Evaluación Profesional",
      descripcion: "Nuestros expertos revisan y valúan tu instrumento correctamente.",
      icono: "✅"
    },
    {
      titulo: "Vitrina Premium",
      descripcion: "Tu saxofón se exhibe en lugar estratégico de nuestra tienda física.",
      icono: "🏆"
    },
    {
      titulo: "Pago Seguro",
      descripción: "Recibes tu dinero inmediatamente después de que se vende el instrumento.",
      icono: "🔐"
    },
    {
      titulo: "Sin Molestias",
      descripcion: "Nosotros nos encargamos de la venta. Tú solo descansa y espera.",
      icono: "😌"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-72 h-72 bg-gold/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-gold/15 px-4 py-2 rounded-full mb-4 shadow-md">
            Por qué confiar en nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-6">
            Ventajas de Consignar tu Saxofón
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Grid de ventajas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventajas.map((ventaja, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-cream to-cream-dark rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/10 hover:border-gold/30 transform hover:-translate-y-2 overflow-hidden"
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
      </div>
    </section>
  );
}
