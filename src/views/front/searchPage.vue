<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <div class="content">
      <div class="about">
        <h1>這是搜索頁面!</h1>
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
  name: 'searchPage',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      errorMsg: '',
    };
  },
  mounted() {
    
  },
  watch: {
    
  },
  methods: {
    
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
