<template>
  <div id="parent-menu">
    <div v-if="showToolbar" id="menu" class="menu-start bg-white text-blue">

      <img id="menu-logo" src="/img/akualis-logo.png" alt="Logo de l'application Akualis" />

      <ul>
        <li><a href="#constat" class="menu-item">Constat</a></li>
        <li><a href="#concept" class="menu-item">Concept</a></li>
        <li><a href="#testimonials" class="menu-item">Témoignages</a></li>
        <!-- ... add more sections as needed -->
      </ul>

      <q-btn id="hero-cta" color="primary" label="Découvrez Akualis" no-caps />
    </div>
  </div>

  <section id="hero" class="full-width items-center text-center q-py-xl">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <img id="hero-logo" class="q-mt-xl q-pt-xl" src="/img/akualis-logo.png" alt="Logo de l'application Akualis" />
        <h1 class="q-pt-lg">Faciliter l’accès à l’eau potable pour tous</h1>
        <p class="q-pb-xl">Rejoignez la révolution de l'eau durable avec Akualis !</p>
      </div>
      <div class="col-3"></div>
    </div>
  </section>

  <section id="constat" class="full-width items-center text-center q-py-xl">
    <div class="row q-pb-xl q-my-xl">
      <div class="col-3"></div>
      <div class="col-6">
        <p class="subtitle">Le constat</p>
        <h2 class="">L’eau potable : un enjeu de santé publique</h2>
        <p>Alors que l’eau devient une ressource de plus en plus rare, que les vagues de chaleur se multiplient, et que la
          nécessité de réduire l’utilisation de plastique se fait pressante,  les collectivités et les établissements
          accueillants du public ont pour objectifs de déployer de plus en plus de fontaines à eau. 
          Enjeu de santé publique, cette nécessité est soutenue par l’OMS qui affirme que l’accès à l’eau potable est un
          droit de l’homme universel et demande aux Etats de faciliter l’accès à des fontaines publiques.</p>
      </div>
      <div class="col-3"></div>
    </div>

    <div class="row bg-white">
      <div class="col-6">
        <img class="constat--image" src="/img/akualis-save-water.png" alt="Logo de l'application Akualis" />
      </div>
      <div class="col-6 constat--text">
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

    <div class="row bg-white q-mt-lg">
      <div class="col-6 constat--text">
        <p class="">Constat N°2</p>
        <h3 class="">Réduire l’usage du plastique est une priorité</h3>
        <p>Le plastique à usage unique est présent à outrance dans notre quotidien.. Il est indispensable de promouvoir
          les points d’eau potable pour limiter le recours aux bouteilles en plastiques.
          <br>La France a pour objectif de réduire de 50% le nombre de bouteilles en plastique à usage unique d’ici à
          2030.
        </p>
      </div>
      <div class="col-6">
        <img class="constat--image" src="/img/akualis-no-plastic.png" alt="Logo de l'application Akualis" />
      </div>
    </div>

    <div class="row q-pt-xl q-my-xl">
      <div class="col-3"></div>
      <div class="col-6">
        <p class="subtitle">EN CHIFFRES</p>
        <h2 class="">L’enjeu de la localisation et de la protection des points d’eau</h2>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-4 number">
        <p class="number--high">9,3</p>
        <p class="number--text">milliards de litres d’eau en bouteille consommée chaque année en France</p>
      </div>
      <div class="col-4 number">
        <p class="number--high">55%</p>
        <p class="number--text">de la population mondiale n’a pas accès à des services d’assainissemnt</p>
      </div>
      <div class="col-4 number">
        <p class="number--high">2030</p>
        <p class="number--text">Les collectivités ont l’obligation de déployer massivement des points d’eau potable d’ici
        </p>
      </div>
    </div>

  </section>

  <section id="concept" class="full-width bg-white items-center text-center q-my-xl q-py-xl">
    <div class="row q-my-xl">
      <div class="col-3"></div>
      <div class="col-6">
        <p class="subtitle">Le concept</p>
        <h2 class="">Bâtissons ensemble un monde hydraté et viable</h2>
        <p>Alors que l’eau devient une ressource de plus en plus rare, que les vagues de chaleur se multiplient, et que la
          nécessité de réduire l’utilisation de plastique se fait pressante,  les collectivités et les établissements
          accueillants du public ont pour objectifs de déployer de plus en plus de fontaines à eau. 
          Enjeu de santé publique, cette nécessité est soutenue par l’OMS qui affirme que l’accès à l’eau potable est un
          droit de l’homme universel et demande aux Etats de faciliter l’accès à des fontaines publiques.</p>
      </div>
      <div class="col-3"></div>
    </div>

  </section>

  <section id="testimonial" class="full-width items-center text-center q-py-xl">
    <div class="row q-pb-xl q-my-xl">
      <div class="col-1"></div>
      <div class="col-10">
        <p class="subtitle">Témoignages</p>
        <br>
        <div class="row">
          <div class="col-4">1</div>
          <div class="col-4">2</div>
          <div class="col-4">3</div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>

  </section>

  <q-footer class="bg-blue-light text-grey q-py-xl q-px-xl">
    <div class="float-left q-pb-sm"><a style="text-decoration: underline; color: inherit;" href="/infos-legales"
        title="CGU / mentions légales">CGU / Mentions
        légales</a> | <a style="text-decoration: underline; color: inherit;" href="mailto:hello@akualis.com"
        title="Akualis App mail">hello@akualis.com</a></div>
    <div class="float-right">© 2023 Akualis App. Tous droits réservés.</div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      showToolbar: true,
      lastScrollPosition: 0,
      previousScroll: 0,
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

      this.lastScrollPosition = currentScrollPosition;

      // MENU HIGHLIGHT
      const menuItems = document.querySelectorAll('.menu-item');
      let currentScroll = window.scrollY + window.innerHeight * 0.25;
      menuItems.forEach((item) => {
        let targetSection = document.querySelector(item.getAttribute('href'));

        // Check for the first section specifically
        if (item.getAttribute('href') === "#constat") {
          if (currentScroll < 200) {
            item.classList.remove('active');
            return;
          } else if (this.previousScroll > currentScroll && currentScroll > (targetSection.offsetTop + targetSection.offsetHeight)) {
            // If scrolling up and the current position has scrolled past the end of the first section
            item.classList.remove('active');
            return;
          }
        }


        if (targetSection.offsetTop <= currentScroll && (targetSection.offsetTop + targetSection.offsetHeight) > currentScroll) {
          menuItems.forEach(el => el.classList.remove('active'));
          item.classList.add('active');
        }
      });


      this.previousScroll = currentScroll;  // Update the previousScroll value for the next scroll event

    }
  }
});
</script>
