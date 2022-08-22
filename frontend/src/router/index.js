import { createRouter, createWebHistory } from 'vue-router'
import Inscription from '@/views/Inscription.vue'
const routes = [
  {
    path: '/',
    name: 'inscription',
     component:Inscription
  },

  {
    path: '/listepersonnages',
    name: `La liste des personnages`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Accueil.vue')
  },
  {
    path: '/eldiens',
    name: `La liste des personnages d'origine eldiennes`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Eldiens.vue')
  },
  {
    path: '/mahr',
    name: 'La liste des personnages de Mahr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mahr.vue')
  },
  {
    path: '/personnage',
    name: `L'histoire du personnage`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personnage.vue')
  },
  {
    path: '/titans',
    name: 'La liste des titans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Titans.vue')
  },
  {
    path: '/créationPersonnage',
    name: `Création d'un personnage`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CréationPersonnage.vue')
  },

  {
    path: '/connexion',
    name: `connexion utilisateur`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
