<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Content -->
    <div class="content"></div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'homePage',
  components: { HeaderComponent, FooterComponent },
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
</style>
