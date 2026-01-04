
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-drblack border-b-2 border-drgold shadow-dr">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:py-5">
        {/* Logo / Título */}
        {/* Logo/título eliminado por pedido del usuario */}
        {/* Hamburguesa móvil */}
        <button className="sm:hidden flex flex-col justify-center items-center w-10 h-10 absolute right-4 top-4" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <span className={`block w-7 h-1 bg-drgold rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-drgold rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-drgold rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Links desktop */}
        <ul className="hidden sm:flex gap-8 text-lg font-serif font-bold text-drgold items-center justify-center w-full">
          <li><Link href="/" className="px-4 py-2 rounded hover:bg-drmatte hover:text-drblack transition-colors">Inicio</Link></li>
          <li><Link href="/productos" className="px-4 py-2 rounded hover:bg-drmatte hover:text-drblack transition-colors">Productos</Link></li>
          <li><Link href="/nosotros" className="px-4 py-2 rounded hover:bg-drmatte hover:text-drblack transition-colors">Nosotros</Link></li>
          <li><Link href="/novedades" className="px-4 py-2 rounded hover:bg-drmatte hover:text-drblack transition-colors">Novedades</Link></li>
          <li><Link href="/contacto" className="px-4 py-2 rounded hover:bg-drmatte hover:text-drblack transition-colors">Contacto</Link></li>
        </ul>
      </div>
      {/* Menú móvil */}
      {open && (
        <ul className="sm:hidden flex flex-col gap-2 px-6 pb-4 text-lg font-serif font-bold text-drgold bg-drblack border-b-2 border-drgold shadow-dr animate-fade-in">
          <li><Link href="/" className="block px-4 py-3 rounded hover:bg-drmatte hover:text-drblack transition-colors text-center" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link href="/productos" className="block px-4 py-3 rounded hover:bg-drmatte hover:text-drblack transition-colors text-center" onClick={() => setOpen(false)}>Productos</Link></li>
          <li><Link href="/nosotros" className="block px-4 py-3 rounded hover:bg-drmatte hover:text-drblack transition-colors text-center" onClick={() => setOpen(false)}>Nosotros</Link></li>
          <li><Link href="/novedades" className="block px-4 py-3 rounded hover:bg-drmatte hover:text-drblack transition-colors text-center" onClick={() => setOpen(false)}>Novedades</Link></li>
          <li><Link href="/contacto" className="block px-4 py-3 rounded hover:bg-drmatte hover:text-drblack transition-colors text-center" onClick={() => setOpen(false)}>Contacto</Link></li>
        </ul>
      )}
    </nav>
  );
}
