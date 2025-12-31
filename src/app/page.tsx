
import Image from "next/image";
import Link from "next/link";
import "./saxo-animacion.css";

export default function Home() {
  return (
  <main className="min-h-screen w-full bg-white font-sans">
      {/* Hero con fondo blanco y franja marrón beige */}
      <section className="relative min-h-screen flex items-center pt-20 pb-4 bg-white">
        {/* Franja marrón beige horizontal */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[#eee9e1] h-[55%] md:h-[60%] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Texto */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-black leading-tight">
                Llevamos tu música al siguiente nivel
              </h1>
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                En <span className="font-bold text-yellow-800">SaxoShop</span> te ayudamos a encontrar el saxofón perfecto para tu pasión. Asesoría personalizada, envíos rápidos y la mejor selección de instrumentos.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="/productos" className="inline-block bg-[#7c6043] text-white px-6 py-2.5 text-sm hover:bg-[#5d4630] transition-colors font-medium rounded">Ver Catálogo</Link>
                <Link href="/contacto" className="inline-block border-2 border-[#7c6043] text-[#7c6043] px-6 py-2.5 text-sm hover:bg-[#7c6043] hover:text-white transition-colors font-medium rounded">Contacto</Link>
              </div>
            </div>
            {/* Tarjeta blanca con imagen arriba */}
            <div className="relative h-[400px] lg:h-[500px] z-20 flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-xl border-2 border-[#eee9e1] w-full h-full flex flex-col items-center justify-start p-4 -mt-20">
                <div className="w-full flex justify-center mt-16">
                  <Image
                    src="/saxo.png"
                    alt="Saxofón dorado"
                    width={320}
                    height={320}
                    className="object-contain rounded-lg libro-rotar"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-black mb-12 font-serif">Saxofones Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div className="bg-[#eee9e1] rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#e0d6c8] transition-transform hover:-translate-y-2">
              <Image src="/saxo1.png" alt="Saxofón Alto" width={160} height={160} className="mb-6 rounded-lg bg-white p-2" />
              <h3 className="text-lg font-bold mb-1 text-black font-serif">Saxofón Alto Yamaha YAS-280</h3>
              <p className="text-sm text-gray-700 mb-3 text-center">Ideal para principiantes y estudiantes. Sonido brillante y fácil digitación.</p>
              <span className="text-base font-bold text-yellow-800 mb-3">$1,200 USD</span>
              <Link href="/productos/yamaha-yas-280" className="px-4 py-2 bg-[#7c6043] text-white rounded font-medium hover:bg-[#5d4630] transition-colors text-sm">Ver más</Link>
            </div>
            {/* Producto 2 */}
            <div className="bg-[#eee9e1] rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#e0d6c8] transition-transform hover:-translate-y-2">
              <Image src="/saxo2.png" alt="Saxofón Tenor" width={160} height={160} className="mb-6 rounded-lg bg-white p-2" />
              <h3 className="text-lg font-bold mb-1 text-black font-serif">Saxofón Tenor Selmer Paris</h3>
              <p className="text-sm text-gray-700 mb-3 text-center">El favorito de los profesionales. Sonido profundo y construcción premium.</p>
              <span className="text-base font-bold text-yellow-800 mb-3">$3,500 USD</span>
              <Link href="/productos/selmer-paris" className="px-4 py-2 bg-[#7c6043] text-white rounded font-medium hover:bg-[#5d4630] transition-colors text-sm">Ver más</Link>
            </div>
            {/* Producto 3 */}
            <div className="bg-[#eee9e1] rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#e0d6c8] transition-transform hover:-translate-y-2">
              <Image src="/saxo3.png" alt="Saxofón Soprano" width={160} height={160} className="mb-6 rounded-lg bg-white p-2" />
              <h3 className="text-lg font-bold mb-1 text-black font-serif">Saxofón Soprano Yanagisawa</h3>
              <p className="text-sm text-gray-700 mb-3 text-center">Perfecto para jazzistas. Sonido claro y gran proyección.</p>
              <span className="text-base font-bold text-yellow-800 mb-3">$2,800 USD</span>
              <Link href="/productos/yanagisawa-soprano" className="px-4 py-2 bg-[#7c6043] text-white rounded font-medium hover:bg-[#5d4630] transition-colors text-sm">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-[#eee9e1]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-black mb-12 font-serif">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Testimonio 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-[#e0d6c8]">
              <div className="w-16 h-16 rounded-full bg-[#7c6043] flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">JP</span>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-800 text-center mb-4 italic">“El mejor lugar para comprar saxofones, atención personalizada y productos de calidad.”</p>
              <span className="font-semibold text-[#7c6043]">— Juan P.</span>
            </div>
            {/* Testimonio 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-[#e0d6c8]">
              <div className="w-16 h-16 rounded-full bg-[#7c6043] flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">ML</span>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-800 text-center mb-4 italic">“Recibí mi saxofón en tiempo récord y en perfectas condiciones. ¡Recomendado!”</p>
              <span className="font-semibold text-[#7c6043]">— María L.</span>
            </div>
            {/* Testimonio 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-[#e0d6c8]">
              <div className="w-16 h-16 rounded-full bg-[#7c6043] flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">CG</span>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-800 text-center mb-4 italic">“Gran variedad y precios competitivos. Volveré a comprar.”</p>
              <span className="font-semibold text-[#7c6043]">— Carlos G.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de publicidad y llamada a la acción */}
      <section className="py-20 bg-[#eee9e1] flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-xl border border-[#e0d6c8] max-w-xl w-full mx-4 p-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-4 font-serif">¿Listo para llevar tu música al siguiente nivel?</h2>
          <p className="text-base text-gray-800 text-center mb-8">Aprovecha nuestras promociones por tiempo limitado y recibe asesoría personalizada para elegir tu saxofón ideal.</p>
          <Link href="/productos" className="px-8 py-3 bg-[#7c6043] text-white rounded font-bold text-lg shadow hover:bg-[#5d4630] transition">Comprar ahora</Link>
        </div>
      </section>
    </main>
  );
}


