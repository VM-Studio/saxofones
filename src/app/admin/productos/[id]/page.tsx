import { notFound } from 'next/navigation';
import { ProductForm } from '../ProductForm';
import { getProductById } from '@/actions/products';
import { CATEGORIAS, CONDICIONES } from '@/types/product';
import { DeleteProductButton } from './DeleteProductButton';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: PageProps) {
  const { id } = await params;
  
  const result = await getProductById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Editar Producto</h1>
        <DeleteProductButton productId={id} productName={result.data.nombre} />
      </div>
      <ProductForm
        product={result.data}
        categorias={CATEGORIAS}
        condiciones={CONDICIONES}
      />
    </div>
  );
}
