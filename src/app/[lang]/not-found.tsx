import { headers } from 'next/headers';
import { getTranslations } from '@/utils/i18n';
import NotFoundUI from '@/components/NotFoundUI';

export default async function NotFound() {
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

  return <NotFoundUI i18n={i18n} lang={lang} />;
}
