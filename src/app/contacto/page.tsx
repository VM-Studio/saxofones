export default function Contacto() {
  return (
    <main className="min-h-screen w-full bg-drmatte py-16 px-4 flex flex-col items-center justify-center text-drgray">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-6 tracking-wider uppercase">
        Contacto
      </h1>
      <p className="text-lg font-sans mb-8 text-center max-w-2xl">
        ¿Tienes dudas, consultas o quieres asesoramiento profesional? Escríbenos directo por WhatsApp.
      </p>
      <div className="max-w-xl w-full flex flex-col gap-4 bg-drblack rounded shadow-dr border-2 border-drgold p-10">
        <a
          href="https://wa.me/5493413814852"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.69.97.99-3.59-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
          </svg>
          Chatear por WhatsApp
        </a>
        <p className="text-sm text-drgray text-center">
          Respuesta rápida para consultas, asesoramiento y disponibilidad.
        </p>
      </div>

      <div className="max-w-4xl w-full mt-12">
        <h2 className="text-2xl font-serif font-bold text-drgold text-center mb-6">
          Ubicación
        </h2>
        <div className="relative aspect-video bg-white shadow-elegant-lg overflow-hidden border border-brown-light/[0.02]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.858232993857!2d-60.66222268481344!3d-32.95072608092937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sDR%20BRASS%20Rosario!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación DR BRASS Rosario - Tienda de saxofones"
            className="absolute inset-0"
          />
        </div>
      </div>
    </main>
  );
}