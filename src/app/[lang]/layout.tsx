import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "../globals.css";
import { getTranslations } from "@/utils/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = (await params)?.lang;
  const i18n = await getTranslations(lang as keyof typeof getTranslations);

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

// Move viewport to its own export
export const viewport: Viewport = {
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  width: "device-width",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = (await params)?.lang;

  return (
    <html lang={lang}>
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
