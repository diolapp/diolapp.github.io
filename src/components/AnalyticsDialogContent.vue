<template>
  <v-card class="secondary white--text">
    <v-card-title class="headline primary">
      {{ title }}
    </v-card-title>
    <v-card-text v-html="content"></v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" flat @click="clickPrivacyPolicy">{{ privacyPolicy }}</v-btn>
      <v-btn color="primary" flat @click="clickEnable">{{ enableAnalytics }}</v-btn>
      <v-btn color="primary" flat @click="clickDisable">{{ disableAnalytics }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import strings from '@/data/strings/analytics-dialog-content';

export default {
  name: 'analytics-dialog-content',
  data() {
    return {
      title: strings.title,
      content: strings.content,
      enableAnalytics: strings.enableAnalytics,
      disableAnalytics: strings.disableAnalytics,
      privacyPolicy: strings.privacyPolicy,
    };
  },
  methods: {
    clickPrivacyPolicy() {
      this.$router.push('/policies/privacy');
      this.$store.commit('toggleShowAnalyticsPrompt');
    },

    clickEnable() {
      this.$store.commit('setAnalyticsEnabled', true);
      this.$store.commit('toggleShowAnalyticsPrompt');
    },

    clickDisable() {
      this.$store.commit('setAnalyticsEnabled', false);
      this.$store.commit('toggleShowAnalyticsPrompt');
    },
  },
};
</script>
