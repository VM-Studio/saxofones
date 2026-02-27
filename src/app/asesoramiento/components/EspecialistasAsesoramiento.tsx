"use client";

export function EspecialstasAsesoramiento() {
  const especialistas = [
    {
      nombre: "Carlos Mendez",
      titulo: "Especialista en Saxofones Vintage",
      experiencia: "18 años",
      especialidad: "Restauración de instrumentos clásicos",
      icono: "🎷",
      bio: "Restaurador experto con pasión por los saxofones vintage. Conoce cada modelo y marca."
    },
    {
      nombre: "María García",
      titulo: "Asesor de Nivel de Jugador",
      experiencia: "15 años",
      especialidad: "Estudiantes y principiantes",
      icono: "👩‍🎓",
      bio: "Especializada en encontrar el instrumento perfecto según nivel y presupuesto."
    },
    {
      nombre: "Roberto Silva",
      titulo: "Experto en Jazz y Música Moderna",
      experiencia: "22 años",
      especialidad: "Saxofones profesionales",
      icono: "🎵",
      bio: "Músico profesional que entiende las necesidades de los artistas contemporáneos."
    },
    {
      nombre: "Ana Fernández",
      titulo: "Especialista Técnico",
      experiencia: "20 años",
      especialidad: "Mantenimiento y reparación",
      icono: "🔧",
      bio: "Técnica de luthería con profundo conocimiento en el cuidado de instrumentos."
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
            Especialistas Dedicados a Ti
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-lg text-charcoal-light mt-4 max-w-3xl mx-auto">
            Cada miembro de nuestro equipo aporta experiencia única y pasión por los saxofones
          </p>
        </div>

        {/* Grid de especialistas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {especialistas.map((esp, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-cream to-cream-dark rounded-2xl p-6 shadow-md hover:shadow-elegant-lg transition-all border border-gold/10 hover:border-gold/30 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/15 rounded-full blur-xl group-hover:bg-gold/25 transition-colors"></div>

              <div className="relative z-10 text-center space-y-4">

                {/* Info */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-brown-dark mb-1">
                    {esp.nombre}
                  </h3>
                  <p className="text-sm font-semibold text-gold mb-2">
                    {esp.titulo}
                  </p>
                  <p className="text-xs text-charcoal-light mb-4">
                    {esp.experiencia} de experiencia
                  </p>
                </div>

                {/* Divider */}
                <div className="pt-4 border-t border-gold/20"></div>

                {/* Bio and specialty */}
                <div className="space-y-2">
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {esp.bio}
                  </p>
                  <p className="text-xs font-semibold text-gold bg-gold/10 rounded px-3 py-1 inline-block">
                    {esp.especialidad}
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
