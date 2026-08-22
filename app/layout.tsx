import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./extra.css";
import "./typography.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hammurabi-risk.elisaaguilar10524.chatgpt.site"),
  title: "Hammurabi Risk | Seguros, fianzas y gestión de riesgos",
  description: "Broker mexicano con 30 años de experiencia en consultoría de riesgos, seguros y fianzas.",
  openGraph: {
    title: "Hammurabi Risk",
    description: "Riesgos bajo control. Tranquilidad en marcha.",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Hammurabi Risk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammurabi Risk",
    description: "Riesgos bajo control. Tranquilidad en marcha.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/isotipo.jpg",
    shortcut: "/isotipo.jpg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
