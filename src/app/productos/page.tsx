"use client"
import React, { useState } from "react";
import Image from "next/image";

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
  // Paginación simple
  const pageSize = 2;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(productos.length / pageSize);
  const paginated = productos.slice((page - 1) * pageSize, page * pageSize);

  return (
  <main className="max-w-6xl mx-auto py-10 px-2 sm:px-6 bg-drmatte">
  <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-4 tracking-wider uppercase">Catálogo de Instrumentos</h1>
  <h2 className="text-xl md:text-2xl font-serif text-drgold text-center mb-10">Descubre nuestra selección premium de saxofones y vientos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginated.map((producto) => (
          <div key={producto.slug} className="card p-6 sm:p-8 flex flex-col items-center transition-transform hover:scale-105 bg-drblack rounded shadow-dr border-2 border-drgold">
            <Image src={producto.imagen} alt={producto.nombre} width={180} height={180} className="mb-6 rounded bg-drblack p-2 border-2 border-drgold object-contain w-full max-w-45" />
            <h2 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide text-center">{producto.nombre}</h2>
            <p className="text-base text-drgray mb-4 text-center">{producto.descripcion}</p>
            <span className="text-lg font-bold text-drgold mb-4">{producto.precio}</span>
            <a href="https://www.mercadolibre.com.ar/" target="_blank" rel="noopener" className="btn px-6 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full text-center">Comprar en Mercado Libre</a>
          </div>
        ))}
      </div>
      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="btn px-4 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full sm:w-auto"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >Anterior</button>
        <span className="text-drgold font-serif text-lg">Página {page} de {totalPages}</span>
        <button
          className="btn px-4 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full sm:w-auto"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >Siguiente</button>
      </div>
      {/* Newsletter al final */}
      <section className="py-10 flex justify-center items-center">
        <div className="max-w-xl w-full mx-4 p-6 sm:p-10 bg-drblack rounded shadow-dr border-2 border-drgold flex flex-col items-center">
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
