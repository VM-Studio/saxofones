"use client";
import { create } from "zustand";

interface Producto {
  slug: string;
  nombre: string;
  precio: string;
  imagen: string;
}

interface CartState {
  items: Producto[];
  add: (producto: Producto) => void;
  remove: (slug: string) => void;
  clear: () => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  add: (producto) => set((state) => ({ items: [...state.items, producto] })),
  remove: (slug) => set((state) => {
    const idx = state.items.findIndex((p) => p.slug === slug);
    if (idx === -1) return { items: state.items };
    const newItems = [...state.items];
    newItems.splice(idx, 1);
    return { items: newItems };
  }),
  clear: () => set({ items: [] }),
}));
