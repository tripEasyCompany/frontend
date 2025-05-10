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
          <img src="@/assets/img/register.webp" alt="register_img" />
        </div>

        <div class="main_form">
          <h2>會員註冊</h2>
          <div class="form">
            <div class="form_item">
              <i class="fa-regular fa-user"></i>
              <input
                class="form_txtbox"
                v-model="name"
                type="text"
                placeholder="請輸入姓名"
                required
              />
            </div>
            <div class="form_item">
              <i class="fa-regular fa-envelope"></i>
              <input
                class="form_txtbox"
                v-model="email"
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
                style="cursor: pointer"
              ></i>
            </div>

            <div class="form_preference">
              <div v-for="(pref, index) in preferences" :key="index" class="select-wrap">
                <select
                  class="select-box"
                  v-model="preferences[index]"
                  @change="updateOptions"
                  required
                >
                  <option value="" disabled hidden>請選擇</option>
                  <option
                    v-for="option in preferenceOptions"
                    :key="option"
                    :value="option"
                    :disabled="isOptionDisabled(option, index)"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <p class="error_msg">{{ errorMsg }}</p>
            <input class="submit_btn" type="submit" value="加入會員" @click="handleRegister" />
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
  name: 'registerPage',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      preferences: ['', '', ''],
      preferenceOptions: [
        '探索冒險',
        '放鬆療癒',
        '文化體驗',
        '美食探索',
        '都市感官',
        '自然療癒',
        '親子家庭',
        '拍照打卡',
        '懶人輕鬆',
        '特殊主題',
      ],
      errorMsg: '',
      showPassword: false,
    };
  },
  mounted() {},
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    isOptionDisabled(option, currentIndex) {
      return this.preferences.some((value, index) => value === option && index !== currentIndex);
    },
    async handleRegister() {
      const nameInput = { value: this.name, focus: () => {} };
      const emailInput = { value: this.email, focus: () => {} };
      const passwordInput = { value: this.password, focus: () => {} };
      const selectNodes = document.querySelectorAll('.select-box');
      const errorTxt = document.querySelector('.error_msg');

      if (func.validateName(nameInput, errorTxt)) return;
      if (func.validateEmail(emailInput, errorTxt)) return;
      if (func.validatePassword(passwordInput, errorTxt)) return;

      if (func.checkSelections(selectNodes, errorTxt)) return;

      await api.post_user_SignUp(
        this.name.trim(),
        this.email.trim(),
        this.password.trim(),
        this.preferences,
        () => {
          this.name = '';
          this.email = '';
          this.password = '';
          this.preferences = ['', '', ''];
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
