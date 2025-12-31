import Image from "next/image";
import Link from "next/link";

const productos = [
  {
    slug: "yamaha-yas-280",
    nombre: "Saxofón Alto Yamaha YAS-280",
    descripcion: "Ideal para principiantes y estudiantes. Sonido brillante y fácil digitación.",
    precio: "$1,200 USD",
  imagen: "/saxo1.png",
  },
  {
    slug: "selmer-paris",
    nombre: "Saxofón Tenor Selmer Paris",
    descripcion: "El favorito de los profesionales. Sonido profundo y construcción premium.",
    precio: "$3,500 USD",
  imagen: "/saxo2.png",
  },
  {
    slug: "yanagisawa-soprano",
    nombre: "Saxofón Soprano Yanagisawa",
    descripcion: "Perfecto para jazzistas. Sonido claro y gran proyección.",
    precio: "$2,800 USD",
  imagen: "/saxo3.png",
  },
];

export default function Productos() {
  return (
  <main className="max-w-6xl mx-auto py-16 px-6 bg-white">
      <h1 className="text-5xl font-extrabold text-black mb-12 text-center font-serif">Catálogo de Saxofones</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <div key={producto.slug} className="bg-[#eee9e1] rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#e0d6c8] transition-transform hover:-translate-y-2">
            <Image src={producto.imagen} alt={producto.nombre} width={160} height={160} className="mb-6 rounded-lg bg-white p-2" />
            <h2 className="text-lg font-bold mb-1 text-black font-serif">{producto.nombre}</h2>
            <p className="text-sm text-gray-700 mb-3 text-center">{producto.descripcion}</p>
            <span className="text-base font-bold text-yellow-800 mb-3">{producto.precio}</span>
            <Link href={`/productos/${producto.slug}`} className="px-4 py-2 bg-[#7c6043] text-white rounded font-medium hover:bg-[#5d4630] transition-colors text-sm">Ver detalles</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
