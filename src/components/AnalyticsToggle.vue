<template>
  <v-list-tile @click="toggleAnalytics">
    <v-list-tile-title class="pr-3">Enable analytics</v-list-tile-title>
    <v-list-tile-action>
      <v-switch class="pt-2" v-model="analyticsEnabled"></v-switch>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: 'analytics-toggle',
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

