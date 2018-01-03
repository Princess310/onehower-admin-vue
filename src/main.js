// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import store from './store';

// import vuetify css file
import('vuetify/dist/vuetify.min.css');
// custom theme
Vue.use(Vuetify, {
  theme: {
    primary: '#00bcd4',
    secondary: '#f48fb1',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
