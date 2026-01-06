// Tipos para el sistema de productos DR BRASS

export type ProductCategory = 
  | "vintages"
  | "punk-jazz-customshop"
  | "boquillas"
  | "articulos-punk-jazz"
  | "altos"
  | "tenores"
  | "sopranos"
  | "baritonos"
  | "accesorios";

export type ProductCondition = "nuevo" | "usado" | "restaurado" | "vintage";

export interface Product {
  _id?: string;
  // Información básica
  nombre: string;
  slug: string;
  descripcion: string;
  descripcionCorta: string; // Para cards
  
  // Precios
  precio: number;
  moneda: "USD" | "ARS";
  precioAnterior?: number; // Para mostrar descuentos
  
  // Categorización
  categoria: ProductCategory;
  subcategoria?: string;
  marca: string;
  modelo?: string;
  
  // Estado
  condicion: ProductCondition;
  año?: number; // Para vintages
  
  // Imágenes
  imagenPrincipal: string;
  imagenes: string[]; // Galería
  
  // Enlaces externos
  mercadoLibreUrl?: string;
  
  // Características técnicas (flexible para distintos tipos de productos)
  caracteristicas: {
    clave: string;
    valor: string;
  }[];
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  tags: string[];
  
  // Control
  destacado: boolean;
  activo: boolean;
  stock: number;
  
  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;
}

// Para crear un nuevo producto (sin _id ni timestamps)
export type CreateProductInput = Omit<Product, '_id' | 'createdAt' | 'updatedAt'>;

// Para actualizar (todo opcional excepto _id)
export type UpdateProductInput = Partial<CreateProductInput> & { _id: string };

// Respuesta de la API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Filtros para búsqueda
export interface ProductFilters {
  categoria?: ProductCategory;
  marca?: string;
  condicion?: ProductCondition;
  precioMin?: number;
  precioMax?: number;
  destacado?: boolean;
  activo?: boolean;
  search?: string;
}

// Paginación
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Categorías con labels para UI
export const CATEGORIAS: { value: ProductCategory; label: string }[] = [
  { value: "vintages", label: "Vintages" },
  { value: "punk-jazz-customshop", label: "Punk Jazz Customshop" },
  { value: "boquillas", label: "Boquillas" },
  { value: "articulos-punk-jazz", label: "Artículos Punk Jazz" },
  { value: "altos", label: "Saxofones Altos" },
  { value: "tenores", label: "Saxofones Tenores" },
  { value: "sopranos", label: "Saxofones Sopranos" },
  { value: "baritonos", label: "Saxofones Barítonos" },
  { value: "accesorios", label: "Accesorios" },
];

export const CONDICIONES: { value: ProductCondition; label: string }[] = [
  { value: "nuevo", label: "Nuevo" },
  { value: "usado", label: "Usado" },
  { value: "restaurado", label: "Restaurado" },
  { value: "vintage", label: "Vintage" },
];
