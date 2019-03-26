<template>
  <v-menu right dark :close-on-content-click="false" offset-y :nudge-bottom="13" class="secondary">
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </template>

    <v-card dark class="secondary">
      <v-list>
        <v-list-tile @click="toggleAnalytics">
          <v-list-tile-title class="pr-3">Enable analytics</v-list-tile-title>
          <v-list-tile-action>
            <v-switch class="pt-2" v-model="analyticsEnabled"></v-switch>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'menu-large-screens',
  computed: {
    analyticsEnabled() {
      return this.$store.state.analyticsEnabled;
    },
  },
  methods: {
    toggleAnalytics() {
      this.$store.commit('toggleAnalyticsEnabled');
    },
  },
};
</script>
