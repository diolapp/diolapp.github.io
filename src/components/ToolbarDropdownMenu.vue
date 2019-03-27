<template>
  <v-menu right dark :close-on-content-click="false" offset-y :nudge-bottom="13" class="secondary">
    <template v-slot:activator="{ on }">
      <v-btn class="hidden-sm-and-down" dark icon v-on="on">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </template>

    <v-card dark class="secondary">
      <v-list>
        <analytics-toggle />
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import AnalyticsToggle from './AnalyticsToggle.vue';

export default {
  name: 'toolbar-dropdown-menu',
  components: {
    AnalyticsToggle,
  },
};
</script>
