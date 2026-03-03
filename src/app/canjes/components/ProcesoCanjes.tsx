"use client";

export function ProcesoCanjes() {
  const pasos = [
    {
      numero: 1,
      titulo: "Evalúa tu Instrumento",
      descripcion: "Trae tu saxofón a nuestra tienda o envía fotos y detalles técnicos. Nuestros expertos realizarán una evaluación minuciosa.",
    },
    {
      numero: 2,
      titulo: "Recibe Nuestra Tasación",
      descripcion: "En base a la evaluación, ofrecemos el mejor valor de cambio del mercado. Sin sorpresas, todo es transparente.",
    },
    {
      numero: 3,
      titulo: "Elige tu Nuevo Instrumento",
      descripcion: "Usa el valor de tu canje como parte de pago para elegir cualquier saxofón de nuestro catálogo.",
    },
    {
      numero: 4,
      titulo: "Finaliza el Cambio",
      descripcion: "Realiza los trámites finales, obtén tu nuevo instrumento con garantía y llevate todos los accesorios.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-warm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Cómo Funciona el Canje
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-px bg-gold/10">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="group bg-white hover:bg-cream-dark/30 p-4 md:p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="font-serif text-2xl md:text-4xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-300 shrink-0">
                  0{paso.numero}
                </span>

                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-serif font-bold text-brown-dark mb-1.5">
                    {paso.titulo}
                  </h3>
                  <p className="text-xs md:text-base text-charcoal/60 leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
