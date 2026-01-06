import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Admin Header */}
      <header className="bg-zinc-800 border-b border-zinc-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="text-xl font-bold text-amber-500">
                DR BRASS Admin
              </Link>
              <nav className="hidden md:flex items-center gap-4">
                <Link
                  href="/admin/productos"
                  className="text-zinc-300 hover:text-amber-500 transition-colors"
                >
                  Productos
                </Link>
                <Link
                  href="/admin/productos/nuevo"
                  className="text-zinc-300 hover:text-amber-500 transition-colors"
                >
                  + Nuevo Producto
                </Link>
              </nav>
            </div>
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              ← Volver al sitio
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
