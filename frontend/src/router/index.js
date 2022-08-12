import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '@/views/Accueil'
const routes = [
  {
    path: '/',
    name: 'accueil',
    component:Accueil
    
  },
  {
    path: '/eldiens',
    name: 'eldiens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Eldiens.vue')
  },
  {
    path: '/mahr',
    name: 'mahr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mahr.vue')
  },
  {
    path: '/Personnage',
    name: 'personnage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personnage.vue')
  },
  {
    path: '/titans',
    name: 'titans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Titans.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
