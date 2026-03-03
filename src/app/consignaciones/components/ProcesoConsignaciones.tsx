"use client";

export function ProcesoConsignaciones() {
  const pasos = [
    {
      numero: 1,
      titulo: "Contacta con Nosotros",
      descripcion: "Envía fotos y descripción de tu saxofón o trae el instrumento a nuestra tienda para una evaluación profesional."
    },
    {
      numero: 2,
      titulo: "Valuación Profesional",
      descripcion: "Nuestros expertos evalúan el estado, funcionamiento y características de tu instrumento."
    },
    {
      numero: 3,
      titulo: "Acuerdo de Consignación",
      descripcion: "Definimos el precio de venta y los términos. Todo queda documentado y transparente."
    },
    {
      numero: 4,
      titulo: "Tu Instrumento en Venta",
      descripcion: "Tu saxofón se promociona en tienda, web y redes. Aparece en nuestro catálogo destacado."
    },
    {
      numero: 5,
      titulo: "Venta Realizada",
      descripcion: "Cuando se vende, te notificamos inmediatamente y procesamos tu pago."
    },
    {
      numero: 6,
      titulo: "Recibe tu Dinero",
      descripcion: "Recibe tu comisión (90% del precio de venta) de forma segura y rápida."
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
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-4">
            Cómo Funciona la Consignación
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="group bg-white p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_0_rgba(107,86,53,0.06)] hover:shadow-[0_4px_20px_0_rgba(107,86,53,0.12)]"
            >
              <span className="font-serif text-xl md:text-2xl font-bold text-gold/25 group-hover:text-gold/60 transition-colors duration-300">
                0{paso.numero}
              </span>

              <h3 className="text-sm md:text-base font-serif font-bold text-brown-dark mt-2 mb-1.5">
                {paso.titulo}
              </h3>
              <p className="text-xs md:text-sm text-charcoal/50 leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
