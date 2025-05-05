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
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'login',
  components: { HeaderComponent, FooterComponent }
}
</script>

<style scoped>

</style>
