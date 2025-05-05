<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <div class="content">
      <div class="container content_container">
        <div class="vertical-wrapper">
          <p class="vertical-text">走吧!</p>
          <p class="vertical-text">讓每段旅程都有溫度</p>
        </div>

        <div>
          <img src="@/assets/img/reset-password.png" alt="reset_password_img">
        </div>

        <div class="main_form">
          <h2>修改密碼</h2>
          <div class="form">
            <div class="form_item">
              <i class="fa-solid fa-lock"></i>
              <input
                class="form_txtbox"
                :type="showPassword1 ? 'text' : 'password'"
                v-model="newPassword"
                placeholder="請輸入新密碼"
                required
              />
              <i class="fa-solid" :class="showPassword1 ? 'fa-eye' : 'fa-eye-slash'" @click="showPassword1 = !showPassword1"></i>
            </div>
            <div class="form_item">
              <i class="fa-solid fa-lock"></i>
              <input
                class="form_txtbox"
                :type="showPassword2 ? 'text' : 'password'"
                v-model="confirmPassword"
                placeholder="請再次輸入新密碼"
                required
              />
              <i class="fa-solid" :class="showPassword2 ? 'fa-eye' : 'fa-eye-slash'" @click="showPassword2 = !showPassword2"></i>
            </div>
            <div class="form_item captcha_item">
              <input type="text" id="captchaInput"  v-model="captchaInput" placeholder="請輸入驗證碼" />
              <div id="captcha"></div>
            </div>

            <p class="error_msg">{{ errorMsg }}</p>
            <input class="submit_btn" type="submit" value="送出" @click="handleSubmit" />
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
  name: 'ResetPasswordPage',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      captchaInput: '',
      token: '',
      errorMsg: '',
      showPassword1: false,
      showPassword2: false
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    this.token = params.get('token');
    api.get_user_captcha();

    // captcha refresh handler
    const captchaDiv = document.getElementById('captcha');
    if (captchaDiv) {
      captchaDiv.addEventListener('click', () => api.get_user_captcha());
    }
  },
  methods: {
    async handleSubmit() {
      const pwd1 = { value: this.newPassword, focus: () => {} };
      const pwd2 = { value: this.confirmPassword, focus: () => {} };
      const errorTxt = document.querySelector('.error_msg');

      if (func.validatePassword(pwd1, errorTxt)) return;
      if (func.validatePassword(pwd2, errorTxt)) return;

      await api.post_user_resetPW(
        this.token,
        this.newPassword.trim(),
        this.confirmPassword.trim(),
        this.captchaInput.trim(),
        () => {
          this.newPassword = '';
          this.confirmPassword = '';
          this.captchaInput = '';
      });
    }
  }
}
</script>

<style scoped>

</style>

