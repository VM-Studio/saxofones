'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Product, CreateProductInput, CATEGORIAS, CONDICIONES } from '@/types/product';

interface ProductFormProps {
  product?: Product;
  categorias: typeof CATEGORIAS;
  condiciones: typeof CONDICIONES;
}

export function ProductForm({ product, categorias, condiciones }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estado del formulario
  const [formData, setFormData] = useState<Partial<CreateProductInput>>({
    nombre: product?.nombre || '',
    slug: product?.slug || '',
    descripcion: product?.descripcion || '',
    descripcionCorta: product?.descripcionCorta || '',
    precio: product?.precio || 0,
    moneda: product?.moneda || 'USD',
    precioAnterior: product?.precioAnterior || undefined,
    categoria: product?.categoria || 'altos',
    subcategoria: product?.subcategoria || '',
    marca: product?.marca || '',
    modelo: product?.modelo || '',
    condicion: product?.condicion || 'nuevo',
    año: product?.año || undefined,
    imagenPrincipal: product?.imagenPrincipal || '',
    imagenes: product?.imagenes || [],
    mercadoLibreUrl: product?.mercadoLibreUrl || '',
    caracteristicas: product?.caracteristicas || [],
    metaTitle: product?.metaTitle || '',
    metaDescription: product?.metaDescription || '',
    tags: product?.tags || [],
    destacado: product?.destacado || false,
    activo: product?.activo ?? true,
    stock: product?.stock || 1,
  });

  // Estado para características dinámicas
  const [newCaracteristica, setNewCaracteristica] = useState({ clave: '', valor: '' });

  // Estado para tags
  const [newTag, setNewTag] = useState('');

  // Estado para imágenes adicionales
  const [newImagen, setNewImagen] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (type === 'number') {
      setFormData((prev) => ({
        ...prev,
        [name]: value === '' ? undefined : parseFloat(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addCaracteristica = () => {
    if (newCaracteristica.clave && newCaracteristica.valor) {
      setFormData((prev) => ({
        ...prev,
        caracteristicas: [...(prev.caracteristicas || []), newCaracteristica],
      }));
      setNewCaracteristica({ clave: '', valor: '' });
    }
  };

  const removeCaracteristica = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      caracteristicas: prev.caracteristicas?.filter((_, i) => i !== index),
    }));
  };

  const addTag = () => {
    if (newTag && !formData.tags?.includes(newTag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag],
      }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tag),
    }));
  };

  const addImagen = () => {
    if (newImagen && !formData.imagenes?.includes(newImagen)) {
      setFormData((prev) => ({
        ...prev,
        imagenes: [...(prev.imagenes || []), newImagen],
      }));
      setNewImagen('');
    }
  };

  const removeImagen = (url: string) => {
    setFormData((prev) => ({
      ...prev,
      imagenes: prev.imagenes?.filter((img) => img !== url),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = product?._id
        ? `/api/products/${product._id}`
        : '/api/products';
      const method = product?._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        router.push('/admin/productos');
        router.refresh();
      } else {
        setError(result.error || 'Error al guardar el producto');
      }
    } catch (err: any) {
      setError(err.message || 'Error al guardar el producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Información Básica */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Información Básica</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Nombre *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Slug (URL)
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Se genera automáticamente si está vacío"
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Marca *
            </label>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Descripción Corta * (para cards)
          </label>
          <input
            type="text"
            name="descripcionCorta"
            value={formData.descripcionCorta}
            onChange={handleChange}
            required
            maxLength={300}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
          <p className="text-zinc-500 text-sm mt-1">
            {formData.descripcionCorta?.length || 0}/300 caracteres
          </p>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Descripción Completa *
          </label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Categorización y Estado */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Categorización</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Categoría *
            </label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            >
              {categorias.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Subcategoría
            </label>
            <input
              type="text"
              name="subcategoria"
              value={formData.subcategoria}
              onChange={handleChange}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Condición *
            </label>
            <select
              name="condicion"
              value={formData.condicion}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            >
              {condiciones.map((cond) => (
                <option key={cond.value} value={cond.value}>
                  {cond.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Año (para vintages)
            </label>
            <input
              type="number"
              name="año"
              value={formData.año || ''}
              onChange={handleChange}
              min={1800}
              max={new Date().getFullYear() + 1}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Precios */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Precios</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Precio *
            </label>
            <input
              type="number"
              name="precio"
              value={formData.precio || ''}
              onChange={handleChange}
              required
              min={0}
              step={0.01}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Moneda
            </label>
            <select
              name="moneda"
              value={formData.moneda}
              onChange={handleChange}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            >
              <option value="USD">USD</option>
              <option value="ARS">ARS</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Precio Anterior (descuento)
            </label>
            <input
              type="number"
              name="precioAnterior"
              value={formData.precioAnterior || ''}
              onChange={handleChange}
              min={0}
              step={0.01}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock || ''}
              onChange={handleChange}
              min={0}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Imágenes */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Imágenes</h2>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Imagen Principal * (URL)
          </label>
          <input
            type="url"
            name="imagenPrincipal"
            value={formData.imagenPrincipal}
            onChange={handleChange}
            required
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Imágenes Adicionales
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="url"
              value={newImagen}
              onChange={(e) => setNewImagen(e.target.value)}
              placeholder="https://ejemplo.com/imagen.jpg"
              className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={addImagen}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Agregar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.imagenes?.map((url) => (
              <div
                key={url}
                className="flex items-center gap-2 bg-zinc-700 px-3 py-1 rounded-full text-sm text-zinc-200"
              >
                <span className="truncate max-w-[200px]">{url}</span>
                <button
                  type="button"
                  onClick={() => removeImagen(url)}
                  className="text-red-400 hover:text-red-300"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enlaces Externos */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Enlaces Externos</h2>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Link de Mercado Libre
          </label>
          <input
            type="url"
            name="mercadoLibreUrl"
            value={formData.mercadoLibreUrl}
            onChange={handleChange}
            placeholder="https://www.mercadolibre.com.ar/..."
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Características */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Características Técnicas</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newCaracteristica.clave}
            onChange={(e) =>
              setNewCaracteristica((prev) => ({ ...prev, clave: e.target.value }))
            }
            placeholder="Ej: Material"
            className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
          <input
            type="text"
            value={newCaracteristica.valor}
            onChange={(e) =>
              setNewCaracteristica((prev) => ({ ...prev, valor: e.target.value }))
            }
            placeholder="Ej: Latón"
            className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={addCaracteristica}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Agregar
          </button>
        </div>

        <div className="space-y-2">
          {formData.caracteristicas?.map((car, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-zinc-700 px-4 py-2 rounded-lg"
            >
              <span className="text-zinc-200">
                <strong>{car.clave}:</strong> {car.valor}
              </span>
              <button
                type="button"
                onClick={() => removeCaracteristica(index)}
                className="text-red-400 hover:text-red-300"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SEO */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">SEO</h2>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Meta Title (máx. 70 caracteres)
          </label>
          <input
            type="text"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            maxLength={70}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
          <p className="text-zinc-500 text-sm mt-1">
            {formData.metaTitle?.length || 0}/70 caracteres
          </p>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Meta Description (máx. 160 caracteres)
          </label>
          <textarea
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            maxLength={160}
            rows={2}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none resize-none"
          />
          <p className="text-zinc-500 text-sm mt-1">
            {formData.metaDescription?.length || 0}/160 caracteres
          </p>
        </div>

        <div>
          <label className="block text-zinc-300 text-sm font-medium mb-2">
            Tags
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Agregar tag..."
              className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            />
            <button
              type="button"
              onClick={addTag}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Agregar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags?.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 bg-zinc-700 px-3 py-1 rounded-full text-sm text-zinc-200"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-red-400 hover:text-red-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Control */}
      <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
        <h2 className="text-xl font-bold text-white mb-4">Control</h2>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="destacado"
              checked={formData.destacado}
              onChange={handleChange}
              className="w-5 h-5 rounded border-zinc-600 text-amber-500 focus:ring-amber-500"
            />
            <span className="text-zinc-200">Producto Destacado</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="activo"
              checked={formData.activo}
              onChange={handleChange}
              className="w-5 h-5 rounded border-zinc-600 text-amber-500 focus:ring-amber-500"
            />
            <span className="text-zinc-200">Activo (visible en tienda)</span>
          </label>
        </div>
      </div>

      {/* Botones */}
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Guardando...' : product?._id ? 'Actualizar Producto' : 'Crear Producto'}
        </button>
      </div>
    </form>
  );
}
