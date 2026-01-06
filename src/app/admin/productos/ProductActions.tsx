'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductActionsProps {
  productId: string;
  type: 'featured' | 'active';
  currentValue: boolean;
}

export function ProductActions({ productId, type, currentValue }: ProductActionsProps) {
  const [value, setValue] = useState(currentValue);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleToggle = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/toggle/${productId}?type=${type}`, {
        method: 'POST',
      });

      const result = await response.json();

      if (result.success) {
        setValue(!value);
        router.refresh();
      } else {
        alert(result.error || 'Error al actualizar');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al actualizar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`w-12 h-6 rounded-full relative transition-colors ${
        value ? 'bg-amber-500' : 'bg-zinc-600'
      } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          value ? 'left-7' : 'left-1'
        }`}
      />
    </button>
  );
}
