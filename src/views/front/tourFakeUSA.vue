<template>

  <div class="wrap">
    <!-- Header -->
    <!-- <HeaderComponent /> -->

    <!-- Content -->
    <div class="banner">
      <div class="banner-img">
        <img src="/src/assets/img/tour/banner.jpg" alt="banner" class="img-fluid object-fit-cover w-100 h-100">
      </div>
      <marquee scrollamount="10">因受降雪影響，所有交通暫停，請留意最新通知。</marquee>
    </div>
     <div class="content">


      <div class="container my-4">

          <div class="d-flex justify-content-between align-items-center mb-4">
              <div>
                  <h2 class="fw-bold">走進美國大峽谷</h2>
                  <h4 class="text-muted">遼闊之境，一眼萬年</h4>
              </div>
              <i class="bi bi-suit-heart-fill fs-2 text-danger"></i>
          </div>


          <div class="row mb-4">
              <div class="col-md-6 d-flex align-items-center">
                  <p class="illustrate">踏上美西壯遊之旅，探索壯麗無比的大峽谷、夢幻羚羊谷與壯觀馬蹄灣，感受大自然奇景。暢遊繁華拉斯維加斯，穿越經典66號公路，體驗美國西部風情，享受難忘的探索之旅！</p>
              </div>
              <div class="col-md-3 mb-3">
                  <div class="img2">
                    <img src="/src/assets/img/tour/t1.jpg" alt="環境照" class="img-fluid object-fit-cover w-100 h-100">
                  </div>
              </div>
              <div class="col-md-3 mb-3">
                  <div class="img2">
                    <img src="/src/assets/img/tour/t2.jpg" alt="環境照" class="img-fluid object-fit-cover w-100 h-100">
                  </div>
              </div>
          </div>

          <div class="row g-3 mb-5">
              <div class="col-6 col-md-3">
                  <div class="img4">
                    <img src="/src/assets/img/tour/t3.jpg" alt="環境照" class="img-fluid object-fit-cover w-100 h-100">
                  </div>
              </div>
              <div class="col-6 col-md-3">
                  <div class="img4">
                    <img src="/src/assets/img/tour/t4.jpg" alt="環境照" class="img-fluid object-fit-cover w-100 h-100">
                  </div>
              </div>
              <div class="col-6 col-md-3">
                  <div class="img4">
                    <img src="/src/assets/img/tour/t5.jpg" alt="環境照" class="img-fluid object-fit-cover w-100 h-100">
                  </div>
              </div>
              <div class="col-6 col-md-3">
                  <div class="img4">
                    <img src="/src/assets/img/tour/t6.jpg" alt="環境照" class="img-fluid object-fit-cover w-100 h-100">
                  </div>
              </div>
          </div>

          <!-- Content and Booking Form -->
          <div class="row">
              <div class="col-md-8">
                  <!-- 旅遊介紹 -->
                  <section class="mb-5">
                      <div class="c-title">美國大峽谷 6 天 5 夜 暢遊大禮包</div>
                      <div class="mb-4 row">
                          <div class="col-md-6">
                              <h5>特色一</h5>
                              <p class="illustrate">欣賞大峽谷日出日落，絕美震撼景色</p>
                          </div>
                          <div class="col-md-6"><img src="/src/assets/img/tour/room1.jpg" class="img-fluid rounded" alt=""></div>
                      </div>
                      <div class="mb-4 row">
                          <div class="col-md-6"><img src="/src/assets/img/tour/room2.jpg" class="img-fluid rounded" alt=""></div>
                          <div class="col-md-6">
                              <h5>特色二</h5>
                              <p class="illustrate">拉斯維加斯璀璨夜景與極致娛樂體驗</p>
                          </div>
                      </div>
                      <div class="mb-4 row">
                          <div class="col-md-6">
                              <h5>特色三</h5>
                              <p class="illustrate">拉斯維加斯璀璨夜景與極致娛樂體驗</p>
                          </div>
                          <div class="col-md-6"><img src="/src/assets/img/tour/room3.jpg" class="img-fluid rounded" alt=""></div>
                      </div>
                  </section>

                  <!-- 旅遊行程規劃 -->
                  <hr>
                  <section class="mb-5">
                      <div class="c-title">旅遊行程規劃</div>
                      <div class="row row-cols-1 g-4">
                          <div class="col">
                              <ul>
                                <li>Day 1：抵達洛杉磯，市區自由行（星光大道、比佛利山莊）</li>
                                <li>Day 2：前往拉斯維加斯，夜遊不夜城賭城風光間</li>
                                <li>Day 3：大峽谷國家公園（南緣），欣賞壯麗景色</li>
                                <li>Day 4：馬蹄灣、羚羊谷，沉浸紅岩奇景</li>
                                <li>Day 5：回程途經66號公路，探索經典美國西部風情</li>
                                <li>Day 6：返回洛杉磯，購物/自由行，準備返程</li>
                              </ul>
                          </div>
                      </div>
                  </section>
              </div>

              <!-- 表單 -->
              <div class="col-md-4">
                  <form action="add_cart" class="bg-white shadow rounded p-4">
                      <div class="price fw-bold mb-3">NT$18,800</div>

                      <div class="row mb-3">
                          <div class="col">
                              <label class="form-label">25/03/01~25/03/06</label>
                          </div>
                      </div>

                      <div class="mb-4">
                          <label class="form-label">選擇人數</label>
                          <select class="form-select">
                              <option>請選擇人數</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                          </select>
                      </div>

                      <button type="button" id="addToCartBtn" class="btn btn-primary w-100"  @click="addToCart">加入購物車</button>
                  </form>
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
import Swal from 'sweetalert2';

export default {
  name: 'tourFakeUSA',
  components: { HeaderComponent, FooterComponent },
  data() {},
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    addToCart() {
      Swal.fire({
        icon: 'success',
        title: '已加入購物車',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
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

}

.banner-img {
  padding-top: 100px;
  max-height: 350px;
  overflow: hidden;
  width: 100%;
  position: relative;
}

marquee {
  background-color: #FFAFAF;
  padding-top: 12px;
  padding-bottom: 12px;
}

.img2,
.img4 {
    background-color: #dee2e6;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 0.5rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    padding: 36px;
}

h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

.c-title {
    font-size: 28px;
    margin-bottom: 1rem;
    font-weight: bold;
}

.illustrate {
    margin-bottom: 1rem;
    color: #555;
    font-size: 20px;
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

