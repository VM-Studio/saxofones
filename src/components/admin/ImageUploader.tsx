/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  required?: boolean;
}

export function ImageUploader({ value, onChange, label = 'Imagen', required = false }: ImageUploaderProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        onChange(result.data.url);
      } else {
        setError(result.error || 'Error al subir la imagen');
      }
    } catch (err: any) {
      setError(err.message || 'Error al subir la imagen');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleUpload(file);
    } else {
      setError('Por favor, suelta solo archivos de imagen');
    }
  };

  const handleRemove = () => {
    onChange('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-zinc-300 text-sm font-medium">
        {label} {required && '*'}
      </label>

      {value ? (
        // Preview de imagen
        <div className="relative">
          <div className="relative aspect-video w-full max-w-md bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
            <Image
              src={value}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={value}
              readOnly
              className="flex-1 bg-zinc-700 text-zinc-400 text-sm px-3 py-2 rounded-lg border border-zinc-600"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        // Zona de drop/upload
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`
            relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${dragActive 
              ? 'border-amber-500 bg-amber-500/10' 
              : 'border-zinc-600 hover:border-zinc-500 bg-zinc-800/50'
            }
            ${loading ? 'pointer-events-none opacity-50' : ''}
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleFileChange}
            className="hidden"
          />

          {loading ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-zinc-400">Subiendo imagen...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <svg className="w-12 h-12 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-zinc-300 font-medium">
                  Arrastra una imagen aquí o haz clic para seleccionar
                </p>
                <p className="text-zinc-500 text-sm mt-1">
                  JPG, PNG, WebP o GIF (máx. 5MB)
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Input manual de URL como alternativa */}
      {!value && (
        <div className="flex items-center gap-2 mt-3">
          <span className="text-zinc-500 text-sm">o pegar URL:</span>
          <input
            type="url"
            placeholder="https://ejemplo.com/imagen.jpg"
            onChange={(e) => {
              if (e.target.value) {
                onChange(e.target.value);
              }
            }}
            className="flex-1 bg-zinc-700 text-white text-sm px-3 py-2 rounded-lg border border-zinc-600 focus:border-amber-500 focus:outline-none"
          />
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}