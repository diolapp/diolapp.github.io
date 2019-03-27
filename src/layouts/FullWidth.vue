<template>
  <v-app class="app">
    <v-navigation-drawer class="flex-column secondary pa-0 py-1" v-model="drawerOpen" disable-resize-watcher disable-route-watcher temporary app dark>
      <drawer-content />
    </v-navigation-drawer>

    <v-toolbar app dark scroll-off-screen color="secondary">
       <!-- We only show the side icon on small devices, otherwise navigation is duplicated -->
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawerOpen = true"></v-toolbar-side-icon>

      <!-- Add a spacer so the navigation goes to the right -->
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <!-- Main navigation for larger screens -->
        <v-btn class="hidden-sm-and-down" flat v-for="(link, index) in links" :to="link.to" :key="index">
          <v-icon v-show="link.icon">{{ link.icon }}</v-icon>
          &nbsp;{{ link.text }}
        </v-btn>

        <!-- Dropdown menu containing the analytics toggle -->
        <toolbar-dropdown-menu />

        <!-- Search menu, not implemented yet, so we'll just leave it commented out -->
        <!-- <toolbar-search /> -->
      </v-toolbar-items>
    </v-toolbar>

    <v-content class="grow pa-0">
        <slot />

        <to-top-fab />
        <analytics-dialog />
    </v-content>

    <v-footer app dark height="auto" color="secondary" class="d-flex">
      <footer-content />
    </v-footer>
  </v-app>
</template>

<script>
import AnalyticsDialog from '@/components/AnalyticsDialog.vue';
import DrawerContent from '@/components/DrawerContent.vue';
import FooterContent from '@/components/FooterContent.vue';
import ToolbarDropdownMenu from '@/components/ToolbarDropdownMenu.vue';
import ToolbarSearch from '@/components/ToolbarSearch.vue';
import ToTopFab from '@/components/ToTopFab.vue';
import navigations from '@/data/navigation.json';

export default {
  name: 'full-width-layout',
  components: {
    AnalyticsDialog,
    DrawerContent,
    FooterContent,
    ToolbarDropdownMenu,
    ToolbarSearch,
    ToTopFab,
  },
  computed: {
    currentYear() {
      console.log(this.$vuetify.breakpoint);
      return new Date().getFullYear();
    },
  },
  data() {
    return {
      links: navigations.main,
      drawerOpen: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.app, .flex-column {
  display: flex;
  flex-direction: column;
}

.fill-height {
  height: 100vh;
}

.grow {
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
