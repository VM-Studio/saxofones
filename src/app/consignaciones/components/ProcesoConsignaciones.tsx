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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-4">
            Cómo Funciona la Consignación
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 md:p-8 transition-all duration-300 hover:bg-cream-dark/30"
            >
              <span className="font-serif text-2xl md:text-3xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-300">
                0{paso.numero}
              </span>

              <h3 className="text-lg font-serif font-bold text-brown-dark mt-3 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Info footer */}
        <div className="mt-12 md:mt-16 bg-white p-6 md:p-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-sm font-serif font-bold text-brown-dark">Tiempo promedio de venta</span>
              <span className="block text-xs text-charcoal/50 mt-1">
                Mantenemos tu instrumento en consignación por un período acordado. Si no se vende, lo devolvemos en perfecto estado.
              </span>
            </div>
            <span className="font-serif text-2xl font-bold text-gold shrink-0">2-4 semanas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
