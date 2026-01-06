"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/novedades", label: "Novedades" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-drblack/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-drgold font-serif font-bold text-xl tracking-wider">
              DR BRASS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="px-4 py-2 text-sm bg-drgold text-drblack font-medium hover:bg-drgold/90 transition-colors"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-800">
            <ul className="py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-4">
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 text-center bg-drgold text-drblack font-medium hover:bg-drgold/90 transition-colors"
                >
                  Contactar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
