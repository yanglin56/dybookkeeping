import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Profile from '@/views/Profile.vue';
import Statistics from '@/views/Profile.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/money',
    component: Money,
  },
  {
    path: '/labels',
    component: Labels,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/statistics',
    component: Statistics,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
