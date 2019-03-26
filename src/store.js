/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerOpen: false,
    showGDPR: true,
    analyticsEnabled: false,
  },
  mutations: {
    setAnalyticsEnabled(state, status) {
      state.analyticsEnabled = status;
    },
    toggleDrawer(state) {
      state.drawerOpen = true;
    },
    toggleGDPR(state) {
      state.showGDPR = !state.showGDPR;
    },
    toggleAnalyticsEnabled(state) {
      state.analyticsEnabled = !state.analyticsEnabled;
    },
  },
  actions: {

  },
});
