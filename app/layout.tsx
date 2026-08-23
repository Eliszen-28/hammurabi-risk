import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./extra.css";
import "./typography.css";
import "./alliances.css";
import "./contact.css";
import "./hero.css";
import "./header.css";
import "./about.css";
import "./experience.css";
import "./methodology.css";
import "./methodology-headings.css";
import "./risk-management.css";
import "./our-work.css";
import "./promise.css";
import "./incidents-dynamic.css";
import "./incident-mobile-fix.css";
import "./incident-heading-size.css";
import "./contact-actions.css";
import "./footer-socials.css";
import "./sales-assistant.css";
import "./sales-mascot.css";
import "./additional-pages.css";
import "./incidents-clean.css";
import "./additional-pages-harmony.css";
import "./interaction-cleanup.css";
import "./legal.css";
import "./cookie-consent.css";
import "./footer-buttons.css";
import "./floating-position.css";
import "./address-highlight.css";
import "./mobile-ticker.css";
import "./map-location.css";
import "./mobile-map-actions.css";
import "./remove-address-panel.css";
import "./map-app-logos.css";
import "./brand-slogan.css";
import SalesAssistant from "./SalesAssistant";
import CookieConsent from "./CookieConsent";

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
        <SalesAssistant />
        <CookieConsent />
      </body>
    </html>
  );
}
