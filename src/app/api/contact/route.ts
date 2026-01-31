import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email de la empresa
const OWNER_EMAIL = 'info@drbrassrosario.com';
const FROM_EMAIL = 'DR BRASS <noreply@drbrassrosario.com>'; // Cambiar por dominio verificado en Resend

interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { nombre, email, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Email para la empresa
    const ownerEmailPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `🎷 Nueva consulta de ${nombre} - DR BRASS`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #1a1a1a;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d; border-radius: 8px; overflow: hidden; border: 2px solid #d4af37;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #d4af37;">
                      <h1 style="color: #d4af37; margin: 0; font-size: 28px; font-family: Georgia, serif; letter-spacing: 2px;">DR BRASS</h1>
                      <p style="color: #888; margin: 10px 0 0 0; font-size: 14px;">Nueva Consulta Recibida</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <p style="color: #ccc; font-size: 16px; margin: 0 0 20px 0;">
                        Has recibido una nueva consulta desde el formulario de contacto.
                      </p>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #333;">
                        <tr>
                          <td>
                            <h3 style="color: #d4af37; margin: 0 0 15px 0; font-size: 18px; font-family: Georgia, serif;">Datos del cliente:</h3>
                            
                            <p style="margin: 8px 0; color: #ccc;">
                              <strong style="color: #d4af37;">Nombre:</strong> ${nombre}
                            </p>
                            <p style="margin: 8px 0; color: #ccc;">
                              <strong style="color: #d4af37;">Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-left: 4px solid #d4af37; padding: 15px; margin-bottom: 20px;">
                        <tr>
                          <td>
                            <h4 style="color: #d4af37; margin: 0 0 10px 0; font-family: Georgia, serif;">Mensaje:</h4>
                            <p style="color: #ccc; margin: 0; white-space: pre-wrap; line-height: 1.6;">${mensaje}</p>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding-top: 20px;">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #d4af37; color: #0d0d0d; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-family: Georgia, serif;">
                              Responder al cliente
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0d0d0d; padding: 20px; text-align: center; border-top: 1px solid #333;">
                      <p style="color: #666; font-size: 12px; margin: 0;">
                        Este email fue enviado automáticamente desde el formulario de contacto de DR BRASS.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Email de confirmación para el cliente
    const clientEmailPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: '🎷 Gracias por contactar a DR BRASS',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #1a1a1a;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d; border-radius: 8px; overflow: hidden; border: 2px solid #d4af37;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #d4af37;">
                      <h1 style="color: #d4af37; margin: 0; font-size: 28px; font-family: Georgia, serif; letter-spacing: 2px;">DR BRASS</h1>
                      <p style="color: #888; margin: 10px 0 0 0; font-size: 14px;">Saxofones y Vientos Premium</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <p style="color: #ccc; font-size: 18px; margin: 0 0 20px 0;">
                        Hola <strong style="color: #d4af37;">${nombre}</strong>,
                      </p>
                      
                      <p style="color: #ccc; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        ¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos a la brevedad.
                      </p>
                      
                      <p style="color: #ccc; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        En DR BRASS somos especialistas en saxofones e instrumentos de viento. Ofrecemos:
                      </p>
                      
                      <!-- Servicios -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 8px; overflow: hidden; margin-bottom: 20px; border: 1px solid #333;">
                        <tr>
                          <td style="padding: 20px;">
                            <ul style="color: #ccc; margin: 0; padding-left: 20px; line-height: 2;">
                              <li>Saxofones Yamaha, Selmer, Yanagisawa y más</li>
                              <li>Compra, venta y canje de instrumentos</li>
                              <li>Consignación de instrumentos usados</li>
                              <li>Asesoramiento profesional personalizado</li>
                              <li>Envíos a todo el país</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="color: #ccc; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Si tenés alguna consulta urgente, no dudes en contactarnos por WhatsApp.
                      </p>
                      
                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="https://wa.me/5493415551234" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                              💬 Escribinos por WhatsApp
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%); padding: 25px; text-align: center; border-top: 2px solid #d4af37;">
                      <p style="color: #d4af37; font-size: 16px; margin: 0 0 10px 0; font-weight: bold; font-family: Georgia, serif; letter-spacing: 1px;">
                        DR BRASS ROSARIO
                      </p>
                      <p style="color: #888; font-size: 12px; margin: 0;">
                        Saxofones y Vientos Premium | Rosario, Santa Fe
                      </p>
                    </td>
                  </tr>
                </table>
                
                <!-- Unsubscribe -->
                <table width="600" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 20px; text-align: center;">
                      <p style="color: #666; font-size: 11px; margin: 0;">
                        Recibiste este email porque completaste el formulario de contacto en nuestro sitio web.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Enviar ambos emails en paralelo
    const [ownerResult, clientResult] = await Promise.all([
      ownerEmailPromise,
      clientEmailPromise,
    ]);

    // Verificar errores
    if (ownerResult.error || clientResult.error) {
      console.error('Error enviando emails:', { ownerResult, clientResult });
      return NextResponse.json(
        { error: 'Error al enviar los emails' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails enviados correctamente',
        ids: {
          owner: ownerResult.data?.id,
          client: clientResult.data?.id,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}