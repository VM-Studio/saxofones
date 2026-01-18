export function SobreNosotrosSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-cream to-ivory relative overflow-hidden">
      {/* Decoradores sutiles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contenido */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-6 tracking-tight leading-tight">
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mb-8"></div>
            
            <div className="space-y-5 text-brown-dark text-lg leading-relaxed">
              <p>
                <strong className="text-brown-dark font-bold">DR BRASS</strong> es la tienda líder en Rosario especializada en saxofones e instrumentos de viento. Ofrecemos asesoramiento profesional, compra, venta, canje y consignaciones, con atención personalizada y productos de alta calidad.
              </p>
            </div>
            
            {/* Stats mejorados */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center transform hover:-translate-y-1 transition-all">
                <span className="text-brown text-2xl font-bold block mb-2">10+</span>
                <p className="text-brown text-xs font-semibold">Años de experiencia</p>
              </div>
              <div className="text-center transform hover:-translate-y-1 transition-all">
                <span className="text-brown text-2xl font-bold block mb-2">500+</span>
                <p className="text-brown text-xs font-semibold">Clientes satisfechos</p>
              </div>
              <div className="text-center transform hover:-translate-y-1 transition-all">
                <span className="text-brown text-2xl font-bold block mb-2">100%</span>
                <p className="text-brown text-xs font-semibold">Garantía</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="order-1 lg:order-2">
            {/* Mapa mejorado */}
            <div className="relative aspect-video bg-white shadow-elegant-lg overflow-hidden border border-brown-light/[0.02] transform hover:-translate-y-2 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.858232993857!2d-60.66222268481344!3d-32.95072608092937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sDR%20BRASS%20Rosario!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación DR BRASS Rosario - Tienda de saxofones"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
