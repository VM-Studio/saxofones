"use client";

export function CoberturasGarantia() {
  const coberturas = [
    {
      titulo: "Defectos de Fabricación",
      descripcion: "Cubrimos cualquier defecto inherente al producto desde su fabricación, incluyendo grietas, desajustes y problemas en los mecanismos internos.",
      duracion: "24 meses"
    },
    {
      titulo: "Desgaste Normal",
      descripcion: "El desgaste gradual por uso normal está cubierto. Reemplazamos corcholas, almohadillas y otras piezas de desgaste sin costo adicional.",
      duracion: "12 meses"
    },
    {
      titulo: "Afinación y Ajustes",
      descripcion: "Mantén tu instrumento en perfectas condiciones con afinaciones periódicas y ajustes técnicos incluidos en tu garantía.",
      duracion: "Ilimitado"
    },
    {
      titulo: "Servicio de Limpieza",
      descripcion: "Limpieza profesional profunda y mantenimiento preventivo para garantizar la longevidad de tu saxofón.",
      duracion: "2 veces/año"
    },
    {
      titulo: "Piezas de Reemplazo",
      descripcion: "Reemplazo de piezas dañadas o desgastadas sin costo, utilizando componentes originales de calidad premium.",
      duracion: "24 meses"
    },
    {
      titulo: "Protección Total",
      descripcion: "Seguro adicional contra daños accidentales. Extensión de garantía disponible hasta 5 años.",
      duracion: "Opcional"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-dark/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="w-12 h-px bg-gold mb-6"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-4">
            ¿Qué Incluye Nuestra Garantía?
          </h2>
          <p className="text-base md:text-lg text-charcoal/60 max-w-2xl">
            Protección completa para tu instrumento con servicios especializados y cobertura integral
          </p>
        </div>

        {/* Grid de coberturas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {coberturas.map((cobertura, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 md:p-8 transition-all duration-300 hover:bg-cream-dark/30"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium tracking-wider uppercase text-gold bg-gold/10 px-3 py-1">
                  {cobertura.duracion}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-serif font-bold text-brown-dark mb-3">
                {cobertura.titulo}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {cobertura.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-px bg-gold/10">
          <div className="bg-white p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-serif font-bold text-brown-dark mb-5">
              ¿Cómo Activar Tu Garantía?
            </h3>
            <div className="space-y-4">
              {[
                "Conserva tu comprobante de compra y certificado de garantía",
                "Registra tu producto en nuestro sistema en línea",
                "Contacta con nuestro servicio técnico cuando lo necesites",
                "Disfruta de reparaciones y mantenimiento sin costo"
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-serif text-gold font-bold text-sm mt-0.5">0{i + 1}</span>
                  <span className="text-sm text-charcoal/70 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-serif font-bold text-brown-dark mb-5">
              Excepciones a la Garantía
            </h3>
            <div className="space-y-3">
              {[
                "Daños causados por negligencia o mal uso",
                "Modificaciones no autorizadas del instrumento",
                "Daños por exposición a humedad extrema",
                "Caídas o golpes accidentales (sin seguro adicional)",
                "Desgaste natural después de vencer la garantía"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span className="text-sm text-charcoal/70 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
