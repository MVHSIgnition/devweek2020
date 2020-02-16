import Vue from 'vue'
import VueRouter from 'vue-router'
import Join from '@/views/Join.vue'
import Lecture from '@/views/Lecture.vue'
import SignIn from '@/views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/sign_in'
  },
  {
    path: '/sign_in',
    component: SignIn
  },
  {
    path: '/join',
    component: Join
  },
  {
    path: '/lecture',
    component: Lecture,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
