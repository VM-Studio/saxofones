
export default function Contacto() {
  return (
    <main className="min-h-screen w-full bg-drmatte py-16 px-4 flex flex-col items-center justify-center text-drgray">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-6 tracking-wider uppercase">Contacto</h1>
      <p className="text-lg font-sans mb-8 text-center max-w-2xl">¿Tienes dudas, consultas o quieres asesoramiento profesional? Completa el formulario y te responderemos a la brevedad.</p>
      <form className="max-w-xl w-full flex flex-col gap-4 bg-drblack rounded shadow-dr border-2 border-drgold p-10">
        <input type="text" name="nombre" required placeholder="Tu nombre" className="px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2" />
        <input type="email" name="email" required placeholder="Tu email" className="px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2" />
        <textarea name="mensaje" required placeholder="Tu mensaje" rows={4} className="px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2" />
        <button type="submit" className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full">Enviar consulta</button>
      </form>
      <div className="mt-10 text-center text-drgray">
        <p className="mb-2">¿Prefieres otros medios?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a href="https://wa.me/5493415551234" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">
            WhatsApp
          </a>
          <a href="mailto:info@drbrass.com.ar" className="flex items-center justify-center gap-2 px-4 py-2 bg-drgold text-drblack rounded font-semibold hover:bg-drgold2 transition">
            Email
          </a>
        </div>
        <p className="mb-1">Correo: <a href="mailto:info@drbrass.com.ar" className="text-drgold font-semibold">info@drbrass.com.ar</a></p>
        <p>Teléfono: <span className="font-semibold">+54 9 341 555-1234</span></p>
      </div>
    </main>
  );
}
