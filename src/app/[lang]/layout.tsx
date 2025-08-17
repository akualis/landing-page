import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { notFound } from 'next/navigation';
import "../globals.css";
import { getTranslations } from "@/utils/i18n";

// --- Configuration de l'internationalisation ---
const supportedLangs = ['en', 'fr'];

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

function isValidLang(lang: string): lang is 'en' | 'fr' {
  return supportedLangs.includes(lang);
}

// --- Metadonnées (avec le type corrigé) ---
export async function generateMetadata({
  params,
}: {
  // CORRECTION : params est une promesse qui résout en { lang: string }
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  // La logique `await` est maintenant cohérente avec le type
  const { lang } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  const i18n = await getTranslations(lang);
  const md = i18n.metadata ?? {};

  return {
    metadataBase: md.metadataBase ? new URL(md.metadataBase) : new URL("https://akualis.com"),
    title: md.title,
    description: md.description,
    keywords: md.keywords,
    openGraph: {
      title: md.openGraph?.title ?? md.title,
      siteName: md.openGraph?.siteName,
      description: md.openGraph?.description ?? md.description,
      type: "website",
      images: md.openGraph?.images,
      url: md.openGraph?.url,
    },
    icons: md.icons,
    other: md.other,
  };
}

// --- Viewport (inchangé) ---
export const viewport: Viewport = {
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  width: "device-width",
};

// --- Layout Principal (RootLayout avec le type corrigé) ---
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // CORRECTION : params est aussi une promesse ici
  params: Promise<{ lang: string }>;
}) {
  // La logique `await` est maintenant cohérente avec le type
  const { lang } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>
        {/* Google Analytics */}
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
