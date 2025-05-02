import AppPreviewCarousel from "@/components/AppPreviewCarousel";
import PreviewCarousel from "@/components/PreviewCarousel";


export default function ConceptSection() {
  const appPreviews = [
    {
      picture: '/img/preview/akualis-app-preview-map.webp',
      alt: 'App Akualis - aperçu de la carte',
      info: {
        left: {
          title: 'Des sources validées',
          description:
            'Des points d’eau confirmés en temps réel par les contributeurs de l’application',
        },
        right: {
          title: 'Des points d’eau à jour',
          description:
            'Confirmés par les contributeurs qui garantissent la pertinence de l’information',
        },
      },
    },
    {
      picture: '/img/preview/akualis-app-preview-detail-fontaine.webp',
      alt: 'App Akualis - aperçu des détails d’une fontaine',
      info: {
        left: {
          title: 'Accès et localisation facilités',
          description:
            'Un bouton pour se rendre directement à la source avec une photo pour la retrouver aisément.',
        },
        right: {
          title: 'Historique d’utilisation',
          description:
            'Identifiez quand la fontaine a été utilisée pour la dernière fois, assurant son existence et sa fiabilité.',
        },
      },
    },
    {
      picture: '/img/preview/akualis-app-preview-parcours-gpx.webp',
      alt: 'App Akualis - aperçu de l’import de fichier GPX',
      info: {
        left: {
          title: 'Importez vos parcours',
          description:
            'Ajoutez un fichier GPX pour afficher votre itinéraire et localiser facilement les points d’eau sur votre chemin.',
        },
        right: {
          title: 'Planifiez sereinement',
          description:
            'Anticipez vos arrêts en identifiant les points d’eau disponibles le long de votre trajet.',
        },
      },
    },
    {
      picture: '/img/preview/akualis-app-preview-compte.webp',
      alt: 'App Akualis - aperçu du compte utilisateur',
      info: {
        left: {
          title: 'Suivez vos contributions',
          description:
            'Gardez un œil sur vos ajouts et modifications pour aider la communauté.',
        },
        right: {
          title: 'Affichez votre classement',
          description:
            'Découvrez où vous vous situez parmi les contributeurs actifs et mesurez votre impact.',
        },
      },
    },
  ];

  return (
    <section
      id="concept"
      className="w-full flex flex-col items-center text-center py-14"
    >
      <div className="mt-12 md:mt-24 flex flex-col md:flex-row w-full justify-center">
        <div className="md:w-2/12" />
        <div className="w-full md:w-8/12">
          <p className="text-lg text-accent mb-2 subtitle">Le concept</p>
          <h2>
            L’eau potable : une ressource précieuse à localiser
          </h2>
        </div>
        <div className="md:w-2/12" />
      </div>

      {/* <PreviewCarousel appPreviews={appPreviews} /> */}
      <div className="py-4 md:py-12 w-full">
      <AppPreviewCarousel appPreviews={appPreviews} />
      </div>

    </section>
  );
}
