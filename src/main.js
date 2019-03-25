import '@babel/polyfill';
import '@fortawesome/fontawesome-free/js/all'; // eslint-disable-line
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import DefaultLayout from './layouts/Default.vue';
import FullWidthLayout from './layouts/FullWidth.vue';

Vue.config.productionTip = false;

Vue.component('FullWidthLayout', FullWidthLayout);
Vue.component('DefaultLayout', DefaultLayout);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
