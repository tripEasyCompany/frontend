<template>

  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Content -->
    <div class="banner">
      <div class="banner-img">
        <img src="/src/assets/img/tour/banner.jpg" alt="banner" class="img-fluid object-fit-cover w-100 h-100">
      </div>
      <marquee scrollamount="10">因施工緣故，因此會有施工噪音</marquee>
    </div>
     <div class="content">


      <div class="container my-4">

          <div class="d-flex justify-content-between align-items-center mb-4">
              <div>
                  <h2 class="fw-bold">晨光海景酒店</h2>
                  <h4 class="text-muted">晨曦灑落的每一刻，都是渡假的開始</h4>
              </div>
              <i class="bi bi-suit-heart-fill fs-2 text-danger"></i>
          </div>


          <div class="row mb-4">
              <div class="col-md-6 d-flex align-items-center">
                  <p class="illustrate">在晨光海景酒店，每個細節都為了療癒旅人而設計。從房間望出去，是一望無際的海平線，夕陽灑落時，整片天際彷彿染上溫柔的詩意。飯店提供豐富設施與親切服務。</p>
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
                  <!-- 房型介紹 -->
                  <section class="mb-5">
                      <div class="c-title">房型介紹</div>
                      <div class="mb-4 row">
                          <div class="col-md-6">
                              <h5>標準雙人房｜溫馨舒適、性價比高</h5>
                              <p class="illustrate">一大床或兩小床選擇，配備基本設施，簡約風格中展現自在氛圍，適合輕旅遊或商務短住</p>
                          </div>
                          <div class="col-md-6"><img src="/src/assets/img/tour/room1.jpg" class="img-fluid rounded" alt=""></div>
                      </div>
                      <div class="mb-4 row">
                          <div class="col-md-6"><img src="/src/assets/img/tour/room2.jpg" class="img-fluid rounded" alt=""></div>
                          <div class="col-md-6">
                              <h5>海景豪華房｜一窗一世界的療癒感</h5>
                              <p class="illustrate">面海大陽台、加大雙人床，附設沙發區與咖啡機，晨起即可擁抱日出，傍晚擁有私人的夕陽角度。</p>
                          </div>
                      </div>
                      <div class="mb-4 row">
                          <div class="col-md-6">
                              <h5>家庭四人房｜共享假期的溫馨空間</h5>
                              <p class="illustrate">兩張大床、寬敞浴室與兒童友善設計，備有親子用品租借與簡易烹飪區，適合親子或三五好友同遊。</p>
                          </div>
                          <div class="col-md-6"><img src="/src/assets/img/tour/room3.jpg" class="img-fluid rounded" alt=""></div>
                      </div>
                  </section>

                  <!-- 客房服務 -->
                  <hr>
                  <section class="mb-5">
                      <div class="c-title">客房服務</div>
                      <div class="row row-cols-1 row-cols-md-3 g-4">
                          <div class="col">
                              <h6 class="fw-bold">基本設施與服務</h6>
                              <ul>
                                  <li>24 小時櫃台服務</li>
                                  <li>免費 Wi-Fi</li>
                                  <li>無障礙設施</li>
                              </ul>
                          </div>
                          <div class="col">
                              <h6 class="fw-bold">餐飲相關服務</h6>
                              <ul>
                                  <li>餐廳 / 咖啡廳</li>
                                  <li>迷你吧</li>
                                  <li>飲水機</li>
                              </ul>
                          </div>
                          <div class="col">
                              <h6 class="fw-bold">客房與設施</h6>
                              <ul>
                                  <li>獨立衛浴</li>
                                  <li>電視</li>
                                  <li>小冰箱</li>
                              </ul>
                          </div>
                          <div class="col">
                              <h6 class="fw-bold">休閒與娛樂設施</h6>
                              <ul>
                                  <li>健身房</li>
                                  <li>兒童遊戲區</li>
                                  <li>SPA / 按摩服務</li>
                              </ul>
                          </div>
                          <div class="col">
                              <h6 class="fw-bold">交通與停車</h6>
                              <ul>
                                  <li>租車服務</li>
                                  <li>停車場</li>
                                  <li>單車租借</li>
                              </ul>
                          </div>
                          <div class="col">
                              <h6 class="fw-bold">其他便利服務</h6>
                              <ul>
                                  <li>叫車 / 代叫計程車</li>
                                  <li>外幣兌換</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  <!-- 地圖 -->
                  <hr>
                  <section>
                      <div class="c-title">詳細地址</div>
                      <div class="ratio ratio-16x9">
                          <iframe src="https://maps.google.com/..." allowfullscreen></iframe>
                      </div>
                  </section>
              </div>

              <!-- 表單 -->
              <div class="col-md-4">
                  <form action="add_cart" class="bg-white shadow rounded p-4">
                      <div class="price fw-bold mb-3">NT$3,200 / 每晚</div>

                      <div class="row mb-3">
                          <div class="col">
                              <label class="form-label">入住日期與時間</label>
                              <input type="datetime-local" class="form-control">
                          </div>
                          <div class="col">
                              <label class="form-label">退房日期與時間</label>
                              <input type="datetime-local" class="form-control">
                          </div>
                      </div>

                      <div class="mb-3">
                          <label class="form-label">選擇房型</label>
                          <select class="form-select">
                              <option>請選擇房型</option>
                              <option>標準雙人房</option>
                              <option>海景豪華房</option>
                              <option>家庭四人房</option>
                          </select>
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

                      <button type="submit" class="btn btn-primary w-100">加入購物車</button>
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

export default {
  name: 'tourPageFake',
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

