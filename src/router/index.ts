import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Profile from '@/views/Profile.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabels from '@/views/EditLabels.vue';

Vue.use(VueRouter);

const routes = [
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
    path: '/labels/edit/:id',
    component: EditLabels,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/statistics',
    component: Statistics,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
