/* eslint-disable no-param-reassign */

import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    showAnalyticsPrompt: true,
    analyticsEnabled: false,
  },
  mutations: {
    setAnalyticsEnabled(state, status) {
      state.analyticsEnabled = status;
      if (status === true) Vue.$ga.enable();
      else Vue.$ga.disable();
    },
    toggleShowAnalyticsPrompt(state) {
      state.showAnalyticsPrompt = !state.showAnalyticsPrompt;
    },
    toggleAnalyticsEnabled(state) {
      state.analyticsEnabled = !state.analyticsEnabled;
      if (state.analyticsEnabled === true) Vue.$ga.enable();
      else Vue.$ga.disable();
    },
  },
});
