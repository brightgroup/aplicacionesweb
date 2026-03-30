import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMMA Models Agency | Formamos Personas Seguras",
  description:
    "Una evolución de Splendor Agency con 22 años de experiencia. Formación en modelaje, actuación, autoestima y más. Sedes en Montería, Barranquilla y Cartagena.",
  openGraph: {
    title: "EMMA Models Agency",
    description: "Más que modelos, formamos personas seguras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
