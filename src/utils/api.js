import { userStore } from '@/stores/userStore.js';
import Swal from 'sweetalert2';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE;
const version = 'v1';
const apiUrl = `${baseUrl}/api/${version}/auth/userinfo`;

// [POST] 編號 01 : 使用者註冊、個人偏好設定
export function post_user_SignUp(
  signUpName_txt,
  signUpEmail_txt,
  signUpPwd_txt,
  signUpPrefer_Array,
  onComplete
) {
  axios
    .post(`${apiUrl}/signup`, {
      name: signUpName_txt,
      email: signUpEmail_txt,
      password: signUpPwd_txt,
      preference: signUpPrefer_Array,
    })
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: res.data.status,
        text: res.data.message,
        scrollbarPadding: false,
      });

      setTimeout(() => {
        window.location.href = '/admin/login';
      }, 3000);
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: error.response.data.status,
        text: error.response.data.message,
        scrollbarPadding: false,
      });
    })
    .finally(() => {
      if (typeof onComplete === 'function') {
        onComplete(); // ✅ 無論成功或失敗都清空
      }
    });
}

// [POST] 編號 02 : 使用者登入 - Email 登入
export function post_user_LoginEmail(signUpEmail_txt, signUpPwd_txt, onComplete) {
  axios
    .post(`${apiUrl}/login/email`, {
      email: signUpEmail_txt,
      password: signUpPwd_txt,
    })
    .then((res) => {
      localStorage.setItem('authToken', res.data.data.token);
      localStorage.setItem('userName', res.data.data.user.name);
      localStorage.setItem(
        'userPicture',
        res.data.data.user.avatar_url ||
          new URL('@/assets/img/default_people.png', import.meta.url).href
      );
      localStorage.setItem('levelName', res.data.data.level.name);

      userStore.login({
        token: res.data.data.token,
        name: res.data.data.user.name,
        avatar_url: res.data.data.user.avatar_url,
        level: res.data.data.level.name,
      });

      Swal.fire({
        icon: 'success',
        title: res.data.status,
        text: res.data.message,
        scrollbarPadding: false,
      });

      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: error.response.data.status,
        text: error.response.data.message,
        scrollbarPadding: false,
      });
    })
    .finally(() => {
      if (typeof onComplete === 'function') {
        onComplete(); // ✅ 無論成功或失敗都清空
      }
    });
}

// [POST] 編號 03 : 使用者登入 - Google 登入
export function post_user_LoginGoogle(code) {
  axios
    .post(`${apiUrl}/login/google`, {
      code: code,
    })
    .then((res) => {
      localStorage.setItem('authToken', res.data.data.token);
      localStorage.setItem('userName', res.data.data.user.name);
      localStorage.setItem(
        'userPicture',
        res.data.data.user.avatar_url ? res.data.data.user.avatar_url : 'img/default_people.png'
      );
      localStorage.setItem('levelName', res.data.data.level.name);

      userStore.login({
        token: res.data.data.token,
        name: res.data.data.user.name,
        avatar_url: res.data.data.user.avatar_url,
        level: res.data.data.level.name,
      });

      //func.checkLoginStatus();
      Swal.fire({
        icon: 'success',
        title: res.data.status,
        text: res.data.message,
        scrollbarPadding: false,
      });

      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: error,
        text: error,
        scrollbarPadding: false,
      });
    });
}

// [POST] 編號 05 : 使用者忘記密碼
export function post_user_forgetPW(signUpEmail_txt, onComplete) {
  axios
    .post(`${apiUrl}/forgetpw`, {
      email: signUpEmail_txt,
    })
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: res.data.status,
        text: res.data.message,
        scrollbarPadding: false,
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: error.response.data.status,
        text: error.response.data.message,
        scrollbarPadding: false,
      });
    })
    .finally(() => {
      if (typeof onComplete === 'function') {
        onComplete(); // ✅ 無論成功或失敗都清空
      }
    });
}

// [PATCH] 編號 06 : 使用者密碼修改
export function post_user_resetPW(
  token,
  signUpNewPwd_txt,
  signUpNewaginPwd_txt,
  captchaInput_txt,
  onComplete
) {
  axios
    .patch(
      `${apiUrl}/resetpw`,
      {
        token: token,
        new_password: signUpNewPwd_txt,
        confirm_password: signUpNewaginPwd_txt,
        input: captchaInput_txt,
      },
      {
        withCredentials: true, // ← 這就是 credentials: 'include' 的對應
      }
    )
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: res.data.status,
        text: res.data.message,
        scrollbarPadding: false,
      });

      setTimeout(() => {
        window.location.href = '/admin/login';
      }, 3000);
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: error.response.data.status,
        text: error.response.data.message,
        scrollbarPadding: false,
      });
    })
    .finally(() => {
      if (typeof onComplete === 'function') {
        onComplete(); // ✅ 無論成功或失敗都清空
      }
    });
}

// [GET] 編號 07 : 圖片、文字驗證碼判斷機器人
export function get_user_captcha() {
  axios
    .get(`${apiUrl}/captcha`, {
      withCredentials: true, // ← 這就是 credentials: 'include' 的對應
      responseType: 'text',
    })
    .then((res) => {
      document.getElementById('captcha').innerHTML = res.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: error.response.data.status,
        text: error.response.data.message,
        scrollbarPadding: false,
      });
    });
}

// [GET] 編號 09 : 驗證使用者登入狀態
export async function get_user_status() {
  try {
    const res = await axios.get(`${apiUrl}/login/status`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }});

    return {
      isLoggedIn: true,
      user: res.data.data.user,
    };
  } catch (err) {
    return {
      isLoggedIn: false,
      user: null,
    };
  }
}
