"use client";

export function ProcesoLutheria() {
  return (
    <section className="py-20 bg-linear-to-br from-cream via-ivory to-cream-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-gold/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brown text-sm font-semibold tracking-wider uppercase bg-white/80 px-4 py-2 rounded-full mb-4 shadow-md">
            Proceso profesional
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-6">
            Cómo Trabajamos
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "1",
              titulo: "Evaluación",
              descripcion: "Examen detallado del instrumento para identificar problemas",
              icono: "🔍"
            },
            {
              num: "2",
              titulo: "Presupuesto",
              descripcion: "Cotización transparente y detallada sin costo adicional",
              icono: "📋"
            },
            {
              num: "3",
              titulo: "Reparación",
              descripcion: "Trabajo minucioso con herramientas profesionales",
              icono: "🛠️"
            },
            {
              num: "4",
              titulo: "Control de Calidad",
              descripcion: "Verificación final y prueba completa antes de entregar",
              icono: "✅"
            }
          ].map((paso, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all border border-gold/20 hover:border-gold/50 transform hover:-translate-y-2 overflow-hidden text-center"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 space-y-4">
                {/* Number badge */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold text-cream flex items-center justify-center font-bold text-xl">
                    {paso.num}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-4xl">{paso.icono}</div>

                {/* Content */}
                <h3 className="text-lg font-serif font-bold text-brown-dark">
                  {paso.titulo}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/30 p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-6">
                Garantía en Nuestro Trabajo
              </h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Garantía de 6 meses en trabajos realizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Reparación sin costo si algo falla dentro del período</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Soporte post-reparación permanente</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-6">
                Técnicas Utilizadas
              </h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Limpieza ultrasónica profesional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Almohadillas de corcho natural premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Lacas de la mejor calidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Herramientas de luthería profesionales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Técnicas tradicionales y modernas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
