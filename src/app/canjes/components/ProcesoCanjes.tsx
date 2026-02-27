"use client";

export function ProcesoCanjes() {
  const pasos = [
    {
      numero: 1,
      titulo: "Evalúa tu Instrumento",
      descripcion: "Trae tu saxofón a nuestra tienda o envía fotos y detalles técnicos. Nuestros expertos realizarán una evaluación minuciosa.",
      icono: "🔍",
      detalles: ["Estado físico", "Funcionamiento", "Accesorios incluidos"]
    },
    {
      numero: 2,
      titulo: "Recibe Nuestra Tasación",
      descripcion: "En base a la evaluación, ofrecemos el mejor valor de cambio del mercado. Sin sorpresas, todo es transparente.",
      icono: "💵",
      detalles: ["Valuación justa", "Cálculo transparente", "Sin cargos ocultos"]
    },
    {
      numero: 3,
      titulo: "Elige tu Nuevo Instrumento",
      descripcion: "Usa el valor de tu canje como parte de pago para elegir cualquier saxofón de nuestro catálogo.",
      icono: "🎷",
      detalles: ["Amplia selección", "Precios competitivos", "Financiación disponible"]
    },
    {
      numero: 4,
      titulo: "Finaliza el Cambio",
      descripcion: "Realiza los trámites finales, obtén tu nuevo instrumento con garantía y llevate todos los accesorios.",
      icono: "✅",
      detalles: ["Garantía incluida", "Accesorios gratuitos", "Listo para tocar"]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-72 h-72 bg-gold/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 pt-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-3">
            Cómo Funciona el Canje
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-lg text-charcoal-light mt-4 max-w-3xl mx-auto">
            Cuatro simples pasos para actualizar tu instrumento y obtener el mejor valor
          </p>
        </div>

        {/* Pasos */}
        <div className="space-y-8">
          {pasos.map((paso, idx) => (
            <div key={idx} className="group">
              <div className="grid lg:grid-cols-5 gap-8 items-center">

                {/* Contenido */}
                <div className="lg:col-span-5">
                  <div className="bg-gradient-to-br from-cream to-cream-dark rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/10 hover:border-gold/30 group-hover:-translate-y-1 duration-300">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-brown-dark mb-3">
                      {paso.titulo}
                    </h3>
                    <p className="text-charcoal-light leading-relaxed mb-6">
                      {paso.descripcion}
                    </p>

                    {/* Detalles */}
                    <div className="flex flex-wrap gap-3">
                      {paso.detalles.map((detalle, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-2 bg-white/70 rounded-lg px-4 py-2 border border-gold/20"
                        >
                          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold text-charcoal">{detalle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
