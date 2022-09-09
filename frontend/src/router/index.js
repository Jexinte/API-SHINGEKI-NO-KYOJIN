import { createRouter, createWebHistory } from 'vue-router'
import Inscription from '@/views/Inscription.vue'

const routes = [
  {
    path: '/',
    name: 'inscription',
     component:Inscription
  },

  {
    path: '/listePersonnages',
    name: `La liste des personnages`,
    component: () => import(/* webpackChunkName: "about" */ '../views/Accueil.vue')
  },
  {
    path: '/eldiens',
    name: `La liste des personnages d'origine eldiennes`,
    component: () => import(/* webpackChunkName: "about" */ '../views/Eldiens.vue')
  },
  {
    path: '/mahr',
    name: 'La liste des personnages de Mahr',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mahr.vue')
  },
  {
    path: '/personnage',
    name: `L'histoire du personnage`,
    component: () => import(/* webpackChunkName: "about" */ '../views/Personnage.vue')
  },
  {
    path: '/titans',
    name: 'La liste des titans',
    component: () => import(/* webpackChunkName: "about" */ '../views/Titans.vue')
  },
  {
    path: '/créationPersonnage',
    name: `Création d'un personnage`,
    component: () => import(/* webpackChunkName: "about" */ '../views/CréationPersonnage.vue')
  },

  {
    path: '/connexion',
    name: `connexion utilisateur`,
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
  {
    path: '/modifier_un_personnage',
    name: `Modifier un personnage`,
    component: () => import(/* webpackChunkName: "about" */ '../views/ModifierPersonnage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
