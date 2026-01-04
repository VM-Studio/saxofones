

import Image from "next/image";
import Link from "next/link";
import "./saxo-animacion.css";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-drblack font-sans">
      {/* HERO DR BRASS */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 bg-drblack text-drgray">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto principal */}
            <div className="flex flex-col gap-6 p-4 sm:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-drgold mb-4 leading-tight text-center lg:text-left tracking-wider uppercase">
                Saxofones y Vientos Premium en Rosario
              </h1>
              <p className="text-lg md:text-xl text-drgray mb-6 leading-relaxed text-center lg:text-left font-sans">
                Asesoramiento profesional para saxofonistas: compra, venta, canje y consignaciones de saxofones e instrumentos de viento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
                <Link href="/contacto" className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full sm:w-auto text-center">Contactar</Link>
                <Link href="/productos" className="btn px-8 py-3 text-lg font-bold border-drgold2 text-drgold2 hover:bg-drgold2 hover:text-drblack transition-colors w-full sm:w-auto text-center">Descubrir</Link>
              </div>
            </div>
            {/* Carrusel de productos destacados */}
            <div className="flex items-center justify-center h-80 sm:h-100 lg:h-125 mt-10 lg:mt-0">
              {/* TODO: Carrusel de imágenes de productos destacados */}
              <div className="w-full h-full flex items-center justify-center bg-drmatte border-2 border-drgold rounded-none shadow-dr">
                <span className="text-drgold text-2xl font-serif">Carrusel de productos destacados aquí</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Productos destacados DR BRASS */}
        <section className="py-16 bg-drmatte">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold text-center mb-12 tracking-wider uppercase">Instrumentos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Producto 1 */}
              <div className="card p-8 flex flex-col items-center transition-transform hover:scale-105">
                <Image src="/saxo1.png" alt="Saxofón Alto Yamaha YAS-280" width={180} height={180} className="mb-6 rounded bg-drblack p-2 border-2 border-drgold" />
                <h3 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">Yamaha YAS-280 Alto</h3>
                <p className="text-base text-drgray mb-4 text-center">Ideal para principiantes y estudiantes. Sonido brillante y fácil digitación.</p>
                <span className="text-lg font-bold text-drgold mb-4">$1,200 USD</span>
                <a href="https://www.mercadolibre.com.ar/" target="_blank" rel="noopener" className="btn px-6 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors">Comprar en Mercado Libre</a>
              </div>
              {/* Producto 2 */}
              <div className="card p-8 flex flex-col items-center transition-transform hover:scale-105">
                <Image src="/saxo2.png" alt="Saxofón Tenor Selmer Paris" width={180} height={180} className="mb-6 rounded bg-drblack p-2 border-2 border-drgold" />
                <h3 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">Selmer Paris Tenor</h3>
                <p className="text-base text-drgray mb-4 text-center">El favorito de los profesionales. Sonido profundo y construcción premium.</p>
                <span className="text-lg font-bold text-drgold mb-4">$3,500 USD</span>
                <a href="https://www.mercadolibre.com.ar/" target="_blank" rel="noopener" className="btn px-6 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors">Comprar en Mercado Libre</a>
              </div>
              {/* Producto 3 */}
              <div className="card p-8 flex flex-col items-center transition-transform hover:scale-105">
                <Image src="/saxo3.png" alt="Saxofón Soprano Yanagisawa" width={180} height={180} className="mb-6 rounded bg-drblack p-2 border-2 border-drgold" />
                <h3 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">Yanagisawa Soprano</h3>
                <p className="text-base text-drgray mb-4 text-center">Perfecto para jazzistas. Sonido claro y gran proyección.</p>
                <span className="text-lg font-bold text-drgold mb-4">$2,800 USD</span>
                <a href="https://www.mercadolibre.com.ar/" target="_blank" rel="noopener" className="btn px-6 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors">Comprar en Mercado Libre</a>
              </div>
            </div>
          </div>
        </section>
        {/* Sobre Nosotros DR BRASS */}
        <section className="py-16 bg-drblack text-drgray">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Descripción */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold mb-4 tracking-wider uppercase">Sobre Nosotros</h2>
              <p className="text-lg font-sans mb-4">DR BRASS es la tienda líder en Rosario especializada en saxofones e instrumentos de viento. Ofrecemos asesoramiento profesional, compra, venta, canje y consignaciones, con atención personalizada y productos de alta calidad.</p>
              <a href="/contacto" className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full md:w-auto text-center mt-2">Contactar</a>
            </div>
            {/* Imagen y mapa */}
            <div className="flex flex-col gap-6 items-center">
              <Image src="/drbrass-tienda.jpg" alt="Tienda DR BRASS Rosario" width={600} height={256} className="w-full h-64 object-cover rounded shadow-dr border-2 border-drgold" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.858232993857!2d-60.66222268481344!3d-32.95072608092937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sDR%20BRASS%20Rosario!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="180"
                style={{ border: "0", borderRadius: "0.5rem", boxShadow: "0 4px 24px 0 rgba(212, 175, 55, 0.15)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación DR BRASS Rosario"
              ></iframe>
            </div>
          </div>
        </section>

      {/* Newsletter DR BRASS */}
      <section className="py-16 bg-drmatte text-drgray flex justify-center items-center">
        <div className="max-w-xl w-full mx-4 p-10 bg-drblack rounded shadow-dr border-2 border-drgold flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold text-center mb-4 tracking-wider uppercase">Novedades y Ofertas</h2>
          <p className="text-base text-drgray text-center mb-8">Suscríbete para enterarte de nuevos productos y ofertas exclusivas de saxos e instrumentos de viento.</p>
          <form className="w-full flex flex-col gap-4">
            <input type="email" name="email" required placeholder="Tu email" className="px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2" />
            <button type="submit" className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full">Suscribirme</button>
          </form>
        </div>
      </section>
    </main>
  );
}


