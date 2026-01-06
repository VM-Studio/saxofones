import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-drgold font-serif font-bold text-2xl tracking-wider">
                DR BRASS
              </span>
            </Link>
            <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
              Tienda especializada en saxofones e instrumentos de viento en Rosario. 
              Compra, venta, canje y consignaciones.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/drbrassrosario/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-drgold hover:border-drgold/50 transition-colors"
                aria-label="Instagram DR BRASS"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/punkjazzcustomshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-drgold hover:border-drgold/50 transition-colors"
                aria-label="Instagram Punk Jazz Customshop"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/2UxA9JkjiVTEqR6y7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-drgold hover:border-drgold/50 transition-colors"
                aria-label="Google Maps"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-medium mb-4">Categorías</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/productos?categoria=altos" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Saxofones Altos
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=tenores" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Saxofones Tenores
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=sopranos" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Saxofones Sopranos
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=vintages" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Vintages
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=boquillas" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Boquillas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - SEO Local */}
          <div>
            <h3 className="text-white font-medium mb-4">Contacto</h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="text-zinc-500">
                <span className="text-zinc-400">Dirección:</span><br />
                Mendoza 1234, Rosario, Santa Fe
              </p>
              <p className="text-zinc-500">
                <span className="text-zinc-400">Teléfono:</span><br />
                <a href="tel:+5493415551234" className="hover:text-white transition-colors">
                  +54 9 341 555-1234
                </a>
              </p>
              <p className="text-zinc-500">
                <span className="text-zinc-400">Email:</span><br />
                <a href="mailto:info@drbrass.com.ar" className="hover:text-white transition-colors">
                  info@drbrass.com.ar
                </a>
              </p>
              <p className="text-zinc-500">
                <span className="text-zinc-400">Horario:</span><br />
                Lun-Vie 10:00-18:00<br />
                Sáb 10:00-13:00
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">
              © {currentYear} DR BRASS Rosario. Todos los derechos reservados.
            </p>
            <p className="text-zinc-600 text-sm">
              Saxofones y vientos premium en Rosario, Santa Fe, Argentina.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
