import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    // {
    //   path: '/filmes',
    //   name: 'filmes',
    //   component: () => import('@/views/Movies.vue'),
    //   meta: {
    //     title: 'Filmes',
    //   },
    // },
    {
      path: '/filme/:id',
      name: 'filme',
      component: () => import('@/views/Movie.vue'),
      meta: {
        title: 'Filme',
      },
    },
    // {
    //   path: '/reviews',
    //   name: 'reviews',
    //   component: () => import('@/views/Reviews.vue'),
    //   meta: {
    //     title: 'Reviews',
    //   },
    // },
    // {
    //   path: '/listas',
    //   name: 'lists',
    //   component: () => import('@/views/Lists.vue'),
    //   meta: {
    //     title: 'Listas',
    //   },
    // },
    // {
    //   path: '/sobre',
    //   name: 'sobre',
    //   component: () => import('@/views/About.vue'),
    //   meta: {
    //     title: 'Sobre',
    //   },
    // },
    {
      path: '/buscar/:query',
      name: 'buscar',
      component: () => import('@/views/SearchResults.vue'),
      meta: {
        title: 'Buscar',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from) => {
  document.title = (to.meta?.title as string) ?? 'Default'
})

export default router
