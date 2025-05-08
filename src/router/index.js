import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import * as api from '../utils/api';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        //首頁
        {
          path: '',
          name: 'index',
          component: () => import('../views/HomeView.vue'),
        },

        //購物專區(和搜索頁面功能上差異不大暫且保留)
        /*
        {
          path: 'shopping',
          name: 'shopping',
          component: () => import('../views/front/shopping.vue'),
        },
        */
        //搜索頁面
        {
          path: 'search',
          name: 'search',
          component: () => import('../views/front/searchPage.vue'),
        },
      ],
    },
    //會員功能
    {
      //會員中心(預設顯示會員資料)
      path: '/admin',
      name: 'member',
      component: () => import('../views/admin/memberPage.vue'),
      children: [
        //登入
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/admin/loginPage.vue'),
        },
        //註冊
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/admin/registerPage.vue'),
        },
        //忘記密碼
        {
          path: 'forgotpw',
          name: 'forgotpw',
          component: () => import('../views/admin/forgotpwPage.vue'),
        },
        //忘記密碼
        {
          path: 'resetpw',
          name: 'resetpw',
          component: () => import('../views/admin/resetpwPage.vue'),
        },
        //收藏
        {
          path: 'collect',
          name: 'collect',
          component: () => import('../views/admin/collectPage.vue'),
        },
        //個人旅遊訂單
        {
          path: 'personalOrder',
          name: 'personalOrder',
          component: () => import('../views/admin/personalOrder.vue'),
        },
        //管理者中心(管理者功能)
        {
          path: 'manage',
          children: [
            //網站管理
            {
              path: 'website',
              name: 'website',
              component: () => import('../views/admin/manage/websiteSetting.vue'),
            },
            //儀表板分析
            {
              path: 'dashboard',
              name: 'dashboard',
              component: () => import('../views/admin/manage/dashboardPage.vue'),
            },
            //權限設定
            {
              path: 'role',
              name: 'role',
              component: () => import('../views/admin/manage/roleSetting.vue'),
            },
            //客服
            {
              path: 'service',
              name: 'service',
              component: () => import('../views/admin/manage/serviceSetting.vue'),
            },
            //自動化設定
            {
              path: 'automatic',
              name: 'automatic',
              component: () => import('../views/admin/manage/automaticSetting.vue'),
            },
          ],
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
});

router.beforeEach(async (to, from, next) => {
  const authPages = ['/admin/login', '/admin/register', '/admin/forgotpw', '/admin/resetpw'];

  if (authPages.includes(to.path)) {
      const result = await api.get_user_status();

      console.log(result.isLoggedIn)
      if (result.isLoggedIn) {
        return next('/');
      }

  }

  return next();
});

export default router;
