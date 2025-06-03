<template>
  <div class="wrap">
    <!-- 滑動後才出現的 nav -->
    <div class="nav" :class="{ show: isSticky }">
      <NavComponent />
    </div>

    <div class="content">
      <div class="container">
        <!-- header 區塊 -->
        <div class="header_page" ref="header_page">
          <div class="header_main">
            <div class="header_country">
              <ul>
                <li v-for="(img, i) in currentImages" :key="selectedGroup + '-' + i">
                  <img :src="img" class="fade-in-img" />
                </li>
              </ul>

              <div class="illustration">
                <span><img src="@/assets/img/illustration/deco-img02.svg" alt="" /></span>
                <span><img src="@/assets/img/illustration/deco-img03.svg" alt="" /></span>
              </div>
            </div>

            <div class="header_img">
              <img src="@/assets/img/home_page.png" alt="" />
            </div>

            <div class="header_slogan">
              <div class="slogan_content">
                <p>讓旅行更輕鬆</p>
                <p>讓世界更近!</p>
              </div>
              <div class="slogan_icon">
                <img
                  @click="selectGroup('Taiwan')"
                  :class="{ active: selectedGroup === 'Taiwan' }"
                  src="@/assets/img/icon/Taiwan.svg"
                  alt=""
                />
                <img
                  @click="selectGroup('World')"
                  :class="{ active: selectedGroup === 'World' }"
                  src="@/assets/img/icon/World.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="start_btn" @click="scrollToNext">
            <span>開始旅行</span>
            <span><img src="@/assets/img/icon/arrow-down-long.svg" alt="" /></span>
          </div>
        </div>

        <div class="home_content">
          <div class="item_category">
            <h2>矚目功能</h2>

            <ul>
              <li>
                <h3>旅遊探索和即時預訂</h3>
                <img src="@/assets/img/home_page/function-img03.svg" alt="">
                <p>想去世界的某個角落？我們提供精選旅遊行程，依據地點、價格、興趣快速篩選，發掘當地隱藏玩法！即將開賣的行程不再錯過，還能及時掌握優惠</p>
              </li>
              <li>
                <h3>個人化會員體驗</h3>
                <img src="@/assets/img/home_page/function-img02.svg" alt="">
                <p>註冊成為會員，追蹤旅遊積分、VIP等級，累積專屬優惠！收藏你感興趣的旅程，設定價格追蹤，當行程降價或有新優惠，我們及時通知，讓你的旅行更划算、更自由！</p>
              </li>
              <li>
                <h3>安心支付</h3>
                <img src="@/assets/img/home_page/function-img01.svg" alt="">
                <p>選擇你的旅遊項目，透過信用卡、Apple Pay、Google Pay等安全支付結帳，支援促銷折扣與點數兌換！</p>
              </li>
            </ul>
          </div>

          <div class="product">
            <div class="product_content">

              <div class="content_left">

                <div class="item_title">
                  <div class="product_title">
                    <h2>購物專區</h2>
                  </div>
                  
                  <ul class="type_group">
                    <li><a class="active" href="#">旅行團</a></li>
                    <li><a href="#">背包客</a></li>
                  </ul>
                </div>
                
                <ul class="item_group">
                  <li><a class="active" href="#">熱門專區</a></li>
                  <li><a href="#">促銷專區</a></li>
                  <li><a href="#">多人收藏</a></li>
                </ul>

                <ul class="product_item">
                  <li class="i_list">
                    <div class="i_container">
                      <div class="product_left">
                        <ul>
                          <li><span>探索冒險</span></li>
                          <li><span>文化體驗</span></li>
                          <li><span>放鬆療癒</span></li>
                        </ul>
                        <h3>台灣 | 高雄承億酒店</h3>
                      </div>

                      <div class="product_right">
                        <div class="right_info">
                          <p>出發日 : 自由選擇</p>
                          <p><span>NT$</span><span>7,000</span></p>
                        </div>
                        
                        <span class="favorite"><img src="@/assets/img/icon/favorite-line.svg" alt=""></span>
                      </div>
                    </div>
                  </li>
                  <li class="i_list">
                    <div class="i_container">
                      <div class="product_left">
                        <ul>
                          <li><span>美食探索</span></li>
                          <li><span>特殊主題</span></li>
                          <li><span>親子主題</span></li>
                        </ul>
                        <h3>日本 | 東京青年商旅</h3>
                      </div>

                      <div class="product_right">
                        <div class="right_info">
                          <p>出發日 : 自由選擇</p>
                          <p><span>NT$</span><span>5,500</span></p>
                        </div>
                        
                        <span class="favorite"><img src="@/assets/img/icon/favorite-line.svg" alt=""></span>
                      </div>
                    </div>
                  </li>
                  <li class="i_list">
                    <div class="i_container">
                      <div class="product_left">
                        <ul>
                          <li><span>拍照打卡</span></li>
                          <li><span>文化體驗</span></li>
                          <li><span>都市感官</span></li>
                        </ul>
                        <h3>美國 | 洛杉磯豪華酒店</h3>
                      </div>

                      <div class="product_right">
                        <div class="right_info">
                          <p>出發日 : 自由選擇</p>
                          <p><span>NT$</span><span>12,000</span></p>
                        </div>
                        
                        <span class="favorite"><img src="@/assets/img/icon/favorite-line.svg" alt=""></span>
                      </div>
                    </div>
                  </li>
                </ul>

                <ul class="product_page">
                  <li><img src="@/assets/img/icon/arrow-left.svg" alt=""></li>
                  <li><a href="">1</a></li>
                  <li>/</li>
                  <li><a href="">3</a></li>
                  <li><img src="@/assets/img/icon/arrow-right.svg" alt=""></li>
                </ul>
              </div>
              
              <div class="content_right">
                <div class="main_item">
                  <img src="@/assets/img/product/Shopping-img.svg" alt="">
                  <div class="illustration">
                    <span><img class="l_first" src="@/assets/img/illustration/deco-img01.svg" alt="" /></span>
                    <span><img class="l_last" src="@/assets/img/illustration/deco-img03.svg" alt="" /></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="more">
              <span>查看更多</span>
              <span><img src="@/assets/img/icon/arrow-right-long.svg" alt="" /></span>
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
import NavComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import taiwan_01 from '@/assets/img/home_page/viewpoint-img.svg';
import taiwan_02 from '@/assets/img/home_page/viewpoint-img-7.svg';
import taiwan_03 from '@/assets/img/home_page/viewpoint-img-1.svg';
import taiwan_04 from '@/assets/img/home_page/viewpoint-img-2.svg';
import world_01 from '@/assets/img/home_page/viewpoint-img-3.svg';
import world_02 from '@/assets/img/home_page/viewpoint-img-4.svg';
import world_03 from '@/assets/img/home_page/viewpoint-img-5.svg';
import world_04 from '@/assets/img/home_page/viewpoint-img-6.svg';

export default {
  name: 'HomePage',
  components: {
    NavComponent,
    FooterComponent,
  },
  data() {
    return {
      isSticky: false,
      selectedGroup: 'Taiwan',
      imagesTaiwan: [taiwan_01, taiwan_02, taiwan_03, taiwan_04],
      imagesWorld: [world_01, world_02, world_03, world_04],
      currentImages: [],
      currentIndex: 0,
      interval: null,
      autoMode: true,
    };
  },
  methods: {
    scrollToNext() {
      const section = document.querySelector('.home_content');
      if (section) {
        const offset = -120; // 👈 想往上留空多少 px，可自行調整
        const top = section.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    },

    handleScroll() {
      const section1El = this.$refs.header_page;
      if (section1El) {
        const bottom = section1El.getBoundingClientRect().bottom;
        this.isSticky = bottom <= 0;
        // console.log('[Scroll] isSticky =', this.isSticky);
      }
    },

    // 改這樣：輪播兩組名稱
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.selectedGroup = this.selectedGroup === 'Taiwan' ? 'World' : 'Taiwan';

        if (this.selectedGroup === 'Taiwan') {
          this.currentImages = [...this.imagesTaiwan];
        } else {
          this.currentImages = [...this.imagesWorld];
        }

        this.currentIndex = 0;
      }, 3500);
    },

    stopAutoSlide() {
      clearInterval(this.interval);
    },

    selectGroup(group) {
      this.stopAutoSlide(); // 停止自動輪播
      this.autoMode = false; // 標記為手動模式
      this.selectedGroup = group;

      if (group === 'Taiwan') {
        this.currentImages = [...this.imagesTaiwan];
      } else {
        this.currentImages = [...this.imagesWorld];
      }

      this.currentIndex = 0;

      // ⏱ 3 秒後重新開始自動輪播（如果使用者沒再點）
      setTimeout(() => {
        this.autoMode = true;
        this.startAutoSlide();
      }, 3000);
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });

    this.currentImages = [...this.imagesTaiwan];
    this.startAutoSlide(); // 開始自動在 Taiwan/World 間切換
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
@import '@/assets/css/reset.css';
@import '@/assets/css/common.css';

/* --- common --- */
h2{
  display: inline-block;
  position: relative;
  font-size: 32px;
  font-weight: bold;
  line-height: 38.4px;
  z-index: 1;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 1px; /* 底線與文字距離 */
  width: 150px;   /* 底線長度，這裡你可以自行調整 */
  height: 0.4em;  /* 高度決定底色的厚度 */
  border-bottom: 9px solid #B1D6CA;
  z-index: -1; /* 底線在文字下面 */
  border-radius: 4px; /* 圓角可選 */
}

.home_content{
  margin-top: 120px;
  margin-bottom: 80px;
}

/* --- nav --- */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 45px;
  text-align: center;
  transform: translateY(-100%);
  transition: transform 0.3s ease;

  z-index: 1000;
}

.nav.show {
  transform: translateY(0);
}

.header_page,
.section {
  padding: 30px 0;
}

/* --- header --- */
.header_page {
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  text-align: center;
}

/* --- header_main --- */
.header_main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* --- header_country --- */
.header_country {
  width: 300px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.header_country ul {
  width: 200px;
  display: flex;
  flex-direction: column;

  padding: 0 !important;
}

.header_country ul li:nth-child(odd) {
  align-self: flex-end;
}

.header_country ul li:nth-child(even) {
  align-self: flex-start;
}

/* 圖片淡入動畫 */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in-img {
  animation: fadeIn 1s ease;
}

/* --- 圖片 --- */
.header_country ul img {
  width: 130px;
}

.header_country .illustration img {
  width: 70px;
}

.header_img img {
  width: 450px;
  margin: 0 100px 0 20px;
}

/* --- 小插圖 --- */
.header_country .illustration span {
  position: absolute;
}

.header_country .illustration span:first-child {
  top: 0;
  left: 0;
}

.header_country .illustration span:last-child {
  bottom: 0;
  right: 0;
}

/* --- header_slogan --- */
.header_slogan {
  display: flex;
  flex-direction: column;

  gap: 20px;
  font-size: 36px;
  font-weight: bold;

  padding: 30px 40px;

  background-color: #ffffff;
}

/* --- 文字 --- */
.header_slogan .slogan_content {
  writing-mode: vertical-rl;
  text-orientation: upright;

  letter-spacing: 0.625rem; /* 10px */
  line-height: 62.4px;
}

.header_slogan .slogan_content p:last-child {
  text-indent: 96px;
}

/* --- icon --- */
.header_slogan .slogan_icon {
  display: flex;
  justify-content: center;
  gap: 15px;

  cursor: pointer;
}

.header_slogan .slogan_icon img {
  border-radius: 100px;
  border: 2px solid #000;
  background-color: #f2f2f2;

  padding: 12px;
}

.header_slogan .slogan_icon img:hover,
.header_slogan .slogan_icon img.active {
  filter: invert(1);
}

/* --- start_btn --- */
.start_btn {
  display: flex;
  flex-direction: column;

  gap: 12px;
  cursor: pointer;
  font-size: 20px;
}

.start_btn img {
  animation: floatArrow 1.5s ease-in-out infinite;
}

/* 定義動畫 */
@keyframes floatArrow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px); /* 往上 */
  }
  100% {
    transform: translateY(0);
  }
}

/* --- item_category --- */
.item_category{
  margin-bottom: 180px;
}

.item_category ul{
  display: flex;
  justify-content: space-between;
  gap: 24px;

  margin: 60px 0 30px 0;
}

.item_category ul li{
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;

  color: #333333;
  background: #F2F2F2;
  border: 2px solid #D4D4D4;
  border-radius: 28px;

  padding: 34px 64px;
}

.item_category ul li h3{
  font-size: 24px;
  font-weight: 700;
}

.item_category ul li img{
  width: 180px;
}

.item_category ul li p{
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}

/* --- product --- */
.product_content{
  display: flex;

  justify-content: space-between;
}

.product_content .content_left{
  width: 50%;
}

.product_content .content_right{
  width: 40%;
}

/* --- product item_title --- */
.product_content .item_title{
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
}

.product_content .content_left .type_group{
  writing-mode: vertical-lr;
}

.product_content .content_left .type_group li a{
  display: inline-block;
  font-size: 14px;
  font-weight: 700;

  border: 2px solid transparent;
  border-radius: 100px;
  color: #5B5B5B;

  padding: 14px 7px;
  letter-spacing: 5px;

  transition: background-color 0.5s ease;
}

.product_content .content_left .type_group li:first-child{
  margin-right: 20px;
}

.product_content .content_left .type_group a:hover{
  background-color: #D4D4D4;
  color: #5B5B5B;
}

.product_content .content_left .type_group a:focus{
  color: #5B5B5B;
  background-color: transparent;
  border: 2px solid #D4D4D4;
}

.product_content .content_left .type_group .active{
  background-color: #5B5B5B;
  color: #ffffff;
}

/* --- product item_group --- */
.product_content .content_left .item_group{
  display: flex;
  gap: 24px;

  align-items: center;
}

.product_content .content_left .item_group a{
  display: inline-block;
  font-size: 14px;
  font-weight: 700;

  border-radius: 100px;
  border: 2px solid #5B5B5B;
  color: #5B5B5B;

  padding: 7px 14px 5px 14px;
  letter-spacing: 2px;

  transition: background-color 0.5s ease;
}

.product_content .content_left .item_group a:hover,
.product_content .content_left .item_group .active{
  background-color: #333333;
  border: 2px solid #333333;
  color: #FFFFFF;
}

/* product product_item */
.content_left .product_item{
  margin-top: 17px;
  margin-bottom: 45px;
}

.content_left .product_item .i_list{
  border-bottom: 1px solid #D4D4D4;
  padding: 10px 0;
}

.content_left .product_item .i_list .i_container{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 12px;
  border-radius: 10px;

  transition: 0.5s background-color ease;
}

.content_left .product_item .i_container:hover{
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}

.content_left .product_item .product_left ul{
  display: flex;
  gap: 4px;

  align-items: center;

  margin-bottom: 14px;
}

.content_left .product_item .product_left ul li{
  font-size: 12px;
  background-color: #FFDD78;
  border-radius: 40px;
  font-weight: 700;

  padding: 4px 12px;
}

.content_left .product_item .product_left h3{
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 4px;

  font-weight: 700;
}

.content_left .product_item .product_right{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  color: #212121;
}

.content_left .product_item .product_right p:first-child{
  font-weight: 400;
  letter-spacing: 3px;

  margin-bottom: 4px;
}

.content_left .product_item .product_right p:last-child span:first-child{
  font-weight: 700;
  letter-spacing: 3px;
}

.content_left .product_item .product_right p:last-child span:last-child{
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 20px;
}

.content_left .product_item .product_right .favorite{
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.5s ease;

  cursor: pointer;
}

.content_left .product_item .i_container:hover .favorite {
  opacity: 1;
}

/* product product_page */
.product_content .content_left .product_page{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-weight: bold;
}

.product_content .content_left .product_page img{
  border-radius: 20px;
  background: #D4D4D4;

  padding: 4px;
  vertical-align: middle;

  cursor: pointer;

  transition: 0.5s background-color ease;
}

.product_content .content_left .product_page img:hover{
  background-color:#d4d4d484;
}

.product_content .content_right{
  display: flex;
  align-items: center;
}

.product_content .content_right .main_item img{
  width: 500px;
}

.product_content .content_right .main_item{
  position: relative;
}

.product_content .content_right .illustration img{
  width: 120px;

  position: absolute;
}

.product_content .content_right .illustration .l_first{
    z-index: -10;
    width: 160px;
    top: 35px;
    right: -80px;
}

.product_content .content_right .illustration .l_last{
  bottom: 10px;
  left: 0;
}

.product .more{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  font-size: 20px;
  font-weight: 400;

  cursor: pointer;

  margin-top: 10px;
}

.product .more span{
  display: inline-block;
}

.product .more span img{
  margin-top: 4px;
  animation: floatArrow_more 1.5s ease-in-out infinite;
}

/* 定義動畫 */
@keyframes floatArrow_more {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-8px); 
  }
  100% {
    transform: translateX(0);
  }
}

</style>
