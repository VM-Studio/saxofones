import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-drblack text-drgray border-t-2 border-drgold py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
        {/* Datos DR BRASS Google Maps */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h3 className="text-xl font-serif font-bold text-drgold mb-2 uppercase tracking-wide">DR BRASS Rosario</h3>
          <span className="text-base">Dirección: Mendoza 1234, Rosario, Santa Fe</span>
          <span className="text-base">Teléfono: +54 9 341 555-1234</span>
          <span className="text-base">Email: info@drbrass.com.ar</span>
          <span className="text-base">Horario: Lun-Vie 10:00-18:00, Sáb 10:00-13:00</span>
        </div>
        {/* Redes y contacto */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h4 className="text-lg font-serif font-bold text-drgold mb-2 uppercase">Redes</h4>
          <a href="https://www.instagram.com/drbrassrosario/" target="_blank" rel="noopener" className="text-drgold hover:underline">Instagram</a>
          <a href="https://maps.app.goo.gl/2UxA9JkjiVTEqR6y7" target="_blank" rel="noopener" className="text-drgold hover:underline">Google Maps</a>
        </div>
        {/* CTA final */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h4 className="text-lg font-serif font-bold text-drgold mb-2 uppercase">¿Consultas?</h4>
          <Link href="/contacto" className="btn px-6 py-2 text-base font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors">Contactar</Link>
        </div>
      </div>
      <div className="text-center text-drgray mt-8 text-sm">© 2026 DR BRASS Rosario. Todos los derechos reservados.</div>
    </footer>
  );
}
