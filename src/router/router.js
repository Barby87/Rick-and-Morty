import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/opinions',
    name: 'Opinions',
    component: () => import('../views/Opinions.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/administration',
    name: 'Administration',
    component: () => import('../views/Administration.vue')
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/Error404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
