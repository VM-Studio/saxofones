"use client";

export function ServiciosLutheria() {
  const servicios = [
    {
      titulo: "Reparación General",
      descripcion: "Reparación de fugas, mecanismos dañados, cierres defectuosos y otros problemas comunes.",
      tiempo: "3-7 días"
    },
    {
      titulo: "Restauración Completa",
      descripcion: "Restauración integral de saxofones vintage o dañados. Desmonte, limpieza profunda y reparación.",
      tiempo: "2-4 semanas"
    },
    {
      titulo: "Cambio de Almohadillas",
      descripcion: "Reemplazo profesional de almohadillas desgastadas con materiales de primera calidad.",
      tiempo: "1-2 días"
    },
    {
      titulo: "Afinación y Ajuste",
      descripcion: "Ajuste fino de la afinación y optimización del sonido de tu instrumento.",
      tiempo: "1 día"
    },
    {
      titulo: "Pulido y Acabado",
      descripcion: "Pulido profesional de lacas y acabados. Restauración del brillo original.",
      tiempo: "3-5 días"
    },
    {
      titulo: "Personalización",
      descripcion: "Trabajo artístico personalizado: gravados, pintura especial y modificaciones únicas.",
      tiempo: "A consultar"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-4">
            Nuestros Servicios de Luthería
          </h2>
          <p className="text-base md:text-lg text-charcoal/60 max-w-2xl mx-auto">
            Servicios profesionales desde pequeñas reparaciones hasta restauraciones completas
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="group bg-cream-dark/30 hover:bg-cream-dark/60 p-6 md:p-8 transition-all duration-300"
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
