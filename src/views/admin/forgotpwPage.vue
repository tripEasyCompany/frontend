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
          <img src="@/assets/img/forgot-password.webp" loading="lazy" alt="forgot_password_img" />
        </div>

        <div class="main_form">
          <h2>忘記密碼</h2>
          <div class="form">
            <div class="form_item">
              <i class="fa-regular fa-envelope"></i>
              <input
                class="form_txtbox"
                type="email"
                v-model="email"
                placeholder="請輸入 Email"
                required
              />
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
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import * as func from '@/utils/function.js';
import * as api from '@/utils/api.js';

export default {
  name: 'forgotpwPage',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      email: '',
      errorMsg: '',
    };
  },
  methods: {
    async handleSubmit() {
      const emailInput = { value: this.email, focus: () => {} };
      const errorTxt = document.querySelector('.error_msg');

      if (func.validateEmail(emailInput, errorTxt)) return;

      await api.post_user_forgetPW(this.email.trim(), () => {
        this.email = '';
      });
    },
  },
};
</script>

<style scoped></style>
