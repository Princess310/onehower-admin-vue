import Vue from 'vue';
import Router from 'vue-router';
import HelloView from '@/pages/HelloView';
import UsersView from '@/pages/UsersView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloView',
      component: HelloView,
    },
    {
      path: '/user',
      name: 'UsersView',
      component: UsersView,
    },
  ],
});
