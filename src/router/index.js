import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //确保每个路由的 name 是唯一的
      name: 'home',
      component: () => import('@/views/tour/IndexView.vue')
    }
  ]
})

export default router
