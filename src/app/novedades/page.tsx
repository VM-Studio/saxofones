"use client";

import { useState } from "react";

export default function Novedades() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simular envío
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <main className="w-full bg-gradient-to-br from-cream via-ivory to-cream-dark relative overflow-hidden">
      {/* Decoradores de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 lg:py-20">
        <div className="text-center mb-12">
          {/* Badge superior */}
          <span className="inline-block text-brown text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gold/10 px-4 py-1.5 mb-6">
            Newsletter
          </span>
          
          {/* Título principal */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-dark mb-6 tracking-tight leading-tight px-4">
            Mantente al día con
            <span className="block text-gold mt-2">Novedades y Ofertas</span>
          </h1>
          
          {/* Línea decorativa */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
        </div>

        {/* Formulario elegante */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="p-8 md:p-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 bg-white border-2 border-black text-brown-dark placeholder-brown-light focus:outline-none focus:border-black transition-all disabled:opacity-50 font-medium"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-10 py-4 bg-brown hover:bg-brown-dark text-cream font-semibold border-2 border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-md hover:shadow-lg"
              >
                {status === "loading" ? "Enviando..." : status === "success" ? "✓ ¡Suscrito!" : "Suscribirme"}
              </button>
            </div>

            {status === "success" && (
              <p className="text-gold text-sm mt-6 bg-gold/10 py-3 px-4 animate-fade-in text-center">
                ✓ ¡Gracias por suscribirte! Recibirás nuestras novedades pronto.
              </p>
            )}

            <p className="text-sm text-brown/70 mt-6 text-center">
              Sin spam. Solo contenido de valor. Puedes darte de baja cuando quieras.
            </p>
          </div>
        </form>

        {/* Beneficios */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 text-gold mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-brown-dark font-bold text-lg mb-2">Ofertas Exclusivas</h3>
            <p className="text-brown text-sm">Descuentos especiales solo para suscriptores</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 text-gold mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-brown-dark font-bold text-lg mb-2">Nuevos Productos</h3>
            <p className="text-brown text-sm">Entérate primero de nuestros nuevos instrumentos</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 text-gold mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-brown-dark font-bold text-lg mb-2">Consejos Expertos</h3>
            <p className="text-brown text-sm">Tips y recomendaciones de profesionales</p>
          </div>
        </div>
      </div>
    </main>
  );
}
