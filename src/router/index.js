import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        //首頁
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        //購物專區
        {
          path: 'shopping',
          name: 'shopping',
          component: () => import('../views/front/shopping.vue'),
        },
        //搜索頁面
        {
          path: 'search',
          name: 'search',
          component: () => import('../views/front/search.vue'),
        },
      ],
    },
    //會員功能
    {
      //會員中心
      path: '/admin',
      name: 'member',
      component: () => import('../views/admin/member.vue'),
      children: [
        //登入
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/admin/login.vue'),
        },
        //註冊
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/admin/register.vue'),
        },
        //忘記密碼
        {
          path: 'forgot',
          name: 'forgot',
          component: () => import('../views/admin/forgot.vue'),
        },
        //會員資訊
        {
          path: 'member',
          name: 'member',
          component: () => import('../views/admin/member.vue'),
        },
        //收藏
        {
          path: 'collect',
          name: 'collect',
          component: () => import('../views/admin/collect.vue'),
        },
        //個人旅遊訂單
        {
          path: 'personalOrder',
          name: 'personalOrder',
          component: () => import('../views/admin/personalOrder.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
