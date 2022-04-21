import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ClientView from '../views/ClientView.vue'
import SecondAuthenticationView from "../views/SecondAuthenticationView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
  },
  {
    path: '/client',
    name: 'ClientView',
    component: ClientView,
  },
  {
    path: '/secondAuthenticationView',
    name: 'SecondAuthenticationView',
    component: SecondAuthenticationView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
