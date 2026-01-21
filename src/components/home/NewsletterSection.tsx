"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simular envío - aquí conectarías con tu servicio de email
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-24 pb-0 bg-cream relative overflow-hidden">
      
      <div className="max-w-2xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <span className="inline-block text-brown text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            NEWSLETTER
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mt-2 mb-4 tracking-tight">
            Mantente al día con Novedades y Ofertas
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              disabled={status === "loading" || status === "success"}
              className="flex-1 px-6 py-4 bg-white border-2 border-brown text-brown-dark placeholder-brown-light focus:outline-none focus:border-gold transition-all disabled:opacity-50 font-medium"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-white font-bold border-2 border-gold hover:shadow-elegant-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? "Enviando..." : status === "success" ? "✓ ¡Suscrito!" : "Suscribirme"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-gold text-sm mt-6 bg-white/90 backdrop-blur-sm rounded-lg py-3 px-4 animate-fade-in border border-gold/30">
              ✨ ¡Gracias por suscribirte! Recibirás nuestras novedades pronto.
            </p>
          )}

          <p className="text-brown-light text-xs mt-6">
            Sin spam. Solo contenido de valor. Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
