
"use client";
import Link from "next/link";
import { useCart } from "./_store/cart";

export default function Navbar() {
  const items = useCart((state) => state.items);
  return (
    <nav className="w-full flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 px-2 sm:px-8 bg-[#eee9e1] shadow-md">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
        <span className="text-xl sm:text-2xl font-bold text-[#7c6043] tracking-tight">SaxoShop</span>
      </div>
      <ul className="flex gap-4 sm:gap-8 text-base sm:text-lg font-medium font-serif overflow-x-auto whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start">
        <li>
          <Link href="/" className="text-black hover:underline">Inicio</Link>
        </li>
        <li>
          <Link href="/productos" className="text-black hover:underline">Productos</Link>
        </li>

        <li>
          <Link href="/contacto" className="text-black hover:underline">Contacto</Link>
        </li>
        <li className="relative">
          <Link href="/carrito" className="text-black hover:text-yellow-700 transition-colors flex items-center" aria-label="Carrito">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .96.343 1.09.835l.272 1.02M7.5 14.25A3.75 3.75 0 0 0 11.25 18h3a3.75 3.75 0 0 0 3.75-3.75V6.75A1.5 1.5 0 0 0 16.5 5.25h-9a1.5 1.5 0 0 0-1.5 1.5v7.5z" />
              <circle cx="9" cy="20" r="1.25" />
              <circle cx="15" cy="20" r="1.25" />
            </svg>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
