import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./clean.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NOIR & OR — Gastronomie d'Exception",
  description:
    "Restaurant gastronomique au cœur de Paris. Une expérience culinaire d'exception où chaque plat est une œuvre d'art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F0E8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
