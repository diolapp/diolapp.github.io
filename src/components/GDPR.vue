<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="75vw">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Pardon the interruption
        </v-card-title>
        <v-card-text>
          Due to GDPR requirements, we must ask you if you would like to
          enable tracking on our website. We use Google Analytics, and we
          take your privacy very seriously. If you wish to get more
          information about our policies regarding your privacy, simply
          click Privacy Policy below. You can also change this option at
          any time by clicking on the menu on the navbar and changing the
          Analytics Enabled option. You cannot close this dialog until
          an option is selected...sorry about that.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="clickPrivacyPolicy">Privacy Policy</v-btn>
          <v-btn color="primary" flat @click="clickEnable">Enable</v-btn>
          <v-btn color="primary" flat @click="clickDisable">Disable</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'gdpr',
  computed: {
    dialog() {
      return this.$store.state.showGDPR;
    },
  },
  methods: {
    clickPrivacyPolicy() {
      this.$router.push('/policies/privacy');
      this.$store.commit('toggleGDPR');
    },

    clickEnable() {
      this.$ga.enable();
      this.$store.commit('setAnalyticsEnabled', true);
      this.$store.commit('toggleGDPR');
    },

    clickDisable() {
      this.$ga.disable();
      this.$store.commit('setAnalyticsEnabled', false);
      this.$store.commit('toggleGDPR');
    }
  },
};
</script>
