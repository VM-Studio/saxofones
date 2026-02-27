"use client";

export function ServiciosLutheria() {
  const servicios = [
    {
      titulo: "Reparación General",
      descripcion: "Reparación de fugas, mecanismos dañados, cierres defectuosos y otros problemas comunes.",
      icono: "🔧",
      tiempo: "3-7 días"
    },
    {
      titulo: "Restauración Completa",
      descripcion: "Restauración integral de saxofones vintage o dañados. Desmonte, limpieza profunda y reparación.",
      icono: "✨",
      tiempo: "2-4 semanas"
    },
    {
      titulo: "Cambio de Almohadillas",
      descripcion: "Reemplazo profesional de almohadillas desgastadas con materiales de primera calidad.",
      icono: "🎯",
      tiempo: "1-2 días"
    },
    {
      titulo: "Afinación y Ajuste",
      descripcion: "Ajuste fino de la afinación y optimización del sonido de tu instrumento.",
      icono: "🎵",
      tiempo: "1 día"
    },
    {
      titulo: "Pulido y Acabado",
      descripcion: "Pulido profesional de lacas y acabados. Restauración del brillo original.",
      icono: "💎",
      tiempo: "3-5 días"
    },
    {
      titulo: "Personalización",
      descripcion: "Trabajo artístico personalizado: gravados, pintura especial y modificaciones únicas.",
      icono: "🎨",
      tiempo: "A consultar"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-72 h-72 bg-gold/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-gold/15 px-4 py-2 rounded-full mb-4 shadow-md">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-6">
            Nuestros Servicios de Luthería
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-lg text-charcoal-light mt-8 max-w-3xl mx-auto">
            Servicios profesionales desde pequeñas reparaciones hasta restauraciones completas
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-cream to-cream-dark rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/10 hover:border-gold/30 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-5xl">{servicio.icono}</div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-brown-dark">
                  {servicio.titulo}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* Divider and time */}
                <div className="pt-4 border-t border-gold/20 group-hover:border-gold/40 transition-colors">
                  <span className="text-sm font-semibold text-gold bg-gold/10 rounded px-3 py-1 inline-block">
                    {servicio.tiempo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
