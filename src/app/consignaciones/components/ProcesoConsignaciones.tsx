"use client";

export function ProcesoConsignaciones() {
  const pasos = [
    {
      numero: 1,
      titulo: "Contacta con Nosotros",
      descripcion: "Envía fotos y descripción de tu saxofón o trae el instrumento a nuestra tienda para una evaluación profesional.",
      icono: "📞"
    },
    {
      numero: 2,
      titulo: "Valuación Profesional",
      descripcion: "Nuestros expertos evalúan el estado, funcionamiento y características de tu instrumento.",
      icono: "🔍"
    },
    {
      numero: 3,
      titulo: "Acuerdo de Consignación",
      descripcion: "Definimos el precio de venta y los términos. Todo queda documentado y transparente.",
      icono: "📋"
    },
    {
      numero: 4,
      titulo: "Tu Instrumento en Venta",
      descripcion: "Tu saxofón se promociona en tienda, web y redes. Aparece en nuestro catálogo destacado.",
      icono: "📢"
    },
    {
      numero: 5,
      titulo: "Venta Realizada",
      descripcion: "Cuando se vende, te notificamos inmediatamente y procesamos tu pago.",
      icono: "✅"
    },
    {
      numero: 6,
      titulo: "Recibe tu Dinero",
      descripcion: "Recibe tu comisión (90% del precio de venta) de forma segura y rápida.",
      icono: "💰"
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
            Simple y Directo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-6">
            Cómo Funciona la Consignación
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Grid de pasos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/20 hover:border-gold/50 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 space-y-4">
                {/* Number and Icon */}
                <div className="flex items-center justify-between">
                  <div className="text-5xl">{paso.icono}</div>
                  <span className="w-10 h-10 rounded-full bg-gold text-cream flex items-center justify-center font-bold text-lg">
                    {paso.numero}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-brown-dark">
                  {paso.titulo}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual note */}
        <div className="mt-16 text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/20">
          <p className="text-charcoal-light mb-4">
            <strong className="text-brown-dark">Tiempo promedio de venta:</strong> 2-4 semanas
          </p>
          <p className="text-sm text-charcoal-light">
            Mantenemos tu instrumento en consignación por un período acordado. Si no se vende, lo devolvemos en perfecto estado.
          </p>
        </div>
      </div>
    </section>
  );
}
