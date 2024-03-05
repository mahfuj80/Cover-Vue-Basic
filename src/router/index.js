import MainVue from '@/layouts/Main.vue'
import Custom from '@/layouts/Custom.vue'
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
      component: () => import('../pages/Home/HomePage.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('../pages/About/About.vue')
        }
      ]
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        layout: Custom
      },
      component: () => import('../pages/Product/ProductDetails.vue')
    }
  ]
})

export default router
