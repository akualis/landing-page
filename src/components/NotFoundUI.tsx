import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/Menu';
import FooterSection from '@/sections/FooterSection';

interface NotFoundUIProps {
  i18n: any;
  lang: 'en' | 'fr';
}

export default function NotFoundUI({ i18n, lang }: NotFoundUIProps) {
  const t = i18n.notFound;

  return (
    <div className="flex flex-col min-h-screen">
      <Menu t={i18n} sticky={true} />
      <div className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <Image
            src="/img/akualis-logo.webp"
            alt={i18n.menu?.logoAlt || 'Akualis Logo'}
            width={300}
            height={300}
            priority
            className="mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            {t?.title || '404 - Page Not Found'}
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-8 subtitle">
            {t?.subtitle || 'Oops! It seems the mascot took a wrong turn.'}
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl px-4">
            {t?.lead || "The page you're looking for doesn't exist or has been moved."}
          </p>
          <Link
            href={`/${lang}`}
            className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            {t?.backHome || 'Back to Home'}
          </Link>
        </div>
      </div>
      <FooterSection t={i18n} />
    </div>
  );
}
