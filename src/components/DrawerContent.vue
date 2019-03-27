<template>
  <v-list class="py-0 flex-column fill-height overflow-y-hidden">
    <v-list-tile v-for="(link, index) in links" :key="index" :to="link.to">
      <v-list-tile-action v-if="link.icon">
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-spacer></v-spacer>

    <analytics-toggle />
  </v-list>
</template>

<script>
import AnalyticsToggle from '@/components/AnalyticsToggle.vue';
import navigations from '@/data/navigation.json';

export default {
  name: 'drawer-content',
  components: {
    AnalyticsToggle,
  },
  data() {
    return {
      links: navigations.main,
    };
  },
};
</script>
