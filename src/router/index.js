import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Products from '../views/ActualProducts.vue'
import PastOrders from '../views/PastOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actual-products',
    name: 'Products',
    component: Products
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
