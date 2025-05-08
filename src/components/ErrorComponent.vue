<template>
  <div class="error-page">
    <h2>Oops! 你來到了一個不存在的地方</h2>
    <img id="error_img" :src="errorUrl" loading="lazy" alt="Error_img" />
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  data() {
    const firebaseUrl = import.meta.env.VITE_FIREBASE_PATH;
    return {
        errorUrl : `${firebaseUrl}img%2FError.png?alt=media&token=9962992c-6279-4905-b149-614242fe3186`
    };
  }
};
</script>

<style scoped>
/* 建議直接使用 common.css 中既有樣式 */
</style>
