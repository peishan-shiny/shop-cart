import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signIn'
  },
  {
    path: '/signIn',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/user/manage',
    name: 'user-manage',
    component: () => import('../views/UserManage.vue')
  },
  {
    path: '/user/impression',
    name: 'user-impression',
    component: () => import('../views/UserImpression.vue')
  },
  {
    path: '/user/old/order',
    name: 'user-old-order',
    component: () => import('../views/UserOldOrder.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/products/categories/:id',
    name: 'products-categories',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/discount',
    name: 'discount',
    component: () => import('../views/Discount.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/Recommend.vue')
  },
  {
    path: '/new-product',
    name: 'newProduct',
    component: () => import('../views/NewProduct.vue')
  },
  {
    path: '/story',
    name: 'story',
    component: () => import('../views/Story.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/CreateComment.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/Activities.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/privacy/policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicy.vue')
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
