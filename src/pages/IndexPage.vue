<template>
  <div id="parent-menu">
    <div v-if="showToolbar" id="menu" class="menu-start bg-white text-blue">

      <img id="menu-logo" src="/img/akualis-logo.png" alt="Logo de l'application Akualis" />

      <ul>
        <li><a href="#constat" class="menu-item">Constat</a></li>
        <li><a href="#concept" class="menu-item">Concept</a></li>
        <li><a href="#testimonials" class="menu-item">Témoignages</a></li>
        <li><a href="#inform" class="menu-item hidden">S'informer</a></li>
      </ul>

      <q-btn id="hero-cta" class="gt-sm" href="#inform" color="primary" label="Découvrez Akualis" no-caps />
    </div>

    <q-btn id="hero-cta" class="cta-floating lt-md" href="#inform" color="primary" label="Découvrez Akualis" no-caps />
  </div>

  <section id="hero" class="full-width items-center text-center q-py-xl">
    <div class="row">
      <div class="col-1 col-md-3"></div>
      <div class="col-10 col-md-6">
        <img id="hero-logo" class="q-mt-xl q-pt-xl" src="/img/akualis-logo.png" alt="Logo de l'application Akualis" />
        <h1 class="q-pt-lg">Faciliter l’accès à l’eau potable pour tous</h1>
        <p class="q-pb-xl">Rejoignez la révolution de l'eau durable avec Akualis !</p>
      </div>
      <div class="col-1 col-md-3"></div>
    </div>
  </section>

  <div class="container-large">

    <section id="constat" class="full-width items-center text-center q-py-xl">
      <div class="row q-pb-xl q-my-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">Le constat</p>
          <h2 class="">L’eau potable : un enjeu de santé publique</h2>
          <p>Alors que l’eau devient une ressource de plus en plus rare, que les vagues de chaleur se multiplient, et que
            la
            nécessité de réduire l’utilisation de plastique se fait pressante,  les collectivités et les établissements
            accueillants du public ont pour objectifs de déployer de plus en plus de fontaines à eau. 
            Enjeu de santé publique, cette nécessité est soutenue par l’OMS qui affirme que l’accès à l’eau potable est un
            droit de l’homme universel et demande aux Etats de faciliter l’accès à des fontaines publiques.</p>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>

      <div class="row justify-center bg-white highlight constat--row">
        <div class="col-12 col-md-6">
          <img class="constat--image" src="/img/akualis-save-water.png" alt="Logo de l'application Akualis" />
        </div>
        <div class="col-12 col-md-6 constat--text">
          <p class="">Constat N°1</p>
          <h3 class="">Localiser les points d’eau potable est un challenge permanent</h3>
          <p>Alors que l’eau devient une ressource de plus en plus rare, que les vagues de chaleur se multiplient, et que
            la
            nécessité de réduire l’utilisation de plastique se fait pressante,  les collectivités et les établissements
            accueillants du public ont pour objectifs de déployer de plus en plus de fontaines à eau. 
            Enjeu de santé publique, cette nécessité est soutenue par l’OMS qui affirme que l’accès à l’eau potable est un
            droit de l’homme universel et demande aux Etats de faciliter l’accès à des fontaines publiques.</p>
        </div>
      </div>

      <div class="row justify-center bg-white highlight constat--row q-mt-lg reverse-wrap">
        <div class="col-12 col-md-6 constat--text">
          <p class="">Constat N°2</p>
          <h3 class="">Réduire l’usage du plastique est une priorité</h3>
          <p>Le plastique à usage unique est présent à outrance dans notre quotidien.. Il est indispensable de promouvoir
            les points d’eau potable pour limiter le recours aux bouteilles en plastiques.
            <br>La France a pour objectif de réduire de 50% le nombre de bouteilles en plastique à usage unique d’ici à
            2030.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <img class="constat--image" src="/img/akualis-no-plastic.png" alt="Logo de l'application Akualis" />
        </div>
      </div>

      <div class="row q-pt-xl q-my-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">EN CHIFFRES</p>
          <h2 class="">L’enjeu de la localisation et de la protection des points d’eau</h2>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-4 number">
          <p class="number--high">9,3</p>
          <p class="number--text small">milliards de litres d’eau en bouteille consommée chaque année en France</p>
        </div>
        <div class="col-4 number">
          <p class="number--high">55%</p>
          <p class="number--text small">de la population mondiale n’a pas accès à des services d’assainissemnt</p>
        </div>
        <div class="col-4 number">
          <p class="number--high">2030</p>
          <p class="number--text small">Les collectivités ont l’obligation de déployer massivement des points d’eau
            potable
            d’ici
          </p>
        </div>
      </div>

    </section>

    <section id="concept" class="full-width bg-white items-center text-center q-my-xl q-py-xl">
      <div class="row q-mt-xl">
        <div class="col-1 col-md-3"></div>
        <div class="col-10 col-md-6">
          <p class="subtitle">Le concept</p>
          <h2 class="">Bâtissons ensemble un monde hydraté et viable</h2>
        </div>
        <div class="col-1 col-md-3"></div>
      </div>

      <div class="preview-carousel">
        <!-- vertical transition-prev="slide-down" transition-next="slide-up" navigation-icon="radio_button_unchecked" -->
        <q-carousel ref="previewCarousel" v-model="appPreviewSlide" transition-prev="slide-right"
          transition-next="slide-left" swipeable animated control-color="blue" navigation arrows
          @mouseover="enableScrollCarousel" @mouseleave="disableScrollCarousel">

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

    <section id="testimonials" class="full-width items-center text-center q-py-xl">

      <div class="row q-pb-xl q-mb-xl gt-sm">
        <div class="col-1"></div>
        <div class="col-10">
          <p class="subtitle">Témoignages</p>
          <div class="row q-pt-xl q-mt-xl">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="col-4">
              <img :src=testimonial.picture />
              <h3>{{ testimonial.name }}</h3>
              <p>{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>

      <div class="q-py-md lt-md">
        <p class="subtitle">Témoignages</p>
        <q-carousel v-model="testimonialSlide" transition-prev="slide-right" transition-next="slide-left" animated
          navigation swipeable arrows control-color="primary" class="rounded-borders">
          <q-carousel-slide v-for="testimonial in testimonials" :key="testimonial.name" :name="testimonial.name"
            class="column no-wrap flex-center">
            <div class="q-mb-xl text-center">
              <img :src=testimonial.picture />
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
        <h2 class="q-pt-lg">Restez informé</h2>
        <p class="q-pb-xl">Akualis se donne la mission d’accompagner ce mouvement et de cartographier l’ensemble des
          points d’eau potables en France puis à l’étranger. Grâce à son application mobile simple, ludique et
          collaborative, Akualis permet à tous d’identifier rapidement les sources d’eau à proximité et incite les
          utilisateurs à identifier les points d’eau qui n’ont pas encore été répertoriés ou à confirmer leur présence,
          maintenant ainsi en temps réel sa base de données.
          <br>L’application sera disponible très prochainement. Partagez avec nous votre email pour être prévenu de son
          lancement.
        </p>

        <form>
          <q-input outlined bg-color="white" rounded :disable="isSubmitted" :error-message="emailActiveMessage"
            :error="emailError" lazy-rules v-model="email" :rules="[emailRule]" placeholder="Rester informé par email"
            class="input-email q-mx-auto">
            <template v-slot:append>
              <q-btn aria-label="Envoyez votre email" flat round dense @click="submitEmail" type="submit"
                :loading="isSubmitting">
                <img src="/img/akualis-icon.png" alt="Icône de Else pour envoyer l'adresse e-mail" width="40"
                  height="40" />
              </q-btn>
            </template>
          </q-input>
        </form>

        <img id="hero-logo" class="" src="/img/akualis-logo.png" alt="Logo de l'application Akualis" />
      </div>
      <div class="col-1 col-md-3"></div>
    </div>
  </section>

  <q-footer class="bg-blue-light text-grey q-py-lg q-px-xl text-center">
    <div class="float-left q-pb-sm">
      <!-- <a style="text-decoration: underline; color: inherit;" href="/infos-legales"
        title="CGU / mentions légales">CGU / Mentions
        légales</a> |  -->
      <a style="text-decoration: underline; color: inherit;" href="mailto:hello@akualis.com"
        title="Akualis App mail">hello@akualis.com</a>
    </div>
    <div class="float-right">© 2023 Akualis App. Tous droits réservés.</div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      showToolbar: true,
      lastScrollPosition: 0,
      previousScroll: 0,
      scrollCarouselEnabled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
          toolbar.classList.add("menu-end");
          toolbar.classList.remove("menu-start");
        }
      } else {
        // Scrolling up
        if (currentScrollPosition <= 50 && this.isScrolledPastThreshold) {  // Adjust the 50 value as needed
          this.isScrolledPastThreshold = false;

          toolbar.classList.remove("menu-end");
          toolbar.classList.add("menu-start");
        }
      }

      // MENU HIGHLIGHT
      const menuItems = document.querySelectorAll('.menu-item');
      let currentScroll = window.scrollY + window.innerHeight * 0.25;
      menuItems.forEach((item) => {
        let targetSection = document.querySelector(item.getAttribute('href'));

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
    }
  },
  setup() {
    const $q = useQuasar();
    const email = ref('');
    const emailError = ref(false);
    const emailMessage = {
      submitted: 'Votre email a bien été enregistré !',
      invalid: 'Email invalide.',
      error: 'Email existant ou problème de communication avec le serveur.'
    }
    const emailActiveMessage = ref(emailMessage.invalid);
    const isSubmitting = ref(false);
    const isSubmitted = ref(false);
    const emailRule = (val: string) => {
      if (val === '') return true;
      // Email validation pattern
      const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      emailError.value = false;
      return pattern.test(val) || emailMessage.invalid;
    }

    const submitEmail = async () => {
      // Handle email submission
      if (emailRule(email.value) === true) {
        // Do something with the email
        // console.log(email.value);
        try {
          $q.loading.show();  // Show loading spinner
          // console.log('Email:', email.value);

          isSubmitting.value = true; // disable the input field and button
          emailError.value = false; // reset the error state
          emailActiveMessage.value = emailMessage.invalid;

          const response = await axios.post('/api/lead', { email: email.value });
          console.log('Response:', response);
          email.value = emailMessage.submitted;  // reset email
          isSubmitting.value = false;
          isSubmitted.value = true; // disable the input field and button
          $q.notify({ type: 'positive', message: emailMessage.submitted });  // Notify success
        } catch (error) {
          emailActiveMessage.value = emailMessage.error;
          emailError.value = true; // trigger the error state
          isSubmitting.value = false;
          isSubmitted.value = false;
          console.error('Error making API call:', error);
          $q.notify({ type: 'negative', message: emailMessage.error });
        } finally {
          $q.loading.hide();
        }
      } else {
        // console.log('Invalid email');

        emailActiveMessage.value = emailMessage.invalid;
        emailError.value = true;
        $q.notify({ type: 'negative', message: emailMessage.invalid });
      }
    }

    const appPreviews = [
      {
        picture: '/img/preview/akualis-app-preview-map.png',
        alt: 'App Akualis - aperçu de la carte',
        info: {
          left: {
            title: 'Des sources officielles',
            description: 'Des points d’eau listées par des organismes certifiés'
          },
          right: {
            title: 'Des points d’eau à jour',
            description: 'Confirmés par les contributeurs qui garantissent la pertinence de l’information'
          }
        }
      },
      {
        picture: '/img/preview/akualis-app-preview-detail-fontaine.png',
        alt: 'App Akualis - aperçu des détails d’une fontaine',
        info: {
          left: {
            title: 'Des sources officielles',
            description: 'Des points d’eau listées par des organismes certifiés'
          },
          right: {
            title: 'Des points d’eau à jour',
            description: 'Confirmés par les contributeurs qui garantissent la pertinence de l’information'
          }
        }
      },
      {
        picture: '/img/preview/akualis-app-preview-compte.png',
        alt: 'App Akualis - aperçu du compte utilisateur',
        info: {
          left: {
            title: 'Des sources officielles',
            description: 'Des points d’eau listées par des organismes certifiés'
          },
          right: {
            title: 'Des points d’eau à jour',
            description: 'Confirmés par les contributeurs qui garantissent la pertinence de l’information'
          }
        }
      }
    ]

    const testimonials = [
      {
        name: 'Lyla',
        picture: '/img/portrait/akualis-lyla.png',
        alt: 'Photo de Lyla',
        quote: 'Grâce à Akualis, je peux facilement trouver des points d’eau quand je me balade avec parents et remplir ma gourde plutôt qu’utiliser du plastique',
      },
      {
        name: 'Benoît',
        picture: '/img/portrait/akualis-benoit.png',
        alt: 'Photo de Benoît',
        quote: 'En rando, en vélo, en ville, Akualis me permet de recharger mes gourdes et de profiter pleinement de mes sorties sportives',
      },
      {
        name: 'Philippe',
        picture: '/img/portrait/akualis-philippe.png',
        alt: 'Photo de Philippe',
        quote: 'Akualis, au delà d’une application pratique est une application ludique et d’intérêt général'
      }
    ];

    return {
      email,
      emailRule,
      submitEmail,
      emailError,
      emailActiveMessage,
      isSubmitting,
      isSubmitted,
      appPreviewSlide: ref(appPreviews[0].alt),
      testimonialSlide: ref(testimonials[0].name),
      testimonials,
      appPreviews
    }
  }
});
</script>
