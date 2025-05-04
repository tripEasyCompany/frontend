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
            <div
              class="lang_option"
              :class="{ active: language === 'zh' }"
              @click="setLanguage('zh')"
            >中</div>
            <div
              class="lang_option"
              :class="{ active: language === 'en' }"
              @click="setLanguage('en')"
            >英</div>
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
  
          <router-link v-if="!isLoggedIn" to="/login" class="login_btn">註冊/登入</router-link>
  
          <div class="user-dropdown" v-else>
            <div class="user-toggle" @click="dropdownOpen = !dropdownOpen">
              <img id="userPicture" :src="userPicture" alt="頭像" />
              <span>嗨！{{ userName }}</span>
              <img class="img_dropdown" src="@/assets/img/Vector (Stroke).png" alt="下拉式按鈕" />
            </div>
  
            <div class="dropdown-menu" :class="{ active: dropdownOpen }">
              <div class="dropdown-header">
                <img :src="levelIcon" alt="等級圖示" />
                <span>{{ levelName }}</span>
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
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
        return {
            searchText: '',
            language: 'zh',
            dropdownOpen: false,
            isLoggedIn: !!localStorage.getItem('authToken'),
            userName: localStorage.getItem('userName') || '使用者',
            userPicture: localStorage.getItem('userPicture') || '@/assets/img/default_people.png',
            levelName: localStorage.getItem('levelName') || '初心旅人',
            levelIcon: new URL('@/assets/img/badge01.png', import.meta.url).href
        }
    },
    mounted() {
        window.addEventListener('storage', this.syncUserData);
    },
    beforeUnmount() {
        window.removeEventListener('storage', this.syncUserData);
    },
    methods: {
        syncUserData() {
            this.isLoggedIn = !!localStorage.getItem('authToken');
            this.userName = localStorage.getItem('userName') || '使用者';
            this.userPicture = localStorage.getItem('userPicture') || new URL('@/assets/img/default_people.png', import.meta.url).href;
            this.levelName = localStorage.getItem('levelName') || '初心旅人';
        },
        setLanguage(lang) {
            this.language = lang
            // 若要切換語系，可加上 i18n 切換邏輯
        },
        search() {
            alert(`搜尋關鍵字：${this.searchText}`)
        },
        logout() {
            localStorage.clear();
            window.location.reload(); // 🔴 這會整個刷新頁面
        }
    }
  }
  </script>
  
  <style scoped>
  /* 你可加上 header 樣式或使用共用 css 檔 */
  </style>
  