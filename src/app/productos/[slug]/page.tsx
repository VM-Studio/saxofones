
"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../_store/cart";

const productos = [
  {
    slug: "yamaha-yas-280",
    nombre: "Saxofón Alto Yamaha YAS-280",
    descripcion: "Ideal para principiantes y estudiantes. Sonido brillante y fácil digitación.",
    precio: "$1,200 USD",
    imagen: "/saxofon1.png",
    detalles: "Incluye estuche rígido, boquilla y accesorios. Garantía de 2 años.",
  },
  {
    slug: "selmer-paris",
    nombre: "Saxofón Tenor Selmer Paris",
    descripcion: "El favorito de los profesionales. Sonido profundo y construcción premium.",
    precio: "$3,500 USD",
    imagen: "/saxofon2.png",
    detalles: "Fabricado en Francia. Incluye estuche de lujo y boquilla profesional.",
  },
  {
    slug: "yanagisawa-soprano",
    nombre: "Saxofón Soprano Yanagisawa",
    descripcion: "Perfecto para jazzistas. Sonido claro y gran proyección.",
    precio: "$2,800 USD",
    imagen: "/saxofon3.png",
    detalles: "Acabado dorado. Incluye estuche y accesorios premium.",
  },
];

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Notificacion({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;
  return (
    <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
      Producto agregado exitosamente
      <button onClick={onClose} className="ml-4 text-white font-bold">×</button>
    </div>
  );
}


export default function ProductoDetalle() {
  const params = useParams();
  const [producto, setProducto] = useState<any>(null);
  const add = useCart((state) => state.add);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    if (params && typeof params.slug === "string") {
      const prod = productos.find((p) => p.slug === params.slug);
      setProducto(prod || null);
    }
  }, [params]);

  const handleAdd = () => {
    if (!producto) return;
    add({
      slug: producto.slug,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
    });
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
  };

  if (!producto) {
    return (
      <main className="max-w-2xl mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-extrabold text-yellow-800 mb-4 font-serif">Producto no encontrado</h1>
        <Link href="/productos" className="px-8 py-3 bg-[#7c6043] text-white rounded-lg font-semibold text-lg hover:bg-yellow-700 transition">Volver al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto py-16 px-4">
      <Notificacion show={showNotif} onClose={() => setShowNotif(false)} />
      <div className="flex flex-col md:flex-row gap-16 bg-white rounded-2xl shadow-lg p-12">
        {/* Lado Izquierdo: Imagen grande y miniaturas */}
        <div className="flex flex-col items-center md:w-1/2 w-full">
          <div className="w-full flex justify-center mb-4">
            <Image src={producto.imagen} alt={producto.nombre} width={400} height={400} className="rounded-xl bg-[#eee9e1] p-2 object-contain" />
          </div>
          <div className="flex gap-3 mt-2">
            {/* Miniaturas, solo una imagen por ahora */}
            <div className="w-[70px] h-[70px] rounded-lg border border-[#e0d6c8] bg-[#eee9e1] p-1 flex items-center justify-center overflow-hidden">
              <Image src={producto.imagen} alt={producto.nombre} width={60} height={60} className="object-contain" />
            </div>
          </div>
        </div>
        {/* Lado Derecho: Info y botón */}
        <div className="flex flex-col justify-center md:w-1/2 w-full">
          <h1 className="text-4xl font-extrabold text-[#7c6043] mb-4 font-serif">{producto.nombre}</h1>
          <span className="text-2xl font-bold text-yellow-700 mb-4">{producto.precio}</span>
          <p className="text-lg text-zinc-700 mb-4">{producto.descripcion}</p>
          <p className="text-base text-zinc-600 mb-8">{producto.detalles}</p>
          <button
            className="px-8 py-3 bg-[#7c6043] text-white rounded-lg font-semibold text-lg hover:bg-yellow-700 transition mb-4 shadow"
            onClick={handleAdd}
          >
            Agregar al carrito
          </button>
          <Link href="/productos" className="px-6 py-2 bg-[#eee9e1] text-[#7c6043] rounded-lg font-semibold hover:bg-yellow-100 border border-[#e0d6c8] transition w-fit">Volver al catálogo</Link>
        </div>
      </div>
    </main>
  );
}
