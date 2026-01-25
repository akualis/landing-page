import '../theme.scss';
import ConstatSection from '@/sections/ConstatSection';
import TeamSection from '@/sections/TeamSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import Menu from '@/components/Menu';
import HeroSection from '@/sections/HeroSection';
import FooterSection from '@/sections/FooterSection';
import ConceptSection from '@/sections/ConceptSection';
import { InformSection } from '@/sections/InformSection';
import { getTranslations } from '@/utils/i18n';

export const dynamic = 'force-static';

// On s'aligne sur le typage du layout.tsx pour satisfaire le type interne "PageProps" de Next.js
export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>; // 1. On type params comme une Promise
}) {
  // 2. On utilise "await" pour résoudre la promesse et obtenir l'objet
  const { lang } = await params;
  const i18n = await getTranslations(lang as 'en' | 'fr');

  return (
    <>
      <Menu t={i18n} />
      <HeroSection t={i18n.hero} />
      <div className="max-w-screen-xl mx-auto">
        <ConceptSection t={i18n} />
        <ConstatSection t={i18n} />
        <TeamSection t={i18n} />
        <TestimonialsSection t={i18n} />
      </div>
      <InformSection t={i18n.inform} />
      <FooterSection t={i18n} />
    </>
  );
}
