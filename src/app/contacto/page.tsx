
export default function Contacto() {
  return (
    <main className="w-full min-h-screen bg-white py-16 px-2 md:px-8">
      <h1 className="text-4xl font-extrabold text-black mb-8 text-center font-serif">Contacto</h1>
      <div className="max-w-2xl mx-auto">
        <form className="bg-[#eee9e1]/80 rounded-lg shadow-lg p-8 flex flex-col gap-6 border border-[#e0d6c8]">
          <input type="text" name="nombre" placeholder="Nombre" className="px-4 py-3 rounded-md border border-[#e0d6c8] focus:outline-[#7c6043] text-black bg-white placeholder:text-zinc-400" required />
          <input type="email" name="email" placeholder="Correo electrónico" className="px-4 py-3 rounded-md border border-[#e0d6c8] focus:outline-[#7c6043] text-black bg-white placeholder:text-zinc-400" required />
          <textarea name="mensaje" placeholder="Mensaje" rows={5} className="px-4 py-3 rounded-md border border-[#e0d6c8] focus:outline-[#7c6043] text-black bg-white placeholder:text-zinc-400" required />
          <button type="submit" className="px-8 py-3 bg-[#7c6043] text-white rounded-md font-semibold text-lg hover:bg-yellow-700 transition shadow">Enviar mensaje</button>
        </form>
        <div className="mt-10 text-center text-zinc-700">
          <p className="mb-2">¿Prefieres otros medios?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.69.97.99-3.59-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              WhatsApp
            </a>
            <a href="mailto:info@saxoshop.com" className="flex items-center justify-center gap-2 px-4 py-2 bg-[#7c6043] text-white rounded-md font-semibold hover:bg-yellow-700 transition">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-8.97 7.03a2 2 0 0 1-2.46 0L2 6"/></svg>
              Email
            </a>
          </div>
          <p className="mb-1">Correo: <a href="mailto:info@saxoshop.com" className="text-[#7c6043] font-semibold">info@saxoshop.com</a></p>
          <p>Teléfono: <span className="font-semibold">+34 600 123 456</span></p>
        </div>
      </div>
    </main>
  );
}
