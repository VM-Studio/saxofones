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
    <section className="py-20 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-2xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <span className="text-drgold/80 text-sm font-medium tracking-[0.2em] uppercase">
            Mantente informado
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-drgold mt-2 mb-4 uppercase tracking-wide">
            Novedades y Ofertas
          </h2>
          <p className="text-zinc-400 mb-8">
            Suscríbete para enterarte de nuevos productos y ofertas exclusivas de saxos e instrumentos de viento.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Tu email"
              disabled={status === "loading" || status === "success"}
              className="flex-1 px-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-drgold/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-8 py-4 bg-drgold text-drblack font-medium hover:bg-drgold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirme"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-green-500 text-sm mt-4">
              ¡Gracias por suscribirte! Recibirás nuestras novedades pronto.
            </p>
          )}

          <p className="text-zinc-600 text-xs mt-4">
            Sin spam. Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
