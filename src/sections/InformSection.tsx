import Image from 'next/image';

export const InformSection = ({ t }: { t?: any }) => {
  // read values from translations
  const title = t?.title;
  const paragraph = t?.paragraph;
  const appStoreAlt = t?.appStoreAlt;
  const playAlt = t?.playAlt;
  const logoAlt = t?.logoAlt;

  return (
    <section id="inform" className="w-full flex flex-col items-center text-center mt-6 py-14 px-4 scroll-mt-14">
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h2>
        <p className="mt-6 leading-relaxed whitespace-pre-line">
          {paragraph}
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center text-center gap-4">
          <a
            href="https://apps.apple.com/fr/app/akualis/id6477761379?itsct=apps_box_badge&amp;itscg=30200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block overflow-hidden rounded-[13px] w-[250px] h-[79px]"
          >
            <Image
              src="/img/App_Store_badge_fr.png"
              alt={appStoreAlt}
              width={250}
              height={79}
              className="rounded-[13px] w-[250px] h-[79px]"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.akualis.app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block overflow-hidden h-[78px]"
          >
            <Image
              src="/img/Google_Play_Store_badge_FR.svg"
              alt={playAlt}
              width={256}
              height={79}
              className="h-[78px] w-auto"
            />
          </a>
        </div>

        <div className="mt-2 flex justify-center">
          <Image
            id="hero-logo"
            src="/img/akualis-logo.webp"
            alt={logoAlt}
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};
