import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //确保每个路由的 name 是唯一的
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/websocket',
      //确保每个路由的 name 是唯一的
      name: 'websocket',
      component: () => import('@/views/websocket/IndexView.vue')
    },
    {
      path: '/scroll',
      //确保每个路由的 name 是唯一的
      name: 'scroll',
      component: () => import('@/views/scroll/IndexView.vue')
    },
    {
      path: '/test',
      //确保每个路由的 name 是唯一的
      name: 'test',
      component: () => import('@/views/test/IndexView.vue')
    },
    {
      path: '/tour',
      //确保每个路由的 name 是唯一的
      name: 'test',
      component: () => import('@/views/tour/IndexView.vue')
    },
    {
      path: '/about',
      //确保每个路由的 name 是唯一的
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //在 Vue.js 中，路由级别的代码分割（code-splitting）是一种优化技术，可以减少初始加载时间。
      // 通过懒加载（lazy loading）组件，你可以将每个路由对应的组件打包成单独的 JavaScript 文件，并且只有当用户访问该路由时才会加载相应的文件。
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
