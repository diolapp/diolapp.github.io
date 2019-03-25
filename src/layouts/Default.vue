<template>
  <v-app class="app">
    <v-navigation-drawer v-model="$store.state.drawerOpen" temporary app dark color="secondary">
      <v-list>
        <v-list-tile v-for="(link, index) in main" :key="index" :to="link.to">
          <v-list-tile-action v-if="link.icon">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark scroll-off-screen color="secondary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="$store.commit('toggleDrawer')"></v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(link, index) in main" :to="link.to" :key="index">
          <v-icon v-show="link.icon">{{ link.icon }}</v-icon>
          &nbsp;{{ link.text }}
        </v-btn>
      </v-toolbar-items>

      <!--
        <v-toolbar-items>
          <v-btn flat icon @click.prevent="toggleSearch">
            <v-icon>search</v-icon>
          </v-btn>
          <v-expand-x-transition>
            <div v-show="searchOpen">
              <v-text-field ref="searchField" id="search-field" @keydown.escape="toggleSearch" v-model="searchText" hide-details single-line clearable></v-text-field>
            </div>
          </v-expand-x-transition>
        </v-toolbar-items>
      -->
    </v-toolbar>

    <v-content dark class="content pb-5">
      <v-container>
        <slot />

        <to-top-fab />
      </v-container>
    </v-content>

    <v-footer app dark height="auto" color="secondary" class="d-flex">
      <v-card flat tile class="flex lighen-1 white--text text-xs-center">
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
    </v-footer>
  </v-app>
</template>

<script>
import ToTopFab from '@/components/ToTopFab.vue'
import navigations from '@/data/navigation.json';
import { setTimeout } from 'timers';

export default {
  name: 'default-layout',
  components: {
    'to-top-fab': ToTopFab,
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    drawerOpen() {
      return this.$store.state.drawerOpen;
    }
  },
  data() {
    return {
      main: navigations.main,
      secondary: navigations.secondary,
      social: navigations.social,
      searchText: '',
      searchOpen: false,
    };
  },
  methods: {
    toggleSearch(e) {
      if (this.searchOpen) {
        return this.hideSearch(e);
      }

      return this.expandSearch();
    },

    expandSearch() {
      this.searchOpen = true;
      setTimeout(() => document.addEventListener('click', this.hideSearch), 0);
      this.$nextTick(this.$refs.searchField.focus);
    },

    hideSearch(e) {
      if ((document.activeElement === document.getElementById('search-field')) && e.type !== 'keydown') return;
      this.searchOpen = false;
      document.removeEventListener('click', this.hideSearch);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.app {
  display: flex;
  flex-direction: column;
}

.content, .v-content {
  flex-grow: 1;
}

.unstyled-link {
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

footer {
  position: relative !important;
}
</style>
