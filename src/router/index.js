import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login.vue';
import RegisterView from '@/views/Register.vue';
import ForgotpwView from '@/views/Forgot_password.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/forgotpw',
      name: 'Forgot_password',
      component: ForgotpwView
    }
  ],
})

export default router

