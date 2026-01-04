export default function Novedades() {
  return (
    <main className="min-h-screen w-full bg-drblack font-sans flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-6 tracking-wider uppercase">Novedades</h1>
      <h2 className="text-xl md:text-2xl font-serif text-drgold text-center mb-8">Suscríbete para recibir ofertas y noticias exclusivas</h2>
      <form className="max-w-xl w-full flex flex-col gap-4 bg-drblack rounded shadow-dr border-2 border-drgold p-10">
        <input type="email" name="email" required placeholder="Tu email" className="px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2" />
        <button type="submit" className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full">Suscribirme</button>
      </form>
    </main>
  );
}
