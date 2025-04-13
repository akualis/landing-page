<template>
  <div id="parent-menu">
    <div v-if="showToolbar" id="menu" class="menu-start bg-white text-blue">

      <a href="/" alt="Accueil Akualis - application répertoriant les points d'eau potable"
        aria-label="Accueil Akualis - application répertoriant les points d'eau potable">
        <img id="menu-logo" src="/img/akualis-logo.webp"
          alt="Logo de l'application Akualis répertoriant les points d'eau potable" />
      </a>

      <ul>
        <li><a href="#concept" @click="smoothScrollTo" class="menu-item">Concept</a></li>
        <li><a href="#constat" @click="smoothScrollTo" class="menu-item">Mission</a></li>
        <li><a href="#team" @click="smoothScrollTo" class="menu-item gt-sm">Equipe</a></li>
        <li><a href="#testimonials" @click="smoothScrollTo" class="menu-item">Témoignages</a></li>
        <li><a href="#inform" @click="smoothScrollTo" class="menu-item hidden">S'informer</a></li>
      </ul>
      <a class="hero-cta q-btn gt-sm" @click="smoothScrollTo" href="#inform">Découvrez Akualis</a>
    </div>

    <a class="hero-cta cta-floating q-btn lt-md" @click="smoothScrollTo" href="#inform">Découvrez Akualis</a>
    <!-- <q-btn class="hero-cta cta-floating " @click="btnSmoothScrollTo('#inform')" href="#inform" color="primary" label="Découvrez Akualis" no-caps /> -->
  </div>

  <section id="hero" class="full-width items-center text-center q-pb-lg">
    <div class="row full-height">
      <div class="col-1 col-md-3"></div>
      <div class="col-10 col-md-6 flex items-center justify-center content-around">
        <img id="hero-logo" class="q-mt-xl q-pt-xl" src="/img/akualis-logo.webp"
          alt="Logo de l'application Akualis répertoriant les points d'eau potable" />
        <p class="subtitle wide-item">*Akualis, inspiré du latin “Aqualis”, nom commun pour désigner une cruche</p>
        <p class="h1 q-pt-xl q-mt-md">Ensemble, cartographions les points d’eau potable !</p>
        <h1 class="q-pt-md q-pb-lg small">Akualis, la seule application qui référence en temps réel les points d’eau
          potable dans le monde</h1>
        <div class="row justify-center items-center">
          <a class="q-ma-md" target="_blank"
            href="https://apps.apple.com/fr/app/akualis/id6477761379?itsct=apps_box_badge&amp;itscg=30200"
            style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height:79px;"><img
              src="/img/App_Store_badge_fr.png" width="250" height="79" alt="Télécharger dans l'App Store"
              style="border-radius: 13px; width: 250px; height: 79px;"></a>
          <a class="q-ma-md" target="_blank"
            href="https://play.google.com/store/apps/details?id=com.akualis.app&pcampaignid=web_share"
            style="display: inline-block; overflow: hidden; height: 78px;"><img
              src="/img/Google_Play_Store_badge_FR.svg" alt="Disponible sur Google Play" style="height: 78px;"></a>
        </div>
      </div>
      <div class="col-1 col-md-3"></div>
    </div>
  </section>

  <div class="container-large">

    <section id="concept" class="full-width items-center text-center q-mt-xl q-py-xl">
      <div class="row q-mt-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">Le concept</p>
          <h2 class="">L’eau potable : une ressource précieuse à localiser</h2>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>

      <div class="preview-carousel">
        <!-- vertical transition-prev="slide-down" transition-next="slide-up" navigation-icon="radio_button_unchecked" -->
        <q-carousel ref="previewCarousel" v-model="appPreviewSlide" transition-prev="slide-right"
          transition-next="slide-left" swipeable animated control-color="accent" navigation arrows>

          <!-- <template v-slot:navigation-icon="{ active, onClick }">
            <q-btn v-if="active" class="preview-carousel-button active" @click="onClick" />
            <q-btn v-else class="preview-carousel-button" @click="onClick" />
          </template> -->

          <q-carousel-slide v-for="appPreview in appPreviews" :key="appPreview.alt" :name="appPreview.alt"
            class="column no-wrap flex-center">
            <span class="preview-carousel-info top q-mb-md lt-md">
              <p class="bold">{{ appPreview.info.left.title }}</p>
              <p class="small">{{ appPreview.info.left.description }}</p>
            </span>
            <div class="text-center q-mb-lg">
              <img class="" :src="appPreview.picture" :alt="appPreview.alt" />
            </div>
            <span class="preview-carousel-info left gt-sm">
              <p class="bold">{{ appPreview.info.left.title }}</p>
              <p class="small">{{ appPreview.info.left.description }}</p>
            </span>
            <span class="preview-carousel-info right gt-sm">
              <p class="bold">{{ appPreview.info.right.title }}</p>
              <p class="small">{{ appPreview.info.right.description }}</p>
            </span>
          </q-carousel-slide>
        </q-carousel>
      </div>

    </section>

    <section id="constat" class="full-width bg-white items-center text-center q-py-xl">
      <div class="constat--mission row q-pb-xl q-my-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">Notre mission</p>
          <h2 class="">Simplifier et accompagner l’accès à l’eau potable</h2>
          <pre>Alors que la nécessité de réduire l’utilisation de plastique se fait pressante et que les vagues de chaleur se multiplient, la localisation des points d’eau potable, en ville comme en milieu rural, est un enjeu majeur.

Akualis se donne pour mission d’identifier et de rendre accessible tous les points d’eau potable en les cartographiant, et de promouvoir une consommation raisonnée de cette précieuse ressource.

Akualis n'est pas seulement un outil de localisation ; c'est une plateforme collaborative qui invite chacun à découvrir et partager des points d'eau encore inconnus ou à valider ceux déjà répertoriés. Ainsi, la base de données est enrichie en temps réel, offrant un accès fiable et actualisé aux sources d'eau potable.

L’application mobile, intuitive et ludique Akualis est plus qu'un simple outil ; c'est une aventure où chaque utilisateur devient un explorateur de l'eau.

Ensemble, façonnons un monde où l'accès à l'eau potable est à portée de main de tous.</pre>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>

      <div class="row justify-center highlight constat--row">
        <div class="col-12 col-md-6 column flex-center">
          <img class="constat--image" src="/img/akualis-fountain-girl.webp"
            alt="Photo constat n°1 - Localiser les points d’eau potable est un challenge permanent" />
        </div>
        <div class="col-12 col-md-6 constat--text">
          <p class="">Constat N°1</p>
          <h3 class="">Localiser les points d’eau potable est un challenge permanent</h3>
          <pre>Qui n’a jamais cherché de point d’eau potable pour remplir une gourde, un biberon ou simplement pour étancher sa soif ? Et qui a finalement acheté une bouteille d’eau en plastique, sans se douter qu’une fontaine se trouvait certainement à quelques mètres ?</pre>

          <q-expansion-item class="" dense label="Plus d'informations..." header-class="expander">
            <q-card>
              <q-card-section class="expander--content">
                <pre>La localisation de la grande majorité des fontaines est pourtant une information publique, disponible notamment dans OpenstreetMap, et plusieurs acteurs se sont déjà attachés à la réalisation de cartes les répertoriant. Cependant, aucun n’a à ce jour réussi à répondre au triple défi d’offrir une couverture géographique à l’échelle nationale, de garantir l’exhaustivité des données, tout en permettant une mise à jour de l’information simple et en temps réel.

Avec Akualis nous répondrons à ces 3 enjeux grâce à notre app interactive et participative. Une approche gaming et des fonctionnalités avancées viendront renforcer la volonté de chacun à contribuer.</pre>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>

      <div class="row justify-center bg-white highlight constat--row q-mt-lg reverse-wrap">
        <div class="col-12 col-md-6 constat--text">
          <p class="">Constat N°2</p>
          <h3 class="">Réduire l’usage du plastique est une priorité</h3>
          <pre>Savez-vous que, tous les ans, 6,5 millions de tonnes de plastique sont déversées dans l’océan, et que les bouteilles en plastique font partie du top 10 des déchets récupérés sur les plages ?</pre>
          <q-expansion-item class="" dense label="Plus d'informations..." header-class="expander">
            <q-card>
              <q-card-section class="expander--content">
                <pre>D’où viennent-elles ? En grande partie, de nos consommations terrestres. 9,3 milliards de litres d’eau en bouteille en plastique sont ainsi consommées par an en France alors que l’ensemble de la population a la chance d’avoir accès à de l’eau potable.

La France s’est d’ailleurs donnée pour objectif ambitieux de réduire de 50% le nombre de bouteilles en plastique à usage unique d’ici à 2030. Et Akualis souhaite contribuer à cette objectif en localisant un maximum de points d’eau pour permettre à chacun de trouver facilement un point d’eau pour remplir sa gourde.</pre>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
        <div class="col-12 col-md-6 column flex-center">
          <img class="constat--image" src="/img/akualis-no-plastic-ocean.webp"
            alt="Photo constat n°2 - Réduire l’usage du plastique est une priorité" />
        </div>
      </div>

      <div class="row justify-center bg-white highlight q-mt-lg constat--row">
        <div class="col-12 col-md-6 column flex-center">
          <img class="constat--image" src="/img/akualis-carte-interactive.webp"
            alt="Photo constat n°3 - L’accès à l’eau potable, un droit de l’homme universel" />
        </div>
        <div class="col-12 col-md-6 constat--text">
          <p class="">Constat N°3</p>
          <h3 class="">L’accès à l’eau potable, un droit de l’homme universel</h3>
          <pre>Véritable enjeu de santé publique, l’OMS déclare que l’accès à l’eau potable est un droit de l’homme universel et demande aux Etats de faciliter l’accès à des fontaines publiques.</pre>
          <q-expansion-item class="" dense label="Plus d'informations..." header-class="expander">
            <q-card>
              <q-card-section class="expander--content">
                <pre>En France, poussés par la loi AGEC, les collectivités et établissements accueillants du public sont ainsi engagés dans le déploiement accéléré de sources d’eau potable, mais elles sont bien souvent très peu visibles et donc peu utilisées.

Grâce à Akualis ces collectivités et organismes publics pourront informer plus efficacement les citoyens sur les ressources mises à leur disposition. Et les utilisateurs de l'application pourront remplir leur gourdes en ville, dans les gares, dans les centres commerciaux en toute confiance.</pre>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>

      <div class="row q-pt-xl q-my-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">EN CHIFFRES</p>
          <h2 class="">L’enjeu d’une meilleure localisation des points d’eau</h2>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-4 number">
          <p class="number--high">25 <span class="text">millions</span></p>
          <p class="number--text small">de bouteilles d’eau en plastique sont consommées par jour en France</p>
        </div>
        <div class="col-4 number">
          <p class="number--high">75 <span class="text">%</span></p>
          <p class="number--text small">des touristes achètent des bouteilles en plastique lors de leur séjour</p>
        </div>
        <div class="col-4 number">
          <p class="number--high">2 <span class="text">litres</span></p>
          <p class="number--text small">d’eau ainsi que 42 L de gaz, 100 ml de pétrole et 80 g de charbon sont nécessaires pour produire une bouteille en plastique d’1L
          </p>
        </div>
      </div>

    </section>

    <section id="team" class="full-width items-center text-center q-pt-xl">

      <div class="row q-mt-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">L'équipe</p>
          <h2 class="">Qui sommes nous ?</h2>
          <pre class="text-left">Akualis s'engage à servir l'intérêt général, en mettant en avant des valeurs de transparence et de collaboration.

A l’origine de l’association, une équipe de 3 fondateurs convaincus qu’un effort collectif est essentiel pour limiter la dégradation environnementale actuelle, et dotés de compétences complémentaires pour lancer le projet :

<strong>Pauline</strong> apporte son expertise en communication, construction du business plan et développement des partenariats stratégiques,        

<strong>Maxime</strong> est garant de la pertinence technique de la plateforme Akualis, de son optimisation et de sa scalabilité,

<strong>Jérémie</strong> est passionné par l’entrepreneuriat solidaire et apporte son expérience dans la gestion de projets technologiques complexes, notamment en matière d’organisation, de budget et de planning, pour garantir la réussite de l’association dans sa mission.</pre>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>


    </section>

    <section id="testimonials" class="full-width items-center text-center q-py-xl">

      <div class="row q-pb-xl q-my-xl gt-sm">
        <div class="col-1"></div>
        <div class="col-10">
          <p class="subtitle">Témoignages</p>
          <div class="row q-pt-xl q-mt-xl">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="col-4">
              <img :src=testimonial.picture :alt=testimonial.alt />
              <h3>{{ testimonial.name }}</h3>
              <p>{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>

      <div class="q-py-xl lt-md">
        <p class="subtitle">Témoignages</p>
        <q-carousel v-model="testimonialSlide" transition-prev="slide-right" transition-next="slide-left" animated
          navigation swipeable arrows control-color="accent" class="rounded-borders">
          <q-carousel-slide v-for="testimonial in testimonials" :key="testimonial.name" :name="testimonial.name"
            class="column no-wrap flex-center">
            <div class="q-mb-xl text-center">
              <img :src=testimonial.picture :alt=testimonial.alt />
              <h3>{{ testimonial.name }}</h3>
              <p>{{ testimonial.quote }}</p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

    </section>

  </div>

  <section id="inform" class="full-width items-center text-center q-py-xl">
    <div class="row">
      <div class="col-1 col-md-3"></div>
      <div class="col-10 col-md-6">
        <h2 class="q-pt-lg">Deviens toi aussi un explorateur de l’eau !</h2>
        <pre class="">En téléchargeant Akualis, vous aurez l'opportunité unique de contribuer à la création de cette carte répertoriant les points d’eau potable à travers le monde, en identifiant de nouvelles sources d'eau et en confirmant la qualité de celles déjà répertoriées. Carte dont vous pourrez vous-même bénéficier lorsque vous chercherez à remplir votre gourde, réduisant ainsi votre impact environnemental !</pre>

        <div class="row justify-center items-center">
          <a class="q-ma-md" target="_blank"
            href="https://apps.apple.com/fr/app/akualis/id6477761379?itsct=apps_box_badge&amp;itscg=30200"
            style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 79px;"><img
              src="/img/App_Store_badge_fr.png" width="250" height="79" alt="Télécharger dans l'App Store"
              style="border-radius: 13px; width: 250px; height: 79px;"></a>
          <a class="q-ma-md" target="_blank"
            href="https://play.google.com/store/apps/details?id=com.akualis.app&pcampaignid=web_share"
            style="display: inline-block; overflow: hidden; height: 78px;"><img
              src="/img/Google_Play_Store_badge_FR.svg" alt="Disponible sur Google Play" style="height: 78px;"></a>
        </div>

        <img id="hero-logo" class="" src="/img/akualis-logo.webp"
          alt="Logo de l'application Akualis répertoriant les points d'eau potable" />
      </div>
      <div class="col-1 col-md-3"></div>
    </div>
  </section>

  <q-footer class="bg-blue-light text-grey q-py-lg q-px-xl text-center">
    <!-- <div class="float-left q-pb-sm">
      <a style="text-decoration: underline; color: inherit;" href="mailto:hello@akualis.com"
        title="Akualis App mail">hello@akualis.com</a>
    </div>
    
    <div class="float-right">© 2024 Akualis App. Tous droits réservés.</div>
   -->
    <!-- <a style="text-decoration: underline; color: inherit;" href="/infos-legales"
        title="CGU / mentions légales">CGU / Mentions
        légales</a> |  -->
    <div class="row justify-between items-center">
      <div class="col-12 col-md-4 q-mb-xs">
        <a style="text-decoration: underline; color: inherit;" href="mailto:hello@akualis.com"
          title="Akualis App mail">hello@akualis.com</a>
      </div>
      <div class="col-12 col-md-4 q-mb-xs">
        <q-btn color="primary" size="18px" flat round dense icon="mdi-linkedin" @click="goToSocial('linkedin')" />
        <q-btn color="primary" size="18px" flat round dense icon="mdi-facebook" @click="goToSocial('facebook')" />
        <q-btn color="primary" size="18px" flat round dense icon="mdi-instagram" @click="goToSocial('instagram')" />
      </div>
      <div class="col-12 col-md-4 q-mb-xs">© 2025 Akualis App. Tous droits réservés.</div>
    </div>

  </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMeta } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      showToolbar: true,
      lastScrollPosition: 0,
      previousScroll: 0,
      scrollCarouselEnabled: false,
      isScrolledPastThreshold: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  },

  beforeUnmount() {
    window.removeEventListener('scroll', () => {
      this.handleScroll();
    });
  },
  methods: {
    handleScroll() {

      // MENU
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const toolbar = document.querySelector('#menu');

      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        if (currentScrollPosition > 50 && !this.isScrolledPastThreshold) {  // Adjust the 50 value as needed
          this.isScrolledPastThreshold = true;
          if (toolbar) {
            toolbar.classList.add("menu-end");
            toolbar.classList.remove("menu-start");
          }
        }
      } else {
        // Scrolling up
        if (currentScrollPosition <= 50 && this.isScrolledPastThreshold) {  // Adjust the 50 value as needed
          this.isScrolledPastThreshold = false;
          if (toolbar) {
            toolbar.classList.remove("menu-end");
            toolbar.classList.add("menu-start");
          }
        }
      }

      // MENU HIGHLIGHT
      const menuItems = document.querySelectorAll('.menu-item');
      const currentScroll = window.scrollY + window.innerHeight * 0.25;
      menuItems.forEach((item) => {
        const targetHref = item.getAttribute('href');
        if (targetHref) {
          const targetSection = document.querySelector(targetHref);
          if (targetSection && targetSection instanceof HTMLElement) {
            // Check for the first section specifically
            if (item.getAttribute('href') === "#constat") {
              if (currentScroll < 700) {
                item.classList.remove('active');
                return;
              } else if (this.previousScroll > currentScroll && currentScroll > (targetSection.offsetTop + targetSection.offsetHeight)) {
                // If scrolling up and the current position has scrolled past the end of the first section
                item.classList.remove('active');
                return;
              }
            }


            if (targetSection && targetSection.offsetTop <= currentScroll && (targetSection.offsetTop + targetSection.offsetHeight) > currentScroll) {
              menuItems.forEach(el => el.classList.remove('active'));
              item.classList.add('active');
            }
          }
        }

      });

      // // CAROUSEL
      // if (this.scrollCarouselEnabled) {
      //   if (currentScrollPosition > this.lastScrollPosition) {
      //     // downscroll
      //     this.$refs.previewCarousel.next();
      //     console.log("next");
      //   } else {
      //     // upscroll
      //     this.$refs.previewCarousel.previous();
      //   }
      // }

      // ALL
      this.previousScroll = currentScroll;  // Update the previousScroll value for the next scroll event
      this.lastScrollPosition = currentScrollPosition;

    },
    disableScrollCarousel() {
      this.scrollCarouselEnabled = false;
    },
    enableScrollCarousel() {
      this.scrollCarouselEnabled = true;
    },
    smoothScrollTo(event: Event) {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement; // Cast to HTMLAnchorElement for href
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    btnSmoothScrollTo(targetId: string) {
      console.log("clicked");
      const targetElement = document.getElementById(targetId.substring(1)); // Remove '#' from ID
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  setup() {

    const metaData = {
      link:
      {
        canonical: { rel: 'canonical', href: 'https://akualis.com/' }
      }
    };

    useMeta(metaData);

    const socialLinks: Record<string, string> = {
      facebook: "https://www.facebook.com/profile.php?id=61573013273416",
      linkedin: "https://www.linkedin.com/company/akualis",
      instagram: "https://www.instagram.com/akualis_fountain/",
    };

    const goToSocial = (platform: keyof typeof socialLinks): void => {
      const url = socialLinks[platform];
      if (url) {
        window.open(url, "_blank");
      } else {
        console.warn(`No link defined for ${platform}`);
      }
    };

    const appPreviews = [
      {
        picture: '/img/preview/akualis-app-preview-map.webp',
        alt: 'App Akualis - aperçu de la carte',
        info: {
          left: {
            title: 'Des sources validées',
            description: 'Des points d’eau confirmés en temps réel par les contributeurs de l’application'
          },
          right: {
            title: 'Des points d’eau à jour',
            description: 'Confirmés par les contributeurs qui garantissent la pertinence de l’information'
          }
        }
      },
      {
        picture: '/img/preview/akualis-app-preview-detail-fontaine.webp',
        alt: 'App Akualis - aperçu des détails d’une fontaine',
        info: {
          left: {
            title: 'Accès et localisation facilités',
            description: 'Un bouton pour se rendre directement à la source avec une photo pour la retrouver aisément.'
          },
          right: {
            title: 'Historique d’utilisation',
            description: 'Identifiez quand la fontaine a été utilisée pour la dernière fois, assurant son existence et sa fiabilité.'
          }
        }
      },
      {
        picture: '/img/preview/akualis-app-preview-parcours-gpx.webp',
        alt: 'App Akualis - aperçu de l’import de fichier GPX',
        info: {
          left: {
            title: 'Importez vos parcours',
            description: 'Ajoutez un fichier GPX pour afficher votre itinéraire et localiser facilement les points d’eau sur votre chemin.'
          },
          right: {
            title: 'Planifiez sereinement',
            description: 'Anticipez vos arrêts en identifiant les points d’eau disponibles le long de votre trajet.'
          }
        }
      },
      {
        picture: '/img/preview/akualis-app-preview-compte.webp',
        alt: 'App Akualis - aperçu du compte utilisateur',
        info: {
          left: {
            title: 'Suivez vos contributions',
            description: 'Gardez un œil sur vos ajouts et modifications pour aider la communauté.'
          },
          right: {
            title: 'Affichez votre classement',
            description: 'Découvrez où vous vous situez parmi les contributeurs actifs et mesurez votre impact.'
          }
        }
      }
    ]

    const testimonials = [
      {
        name: 'Lyla',
        picture: '/img/portrait/akualis-lyla.webp',
        alt: 'Photo de Lyla - utilisatrice de l\'application Akualis pour trouver des points d\'eau potable',
        quote: 'Grâce à Akualis, je peux facilement trouver des points d’eau quand je me balade avec mes parents et remplir ma gourde plutôt qu’utiliser du plastique',
      },
      {
        name: 'Benoît',
        picture: '/img/portrait/akualis-benoit.webp',
        alt: 'Photo de Benoît - utilisateur de l\'application Akualis pour trouver des points d\'eau potable',
        quote: 'En rando, en vélo, en ville, Akualis me permet de recharger mes gourdes et de profiter pleinement de mes sorties sportives',
      },
      {
        name: 'Philippe',
        picture: '/img/portrait/akualis-philippe.webp',
        alt: 'Photo de Philippe - utilisateur de l\'application Akualis pour trouver des points d\'eau potable',
        quote: 'Akualis, au delà d’une application pratique est une application ludique et d’intérêt général'
      }
    ];

    return {
      appPreviewSlide: ref(appPreviews[0]!.alt),
      testimonialSlide: ref(testimonials[0]!.name),
      testimonials,
      appPreviews,
      goToSocial
    }
  }
});
</script>
