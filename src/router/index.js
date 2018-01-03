import Vue from 'vue';
import Router from 'vue-router';
import HelloView from '@/pages/HelloView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloView,
    },
  ],
});
