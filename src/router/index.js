import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/formulario',
      name: 'formulario',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FormularioView.vue')
    },
    {
      path: '/visualizar',
      name: 'visualizar',
      component: () => import('../views/VisualizarView.vue')
    }
    
    
  ]
})

export default router
