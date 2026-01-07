/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface MultiImageUploaderProps {
  value: string[];
  onChange: (urls: string[]) => void;
  label?: string;
  maxImages?: number;
}

export function MultiImageUploader({ 
  value, 
  onChange, 
  label = 'Imágenes adicionales',
  maxImages = 10 
}: MultiImageUploaderProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [manualUrl, setManualUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (files: FileList) => {
    if (value.length + files.length > maxImages) {
      setError(`Máximo ${maxImages} imágenes permitidas`);
      return;
    }

    setLoading(true);
    setError(null);

    const newUrls: string[] = [];

    for (const file of Array.from(files)) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          newUrls.push(result.data.url);
        } else {
          setError(result.error || `Error al subir ${file.name}`);
        }
      } catch (err: any) {
        setError(err.message || `Error al subir ${file.name}`);
      }
    }

    if (newUrls.length > 0) {
      onChange([...value, ...newUrls]);
    }

    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleUpload(files);
    }
    // Reset input
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleRemove = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  const handleAddManualUrl = () => {
    if (manualUrl && !value.includes(manualUrl)) {
      if (value.length >= maxImages) {
        setError(`Máximo ${maxImages} imágenes permitidas`);
        return;
      }
      onChange([...value, manualUrl]);
      setManualUrl('');
    }
  };

  const handleReorder = (fromIndex: number, toIndex: number) => {
    const newValue = [...value];
    const [removed] = newValue.splice(fromIndex, 1);
    newValue.splice(toIndex, 0, removed);
    onChange(newValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-zinc-300 text-sm font-medium">
          {label}
        </label>
        <span className="text-zinc-500 text-sm">
          {value.length}/{maxImages}
        </span>
      </div>

      {/* Grid de imágenes */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {value.map((url, index) => (
            <div
              key={url + index}
              className="relative group aspect-square bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700"
            >
              <Image
                src={url}
                alt={`Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
              {/* Overlay con acciones */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleReorder(index, index - 1)}
                    className="p-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
                    title="Mover a la izquierda"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  title="Eliminar"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                {index < value.length - 1 && (
                  <button
                    type="button"
                    onClick={() => handleReorder(index, index + 1)}
                    className="p-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
                    title="Mover a la derecha"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
              {/* Número de orden */}
              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Botón para agregar más */}
      {value.length < maxImages && (
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={loading}
            className={`
              flex items-center justify-center gap-2 w-full p-4 border-2 border-dashed rounded-lg transition-colors
              ${loading 
                ? 'border-zinc-700 bg-zinc-800/50 cursor-not-allowed' 
                : 'border-zinc-600 hover:border-amber-500 hover:bg-amber-500/10 cursor-pointer'
              }
            `}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-zinc-400">Subiendo...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-zinc-400">Agregar imágenes</span>
              </>
            )}
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Input manual de URL */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-sm whitespace-nowrap">o pegar URL:</span>
            <input
              type="url"
              value={manualUrl}
              onChange={(e) => setManualUrl(e.target.value)}
              placeholder="https://ejemplo.com/imagen.jpg"
              className="flex-1 bg-zinc-700 text-white text-sm px-3 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddManualUrl())}
            />
            <button
              type="button"
              onClick={handleAddManualUrl}
              disabled={!manualUrl}
              className="px-4 py-2 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Agregar
            </button>
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}