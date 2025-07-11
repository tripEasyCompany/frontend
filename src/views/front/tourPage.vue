<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Content -->
     <div class="content">

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
import Swal from 'sweetalert2';

export default {
  name: 'tourPage',
  components: { HeaderComponent, FooterComponent },
  data() {},
  mounted() {
    this.fetchUserInfo();
  },
  methods: {}
}



</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

body {
    font-family: "Noto Sans TC", sans-serif;
    margin: 40px;
    color: #222;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
}

.service-group h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
}

.service-group ul {
    list-style: disc;
    padding-left: 20px;
}

.service-group li {
    margin-bottom: 6px;
}

</style>
