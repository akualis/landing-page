import { headers } from 'next/headers';
import Script from "next/script";
import { getTranslations } from '@/utils/i18n';
import NotFoundUI from '@/components/NotFoundUI';
import "./globals.css";

export const metadata = {
  title: '404 - Page Not Found',
};

export default async function GlobalNotFound() {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const url = headersList.get('x-url') || '';
  const referer = headersList.get('referer') || '';
  
  // Try to detect lang from any of these
  const combined = `${pathname}|${url}|${referer}`;
  let lang: 'en' | 'fr' = 'en';
  if (combined.includes('/fr/') || combined.includes('/fr?')) {
    lang = 'fr';
  }
  
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
