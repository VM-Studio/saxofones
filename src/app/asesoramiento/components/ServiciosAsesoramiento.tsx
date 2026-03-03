"use client";

export function ServiciosAsesoramiento() {
  const servicios = [
    {
      titulo: "Consulta Online",
      descripcion: "Conéctate con nuestros expertos vía videollamada desde cualquier lugar",
      duracion: "45 minutos",
      precio: "Gratis"
    },
    {
      titulo: "Evaluación en Tienda",
      descripcion: "Visita nuestra tienda y prueba personalmente los instrumentos",
      duracion: "1-2 horas",
      precio: "Gratis"
    },
    {
      titulo: "Plan de Compra Personalizado",
      descripcion: "Diseñamos un plan de compra según tus necesidades y presupuesto",
      duracion: "Seguimiento continuo",
      precio: "Incluido"
    },
    {
      titulo: "Comparación de Modelos",
      descripcion: "Análisis detallado de diferentes modelos y marcas",
      duracion: "Informe detallado",
      precio: "Gratis"
    },
    {
      titulo: "Recomendaciones por Estilo",
      descripcion: "Sugerencias adaptadas a tu género musical favorito",
      duracion: "Consulta personalizada",
      precio: "Incluido"
    },
    {
      titulo: "Seguimiento Post-Venta",
      descripcion: "Apoyo continuo después de tu compra para optimizar tu instrumento",
      duracion: "Soporte permanente",
      precio: "Incluido"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-dark/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Cómo Te Podemos Ayudar
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 md:p-8 transition-all duration-300 hover:bg-cream-dark/30"
            >
              <h3 className="text-lg font-serif font-bold text-brown-dark mb-3">
                {servicio.titulo}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
