import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import New from '@/views/New.vue'
import LiveLecture from '@/views/LiveLecture.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    component: New
  },
  {
    path: '/live-lecture',
    component: LiveLecture
  },
  {
    path: '/login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
