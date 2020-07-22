import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/inicio']
  },
  {
    path: '/opinions',
    name: 'Opinions',
    component: () => import('../views/Opinions.vue'),
    alias: ['/opiniones', '/comentarios']
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue'),
    alias: ['/me-gusta', '/mis-favoritos', '/lista-favoritos', '/like']
  },
  {
    path: '/administration',
    name: 'Administration',
    component: () => import('../views/Administration.vue'),
    alias: ['/administracion', '/admin', '/tabla']
  },
  {
    path: '/edit-opinion/:id',
    name: 'EditOpinion',
    component: () => import('../views/EditOpinion.vue'),
    alias: ['/editar-opinion', '/editar']
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
