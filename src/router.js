import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/inconsistent',
      name: 'inconsistent',
      component: () => import(/* webpackChunkName: "inconsistent" */ './views/InconsistentPage.vue'),
    },
    {
      path: '/normalized',
      name: 'normalized',
      component: () => import(/* webpackChunkName: "normalized" */ './views/NormalizedPage.vue'),
    },
    {
      path: '/vuex-normalized',
      name: 'vuex-normalized',
      component: () => import(/* webpackChunkName: "vuex-normalized" */ './views/VuexNormalizedPage.vue'),
    },
  ],
});
