import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signIn',
    name: 'sign-in',
    component: SignIn
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
