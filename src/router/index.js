import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   { 
    path: '/',
    name: 'inicio',
    component: InicioView // Se carga al hacer el build con el npm
   },
   {
    path: '/favoritos',
    name: 'favoritos',
    component: () => import('../views/FavoritosView.vue') // Se carga cuando el usuario quiere acceder
   }
  ]
})

export default router
