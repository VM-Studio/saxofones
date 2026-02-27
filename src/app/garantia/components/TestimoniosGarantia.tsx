"use client";

export function TestimoniosGarantia() {
  const testimonios = [
    {
      nombre: "Javier Belotti",
      rol: "Cliente",
      contenido: "Excelente local y excelente la atención. Se toman todo el tiempo para asesorarte y despejar todas las dudas que tengas. Un fenómeno el Ale, recomendadísimo!",
      calificacion: 5
    },
    {
      nombre: "Silvina Passone",
      rol: "Local Guide",
      contenido: "Trato cordial, me esperó y se adaptó a mis horarios, me explicó y sugirió. Buen saxofonista y vendedor! Hasta la próxima.",
      calificacion: 5
    },
    {
      nombre: "Rolando Dominguez",
      rol: "Cliente",
      contenido: "Atención excelente, buen trato y también muy buen trabajo.",
      calificacion: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-ivory to-cream-dark relative overflow-hidden pt-32">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-gold/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-brown/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-6">
            Testimonios de Confianza
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonios.map((testimonio, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-elegant-lg transition-all duration-300 border border-gold/20 hover:border-gold/50 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonio.calificacion }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Contenido */}
                <p className="text-charcoal italic leading-relaxed">
                  "{testimonio.contenido}"
                </p>

                {/* Divider */}
                <div className="pt-4 border-t border-gold/20"></div>

                {/* Author */}
                <div>
                  <h3 className="font-serif font-bold text-brown-dark">
                    {testimonio.nombre}
                  </h3>
                  <p className="text-sm text-charcoal-light">
                    {testimonio.rol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Reseñas */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.google.com/maps/place/Dr.Brass+McHiuker+luthier+de+instrumentos+de+viento+y+bronces/@-33.1334679,-60.9431677,9.06z/data=!4m8!3m7!1s0x95b7abe03fe5acfd:0xd015674b5d28d10c!8m2!3d-32.949866!4d-60.637357!9m1!1b1!16s%2Fg%2F11ngkzbdmf?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-brown-dark text-cream hover:bg-brown text-lg font-semibold transition-all px-8 py-4 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1"
          >
            Ver Reseñas
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
