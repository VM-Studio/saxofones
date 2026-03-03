"use client";

export function EspecialstasAsesoramiento() {
  const especialistas = [
    {
      nombre: "Carlos Mendez",
      titulo: "Especialista en Saxofones Vintage",
      experiencia: "18 años",
      especialidad: "Restauración de instrumentos clásicos",
      bio: "Restaurador experto con pasión por los saxofones vintage. Conoce cada modelo y marca."
    },
    {
      nombre: "María García",
      titulo: "Asesor de Nivel de Jugador",
      experiencia: "15 años",
      especialidad: "Estudiantes y principiantes",
      bio: "Especializada en encontrar el instrumento perfecto según nivel y presupuesto."
    },
    {
      nombre: "Roberto Silva",
      titulo: "Experto en Jazz y Música Moderna",
      experiencia: "22 años",
      especialidad: "Saxofones profesionales",
      bio: "Músico profesional que entiende las necesidades de los artistas contemporáneos."
    },
    {
      nombre: "Ana Fernández",
      titulo: "Especialista Técnico",
      experiencia: "20 años",
      especialidad: "Mantenimiento y reparación",
      bio: "Técnica de luthería con profundo conocimiento en el cuidado de instrumentos."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="w-12 h-px bg-gold mb-6 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight mb-4">
            Especialistas Dedicados a Ti
          </h2>
          <p className="text-base md:text-lg text-charcoal/60 max-w-2xl mx-auto">
            Cada miembro de nuestro equipo aporta experiencia única y pasión por los saxofones
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {especialistas.map((esp, idx) => (
            <div
              key={idx}
              className="group bg-cream-dark/30 hover:bg-cream-dark/60 p-5 md:p-6 transition-all duration-300"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="text-base md:text-lg font-serif font-bold text-brown-dark">
                    {esp.nombre}
                  </h3>
                  <p className="text-xs font-medium text-gold mt-1">
                    {esp.titulo}
                  </p>
                </div>

                <div className="w-8 h-px bg-gold/30"></div>

                <p className="text-xs text-charcoal/50 leading-relaxed">
                  {esp.bio}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-charcoal/40">{esp.experiencia}</span>
                  <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5">
                    {esp.especialidad}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
