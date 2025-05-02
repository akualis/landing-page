import Image from 'next/image';

export default function HeroSection() {
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
            className="mt-12 pt-12"
            src="/img/akualis-logo.webp"
            alt="Logo Akualis"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            priority
          />
          <p className="subtitle">
            *Akualis, inspiré du latin “Aqualis”, nom commun pour désigner une
            cruche
          </p>
          <p className="text-3xl font-bold mt-12 h1">
            Ensemble, cartographions les points d’eau potable !
          </p>
          <h1 className="my-8 small">
            Akualis, la seule application qui référence en temps réel les points
            d’eau potable dans le monde
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
                alt="Télécharger dans l'App Store"
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
                alt="Disponible sur Google Play"
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
