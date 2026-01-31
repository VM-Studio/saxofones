'use client';

import { useState, useCallback } from "react";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

const initialFormData: FormData = {
  nombre: '',
  email: '',
  mensaje: ''
};

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('El servidor no está disponible. Por favor, intenta nuevamente.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus('success');
      setSubmitMessage('¡Gracias por tu mensaje! Te hemos enviado un email de confirmación. Nos pondremos en contacto contigo pronto.');
      setFormData(initialFormData);

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error 
          ? error.message 
          : 'Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <main className="min-h-screen w-full bg-drmatte py-16 px-4 flex flex-col items-center justify-center text-drgray">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-drgold text-center mb-6 tracking-wider uppercase">
        Contacto
      </h1>
      <p className="text-lg font-sans mb-8 text-center max-w-2xl">
        ¿Tienes dudas, consultas o quieres asesoramiento profesional? Completa el formulario y te responderemos a la brevedad.
      </p>

      {submitStatus === 'success' ? (
        // Estado de éxito
        <div className="max-w-xl w-full bg-drblack rounded shadow-dr border-2 border-drgold p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-drgold mb-4">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-drgray mb-6">{submitMessage}</p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="btn px-8 py-3 text-lg font-bold border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors"
          >
            Enviar otra consulta
          </button>
        </div>
      ) : (
        // Formulario
        <form 
          onSubmit={handleSubmit} 
          className="max-w-xl w-full flex flex-col gap-4 bg-drblack rounded shadow-dr border-2 border-drgold p-10"
        >
          {submitStatus === 'error' && (
            <div className="p-4 rounded bg-red-900/50 border border-red-500 text-red-200 text-center mb-2">
              {submitMessage}
            </div>
          )}

          <div>
            <label htmlFor="nombre" className="block text-drgold font-semibold mb-2 text-sm">
              Tu nombre <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="nombre"
              name="nombre" 
              required 
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez" 
              className="w-full px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2 transition-colors" 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-drgold font-semibold mb-2 text-sm">
              Tu email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="Ej: juan@email.com" 
              className="w-full px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2 transition-colors" 
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-drgold font-semibold mb-2 text-sm">
              Tu mensaje <span className="text-red-500">*</span>
            </label>
            <textarea 
              id="mensaje"
              name="mensaje" 
              required 
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Contanos tu consulta, qué instrumento buscás, o cualquier duda que tengas..." 
              rows={5} 
              className="w-full px-4 py-3 rounded border-2 border-drgold bg-drmatte text-drgray focus:outline-none focus:border-drgold2 transition-colors resize-none" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn px-8 py-3 text-lg font-bold border-2 border-drgold text-drgold hover:bg-drgold hover:text-drblack transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : (
              'Enviar consulta'
            )}
          </button>
        </form>
      )}

      {/* Información de contacto adicional */}
      <div className="mt-10 text-center text-drgray">
        <p className="mb-4 text-lg">¿Prefieres otros medios?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a 
            href="https://wa.me/5493415551234" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a 
            href="mailto:info@drbrassrosario.com" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-drgold text-drblack rounded font-semibold hover:bg-drgold2 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
        <div className="space-y-2">
          <p>
            Correo: <a href="mailto:info@drbrassrosario.com" className="text-drgold font-semibold hover:underline">info@drbrassrosario.com</a>
          </p>
          <p>
            Teléfono: <span className="font-semibold">+54 9 341 555-1234</span>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Rosario, Santa Fe | Lunes a Viernes 10-18hs | Sábados 10-13hs
          </p>
        </div>
      </div>
    </main>
  );
}