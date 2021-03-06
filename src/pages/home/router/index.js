import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/index/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/message',
    name: 'Message',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/message/main.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/main.vue'),
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('../views/message/main.vue'),
  },
  {
    path: '/player',
    name: 'Music',
    component: () => import('../views/circle/music.vue'),
    meta: {
      title: '音乐圈-' + name,
    },
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/index/sign.vue'),
  },
  {
    path: '/blog/:id',
    name: 'Content',
    component: () => import('../views/blog/content.vue'),
    meta: {
      title: 'loading……',
      keepAlive: true, // 需要被缓存
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
