<template>
  <div>
    <HeaderComponent />

    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </router-view>

    <FooterComponent />


  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: { HeaderComponent, FooterComponent },
  watch: {
    $route(to, from) {
      // 強制重新渲染
      this.$forceUpdate()
    }
  }
}
</script>

