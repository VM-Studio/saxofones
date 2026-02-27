"use client";

export function ServiciosAsesoramiento() {
  const servicios = [
    {
      titulo: "Consulta Online",
      descripcion: "Conéctate con nuestros expertos vía videollamada desde cualquier lugar",
      icono: "📱",
      duracion: "45 minutos",
      precio: "Gratis"
    },
    {
      titulo: "Evaluación en Tienda",
      descripcion: "Visita nuestra tienda y prueba personalmente los instrumentos",
      icono: "🏪",
      duracion: "1-2 horas",
      precio: "Gratis"
    },
    {
      titulo: "Plan de Compra Personalizado",
      descripcion: "Diseñamos un plan de compra según tus necesidades y presupuesto",
      icono: "📋",
      duracion: "Seguimiento continuo",
      precio: "Incluido"
    },
    {
      titulo: "Comparación de Modelos",
      descripcion: "Análisis detallado de diferentes modelos y marcas",
      icono: "⚖️",
      duracion: "Informe detallado",
      precio: "Gratis"
    },
    {
      titulo: "Recomendaciones por Estilo",
      descripcion: "Sugerencias adaptadas a tu género musical favorito",
      icono: "🎼",
      duracion: "Consulta personalizada",
      precio: "Incluido"
    },
    {
      titulo: "Seguimiento Post-Venta",
      descripcion: "Apoyo continuo después de tu compra para optimizar tu instrumento",
      icono: "📞",
      duracion: "Soporte permanente",
      precio: "Incluido"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-cream via-ivory to-cream-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-gold/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-3">
            Cómo Te Podemos Ayudar
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/20 hover:border-gold/50 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 space-y-4">

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-brown-dark">
                  {servicio.titulo}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* Footer info */}
                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-sm">
                  <span className="text-charcoal-light">{servicio.duracion}</span>
                  <span className="font-bold text-gold">{servicio.precio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
