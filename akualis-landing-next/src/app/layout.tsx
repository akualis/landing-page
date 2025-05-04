import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akualis.com"),
  title: "Akualis : Trouvez. Remplissez. Protégez.",
  description:
    "Akualis est une application qui vous guide vers les sources d'eau potable les plus proches, vous aidant à réduire votre empreinte écologique tout en restant hydraté. Rejoignez notre communauté dédiée à promouvoir une consommation d'eau plus durable et éco-responsable.",
  keywords:
    "Eau potable, Localisation fontaine, Application eau potable, Carte points d'eau, Hydratation éco-responsable, Fontaines publiques, Trouver eau près de moi, Réduire bouteilles plastique, Communauté eau potable, Sources d'eau naturelles, Akualis app, Application écologique, Remplissage gourde, Ressources en eau, Protection eau, Fontaines accessibles, Guide hydratation, Sans bouteille plastique, Fontaines gratuites, Application mobile hydratation",
  openGraph: {
    title: "Akualis",
    siteName: "Akualis : Trouvez. Remplissez. Protégez.",
    description:
      "Akualis vous guide vers les sources d'eau potable les plus proches, vous aidant à réduire votre empreinte écologique tout en restant hydraté. Rejoignez notre communauté dédiée à promouvoir une consommation d'eau plus durable et éco-responsable.",
    type: "website",
    images: ["/img/akualis-social-share.png"],
    url: "https://akualis.com",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  other: {
    "apple-itunes-app": "app-id=6477761379",
  },
};

// Move viewport to its own export
export const viewport: Viewport = {
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* Google Analytics with next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RG5E0NN3JN"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RG5E0NN3JN');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
