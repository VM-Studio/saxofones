export function ServiciosSection() {
  const servicios = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Garantía",
      descripcion: "Todos nuestros instrumentos cuentan con garantía y servicio post-venta.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      titulo: "Canjes",
      descripcion: "Aceptamos tu instrumento como parte de pago por uno nuevo.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      titulo: "Asesoramiento",
      descripcion: "Te ayudamos a elegir el instrumento ideal según tu nivel y estilo.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      titulo: "Consignaciones",
      descripcion: "Vendemos tu instrumento por vos, sin complicaciones.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Decoradores de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
        </div>

        {/* Grid de servicios - Horizontal en móvil, Grid en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group relative bg-white border border-brown-light/20 p-6 hover:shadow-elegant-lg transition-all duration-500 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icono con fondo */}
              <div className="relative inline-block flex-shrink-0 lg:mb-5">
                <div className="absolute inset-0 bg-gold/10 transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                <div className="relative text-gold p-4 bg-gradient-to-br from-gold/10 to-brown/10">
                  {servicio.icon}
                </div>
              </div>
              
              <div className="flex-1 lg:flex-initial">
                <h3 className="text-brown-dark font-bold text-lg mb-2 lg:mb-3 group-hover:text-gold transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>

              {/* Línea decorativa */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
