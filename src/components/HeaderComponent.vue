<template>
  <div class="header">
    <div class="container header_container">
      <!-- 左側 -->
      <div class="navbar_left">
        <h1>
          <router-link to="/"
            ><img src="@/assets/img/logo/Logo-main.svg" alt="TripEasy"
          /></router-link>
        </h1>

        <form class="search" @submit.prevent="search">
          <input
            class="search_txtbox"
            v-model="searchText"
            type="text"
            placeholder="今天要去哪裡呢？"
            required
          />
          <input class="search_btn" type="submit" value="" />
        </form>

        <div class="lang_toggle">
          <div
            class="lang_option"
            :class="{ active: language === 'zh' }"
            @click="setLanguage('zh')"
          >
            中
          </div>
          <div
            class="lang_option"
            :class="{ active: language === 'en' }"
            @click="setLanguage('en')"
          >
            英
          </div>
        </div>
      </div>

      <!-- 右側 -->
      <div class="navbar_right">
        <ul class="nav_link">
          <li><router-link to="/search">購物專區</router-link></li>
          <li><router-link to="#">旅遊神器</router-link></li>
          <li><router-link to="#">行事曆</router-link></li>
          <li><router-link to="#">購物車</router-link></li>
        </ul>

        <router-link v-if="!userStore.isLoggedIn" to="/admin/login" class="login_btn"
          >註冊/登入</router-link
        >

        <div class="user-dropdown" v-else>
          <div class="user-toggle" @click="dropdownOpen = !dropdownOpen">
            <img id="userPicture" :src="userStore.userPicture" alt="頭像" />
            <span>嗨！{{ userStore.userName }}</span>
            <img class="img_dropdown" src="@/assets/img/icon/arrow-right.svg" alt="下拉式按鈕" />
          </div>

          <div class="custom-dropdown-menu" :class="{ active: dropdownOpen }">
            <div class="dropdown-header">
              <img :src="levelIcon" alt="等級圖示" />
              <span>{{ userStore.levelName }}</span>
            </div>
            <ul>
              <li><router-link to="/admin/userprofile">會員資訊</router-link></li>
              <li><router-link to="#">會員等級</router-link></li>
              <li><router-link to="#">個人偏好設定</router-link></li>
              <li><router-link to="#">個人訂單查看</router-link></li>
              <li><a href="#" @click.prevent="logout">登出</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="nav-dropdown">
        <div class="nav-toggle" :class="{ active: navOpen }" @click="navOpen = !navOpen">
          <span class="nav-toggle-icon"></span>
        </div>
      </div>
    </div>

    <!-- 手機畫面 -->
    <div class="nav-dropdown-menu" :class="{ active: navOpen }">
      <div class="user-toggle" v-if="userStore.isLoggedIn" @click="dropdownOpen = !dropdownOpen">
        <div class="user-info">
          <img id="userPicture" :src="userStore.userPicture" alt="頭像" />

          <div class="user-detail">
            <span>嗨！{{ userStore.userName }}</span>
            <div class="dropdown-header">
              <img :src="levelIcon" alt="等級圖示" />
              <span class="levelName">{{ userStore.levelName }}</span>
            </div>
          </div>
        </div>

        <router-link to="/admin/userprofile"
          ><img class="img_dropdown" src="@/assets/img/icon/arrow-right.svg" alt="下拉式按鈕"
        /></router-link>
      </div>

      <form class="search" @submit.prevent="search">
        <input
          class="search_txtbox"
          v-model="searchText"
          type="text"
          placeholder="今天要去哪裡呢？"
          required
        />
        <input class="search_btn" type="submit" value="" />
      </form>

      <ul class="nav_link">
        <li><router-link to="/search">購物專區</router-link></li>
        <li><router-link to="#">旅遊神器</router-link></li>
        <li><router-link to="#">行事曆</router-link></li>
        <li><router-link to="#">購物車</router-link></li>
      </ul>

      <router-link v-if="!userStore.isLoggedIn" to="/admin/login" class="login_btn"
        >註冊/登入</router-link
      >
      <a href="#" v-if="userStore.isLoggedIn" @click.prevent="logout" class="logout_btn">登出</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { userStore } from '@/stores/userStore.js';

const searchText = ref('');
const language = ref('zh');
const navOpen = ref(false);
const dropdownOpen = ref(false);
const levelIcon = new URL('@/assets/img/badge/badge01.svg', import.meta.url).href;

function setLanguage(lang) {
  language.value = lang;
}

function logout() {
  userStore.logout();
  dropdownOpen.value = false;

  window.location.href = '/';
}

function handleResize() {
  if (window.innerWidth > 1020) {
    navOpen.value = false;
  } else {
    dropdownOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  // 防止載入時剛好就是桌機
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
@import '@/assets/css/reset.css';
@import '@/assets/css/common.css';

/* ----------------------  header  ------------------------- */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  background-color: #ffffff99;
  backdrop-filter: blur(10px); /* 毛玻璃模糊 */
}

.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8.125rem;
  padding: 1.25rem;
}

.header .navbar_left {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.navbar_left h1 img {
  max-width: 100%;
}

.nav-dropdown-menu .search_txtbox,
.navbar_left .search_txtbox {
  padding: 0.5rem 2.5rem 0.5rem 1.25rem;

  background-color: #f2f2f2;
  border: 1px solid #d4d4d4;
  border-radius: 100px;
}

.nav-dropdown-menu .search_txtbox::placeholder,
.navbar_left .search_txtbox::placeholder {
  color: #d4d4d4;
}

.nav-dropdown-menu .search_txtbox:-webkit-autofill .navbar_left .search_txtbox:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px #f2f2f2 inset !important;
  box-shadow: 0 0 0 1000px #f2f2f2 inset !important;
  -webkit-text-fill-color: #000 !important; /* 文字顏色可自訂 */
}

.nav-dropdown-menu form,
.navbar_left form {
  position: relative;
}

.nav-dropdown-menu .search_btn,
.navbar_left .search_btn {
  width: 1.25rem;
  height: 1.25rem;

  border: none;
  cursor: pointer;
  background: url('../../src/assets/img/icon/search.svg');
  background-size: cover;
  background-repeat: no-repeat;

  position: absolute;
  top: 27%;
  right: 8%;
}

.navbar_left .lang_toggle {
  display: flex;
  gap: 0.25rem;
  padding: 0.3125rem 0.5rem;

  border: 1px solid #d4d4d4;
  border-radius: 100px;

  font-size: 0.75rem; /* 12px */
  background-color: #f2f2f2;
}

.lang_toggle .lang_option {
  padding: 0.34rem 0.5rem;

  text-align: center;
  color: #939393;
  border-radius: 40px;

  cursor: pointer;

  transition: background-color 0.5s ease;
}

.lang_toggle .active {
  color: #ffffff;
  background-color: #eec753;

  font-weight: bold;
}

.header .navbar_right {
  display: flex;
  align-items: center;
  gap: 1.75rem;

  font-weight: bold;
  font-size: 0.9375rem; /* 15px */
}

.navbar_right .nav_link {
  display: flex;
  gap: 1.875rem;
}

.nav-dropdown-menu .nav_link a,
.navbar_right .nav_link a {
  display: block;
  padding: 0.5rem 0.1875rem;

  border: 1px solid transparent;
  color: #5b5b5b;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-dropdown-menu .nav_link a:hover,
.navbar_right .nav_link a:hover {
  color: #b1d6ca;
}

.nav-dropdown-menu .nav_link a:focus,
.navbar_right .nav_link a:focus {
  border: 1px dashed #c1e9dc;
}

.login_btn,
.logout_btn {
  padding: 0.75rem 1.125rem;

  font-size: 0.875rem;
  color: #5b5b5b;

  border-radius: 100px;
  border: 2px solid #5b5b5b;
  background-color: transparent;

  transition: background-color 0.5s ease;
}

.login_btn:hover,
.login_btn:active,
.logout_btn:hover,
.logout_btn:active {
  color: #ffffff;
  background-color: #333333;
}

/* -------- user-dropdown -------- */
.user-dropdown {
  position: relative;
  display: inline-block;
}

.user-dropdown .user-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  color: #5b5b5b;
  transition: color 0.3s ease;

  cursor: pointer;
}

#userPicture {
  max-width: 48px;
  border: 2px solid #5b5b5b;
  border-radius: 50%;
}

.user-dropdown .custom-dropdown-menu {
  position: absolute;
  top: 120%;
  right: 0;
  max-width: 180px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;

  /* 動畫相關 */
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.5s ease;
  pointer-events: none;
}

.custom-dropdown-menu.active {
  max-height: 500px; /* 足夠容納整個選單 */
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.user-dropdown .dropdown-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1.25rem;
  background-color: #edf6f3;
  color: #939393;
}

.user-dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  color: #5b5b5b;

  width: 18.75rem;
}

.user-dropdown li {
  padding: 0.25rem 0px;
}

.user-dropdown a {
  display: block;
}

.user-dropdown a:hover {
  color: #5b5b5b;
  text-decoration: underline;
}

.nav-dropdown-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-size: 1.2rem;

  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.8s ease;
}

.nav-dropdown-menu.active {
  max-height: 400px; /* 寫比內容大的高度就好 */
  padding: 1.25rem 2.5rem;
  opacity: 1;
}

.nav-dropdown-menu .search,
.nav-dropdown {
  display: none;
}

.nav-dropdown .nav-toggle .nav-toggle-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url('../../src/assets/img/icon/nav_toggle.svg') center/cover no-repeat;
  transition: background 0.3s;
}

.nav-toggle.active .nav-toggle-icon {
  background: url('../../src/assets/img/icon/nav-close.svg') center/cover no-repeat;
}

@media (max-width: 1440px) {
  .header_container {
    gap: 4.375rem; /* 調整間距 */
  }

  .header .navbar_left {
    gap: 2rem;
  }

  .navbar_right .nav_link {
    gap: 1.25rem;
  }

  #userPicture {
    max-width: 40px; /* 調整使用者圖片大小 */
  }
}

@media (max-width: 1020px) {
  .header .navbar_right {
    display: none; /* 隱藏特定元素 */
  }

  .nav-dropdown {
    display: block;
  }

  .header .navbar_left {
    gap: 3rem;
  }

  .nav-dropdown-menu .nav_link {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
  }

  .nav-dropdown-menu .login_btn,
  .nav-dropdown-menu .logout_btn {
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }

  .nav-dropdown-menu .user-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .nav-dropdown-menu .user-toggle #userPicture {
    max-width: 60px; /* 調整使用者圖片大小 */
  }

  .nav-dropdown-menu .user-info {
    display: flex;
    gap: 1.5rem;
  }

  .nav-dropdown-menu .user-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .nav-dropdown-menu .user-detail span {
    font-weight: bold;
  }

  .levelName {
    color: #939393;
  }

  .nav-dropdown-menu .user-detail .dropdown-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
}

@media (max-width: 520px) {
  .search {
    display: none; /* 隱藏搜尋欄 */
  }

  .nav-dropdown-menu .search {
    display: block;
    width: 100%;
  }

  .nav-dropdown-menu .search_txtbox {
    width: 100%;
  }

  .nav-dropdown-menu .search_btn {
    right: 5%;
    top: 25%;
  }
}
</style>
