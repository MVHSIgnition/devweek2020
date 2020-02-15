import Vue from 'vue'
import VueRouter from 'vue-router'
import Join from '@/views/Join.vue'
import Lecture from '@/views/Lecture.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/join'
  },
  {
    path: '/join',
    component: Join
  },
  {
    path: '/lecture',
    component: Lecture
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
