<template>
  <v-card flat tile class="secondary flex white--text text-xs-center">
    <v-card-text class="pb-0">
      <v-btn v-for="(link, index) in social" :key="index" :href="link.to" target="_blank" class="mx-3 white--text" icon>
        <v-icon size="24px">{{ link.icon }}</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text class="pa-0">
      <v-btn v-for="(link, index) in secondary" :key="index" :to="link.to" color="white" flat>
        {{ link.text }}
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="white--text">
      Copyright &copy; {{ currentYear }} The Diol App Team.
      <br class="hidden-md-and-up" />
      Made with <a class="unstyled-link" href="https://vuejs.org/" target="_blank">Vue</a>
      and <a class="unstyled-link" href="https://vuetifyjs.com/" target="_blank">Vuetify</a>.
      Hosted on <a class="unstyled-link" href="https://pages.github.com/" target="_blank">Github Pages</a>.
    </v-card-text>
  </v-card>
</template>

<script>
import navigations from '@/data/navigation.json';

export default {
  name: 'footer-content',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  data() {
    return {
      secondary: navigations.secondary,
      social: navigations.social,
    };
  },
};
</script>
