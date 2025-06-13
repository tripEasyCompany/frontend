<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <div class="content">
      <div class="about">
        <h1>這是客服中心設定頁面!</h1>
      </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
