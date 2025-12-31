import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-yellow-50 to-zinc-100 dark:from-zinc-900 dark:to-black font-sans">
      {/* Hero principal */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 leading-tight drop-shadow-lg">
            Descubre el arte de los saxofones
          </h1>
          <p className="text-xl text-zinc-700 dark:text-zinc-200 max-w-xl">
            Bienvenido a <span className="font-bold text-yellow-700">SaxoShop</span>, tu tienda online especializada en saxofones de alta calidad. Encuentra el instrumento perfecto para tu pasión musical y aprovecha nuestras ofertas exclusivas.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/productos" className="px-8 py-3 bg-yellow-700 text-white rounded-full font-semibold text-lg shadow hover:bg-yellow-800 transition">Ver Catálogo</Link>
            <Link href="/contacto" className="px-8 py-3 border-2 border-yellow-700 text-yellow-700 rounded-full font-semibold text-lg hover:bg-yellow-700 hover:text-white transition">Contacto</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/saxofon-hero.png" alt="Saxofón dorado" width={400} height={400} className="rounded-2xl shadow-2xl bg-yellow-100" />
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">Saxofones Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Producto 1 */}
            <div className="bg-yellow-50 dark:bg-zinc-800 rounded-xl shadow p-6 flex flex-col items-center">
              <Image src="/saxofon1.png" alt="Saxofón Alto" width={180} height={180} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Saxofón Alto Yamaha YAS-280</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">Ideal para principiantes y estudiantes. Sonido brillante y fácil digitación.</p>
              <span className="text-lg font-bold text-yellow-700 mb-2">$1,200 USD</span>
              <Link href="/productos/yamaha-yas-280" className="px-5 py-2 bg-yellow-700 text-white rounded-full font-medium hover:bg-yellow-800 transition">Ver más</Link>
            </div>
            {/* Producto 2 */}
            <div className="bg-yellow-50 dark:bg-zinc-800 rounded-xl shadow p-6 flex flex-col items-center">
              <Image src="/saxofon2.png" alt="Saxofón Tenor" width={180} height={180} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Saxofón Tenor Selmer Paris</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">El favorito de los profesionales. Sonido profundo y construcción premium.</p>
              <span className="text-lg font-bold text-yellow-700 mb-2">$3,500 USD</span>
              <Link href="/productos/selmer-paris" className="px-5 py-2 bg-yellow-700 text-white rounded-full font-medium hover:bg-yellow-800 transition">Ver más</Link>
            </div>
            {/* Producto 3 */}
            <div className="bg-yellow-50 dark:bg-zinc-800 rounded-xl shadow p-6 flex flex-col items-center">
              <Image src="/saxofon3.png" alt="Saxofón Soprano" width={180} height={180} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Saxofón Soprano Yanagisawa</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">Perfecto para jazzistas. Sonido claro y gran proyección.</p>
              <span className="text-lg font-bold text-yellow-700 mb-2">$2,800 USD</span>
              <Link href="/productos/yanagisawa-soprano" className="px-5 py-2 bg-yellow-700 text-white rounded-full font-medium hover:bg-yellow-800 transition">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-zinc-800 dark:to-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-6">
              <p className="text-zinc-700 dark:text-zinc-200 mb-4">“El mejor lugar para comprar saxofones, atención personalizada y productos de calidad.”</p>
              <span className="font-semibold text-yellow-700">— Juan P.</span>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-6">
              <p className="text-zinc-700 dark:text-zinc-200 mb-4">“Recibí mi saxofón en tiempo récord y en perfectas condiciones. ¡Recomendado!”</p>
              <span className="font-semibold text-yellow-700">— María L.</span>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-6">
              <p className="text-zinc-700 dark:text-zinc-200 mb-4">“Gran variedad y precios competitivos. Volveré a comprar.”</p>
              <span className="font-semibold text-yellow-700">— Carlos G.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de publicidad y llamada a la acción */}
      <section className="py-16 bg-yellow-700">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 px-6">
          <h2 className="text-3xl font-bold text-white text-center">¿Listo para llevar tu música al siguiente nivel?</h2>
          <p className="text-lg text-yellow-100 text-center">Aprovecha nuestras promociones por tiempo limitado y recibe asesoría personalizada para elegir tu saxofón ideal.</p>
          <Link href="/productos" className="px-10 py-4 bg-white text-yellow-800 rounded-full font-bold text-xl shadow-lg hover:bg-yellow-100 transition">Comprar ahora</Link>
        </div>
      </section>
    </main>
  );
}


