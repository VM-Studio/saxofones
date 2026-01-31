

"use client";
import { useCart } from "../_store/cart";
import Link from "next/link";
import Image from "next/image";


import { useMemo } from "react";

export default function Carrito() {
  const { items, remove, clear } = useCart();
  const carritoVacio = items.length === 0;

  // Calcular total
  const total = useMemo(() => {
    return items.reduce((acc, item) => {
      // Extraer número de precio
      const num = Number(item.precio.replace(/[^\d.]/g, ""));
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
  }, [items]);

  return (
  <main className="w-full min-h-screen bg-white py-16 px-2 md:px-8">
      <h1 className="text-4xl font-extrabold text-black mb-8 text-center font-serif">Carrito de Compras</h1>
      {carritoVacio ? (
        <div className="text-center text-zinc-700">
          <p className="mb-6">Tu carrito está vacío.</p>
          <Link href="/productos" className="px-8 py-3 bg-[#7c6043] text-white rounded-lg font-semibold text-lg hover:bg-yellow-700 transition">Ver productos</Link>
        </div>
      ) : (
  <div className="w-full flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Lista de productos */}
          <div className="flex-1 min-w-[320px]">
            <div className="flex flex-col gap-8 mb-8">
              {items.map((item) => (
                <div key={item.slug} className="flex items-center gap-6 bg-[#eee9e1]/80 rounded-lg shadow p-6 w-full border border-[#e0d6c8]">
                  <Image src={item.imagen} alt={item.nombre} width={80} height={80} className="rounded bg-[#eee9e1]" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#7c6043] text-lg truncate">{item.nombre}</div>
                    <div className="text-zinc-700">{item.precio}</div>
                  </div>
                  <button onClick={() => remove(item.slug)} className="p-3 border-2 border-red-500 text-red-500 bg-transparent rounded-md hover:bg-red-50 transition flex items-center justify-center" aria-label="Eliminar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 11v6m4-6v6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button onClick={clear} className="mt-2 px-6 py-2 bg-[#7c6043] text-white rounded-md font-semibold hover:bg-yellow-700 transition shadow">Vaciar carrito</button>
          </div>
          {/* Resumen y acciones */}
          <div className="w-full max-w-md bg-[#eee9e1]/80 rounded-lg shadow-lg p-8 flex flex-col gap-6 border border-[#e0d6c8]">
            <div>
              <h2 className="text-2xl font-extrabold text-black mb-2 font-serif">Resumen de compra</h2>
              <div className="flex justify-between text-lg mb-1">
                <span>Productos:</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total a pagar:</span>
                <span>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })} USD</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#7c6043] mb-2">Métodos de pago</h3>
              <ul className="list-disc pl-6 text-zinc-700 text-base">
                <li>Transferencia bancaria</li>
                <li>Mercado Pago</li>
                <li>Tarjeta de crédito/débito</li>
                <li>Efectivo (retiro en tienda)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/5493413814852" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.69.97.99-3.59-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                Consultar por WhatsApp
              </a>
              <a href="mailto:info@saxoshop.com" className="flex items-center justify-center gap-2 px-4 py-2 bg-[#7c6043] text-white rounded-lg font-semibold hover:bg-yellow-700 transition">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-8.97 7.03a2 2 0 0 1-2.46 0L2 6"/></svg>
                Consultar por Email
              </a>
            </div>
            <div className="text-xs text-zinc-500 mt-2">
              <p>¿Tienes dudas sobre tu compra? Contáctanos por WhatsApp o email y te asesoramos personalmente.</p>
              <p className="mt-1">Los precios incluyen IVA. La compra no se considera final hasta que se confirme el pago.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
