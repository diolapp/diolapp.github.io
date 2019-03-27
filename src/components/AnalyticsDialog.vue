<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="showAnalyticsPrompt"
      :max-width="maxWidth"
      :fullscreen="$vuetify.breakpoint.smAndDown"
      :hide-overlay="$vuetify.breakpoint.smAndDown"
      :transition="transitionName"
      persistent>
      <analytics-dialog-content />
    </v-dialog>
  </v-layout>
</template>

<script>
import AnalyticsDialogContent from '@/components/AnalyticsDialogContent.vue';

export default {
  name: 'analytics-dialog',
  components: {
    AnalyticsDialogContent,
  },
  computed: {
    showAnalyticsPrompt() {
      return this.$store.state.showAnalyticsPrompt;
    },
    maxWidth() {
      if (this.$vuetify.breakpoint.mdAndUp) return '50vw';
    },
    transitionName() {
      if (this.$vuetify.breakpoint.smAndDown) return 'dialog-bottom-transition';
    }
  },
};
</script>
