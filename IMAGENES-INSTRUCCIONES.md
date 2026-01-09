# 📸 Instrucciones para Subir Imágenes

## 🎯 Primer Producto: Saxofón Alto Punk Jazz

### 📁 Ubicación de las Imágenes

Todas las imágenes deben estar en:

```
/public/uploads/productos/
```

### 📋 Lista de Archivos a Subir

Según la imagen que me mostraste, estos son los archivos:

#### ✅ Imagen Principal (REQUERIDA)

- `saxo1.jpeg` → Esta será la imagen de portada

#### ✅ Galería de Imágenes (6 imágenes)

1. `sax1.jpeg`
2. `saxxo1.jpeg`
3. `saxof1.jpeg`
4. `saxofon1.jpeg`
5. `saxofonn1.jpeg`
6. `ssaxo1.jpeg`

#### 🎥 Videos (Opcionales - si tu sistema los soporta)

- `sax1.mp4`
- `saxo1.mp4`
- `saxx1.mp4`
- `saxxof1.mp4`

---

## 🚀 Cómo Subir las Imágenes

### Opción 1: A través del Admin Panel (Recomendado)

1. Ve a: https://saxofones.vercel.app/admin/productos/nuevo
2. Usa el uploader de "Imagen Principal" para subir `saxo1.jpeg`
3. Usa el uploader de "Galería" para subir el resto de las imágenes
4. El sistema las guardará automáticamente en `/public/uploads/productos/`

### Opción 2: Por FTP/SSH (Servidor)

1. Conecta a tu servidor via FTP o SSH
2. Navega a la carpeta: `/public/uploads/productos/`
3. Sube todos los archivos `.jpeg` y `.mp4`
4. Verifica que los nombres sean exactos (case-sensitive)

### Opción 3: Durante el Desarrollo Local

1. Copia las imágenes manualmente a:
   ```
   /Users/valendelatorre/Documents/saxofones/public/uploads/productos/
   ```
2. Los archivos estarán disponibles en:
   ```
   http://localhost:3000/uploads/productos/saxo1.jpeg
   ```

---

## ✅ Verificación

Después de subir las imágenes, verifica que estén accesibles:

**Local (desarrollo):**

- http://localhost:3000/uploads/productos/saxo1.jpeg
- http://localhost:3000/uploads/productos/sax1.jpeg
- etc.

**Producción:**

- https://saxofones.vercel.app/uploads/productos/saxo1.jpeg
- https://saxofones.vercel.app/uploads/productos/sax1.jpeg
- etc.

---

## 📝 Estructura de Archivos Actual

```
saxofones/
├── public/
│   └── uploads/
│       └── productos/
│           ├── saxo1.jpeg       ← Imagen principal
│           ├── sax1.jpeg        ← Galería
│           ├── saxxo1.jpeg      ← Galería
│           ├── saxof1.jpeg      ← Galería
│           ├── saxofon1.jpeg    ← Galería
│           ├── saxofonn1.jpeg   ← Galería
│           ├── ssaxo1.jpeg      ← Galería
│           ├── sax1.mp4         ← Video (opcional)
│           ├── saxo1.mp4        ← Video (opcional)
│           ├── saxx1.mp4        ← Video (opcional)
│           └── saxxof1.mp4      ← Video (opcional)
```

---

## 🎨 Cómo Funcionará la Galería

Una vez cargadas las imágenes y el producto:

1. **Página de Productos** (`/productos`):
   - Se verá la imagen principal (`saxo1.jpeg`)
2. **Página de Detalle** (`/productos/saxofon-alto-punk-jazz`):
   - Arriba: Imagen grande (`saxo1.jpeg` por defecto)
   - Abajo: Miniaturas de todas las imágenes
   - **Al hacer click en una miniatura → se vuelve la imagen grande**
   - La miniatura activa tiene un borde dorado brillante

---

## ⚠️ Importante

- Los nombres de archivo son **case-sensitive** (saxo1.jpeg ≠ Saxo1.jpeg)
- Las rutas siempre empiezan con `/uploads/productos/`
- Si una imagen no se ve, verifica la consola del navegador
- Los videos necesitan configuración adicional en el componente

---

## 🔄 Próximos Pasos

1. ✅ Sube las imágenes a `/public/uploads/productos/`
2. ✅ Verifica que sean accesibles via URL
3. ✅ Carga el producto (manual o script)
4. ✅ Prueba la galería interactiva
5. 🎉 ¡Listo!

---

**¿Todo claro? ¡Pasemos al código!** 🚀
