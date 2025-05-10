<template>
  <div class="wrap" v-if="checkedToken">
    <template v-if="tokenValid">
      <!-- Header -->
      <HeaderComponent />

      <div class="content">
        <div class="container content_container">
          <!-- 只有驗證成功才顯示表單 -->
          <div class="vertical-wrapper">
            <p class="vertical-text">走吧!</p>
            <p class="vertical-text">讓每段旅程都有溫度</p>
          </div>

          <div>
            <img src="@/assets/img/reset-password.webp" alt="reset_password_img" />
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
                <i
                  class="fa-solid"
                  :class="showPassword1 ? 'fa-eye' : 'fa-eye-slash'"
                  @click="showPassword1 = !showPassword1"
                ></i>
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
                <i
                  class="fa-solid"
                  :class="showPassword2 ? 'fa-eye' : 'fa-eye-slash'"
                  @click="showPassword2 = !showPassword2"
                ></i>
              </div>
              <div class="form_item captcha_item">
                <input
                  type="text"
                  id="captchaInput"
                  v-model="captchaInput"
                  placeholder="請輸入驗證碼"
                />
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
    </template>

    <!-- Token 驗證失敗顯示錯誤訊息 -->
    <template v-else>
      <ErrorComponent />
    </template>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import * as func from '@/utils/function.js';
import * as api from '@/utils/api.js';

export default {
  name: 'resetPage',
  components: { HeaderComponent, FooterComponent, ErrorComponent },
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      captchaInput: '',
      token: '',
      errorMsg: '',
      showPassword1: false,
      showPassword2: false,
      tokenValid: false,
      checkedToken: false,
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    this.token = params.get('token');
    api.get_user_captcha();

    if (!this.token) {
      this.checkedToken = true;
      this.tokenValid = false;
      return;
    } else {
      this.checkedToken = true;
      this.tokenValid = true;
    }

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
        }
      );
    },
  },
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
@import '@/assets/css/style.css';

a {
  text-decoration: none;
  color: #212121;
}

/* icon、icon 按鈕 */
.main_form .form_item {
  position: relative;
}

.form_item i:first-child {
  position: absolute;
  top: 20px;
  left: 15px;
}

.form_item i:last-child {
  position: absolute;
  top: 20px;
  right: 15px;

  cursor: pointer;
}
</style>
