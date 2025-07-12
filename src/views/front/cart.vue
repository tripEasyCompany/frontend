<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Content -->
    <div class="content">
      <div class="container">
        <!-- 序列 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active">購物車</li>&nbsp;
                <li class="breadcrumb-item">填寫訂購資料</li>&nbsp;
                <li class="breadcrumb-item" aria-current="page">確認付款</li>
            </ol>
        </nav>

        <h3 class="fw-bold my-4">購物車</h3>

        <!-- 商品卡片 1 -->
        <div class="cart-card d-flex">
            <div class="product-image me-3">
                景點/行程圖片
            </div>
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <div class="product-title">美國大峽谷</div>
                        <div class="small text-muted mb-2">
                            <span class="badge bg-secondary me-2">旅行團</span>
                            <span class="price-original">NT$ 20,800</span>
                            <span class="price-sale">NT$ 18,800</span>
                        </div>
                    </div>
                    <div>
                        <div class="mb-1"><small>預約開始日期：2025-10-15</small></div>
                        <div class="mb-1"><small>預約結束日期：2025-10-18</small></div>
                    </div>
                    <div>
                        <div class="mb-1"><small>2 人</small></div>
                    </div>
                    <div>
                        <div class="fw-bold">NT$37,600</div>
                    </div>
                    <div class="text-end">

                        <div class="mt-2">
                            <a href="#" class="btn-cart-action me-2"><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="btn-cart-action"><i class="bi bi-trash"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 總金額區塊 -->
        <div class="total-section d-flex justify-content-between align-items-center">
            <div>共 1 個行程</div>
            <div class="fs-5 fw-bold">總金額 NT$37,600</div>
            <router-link to="/pay">
                <button class="btn btn-dark">購買</button>
            </router-link>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <!-- <FooterComponent /> -->
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

.content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem 2rem;
  padding-top: 120px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  padding: 36px;
  border-radius: 30px
}

.cart-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

.product-image {
    width: 100px;
    height: 100px;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #666;
}

.product-title {
    font-weight: bold;
    font-size: 18px;
}

.price-original {
    text-decoration: line-through;
    color: #999;
    margin-right: 8px;
}

.price-sale {
    color: red;
    font-weight: bold;
}

.total-section {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px;
}

.btn-cart-action {
    color: #333;
    font-size: 20px;
}

.btn-cart-action:hover {
    color: #0d6efd;
}




</style>
