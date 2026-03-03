"use client";

export function VentajasConsignaciones() {
  const ventajas = [
    {
      titulo: "90% de Comisión",
      descripcion: "Recibís la mayor parte del precio de venta. Solo retenemos un 10% por gestión."
    },
    {
      titulo: "Marketing Profesional",
      descripcion: "Tu instrumento se promociona en nuestra web, tienda física y redes sociales."
    },
    {
      titulo: "Sin Complicaciones",
      descripcion: "Nosotros nos encargamos de todo: fotos, publicación, atención al comprador."
    },
    {
      titulo: "Pago Seguro",
      descripcion: "Transferencia inmediata al concretarse la venta. Total transparencia."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Por Qué Consignar con Nosotros
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-gold/10">
          {ventajas.map((ventaja, idx) => (
            <div
              key={idx}
              className="group bg-cream-dark/30 hover:bg-cream-dark/60 p-6 md:p-8 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-serif font-bold text-brown-dark mb-3">
                {ventaja.titulo}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {ventaja.descripcion}
              </p>
              <div className="w-8 h-px bg-gold/30 mt-5 group-hover:w-12 group-hover:bg-gold transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
