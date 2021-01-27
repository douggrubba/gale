import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Buttons from './pages/Buttons.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
