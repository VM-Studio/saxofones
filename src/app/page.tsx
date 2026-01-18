import { Metadata } from "next";
import {
  HeroSection,
  ProductosDestacadosSection,
  ServiciosSection,
  SobreNosotrosSection,
  NewsletterSection,
} from "@/components/home";

// SEO Metadata optimizado para Rosario + Buenos Aires
export const metadata: Metadata = {
  title: "DR BRASS Rosario | Saxofones y Vientos Premium | Compra, Venta y Canje",
  description:
    "Tienda de saxofones e instrumentos de viento en Rosario, Santa Fe. Compra, venta, canje y consignaciones. Asesoramiento profesional. Saxofones Yamaha, Selmer, Yanagisawa. Envíos a Buenos Aires y todo el país.",
  keywords: [
    // Principales
    "saxofones rosario",
    "tienda de saxofones",
    "instrumentos de viento rosario",
    "saxofon alto",
    "saxofon tenor",
    "saxofon soprano",
    "saxofon baritono",
    // Marcas
    "yamaha saxofon",
    "selmer paris",
    "yanagisawa",
    "keilwerth",
    // Servicios
    "compra venta saxofones",
    "canje instrumentos",
    "consignacion saxofones",
    // Locales
    "saxofones santa fe",
    "instrumentos musicales rosario",
    "tienda musica rosario",
    "saxofones argentina",
    "saxofones buenos aires",
    // Específicos
    "saxofones usados",
    "saxofones vintage",
    "boquillas saxofon",
    "accesorios saxofon",
  ],
  authors: [{ name: "DR BRASS" }],
  creator: "DR BRASS Rosario",
  publisher: "DR BRASS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://drbrass.com.ar",
    siteName: "DR BRASS Rosario",
    title: "DR BRASS | Saxofones y Vientos Premium en Rosario",
    description:
      "Tienda especializada en saxofones e instrumentos de viento. Compra, venta, canje y consignaciones en Rosario. Envíos a Buenos Aires y todo el país.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DR BRASS - Saxofones Premium en Rosario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DR BRASS | Saxofones y Vientos Premium en Rosario",
    description:
      "Tienda especializada en saxofones e instrumentos de viento. Compra, venta, canje y consignaciones.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://drbrass.com.ar",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  category: "Instrumentos Musicales",
};

// JSON-LD Schema para SEO local
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicStore",
  name: "DR BRASS Rosario",
  description:
    "Tienda especializada en saxofones e instrumentos de viento en Rosario. Compra, venta, canje y consignaciones.",
  url: "https://drbrass.com.ar",
  telephone: "+54 9 341 555-1234",
  email: "info@drbrass.com.ar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mendoza 1234",
    addressLocality: "Rosario",
    addressRegion: "Santa Fe",
    postalCode: "2000",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.9507,
    longitude: -60.6622,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  image: "https://drbrass.com.ar/og-image.jpg",
  sameAs: [
    "https://www.instagram.com/drbrassrosario/",
    "https://www.instagram.com/punkjazzcustomshop/",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Rosario",
    },
    {
      "@type": "City",
      name: "Buenos Aires",
    },
    {
      "@type": "Country",
      name: "Argentina",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Saxofones",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Compra de instrumentos usados",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Canje de instrumentos",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Consignación de instrumentos",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-drblack">
        {/* Hero con productos destacados */}
        <HeroSection />

        {/* Servicios */}
        <ServiciosSection />

        {/* Productos destacados */}
        <ProductosDestacadosSection />

        {/* Sobre nosotros */}
        <SobreNosotrosSection />

        {/* Newsletter */}
        <NewsletterSection />
      </main>
    </>
  );
}
