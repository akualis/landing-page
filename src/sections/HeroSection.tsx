import Image from 'next/image';

export default function HeroSection({ t }: { t?: any }) {
  // no local default values — use translation values only
  const title = t?.title;
  const subtitle = t?.subtitle;
  const lead = t?.lead;
  const ctaAppStoreAlt = t?.appStoreAlt;
  const ctaPlayAlt = t?.playAlt;
  const logoAlt = t?.logoAlt;

  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center text-center pb-8 p-2 md:px-0"
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex-1"></div>
        <div className="flex-[2] flex flex-col items-center justify-center">
          <Image
            id="hero-logo"
            className="mt-2 md:mt-12 pt-12"
            src="/img/akualis-logo.webp"
            alt={logoAlt}
            width={500}
            height={500}
            priority
          />
          <p className="subtitle">
            {subtitle}
          </p>
          <p className="text-3xl font-bold mt-12 h1">
            {title}
          </p>
          <h1 className="my-8 small">
            {lead}
          </h1>
          <div className="flex justify-center items-center flex-col md:flex-row gap-4">
            <a
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/fr/app/akualis/id6477761379?itsct=apps_box_badge&amp;itscg=30200"
            >
              <Image
                src="/img/App_Store_badge_fr.png"
                width={250}
                height={79}
                alt={ctaAppStoreAlt}
                style={{ borderRadius: '13px' }}
                priority
              />
            </a>
            <a
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.akualis.app&pcampaignid=web_share"
            >
              <Image
                src="/img/Google_Play_Store_badge_FR.svg"
                alt={ctaPlayAlt}
                width={256}
                height={79}
                priority
              />
            </a>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
