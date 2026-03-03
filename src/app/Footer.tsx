import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-light">
      {/* Top separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-gold font-serif font-bold text-2xl tracking-widest">
                DR BRASS
              </span>
            </Link>
            <p className="text-sm text-cream/40 leading-relaxed max-w-xs">
              Tienda especializada en saxofones e instrumentos de viento en Rosario. 
              Compra, venta, canje y consignaciones.
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/drbrassrosario/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/30 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="Instagram DR BRASS"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/punkjazzcustomshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/30 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="Instagram Punk Jazz"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/2UxA9JkjiVTEqR6y7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/30 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="Google Maps"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-5">Navegación</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/productos", label: "Productos" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/30 text-sm hover:text-cream transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-5">Servicios</h3>
            <ul className="space-y-3">
              {[
                { href: "/garantia", label: "Garantía" },
                { href: "/canjes", label: "Canjes" },
                { href: "/consignaciones", label: "Consignaciones" },
                { href: "/asesoramiento", label: "Asesoramiento" },
                { href: "/lutheria", label: "Luthería" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/30 text-sm hover:text-cream transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-5">Contacto</h3>
            <address className="not-italic space-y-4 text-sm">
              <div>
                <span className="text-cream/20 text-xs tracking-wide uppercase">Dirección</span>
                <p className="text-cream/40 mt-1">Av. San Martín 1051 local 25, S2000 Rosario, Santa Fe</p>
              </div>
              <div>
                <span className="text-cream/20 text-xs tracking-wide uppercase">Teléfono</span>
                <p className="mt-1">
                  <a href="tel:+5493413814852" className="text-cream/40 hover:text-cream transition-colors duration-200">
                    +54 9 3413 81-4852
                  </a>
                </p>
              </div>
              <div>
                <span className="text-cream/20 text-xs tracking-wide uppercase">Horario</span>
                <p className="text-cream/40 mt-1">Lun - Vie 13:00 – 18:00</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-cream/20 text-xs tracking-wide">
              © {new Date().getFullYear()} DR BRASS Rosario. Todos los derechos reservados.
            </span>
            <span className="text-cream/20 text-xs tracking-wide">
              Saxofones y vientos premium en Rosario, Argentina.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
