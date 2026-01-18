import Image from "next/image";
import Link from "next/link";

export default function Nosotros() {
  return (
    <main className="w-full bg-drblack py-6 sm:py-10 px-2 sm:px-4 text-drgray flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-4 sm:mb-6 tracking-wider uppercase px-4">Sobre Nosotros</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-drgold text-center mb-6 sm:mb-8 px-4">DR BRASS Rosario - Saxofones e instrumentos de viento</h2>
      <div className="w-full max-w-2xl flex flex-col gap-4 sm:gap-6 items-center px-4">
        <Image src="/drbrass-tienda.jpg" alt="Tienda DR BRASS Rosario" width={600} height={256} className="w-full h-auto mb-4 sm:mb-6 rounded shadow-dr border-2 border-drgold object-cover" />
        <p className="text-base sm:text-lg font-sans mb-4 text-center leading-relaxed">DR BRASS es la tienda líder en Rosario especializada en saxofones e instrumentos de viento. Ofrecemos asesoramiento profesional, compra, venta, canje y consignaciones, con atención personalizada y productos de alta calidad.</p>
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
        <Link href="/contacto" className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-bold border-2 border-drgold text-black bg-drgold hover:bg-gold-dark transition-colors w-full sm:w-auto text-center mt-4 inline-block">
          Contactar
        </Link>
      </div>
    </main>
  );
}
