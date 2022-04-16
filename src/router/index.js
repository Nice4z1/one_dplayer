import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/khome',
    name: 'khome',
    component: () => import('@/views/khome'),
    children: [
      {
        path: '/khome/json',
        name: 'json',
        component: () => import('@/views/json')
      },
      {
        path: '/khome/iframe',
        name: 'iframe',
        component: () => import('@/views/iframe')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
