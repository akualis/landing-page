<template>
  <transition name="slide-fade">
    <q-toolbar v-if="showToolbar" id="menu" class="menu-start bg-white text-blue">

      <q-toolbar-title>
        Akualis
      </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </transition>

  <q-page class="row items-center justify-evenly q-mx-xl q-px-xl">
    <h1>Hello world!</h1>

    <p>
      What is Lorem Ipsum?<br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's<br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a<br> type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting,<br> remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing<br> Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of<br> Lorem Ipsum.<br><br> Why do we use it?<br> It is a long established fact that a
      reader will be distracted by the readable content of a page when looking at its<br> layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal distribution of letters, as opposed to<br> using 'Content here, content
      here', making it look like readable English. Many desktop publishing packages and web<br> page editors now use Lorem
      Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web<br> sites still in their
      infancy. Various versions have evolved over the years, sometimes by accident, sometimes on<br> purpose (injected
      humour and the like).<br><br><br> Where does it come from?<br> Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical Latin<br> literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney<br> College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and<br> going through the cites of the word in classical
      literature, discovered the undoubtable source. Lorem Ipsum comes<br> from sections 1.10.32 and 1.10.33 of "de
      Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,<br> written in 45 BC. This book is a treatise
      on the theory of ethics, very popular during the Renaissance. The first<br> line of Lorem Ipsum, "Lorem ipsum dolor
      sit amet..", comes from a line in section 1.10.32.<br><br> The standard chunk of Lorem Ipsum used since the 1500s is
      reproduced below for those interested. Sections 1.10.32<br> and 1.10.33 from "de Finibus Bonorum et Malorum" by
      Cicero are also reproduced in their exact original form,<br> accompanied by English versions from the 1914
      translation by H. Rackham.<br><br> Where can I get some?<br> There are many variations of passages of Lorem Ipsum
      available, but the majority have suffered alteration in some<br> form, by injected humour, or randomised words which
      don't look even slightly believable. If you are going to use a<br> passage of Lorem Ipsum, you need to be sure there
      isn't anything embarrassing hidden in the middle of text. All the<br> Lorem Ipsum generators on the Internet tend to
      repeat predefined chunks as necessary, making this the first true<br> generator on the Internet. It uses a
      dictionary of over 200 Latin words, combined with a handful of model sentence<br> structures, to generate Lorem
      Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from<br> repetition, injected
      humour, or non-characteristic words etc.<br><br> 5<br> paragraphs<br> words<br> bytes<br> lists<br> Start with
      'Lorem<br> ipsum dolor sit amet...'
    </p>
  </q-page>

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
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const toolbar = document.querySelector('#menu');

      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        if (currentScrollPosition > 50 && !this.isScrolledPastThreshold) {  // Adjust the 50 value as needed
          this.isScrolledPastThreshold = true;

          toolbar.classList.remove("menu-start");
          toolbar.classList.add("menu-end");
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
    }
  }
});
</script>
