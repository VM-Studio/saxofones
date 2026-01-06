import Image from "next/image";
import Link from "next/link";

export function SobreNosotrosSection() {
  return (
    <section className="py-20 bg-drblack">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido */}
          <div className="order-2 lg:order-1">
            <span className="text-drgold/80 text-sm font-medium tracking-[0.2em] uppercase">
              Desde Rosario para el mundo
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold mt-2 mb-6 uppercase tracking-wide">
              Sobre Nosotros
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                DR BRASS es la tienda líder en Rosario especializada en saxofones e instrumentos de viento. Ofrecemos asesoramiento profesional, compra, venta, canje y consignaciones, con atención personalizada y productos de alta calidad.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-zinc-800">
              <div>
                <span className="text-drgold text-3xl font-bold">10+</span>
                <p className="text-zinc-500 text-sm mt-1">Años de experiencia</p>
              </div>
              <div>
                <span className="text-drgold text-3xl font-bold">500+</span>
                <p className="text-zinc-500 text-sm mt-1">Clientes satisfechos</p>
              </div>
              <div>
                <span className="text-drgold text-3xl font-bold">100%</span>
                <p className="text-zinc-500 text-sm mt-1">Garantía</p>
              </div>
            </div>

            <Link 
              href="/contacto" 
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-drgold text-drblack font-medium hover:bg-drgold/90 transition-colors"
            >
              Contactar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Imagen + Mapa */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
              <Image
                src="/drbrass-tienda.jpg"
                alt="Tienda DR BRASS Rosario - Saxofones y vientos premium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-drgold text-drblack text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  DR BRASS Rosario
                </span>
              </div>
            </div>
            
            {/* Mapa */}
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
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
