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
import "./sales-inline-trigger.css";
import "./incidents-elegant.css";
import "./risk-section-brand.css";
import "./scenarios-equal.css";
import "./service-cards-equal.css";
import "./mission-vision.css";
import "./footer-redesign.css";
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
  metadataBase: new URL("https://www.hammurabirisk.com"),
  title: {
    default: "Hammurabi Risk | Seguros, fianzas y gestión de riesgos",
    template: "%s | Hammurabi Risk",
  },
  description: "Broker de seguros y fianzas en Ciudad Juárez con más de 30 años de experiencia en consultoría y administración integral de riesgos.",
  applicationName: "Hammurabi Risk",
  keywords: ["seguros en Ciudad Juárez", "broker de seguros", "consultoría de riesgos", "fianzas", "seguros para empresas", "seguros para personas", "Chihuahua"],
  authors: [{ name: "Hammurabi Risk", url: "https://www.hammurabirisk.com" }],
  creator: "Hammurabi Risk",
  publisher: "Hammurabi Risk",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "Hammurabi Risk",
    description: "Broker de seguros, fianzas y consultoría de riesgos en Ciudad Juárez, Chihuahua.",
    url: "https://www.hammurabirisk.com",
    siteName: "Hammurabi Risk",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Hammurabi Risk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammurabi Risk",
    description: "Broker de seguros, fianzas y consultoría de riesgos en Ciudad Juárez, Chihuahua.",
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
  const assetBase = process.env.GITHUB_PAGES === "true" ? "/hammurabi-risk" : "";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": "https://www.hammurabirisk.com/#website", url: "https://www.hammurabirisk.com/", name: "Hammurabi Risk", alternateName: "Hammurabi Risk Consultores de riesgos y seguros", inLanguage: "es-MX", publisher: { "@id": "https://www.hammurabirisk.com/#organization" } },
      { "@type": ["Organization", "InsuranceAgency", "LocalBusiness"], "@id": "https://www.hammurabirisk.com/#organization", name: "Hammurabi Risk", url: "https://www.hammurabirisk.com/", logo: "https://www.hammurabirisk.com/isotipo.jpg", image: "https://www.hammurabirisk.com/og.png", description: "Broker mexicano especializado en gestión y consultoría de riesgos, seguros y fianzas.", telephone: "+52 656 669 6738", email: "aguilar@grupohammurabi.com", address: { "@type": "PostalAddress", streetAddress: "Plaza Hatria, Blvd. Gómez Morín, local 17", addressLocality: "Ciudad Juárez", addressRegion: "Chihuahua", addressCountry: "MX" }, areaServed: { "@type": "Country", name: "México" }, sameAs: ["https://www.facebook.com/HammurabiRisk", "https://www.instagram.com/hammurabirisk/", "https://www.youtube.com/@HammurabiRisk", "https://mx.linkedin.com/in/enrique-damian-rodz-aguilar-18784232"], knowsAbout: ["Gestión de riesgos", "Seguros para personas", "Seguros empresariales", "Fianzas", "Atención de siniestros"] },
    ],
  };

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <SalesAssistant assetBase={assetBase} />
        <CookieConsent />
      </body>
    </html>
  );
}
