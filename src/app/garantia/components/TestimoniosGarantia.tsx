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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle geometric decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Testimonios de Confianza
          </h2>
        </div>

        {/* Grid de testimonios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-10">
          {testimonios.map((testimonio, idx) => (
            <div
              key={idx}
              className="group bg-cream-dark/50 border border-gold/10 hover:border-gold/30 p-4 md:p-8 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_0_rgba(107,86,53,0.08)] hover:shadow-[0_4px_20px_0_rgba(107,86,53,0.14)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonio.calificacion }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-charcoal/80 leading-relaxed mb-4 text-xs md:text-base">
                &ldquo;{testimonio.contenido}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mb-4"></div>

              {/* Author */}
              <div>
                <h3 className="font-serif font-bold text-brown-dark text-sm">
                  {testimonio.nombre}
                </h3>
                <p className="text-xs text-charcoal/50 mt-1">
                  {testimonio.rol}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Ver Reseñas */}
        <div className="flex justify-center">
          <a
            href="https://www.google.com/maps/place/Dr.Brass+McHiuker+luthier+de+instrumentos+de+viento+y+bronces/@-33.1334679,-60.9431677,9.06z/data=!4m8!3m7!1s0x95b7abe03fe5acfd:0xd015674b5d28d10c!8m2!3d-32.949866!4d-60.637357!9m1!1b1!16s%2Fg%2F11ngkzbdmf?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brown-dark text-cream hover:bg-brown text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 hover:shadow-elegant"
          >
            Ver Reseñas
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
