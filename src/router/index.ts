import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: () => import('@/views/Movies.vue'),
    },
    {
      path: '/filmes/:id',
      name: 'filme',
      component: () => import('@/views/Movie.vue'),
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('@/views/Reviews.vue'),
    },
    {
      path: '/listas',
      name: 'lists',
      component: () => import('@/views/Lists.vue'),
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/views/About.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
