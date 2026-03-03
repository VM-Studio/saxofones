"use client";

export function ServiciosAsesoramiento() {
  const servicios = [
    {
      titulo: "Consulta Online",
      descripcion: "Conéctate con nuestros expertos vía videollamada desde cualquier lugar.",
    },
    {
      titulo: "Evaluación en Tienda",
      descripcion: "Visita nuestra tienda y probá personalmente los instrumentos.",
    },
    {
      titulo: "Plan de Compra",
      descripcion: "Diseñamos un plan según tus necesidades y presupuesto.",
    },
    {
      titulo: "Comparación de Modelos",
      descripcion: "Análisis detallado de diferentes modelos y marcas.",
    },
    {
      titulo: "Recomendación por Estilo",
      descripcion: "Sugerencias adaptadas a tu género musical favorito.",
    },
    {
      titulo: "Seguimiento Post-Venta",
      descripcion: "Apoyo continuo después de tu compra.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-warm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Cómo Te Podemos Ayudar
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="group bg-white p-4 md:p-8 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_0_rgba(107,86,53,0.06)] hover:shadow-[0_4px_20px_0_rgba(107,86,53,0.12)]"
            >
              <span className="text-gold/30 font-serif text-xl md:text-2xl font-bold group-hover:text-gold/60 transition-colors duration-300">
                0{idx + 1}
              </span>
              <h3 className="text-sm md:text-lg font-serif font-bold text-brown-dark mt-2 mb-1.5">
                {servicio.titulo}
              </h3>
              <p className="text-xs text-charcoal/50 leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
