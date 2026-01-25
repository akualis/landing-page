import Script from "next/script";
import { getTranslations } from '@/utils/i18n';
import NotFoundUI from '@/components/NotFoundUI';
import "./globals.css";

export const metadata = {
  title: '404 - Page Not Found',
};

export default async function GlobalNotFound() {
  // Default to English for static export (language detection happens client-side or via URL)
  const lang: 'en' | 'fr' = 'en';
  const i18n = await getTranslations(lang);

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
        <NotFoundUI i18n={i18n} lang={lang} />
      </body>
    </html>
  );
}
