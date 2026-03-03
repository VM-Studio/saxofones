"use client";

export function VentajasCanjes() {
  const ventajas = [
    {
      titulo: "Mejor Valor de Cambio",
      descripcion: "Ofrecemos las tasaciones más competitivas del mercado local."
    },
    {
      titulo: "Proceso Transparente",
      descripcion: "Sin costos ocultos. Sabes exactamente qué recibes a cambio."
    },
    {
      titulo: "Evaluación Profesional",
      descripcion: "Nuestros expertos evalúan cada detalle de tu instrumento."
    },
    {
      titulo: "Amplio Catálogo",
      descripcion: "Elige de cientos de saxofones nuevos y usados de calidad."
    },
    {
      titulo: "Garantía Incluida",
      descripcion: "Tu nuevo instrumento incluye nuestra garantía integral."
    },
    {
      titulo: "Financiación Flexible",
      descripcion: "Opciones de pago para completar tu compra cómodamente."
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
            Ventajas del Programa de Canjes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {ventajas.map((ventaja, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 md:p-8 transition-all duration-300 hover:bg-cream-dark/30"
            >
              <h3 className="text-lg font-serif font-bold text-brown-dark mb-3">
                {ventaja.titulo}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {ventaja.descripcion}
              </p>
              <div className="w-8 h-px bg-gold/30 mt-5 group-hover:w-12 group-hover:bg-gold transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-px bg-gold/10">
          <div className="bg-white p-6 md:p-8">
            <h3 className="text-base md:text-lg font-serif font-bold text-charcoal/40 mb-4">Tiendas Comunes</h3>
            <div className="space-y-2.5">
              {["Tasación injusta", "Proceso lento", "Sin transparencia", "Stock limitado"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-charcoal/20 shrink-0"></div>
                  <span className="text-sm text-charcoal/40">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream-dark/50 p-6 md:p-8 flex flex-col items-center justify-center text-center border-x border-gold/10">
            <span className="font-serif text-2xl md:text-3xl font-bold text-gold">VS</span>
          </div>

          <div className="bg-white p-6 md:p-8">
            <h3 className="text-base md:text-lg font-serif font-bold text-brown-dark mb-4">DR BRASS</h3>
            <div className="space-y-2.5">
              {["Mejor valor de cambio", "Proceso rápido (1 día)", "100% transparente", "Amplio catálogo"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold shrink-0"></div>
                  <span className="text-sm text-charcoal/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
