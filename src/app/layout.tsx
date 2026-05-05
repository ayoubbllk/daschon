import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Das Schön Algérie | Cuisines allemandes haut de gamme",
  description: "Das Schön Algérie fabrique des cuisines allemandes haut de gamme. Showroom à Chéraga, Alger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}