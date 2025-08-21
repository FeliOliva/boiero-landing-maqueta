import type React from "react";
import {
  Geist,
  Azeret_Mono as Geist_Mono,
  Dancing_Script,
  Caveat,
  Poppins,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Agregando Caveat
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

// Agregando Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Boiero Agropecuaria",
  description: "Trayectoria en semillas, Forrajeras y Pasturas..",
  keywords: [
    "Boiero Agropecuaria",
    "Boiero",
    "Insumos Agropecuarios",
    "Semillas",
    "Forrajeras",
    "Pasturas",
    "Agro",
    "Agroinsumos",
    "Agropecuaria",
    "Boiero AgropecuariO",
  ],
  openGraph: {
    title: "Boiero Agropecuaria",
    description: "Trayectoria en semillas, Forrajeras y Pasturas.",
    url: "https://boieroagro.com.ar",
    siteName: "Boiero Agropecuaria",
    images: [
      {
        url: "https://boieroagro.com.ar/preview.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/icono.ico", // ponelo en /public/favicon.ico
    shortcut: "/icono.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${caveat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
