import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Élagueur à Pierrelaye (95) — Élagage, Abattage, Taille de Haie | Pierre Elagage",
  description: "Pierre Rudy, élagueur certifié à Pierrelaye dans le Val-d'Oise. Spécialiste en élagage, abattage d'arbres extrême et taille de haie. Devis gratuit sous 24h. Intervention rapide en Île-de-France.",
  openGraph: {
    title: "Élagueur à Pierrelaye (95) — Pierre Elagage",
    description: "Élagueur certifié avec 20 ans d'expérience. Élagage, abattage, taille de haie à Pierrelaye et dans le Val-d'Oise. Devis gratuit.",
    locale: "fr_FR",
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
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
