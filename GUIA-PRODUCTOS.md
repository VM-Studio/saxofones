# 📦 Guía para Cargar Productos

## 🎯 Primer Producto: Saxofón Alto Punk Jazz

### 📋 Información del Producto

- **Nombre**: Saxofón Alto Punk Jazz
- **Categoría**: Saxofones Altos
- **Marca**: Punk Jazz
- **Condición**: Nuevo
- **Precio**: $899 USD

### 🖼️ Imágenes Requeridas

Antes de cargar el producto, debes subir estas imágenes a `/public/uploads/productos/`:

**Imagen Principal:**

- `saxo1.jpeg`

**Galería de Imágenes:**

- `sax1.jpeg`
- `saxxo1.jpeg`
- `saxof1.jpeg`
- `saxofon1.jpeg`
- `saxofonn1.jpeg`
- `ssaxo1.jpeg`

**Videos (opcionales):**

- `sax1.mp4`
- `saxo1.mp4`
- `saxx1.mp4`
- `saxxof1.mp4`

---

## 🚀 Métodos de Carga

### Método 1: Manual (Admin Panel) 👍 RECOMENDADO

1. Ve a: https://saxofones.vercel.app/admin/productos/nuevo
2. Completa el formulario con los datos del producto
3. Sube las imágenes usando el uploader
4. Guarda el producto

**Ventajas:**

- ✅ Más fácil y visual
- ✅ Subes las imágenes directamente desde el navegador
- ✅ Ves el preview en tiempo real
- ✅ No necesitas acceso al servidor

---

### Método 2: Por Código (Script)

#### Paso 1: Subir las Imágenes

Primero, sube todas las imágenes a la carpeta `/public/uploads/productos/` en tu servidor.

#### Paso 2: Ejecutar el Script

Desde la terminal, en la raíz del proyecto:

```bash
npm run seed:producto
```

O directamente:

```bash
node scripts/seed-producto-simple.js
```

**Ventajas:**

- ✅ Más rápido para múltiples productos
- ✅ Útil para importaciones masivas
- ✅ Se puede automatizar

**Nota:** Asegúrate de tener la variable `MONGODB_URI` configurada en tu archivo `.env.local`

---

## 📝 Datos del Producto (Mock Data)

Los datos completos del producto están disponibles en:

- `/src/data/productos-mock.ts` (TypeScript)
- `/scripts/seed-producto-simple.js` (JavaScript)

### Estructura de Datos

```typescript
{
  nombre: 'Saxofón Alto Punk Jazz',
  slug: 'saxofon-alto-punk-jazz',
  descripcion: 'Descripción completa...',
  descripcionCorta: 'Resumen breve...',
  precio: 899,
  moneda: 'USD',
  categoria: 'altos',
  marca: 'Punk Jazz',
  condicion: 'nuevo',
  imagenPrincipal: '/uploads/productos/saxo1.jpeg',
  imagenes: [...],
  caracteristicas: [...],
  tags: [...],
  destacado: true,
  activo: true,
  stock: 1
}
```

---

## ✅ Verificación

Después de cargar el producto, verifica que aparezca correctamente:

1. **Página de Productos**: https://saxofones.vercel.app/productos
2. **Detalle del Producto**: https://saxofones.vercel.app/productos/saxofon-alto-punk-jazz
3. **Home (Destacados)**: https://saxofones.vercel.app (si está marcado como destacado)

---

## 🎨 Funcionalidades Implementadas

### En la Página de Detalle:

✅ **Galería Interactiva**:

- Imagen grande principal
- Miniaturas clickeables
- Al hacer click en una miniatura, se vuelve la imagen principal
- Indicador visual de la imagen activa (borde dorado + ring effect)

✅ **Información Completa**:

- Nombre y marca
- Precio (con descuento si aplica)
- Badges de categoría y condición
- Descripción corta y completa
- Características técnicas
- Tags
- Botones de acción (Mercado Libre / Consultar)

✅ **Productos Relacionados**:

- Muestra otros productos destacados

---

## 🐛 Troubleshooting

### Las imágenes no se ven

- Verifica que las imágenes estén en `/public/uploads/productos/`
- Revisa que los nombres coincidan exactamente (case-sensitive)
- Asegúrate de que las rutas empiecen con `/uploads/productos/`

### El producto no aparece

- Verifica que `activo: true`
- Revisa la consola del navegador por errores
- Chequea la conexión a MongoDB

### Error al ejecutar el script

- Verifica que `MONGODB_URI` esté en `.env.local`
- Asegúrate de estar en la raíz del proyecto
- Intenta: `npm install` para instalar dependencias

---

## 📞 Contacto

Si necesitas ayuda, revisá los logs o la consola de errores.

**¡Listo para cargar más productos!** 🎷
