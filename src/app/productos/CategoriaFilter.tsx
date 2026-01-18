"use client";

import { CATEGORIAS } from '@/types/product';
import { useRouter, useSearchParams } from 'next/navigation';

export function CategoriaFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoriaActual = searchParams.get('categoria') || '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      router.push(`/productos?categoria=${value}`);
    } else {
      router.push('/productos');
    }
  };

  return (
    <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
      <label htmlFor="categoria-filter" className="text-brown-dark text-sm font-semibold whitespace-nowrap">
        Filtrar:
      </label>
      <select
        id="categoria-filter"
        value={categoriaActual}
        onChange={handleChange}
        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 text-sm font-medium text-brown-dark bg-cream border-2 border-brown focus:border-gold focus:outline-none transition-all cursor-pointer"
      >
        <option value="">Todos los productos</option>
        {CATEGORIAS.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
}
