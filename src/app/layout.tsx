
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaxoShop | Tienda de Saxofones Profesionales",
  description: "Compra saxofones de alta calidad, asesoría personalizada y ofertas exclusivas. Tu tienda online de saxofones para músicos exigentes.",
  keywords: [
    "saxofones", "tienda de saxofones", "comprar saxofón", "saxofón profesional", "instrumentos musicales", "saxofón alto", "saxofón tenor", "saxofón soprano", "venta de saxofones"
  ],
  openGraph: {
    title: "SaxoShop | Tienda de Saxofones Profesionales",
    description: "Compra saxofones de alta calidad, asesoría personalizada y ofertas exclusivas.",
    url: "https://saxoshop.com",
    siteName: "SaxoShop",
    images: [
      {
        url: "/saxofon-hero.png",
        width: 800,
        height: 600,
        alt: "Saxofón dorado tienda online"
      }
    ],
    locale: "es_ES",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar global */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
