import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signIn',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/CreateComment.vue')
  },
  {
    path: '/activies',
    name: 'activies',
    component: () => import('../views/Activies.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
