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
            <img src="@/assets/img/register.png" alt="register_img">
          </div>
  
          <div class="main_form">
            <h2>會員註冊</h2>
            <div class="form">
              <div class="form_item">
                <i class="fa-regular fa-user"></i>
                <input class="form_txtbox" type="text" name="name" placeholder="請輸入姓名" required>
              </div>
              <div class="form_item">
                <i class="fa-regular fa-envelope"></i>
                <input class="form_txtbox" type="email" name="email" placeholder="請輸入 Email" required>
              </div>
              <div class="form_item">
                <i class="fa-solid fa-lock"></i>
                <input class="form_txtbox" id="password" type="password" name="password" placeholder="請輸入密碼" required>
                <i class="fa-solid fa-eye-slash" data-target="password"></i>
              </div>
  
              <div class="form_preference">
                <div v-for="index in 3" :key="index" class="select-wrap">
                  <select class="select-box" name="preference" required>
                    <option value="" disabled selected hidden>請選擇</option>
                    <option v-for="option in preferences" :key="option" :value="option">{{ option }}</option>
                  </select>
                </div>
              </div>
  
              <p class="error_msg"></p>
              <input class="submit_btn" type="submit" value="加入會員">
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
    name: 'RegisterView',
    components: { HeaderComponent, FooterComponent },
    data() {
      return {
        preferences: [
          '探索冒險', '放鬆療癒', '文化體驗', '美食探索',
          '都市感官', '自然療癒', '親子家庭', '拍照打卡',
          '懶人輕鬆', '特殊主題'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  
