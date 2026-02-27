"use client";

export function CoberturasGarantia() {
  const coberturas = [
    {
      titulo: "Defectos de Fabricación",
      descripcion: "Cubrimos cualquier defecto inherente al producto desde su fabricación, incluyendo grietas, desajustes y problemas en los mecanismos internos.",
      icono: "shield",
      duracion: "24 meses"
    },
    {
      titulo: "Desgaste Normal",
      descripcion: "El desgaste gradual por uso normal está cubierto. Reemplazamos corcholas, almohadillas y otras piezas de desgaste sin costo adicional.",
      icono: "repeat",
      duracion: "12 meses"
    },
    {
      titulo: "Afinación y Ajustes",
      descripcion: "Mantén tu instrumento en perfectas condiciones con afinaciones periódicas y ajustes técnicos incluidos en tu garantía.",
      icono: "sliders",
      duracion: "Ilimitado"
    },
    {
      titulo: "Servicio de Limpieza",
      descripcion: "Limpieza profesional profunda y mantenimiento preventivo para garantizar la longevidad de tu saxofón.",
      icono: "sparkles",
      duracion: "2 veces/año"
    },
    {
      titulo: "Piezas de Reemplazo",
      descripcion: "Reemplazo de piezas dañadas o desgastadas sin costo, utilizando componentes originales de calidad premium.",
      icono: "wrench",
      duracion: "24 meses"
    },
    {
      titulo: "Protección Total",
      descripcion: "Seguro adicional contra daños accidentales. Extensión de garantía disponible hasta 5 años.",
      icono: "lock",
      duracion: "Opcional"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-72 h-72 bg-gold/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-3">
            ¿Qué Incluye Nuestra Garantía?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-lg text-charcoal-light mt-4 max-w-3xl mx-auto">
            Protección completa para tu instrumento con servicios especializados y cobertura integral
          </p>
        </div>

        {/* Grid de coberturas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coberturas.map((cobertura, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-cream to-cream-dark rounded-2xl p-8 shadow-md hover:shadow-elegant-lg transition-all duration-300 border border-gold/10 hover:border-gold/30 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-brown/5 rounded-full blur-2xl group-hover:bg-brown/10 transition-colors"></div>

              <div className="relative z-10">
                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-brown-dark mb-3">
                  {cobertura.titulo}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {cobertura.descripcion}
                </p>

                {/* Divider */}
                <div className="mt-6 pt-6 border-t border-gold/20 group-hover:border-gold/40 transition-colors"></div>

                {/* Arrow */}
                <div className="flex justify-end mt-4">
                  <svg className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info banner */}
        <div className="relative bg-gradient-to-r from-brown-dark/5 to-gold/10 rounded-2xl border border-gold/30 p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-4">
                ¿Cómo Activar Tu Garantía?
              </h3>
              <ol className="space-y-3 text-charcoal">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-cream text-sm font-bold flex-shrink-0">1</span>
                  <span>Conserva tu comprobante de compra y certificado de garantía</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-cream text-sm font-bold flex-shrink-0">2</span>
                  <span>Registra tu producto en nuestro sistema en línea</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-cream text-sm font-bold flex-shrink-0">3</span>
                  <span>Contacta con nuestro servicio técnico cuando lo necesites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-cream text-sm font-bold flex-shrink-0">4</span>
                  <span>Disfruta de reparaciones y mantenimiento sin costo</span>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-4">
                Excepciones a la Garantía
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-lg">•</span>
                  <span>Daños causados por negligencia o mal uso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-lg">•</span>
                  <span>Modificaciones no autorizadas del instrumento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-lg">•</span>
                  <span>Daños por exposición a humedad extrema</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-lg">•</span>
                  <span>Caídas o golpes accidentales (sin seguro adicional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-lg">•</span>
                  <span>Desgaste natural después de vencer la garantía</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
