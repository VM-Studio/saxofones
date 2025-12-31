import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-white shadow-md dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-yellow-700 tracking-tight">SaxoShop</span>
      </div>
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/productos">Productos</Link>
        </li>
        <li>
          <Link href="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
        <li>
          <Link href="/carrito">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
}
