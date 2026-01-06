'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DeleteProductButtonProps {
  productId: string;
  productName: string;
}

export function DeleteProductButton({ productId, productName }: DeleteProductButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleDelete = async (hard: boolean = false) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/${productId}${hard ? '?hard=true' : ''}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        router.push('/admin/productos');
        router.refresh();
      } else {
        alert(result.error || 'Error al eliminar');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al eliminar');
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  if (showConfirm) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-zinc-800 rounded-xl p-6 max-w-md w-full mx-4 border border-zinc-700">
          <h3 className="text-xl font-bold text-white mb-4">¿Eliminar producto?</h3>
          <p className="text-zinc-300 mb-6">
            ¿Estás seguro que deseas eliminar <strong>"{productName}"</strong>?
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleDelete(false)}
              disabled={loading}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? 'Eliminando...' : 'Desactivar (Soft Delete)'}
            </button>
            <button
              onClick={() => handleDelete(true)}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? 'Eliminando...' : 'Eliminar Permanentemente'}
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              disabled={loading}
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="bg-red-600/20 hover:bg-red-600/40 text-red-400 px-4 py-2 rounded-lg transition-colors border border-red-600/50"
    >
      Eliminar Producto
    </button>
  );
}
