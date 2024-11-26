import { createRouter, createWebHistory } from 'vue-router'
import HRmainPage from '../pages/HRmainPage.vue'
import adminPage from '../pages/adminPage.vue'
import authPage from '../pages/authPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'authPage',
      path: '/LogIn',
      component: authPage
    },
    {
      name: 'mainPage',
      path: '/',
      component: HRmainPage
    },
    {
      name: 'adminPage',
      path: '/admin',
      component: adminPage
    },
  ]
})

export default router
