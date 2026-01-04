
import Image from "next/image";

export default function SobreNosotros() {
  return (
    <main className="min-h-screen w-full bg-drblack py-16 px-4 text-drgray">
      <div className="flex flex-col items-center mb-10">
        <Image src="/drbrass-tienda.jpg" alt="Tienda DR BRASS Rosario" width={600} height={256} className="mb-6 rounded shadow-dr border-2 border-drgold" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-6 tracking-wider uppercase">Sobre Nosotros</h1>
        <p className="text-lg font-sans mb-8 text-center max-w-2xl">DR BRASS es la tienda líder en Rosario especializada en saxofones e instrumentos de viento. Ofrecemos asesoramiento profesional, compra, venta, canje y consignaciones, con atención personalizada y productos de alta calidad.</p>
      </div>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 items-center">
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
        <a href="/contacto" className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full md:w-auto text-center mt-2">Contactar</a>
      </div>
    </main>
  );
}
