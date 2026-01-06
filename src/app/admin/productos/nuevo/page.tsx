import { ProductForm } from '../ProductForm';
import { CATEGORIAS, CONDICIONES } from '@/types/product';

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Nuevo Producto</h1>
      <ProductForm categorias={CATEGORIAS} condiciones={CONDICIONES} />
    </div>
  );
}
