// src/stores/userStore.js
import { reactive } from 'vue';

export const userStore = reactive({
  isLoggedIn: !!localStorage.getItem('authToken'),
  userName: localStorage.getItem('userName') || '使用者',
  userPicture:
    localStorage.getItem('userPicture') ||
    new URL('@/assets/img/default_people.png', import.meta.url).href,
  levelName: localStorage.getItem('levelName') || '初心旅人',

  login(user) {
    localStorage.setItem('authToken', user.token);
    localStorage.setItem('userName', user.name);
    localStorage.setItem(
      'userPicture',
      user.avatar_url || new URL('@/assets/img/default_people.png', import.meta.url).href
    );
    localStorage.setItem('levelName', user.level);

    this.isLoggedIn = true;
    this.userName = user.name;
    this.userPicture =
      user.avatar_url || new URL('@/assets/img/default_people.png', import.meta.url).href;
    this.levelName = user.level;
  },

  status(user){
    localStorage.setItem('userName',user.data.user.name);

    this.userName = user.data.user.name;
  },

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.userName = '使用者';
    this.userPicture = new URL('@/assets/img/default_people.png', import.meta.url).href;
    this.levelName = '初心旅人';
  },
});
