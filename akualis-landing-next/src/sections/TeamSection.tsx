export default function TeamSection() {
  return (
    <section id="team" className="w-full flex flex-col items-center text-center py-14">
      <div className="flex flex-row mt-14 w-full">
        <div className="hidden md:block md:w-1/6" />
        <div className="w-full md:w-4/6 px-4">
          <p className="text-lg text-blue-700 font-semibold mb-2 subtitle">L'équipe</p>
          <h2 className="text-3xl font-bold mb-6">Qui sommes nous ?</h2>
          <pre className="whitespace-pre-wrap text-left rounded p-4 text-base">
{`Akualis s'engage à servir l'intérêt général, en mettant en avant des valeurs de transparence et de collaboration.

A l’origine de l’association, une équipe de 3 fondateurs convaincus qu’un effort collectif est essentiel pour limiter la dégradation environnementale actuelle, et dotés de compétences complémentaires pour lancer le projet :

Pauline apporte son expertise en communication, construction du business plan et développement des partenariats stratégiques,

Maxime est garant de la pertinence technique de la plateforme Akualis, de son optimisation et de sa scalabilité,

Jérémie est passionné par l’entrepreneuriat solidaire et apporte son expérience dans la gestion de projets technologiques complexes, notamment en matière d’organisation, de budget et de planning, pour garantir la réussite de l’association dans sa mission.`}
          </pre>
        </div>
        <div className="hidden md:block md:w-1/6" />
      </div>
    </section>
  );
}
