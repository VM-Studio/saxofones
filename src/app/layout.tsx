
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Simple, site-wide SEO focused on Rosario
  title: "DRBRASS — Rosario — Tienda de instrumentos musicales",
  description:
    "La mejor tienda de instrumentos musicales de Rosario. Saxofones, luthería, reparación y asesoramiento profesional.",
  keywords: [
    "DRBRASS",
    "Rosario",
    "instrumentos musicales",
    "saxofones",
    "luthería",
    "reparación de instrumentos",
    "accesorios musicales"
  ],
  openGraph: {
    title: "DRBRASS — Rosario — Tienda de instrumentos musicales",
    description:
      "La mejor tienda de instrumentos musicales de Rosario. Saxofones, luthería, reparación y asesoramiento profesional.",
    siteName: "DRBRASS",
    images: [
      {
        url: "/saxofon-hero.png",
        width: 800,
        height: 600,
        alt: "Saxofón dorado tienda online"
      }
    ],
    locale: "es_AR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-elegant`}
      >
        {/* Navbar global */}
        <div className="sticky top-0 z-50 backdrop-blur-md bg-cream/90 shadow-elegant">
          <Navbar />
        </div>
        {children}
        <Footer />
        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
