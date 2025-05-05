<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Content -->
    <div class="content">
      <div class="container content_container">
        <!-- 文字 & 圖 -->
        <div class="vertical-wrapper">
          <p class="vertical-text">走吧!</p>
          <p class="vertical-text">讓每段旅程都有溫度</p>
        </div>
        <div><img src="@/assets/img/login.png" alt="login_img" /></div>

        <!-- 表單 -->
        <div class="main_form">
          <h2>會員登入</h2>
          <div class="form">
            <div class="form_item">
              <i class="fa-regular fa-envelope"></i>
              <input
                class="form_txtbox"
                v-model="email"
                id="login_email"
                type="email"
                placeholder="請輸入 Email"
                required
              />
            </div>

            <div class="form_item">
              <i class="fa-solid fa-lock"></i>
              <input
                class="form_txtbox"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="請輸入密碼"
                required
              />
              <i
                :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                @click="showPassword = !showPassword"
                style="cursor:pointer"
              ></i>
            </div>

            <div class="form_item list_item">
              <label class="check-box">
                <input type="checkbox" v-model="rememberMe" />
                <span>記住我的 Email</span>
              </label>
              <div class="link_item">
                <span><router-link to="/admin/register">立即註冊</router-link></span>
                <span>|</span>
                <span><router-link to="/admin/forgotpw">忘記密碼</router-link></span>
              </div>
            </div>

            <p class="error_msg">{{ errorMsg }}</p>
            <input class="submit_btn" type="submit" value="登入" @click="LoginAPI" />
          </div>

          <div class="divider"><span class="divider-text">或</span></div>

          <div class="socialLogin">
            <div class="icon-circle google" @click="GoogleAPI"><i class="fa-brands fa-google"></i></div>
            <div class="icon-circle fb"><i class="fa-brands fa-facebook-f"></i></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import * as func from '@/utils/function.js';
import * as api from '@/utils/api.js';


export default {
  name: 'login',
  components: { HeaderComponent, FooterComponent },
  data() {
      return {
          email: '',
          password: '',
          rememberMe: false,
          showPassword: false,
          errorMsg: ''
      }
  },
  mounted() {
      const savedEmail = localStorage.getItem('savedEmail')
      const remembered = localStorage.getItem('rememberMe') === 'true'
      if (savedEmail && remembered) {
          this.email = savedEmail
          this.rememberMe = true
      }

      // 處理 Google 登入回傳 code
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
          api.post_user_LoginGoogle(code);
          // 清除網址上的 code 參數
          window.history.replaceState({}, document.title, window.location.pathname);
      }
  },
  watch: {
      rememberMe(newVal) {
          if (newVal) {
              localStorage.setItem('savedEmail', this.email)
              localStorage.setItem('rememberMe', 'true')
          } else {
              localStorage.removeItem('savedEmail')
              localStorage.setItem('rememberMe', 'false')
              this.email = ""
          }
      },
      email(newVal) {
          if (this.rememberMe) {
              localStorage.setItem('savedEmail', newVal)
          }
      }
  },
  methods: {
      async LoginAPI() {
          // 找到錯誤訊息 DOM 節點
          const errorTxt = document.querySelector('.error_msg')

          // 建立假的 input DOM 給驗證用
          const emailInput = { value: this.email, focus: () => {} }
          const passwordInput = { value: this.password, focus: () => {} }

          if(func.validateEmail(emailInput,errorTxt)) return;
          if(func.validatePassword(passwordInput,errorTxt)) return;

          api.post_user_LoginEmail(this.email, this.password, () => {
              this.password = '';
              if (!this.rememberMe) {this.email = '';}
          });
      },
      async GoogleAPI() {
          const googleClientId = '148755362421-us8l17s3ukf88mj23kbs5vj2i8lgu8nk.apps.googleusercontent.com';
          const redirectUri = 'http://localhost:5500/admin/login'; // 請依照你的 Vue 環境調整

          const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`;
          window.location.href = url;
      }
  }
}
</script>

<style scoped>

</style>
