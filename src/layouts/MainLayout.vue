<template>
  <q-layout view="hHh lpr lff" class="bg-blue-light">
    <q-page-container class="container-large">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup() {
    return {
    }
  }
});
</script>
