<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Content -->
    <div class="content">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">購物車</li>
            <li class="breadcrumb-item active" aria-current="page">填寫付款資料</li>
            <li class="breadcrumb-item">確認付款</li>
          </ol>
        </nav>

        <div class="row">
          <!-- 左側：填寫付款資料 -->
          <div class="col-lg-6">
            <h3 class="mb-4 fw-bold">填寫付款資料</h3>
            <form>
              <!-- 訂購人資訊 -->
              <div class="mb-3">
                <label for="name" class="form-label">全名</label>
                <input type="text" class="form-control" id="name" placeholder="請輸入全名">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">email</label>
                <input type="email" class="form-control" id="email" placeholder="請輸入 email">
              </div>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="location" class="form-label">地址</label>
                  <input type="text" class="form-control" id="location" placeholder="請輸入地址">
                </div>
                <div class="col-md-6">
                  <label for="phone" class="form-label">連絡電話</label>
                  <input type="tel" class="form-control" id="phone" placeholder="請輸入連絡電話">
                </div>
              </div>

                <!-- 使用折扣優惠 -->
              <div class="mt-4">
                <label class="form-label d-block">使用折扣優惠</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="discountType" id="coupon" value="coupon">
                  <label class="form-check-label" for="coupon">
                      優惠卷
                  </label>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="折扣碼">
                  <div class="form-text">折扣碼說明</div>
                </div>
              </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="agree">
                    <label class="form-check-label" for="agree">
                        同意接收促銷訊息與其他訊息通知
                    </label>
                </div>
                <button type="submit" class="btn btn-dark mt-4 w-100">
                    確認付款
                </button>
            </form>
          </div>

            <!-- 右側：訂單資訊 -->
            <div class="col-lg-5">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="fw-bold mb-3">訂單資料</h5>
                        <!-- 商品 1 -->
                        <div class="card mb-3 order-card">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="#" class="img-fluid rounded-start" alt="景點/行程圖片">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h6 class="card-title">日本 | 京都散策</h6>
                                        <p class="card-text mb-1">
                                            <span class="fw-bold">NT$30,000</span>
                                        </p>
                                        <p class="card-text mb-1">
                                            <i class="bi bi-calendar-event"></i> 2025/10/15 ~ 2025/10/18
                                        </p>
                                        <p class="card-text">
                                            <i class="bi bi-people"></i> 2 人
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr>

                        <div class="d-flex justify-content-between mb-2">
                            <span>已使用優惠</span>
                            <span class="fw-bold">NT$1,200</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">總金額</span>
                            <span class="fw-bold fs-5 text-danger">NT$11,0000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
  padding-top: 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  padding: 36px;
  border-radius: 30px
}

.order-card img {
    width: 100%;
    height: auto;
    background-color: #ccc;
}

.note {
    font-size: 0.875rem;
    color: #666;
}


</style>
