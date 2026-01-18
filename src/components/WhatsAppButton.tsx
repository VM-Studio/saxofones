import Image from "next/image";
import Link from "next/link";

export function WhatsAppButton() {
  // Número de WhatsApp - ajusta según tu número real
  const phoneNumber = "5493415551234"; // Formato: código país + código área + número
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-20 sm:h-20 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whats.png"
        alt="WhatsApp"
        width={80}
        height={80}
        className="w-full h-full object-contain"
      />
    </Link>
  );
}
