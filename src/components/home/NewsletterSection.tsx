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
    <section className="py-24 pb-0 bg-gradient-to-br from-brown-dark via-brown to-brown-dark relative overflow-hidden">
      {/* Decoradores de fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-2xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-4 tracking-tight">
            Novedades y Ofertas
          </h2>
          <p className="text-cream text-lg mb-10 leading-relaxed">
            Suscríbete para enterarte de nuevos productos y ofertas exclusivas de saxos e instrumentos de viento.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              disabled={status === "loading" || status === "success"}
              className="flex-1 px-6 py-4 bg-white/95 backdrop-blur-sm border-2 border-black text-brown-dark placeholder-brown-light focus:outline-none focus:border-black transition-all disabled:opacity-50 font-medium"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-black font-bold border-2 border-black hover:shadow-elegant-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transform hover:-translate-y-1"
            >
              {status === "loading" ? "Enviando..." : status === "success" ? "✓ ¡Suscrito!" : "Suscribirme"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-gold-light text-sm mt-6 bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4 animate-fade-in">
              ✨ ¡Gracias por suscribirte! Recibirás nuestras novedades pronto.
            </p>
          )}

          <p className="text-cream/70 text-xs mt-6">
            Sin spam. Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
