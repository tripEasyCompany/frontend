<template>
  <div class="error-page">
    <h2>Oops! 你來到了一個不存在的地方</h2>
    <img id="error_img" src="@/assets/img/Error.webp" alt="Error_img" />
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
@import '@/assets/css/reset.css';
@import '@/assets/css/common.css';

/* ----------------------  error  ------------------------- */
.error-page {
  max-width: 1200px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-page h2 {
  font-size: 2.5rem; /* 40px */
  font-weight: bold;
  text-align: center;

  margin-bottom: 1.875rem; /* 30px */
  color: #333333;
}

.error-page #error_img {
  width: 450px;
  margin: 0px;
}

@media (max-width: 990px) {
  .error-page {
    padding: 1.5rem;
  }

  .error-page #error_img {
    width: 400px;
  }
}

@media (max-width: 520px) {
  .error-page h2 {
    font-size: 2rem;
  }

  .error-page #error_img {
    width: 300px;
  }
}
</style>
