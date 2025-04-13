<template>
  <q-layout view="hHh lpr lff" class="bg-blue-light">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
