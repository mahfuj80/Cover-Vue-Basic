import MainVue from '@/layouts/Main.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: MainVue
      },
      component: () => import('../pages/Home/HomePage.vue')
    }
  ]
})

export default router
