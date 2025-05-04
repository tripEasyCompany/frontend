<template>
    <div class="header">
      <div class="container header_container">
        <!-- 左側 -->
        <div class="navbar_left">
          <h1>
            <router-link to="/"><img src="@/assets/img/logo.png" alt="TripEasy" /></router-link>
          </h1>
  
          <form @submit.prevent="search">
            <input class="search_txtbox" v-model="searchText" type="text" placeholder="今天要去哪裡呢？" required />
            <input class="search_btn" type="submit" value="" />
          </form>
  
          <div class="lang_toggle">
            <div class="lang_option" :class="{ active: language === 'zh' }" @click="setLanguage('zh')">中</div>
            <div class="lang_option" :class="{ active: language === 'en' }" @click="setLanguage('en')">英</div>
          </div>
        </div>
  
        <!-- 右側 -->
        <div class="navbar_right">
          <ul class="nav_link">
            <li><router-link to="#">購物專區</router-link></li>
            <li><router-link to="#">旅遊神器</router-link></li>
            <li><router-link to="#">行事曆</router-link></li>
            <li><router-link to="#">購物車</router-link></li>
          </ul>
  
          <router-link v-if="!userStore.isLoggedIn" to="/login" class="login_btn">註冊/登入</router-link>
  
          <div class="user-dropdown" v-else>
            <div class="user-toggle" @click="dropdownOpen = !dropdownOpen">
              <img id="userPicture" :src="userStore.userPicture" alt="頭像" />
              <span>嗨！{{ userStore.userName }}</span>
              <img class="img_dropdown" src="@/assets/img/Vector (Stroke).png" alt="下拉式按鈕" />
            </div>
  
            <div class="dropdown-menu" v-show="dropdownOpen" :class="{ active: dropdownOpen }">
              <div class="dropdown-header">
                <img :src="levelIcon" alt="等級圖示" />
                <span>{{ userStore.levelName }}</span>
              </div>
              <ul>
                <li><router-link to="#">會員資訊</router-link></li>
                <li><router-link to="#">會員等級</router-link></li>
                <li><router-link to="#">個人偏好設定</router-link></li>
                <li><router-link to="#">個人訂單查看</router-link></li>
                <li><a href="#" @click.prevent="logout">登出</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { userStore } from '@/stores/userStore.js'
  
  const searchText = ref('')
  const language = ref('zh')
  const dropdownOpen = ref(false)
  const levelIcon = new URL('@/assets/img/badge01.png', import.meta.url).href

  function setLanguage(lang) {
    language.value = lang
  }
  
  function search() {
    alert(`搜尋關鍵字：${searchText.value}`)
  }
  
  function logout() {
    userStore.logout()
    dropdownOpen.value = false
  }
  </script>
  
  <style scoped>
  /* 你可加上 header 樣式或使用共用 css 檔 */
  </style>
  