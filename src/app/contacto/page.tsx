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

   
    </main>
  );
}