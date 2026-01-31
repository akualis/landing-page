import { Metadata } from 'next';
import { getTranslations } from '@/utils/i18n';
import Menu from '@/components/Menu';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const i18n = await getTranslations(lang as 'en' | 'fr');

  const title = (i18n.metadata.titleTemplate ? i18n.metadata.titleTemplate.replace('%s', "Webapp") : "Akualis");

  return {
    title: title,
    description: i18n.metadata.description,
  };
}

export default async function App({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const i18n = await getTranslations(lang as 'en' | 'fr');

  return (
    <>
      <Menu t={i18n} sticky={true} />
      <div className="mt-16 w-full h-[calc(100vh-4rem)] overflow-hidden">
        <iframe
          src="https://water.akualis.com/"
          className="w-full h-full border-none"
          title="Akualis App"
        />
      </div>
    </>
  );
}
