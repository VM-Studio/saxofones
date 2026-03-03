"use client";

export function ProcesoLutheria() {
  const pasos = [
    {
      num: "01",
      titulo: "Evaluación",
      descripcion: "Examen detallado del instrumento para identificar problemas"
    },
    {
      num: "02",
      titulo: "Presupuesto",
      descripcion: "Cotización transparente y detallada sin costo adicional"
    },
    {
      num: "03",
      titulo: "Reparación",
      descripcion: "Trabajo minucioso con herramientas profesionales"
    },
    {
      num: "04",
      titulo: "Control de Calidad",
      descripcion: "Verificación final y prueba completa antes de entregar"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Cómo Trabajamos
          </h2>
        </div>

        {/* Steps - horizontal on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 md:p-8 transition-all duration-300 hover:bg-cream-dark/30"
            >
              <span className="font-serif text-3xl md:text-4xl font-bold text-gold/20 group-hover:text-gold transition-colors duration-300">
                {paso.num}
              </span>

              <h3 className="text-base md:text-lg font-serif font-bold text-brown-dark mt-4 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
