import mongoose, { Schema, Model, Document } from 'mongoose';
import type { ProductCategory, ProductCondition } from '@/types/product';

// Interface para el documento de Mongoose
export interface IProduct extends Document {
  nombre: string;
  slug: string;
  descripcion: string;
  descripcionCorta: string;
  precio: number;
  moneda: 'USD' | 'ARS';
  precioAnterior?: number;
  categoria: ProductCategory;
  subcategoria?: string;
  marca: string;
  modelo?: string;
  condicion: ProductCondition;
  año?: number;
  imagenPrincipal: string;
  imagenes: string[];
  mercadoLibreUrl?: string;
  caracteristicas: { clave: string; valor: string }[];
  metaTitle?: string;
  metaDescription?: string;
  tags: string[];
  destacado: boolean;
  activo: boolean;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

// Schema de Mongoose
const ProductSchema = new Schema<IProduct>(
  {
    // Información básica
    nombre: {
      type: String,
      required: [true, 'El nombre es requerido'],
      trim: true,
      maxlength: [200, 'El nombre no puede exceder 200 caracteres'],
    },
    slug: {
      type: String,
      required: [true, 'El slug es requerido'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción es requerida'],
    },
    descripcionCorta: {
      type: String,
      required: [true, 'La descripción corta es requerida'],
      maxlength: [300, 'La descripción corta no puede exceder 300 caracteres'],
    },

    // Precios
    precio: {
      type: Number,
      required: [true, 'El precio es requerido'],
      min: [0, 'El precio no puede ser negativo'],
    },
    moneda: {
      type: String,
      enum: ['USD', 'ARS'],
      default: 'USD',
    },
    precioAnterior: {
      type: Number,
      min: [0, 'El precio anterior no puede ser negativo'],
    },

    // Categorización
    categoria: {
      type: String,
      required: [true, 'La categoría es requerida'],
      enum: [
        'vintages',
        'punk-jazz-customshop',
        'boquillas',
        'articulos-punk-jazz',
        'altos',
        'tenores',
        'sopranos',
        'baritonos',
        'accesorios',
      ],
    },
    subcategoria: {
      type: String,
      trim: true,
    },
    marca: {
      type: String,
      required: [true, 'La marca es requerida'],
      trim: true,
    },
    modelo: {
      type: String,
      trim: true,
    },

    // Estado
    condicion: {
      type: String,
      required: [true, 'La condición es requerida'],
      enum: ['nuevo', 'usado', 'restaurado', 'vintage'],
    },
    año: {
      type: Number,
      min: [1800, 'Año inválido'],
      max: [new Date().getFullYear() + 1, 'Año inválido'],
    },

    // Imágenes
    imagenPrincipal: {
      type: String,
      required: [true, 'La imagen principal es requerida'],
    },
    imagenes: {
      type: [String],
      default: [],
    },

    // Enlaces externos
    mercadoLibreUrl: {
      type: String,
      trim: true,
    },

    // Características técnicas
    caracteristicas: {
      type: [
        {
          clave: { type: String, required: true },
          valor: { type: String, required: true },
        },
      ],
      default: [],
    },

    // SEO
    metaTitle: {
      type: String,
      maxlength: [70, 'El meta title no puede exceder 70 caracteres'],
    },
    metaDescription: {
      type: String,
      maxlength: [160, 'La meta description no puede exceder 160 caracteres'],
    },
    tags: {
      type: [String],
      default: [],
    },

    // Control
    destacado: {
      type: Boolean,
      default: false,
    },
    activo: {
      type: Boolean,
      default: true,
    },
    stock: {
      type: Number,
      default: 1,
      min: [0, 'El stock no puede ser negativo'],
    },
  },
  {
    timestamps: true,
  }
);

// Índices para búsquedas eficientes
ProductSchema.index({ slug: 1 });
ProductSchema.index({ categoria: 1 });
ProductSchema.index({ marca: 1 });
ProductSchema.index({ destacado: 1, activo: 1 });
ProductSchema.index({ nombre: 'text', descripcion: 'text', tags: 'text' });

// Evitar recompilación del modelo en desarrollo
const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default ProductModel;