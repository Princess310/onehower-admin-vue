import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/pages/HomeView';
import UsersView from '@/pages/UsersView';
import LoginView from '@/pages/LoginView';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/user',
          name: 'UsersView',
          component: UsersView,
        },
      ],
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (true) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
