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
                <img src="@/assets/img/home_page/function-img03.svg" alt="" />
                <p>
                  想去世界的某個角落？我們提供精選旅遊行程，依據地點、價格、興趣快速篩選，發掘當地隱藏玩法！即將開賣的行程不再錯過，還能及時掌握優惠
                </p>
              </li>
              <li>
                <h3>個人化會員體驗</h3>
                <img src="@/assets/img/home_page/function-img02.svg" alt="" />
                <p>
                  註冊成為會員，追蹤旅遊積分、VIP等級，累積專屬優惠！收藏你感興趣的旅程，設定價格追蹤，當行程降價或有新優惠，我們及時通知，讓你的旅行更划算、更自由！
                </p>
              </li>
              <li>
                <h3>安心支付</h3>
                <img src="@/assets/img/home_page/function-img01.svg" alt="" />
                <p>
                  選擇你的旅遊項目，透過信用卡、Apple Pay、Google
                  Pay等安全支付結帳，支援促銷折扣與點數兌換！
                </p>
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
                  <li
                    class="i_list"
                    v-for="item in productList"
                    :key="item.id"
                    @mouseover="hoveredMainImage = item.mainImage"
                  >
                    <div class="i_container">
                      <div class="product_left">
                        <ul>
                          <li v-for="(tag, tIdx) in item.tags" :key="tIdx">
                            <span>{{ tag }}</span>
                          </li>
                        </ul>
                        <h3>{{ item.title }}</h3>
                      </div>

                      <div class="product_right">
                        <div class="right_info">
                          <p>出發日 : {{ item.departure || '自由選擇' }}</p>
                          <p>
                            <span>NT$</span><span>{{ item.price }}</span>
                          </p>
                        </div>

                        <span class="favorite"
                          ><img src="@/assets/img/icon/favorite-line.svg" alt=""
                        /></span>
                      </div>
                    </div>
                  </li>
                </ul>

                <ul class="product_page">
                  <li><img src="@/assets/img/icon/arrow-left.svg" alt="" /></li>
                  <li><a href="">1</a></li>
                  <li>/</li>
                  <li><a href="">3</a></li>
                  <li><img src="@/assets/img/icon/arrow-right.svg" alt="" /></li>
                </ul>
              </div>

              <div class="content_right">
                <div class="main_item">
                  <img :src="hoveredMainImage" alt="產品主圖" />
                  <div class="illustration">
                    <span
                      ><img class="l_first" src="@/assets/img/illustration/deco-img01.svg" alt=""
                    /></span>
                    <span
                      ><img class="l_last" src="@/assets/img/illustration/deco-img03.svg" alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="more">
              <span>查看更多</span>
              <span><img src="@/assets/img/icon/arrow-right-long.svg" alt="" /></span>
            </div>
          </div>

          <div class="travel_tool">
            <div class="travel_title">
              <h2>旅遊神器</h2>
            </div>

            <div class="travel_content">
              <div class="travel_left">
                <!-- 圖片 -->
                <div class="main_item">
                  <img :src="tools[toolIndex].image" alt="" />
                </div>

                <!-- 功能按鈕 -->
                <ul class="travel_function">
                  <li
                    v-for="(tool, index) in tools"
                    :key="index"
                    :class="['func', 'func' + (index + 1)]"
                  >
                    <a
                      href="#"
                      :class="{ active: index === toolIndex }"
                      @click.prevent="handleClick(index)"
                    >
                      {{ tool.name }}
                    </a>
                  </li>
                </ul>

                <!-- 對應點點 -->
                <ul class="travel_dot">
                  <li
                    v-for="(tool, index) in tools"
                    :key="'dot-' + index"
                    :class="['dot', 'dot' + (index + 1), { active: index === toolIndex }]"
                  ></li>
                </ul>

                <!-- 弧形路徑 -->
                <svg class="arc-path" width="650" height="695" viewBox="0 0 650 695">
                  <path
                    d="M190,-45 C470,220 430,475 250,670"
                    stroke="#D4D4D4"
                    stroke-width="3"
                    fill="none"
                  />
                </svg>
              </div>

              <div class="travel_right">
                <div class="main_content">
                  <div class="travel_new">
                    {{ tools[toolIndex].content }}
                  </div>
                  <div class="illustration">
                    <span
                      ><img class="l_first" src="@/assets/img/illustration/deco-img02.svg" alt=""
                    /></span>
                    <span
                      ><img class="l_last" src="@/assets/img/illustration/deco-img06.svg" alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="more">
              <span>開始體驗</span>
              <span><img src="@/assets/img/icon/arrow-right-long.svg" alt="" /></span>
            </div>
          </div>

          <div class="reviews">
            <h2>好評專區</h2>

            <div class="main_contents">
              <span class="left_btn" @click="prevSlide"
                ><img src="@/assets/img/icon/arrow-left.svg" alt=""
              /></span>
              <ul class="review_contents">
                <li v-for="review in visibleReviews" :key="review.name" class="review_card">
                  <img class="avatar" :src="review.avatar" alt="avatar" />

                  <div class="reviews_info">
                    <div class="i_title">
                      <div class="name">{{ review.name }}</div>
                      <div class="badge">
                        <img :src="review.badgeIcon" alt="badge" />
                        <span>{{ review.badgeText }}</span>
                      </div>
                    </div>

                    <div class="rating">
                      <img
                        v-for="n in 5"
                        :key="n"
                        :src="n <= review.stars ? starBold : starLine"
                        alt="star"
                      />
                    </div>
                  </div>

                  <div class="reviews_content">
                    <div class="hashtag">{{ review.hashtag }}</div>
                    <div class="content">
                      {{ truncatedText(review.content) }}
                    </div>
                  </div>
                </li>
              </ul>
              <span class="right_btn" @click="nextSlide"
                ><img src="@/assets/img/icon/arrow-right.svg" alt=""
              /></span>
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

import productImg1 from '@/assets/img/product/Shopping-img.svg';
import productImg2 from '@/assets/img/product/Shopping-img-2.svg';
import productImg3 from '@/assets/img/product/Shopping-img-1.svg';

import tool_img01 from '@/assets/img/home_page/travel-img01.svg';
import tool_img02 from '@/assets/img/home_page/travel-img02.svg';
import tool_img03 from '@/assets/img/home_page/travel-img03.svg';
import tool_img04 from '@/assets/img/home_page/travel-img04.svg';
import tool_img05 from '@/assets/img/home_page/travel-img05.svg';

import avatar_img01 from '@/assets/img/avatar/avatar-img01.svg';
import avatar_img02 from '@/assets/img/avatar/avatar-img02.svg';
import avatar_img03 from '@/assets/img/avatar/avatar-img03.svg';
import avatar_img04 from '@/assets/img/avatar/avatar-img04.svg';

import badge_01 from '@/assets/img/badge/badge01.svg';
import badge_02 from '@/assets/img/badge/badge02.svg';
import badge_03 from '@/assets/img/badge/badge03.svg';
import badge_04 from '@/assets/img/badge/badge04.svg';
import badge_05 from '@/assets/img/badge/badge05.svg';

import starBold from '@/assets/img/icon/star-bold.svg';
import starLine from '@/assets/img/icon/star-line.svg';

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
      productList: [
        {
          id: 1,
          title: '高雄承億酒店',
          tags: ['探索冒險', '文化體驗', '放鬆療癒'],
          price: 7000,
          mainImage: productImg1, // 對應右側大圖
        },
        {
          id: 2,
          title: '東京青年商旅',
          tags: ['美食探索', '特殊主題', '親子主題'],
          price: 5500,
          mainImage: productImg2,
        },
        {
          id: 3,
          title: '洛杉磯豪華酒店',
          tags: ['拍照打卡', '文化體驗', '都市感官'],
          price: 12000,
          mainImage: productImg3,
        },
      ],
      hoveredMainImage: productImg1,
      selectedIndex: 0,
      toolIndex: 0, // 輪播圖片 index
      autoPlayTimer: null,
      resumeTimer: null,
      tools: [
        {
          id: 1,
          name: '天氣查詢',
          content: '隨時查詢即時天氣，提供溫度、降雨與風速資訊，讓你安心出門',
          image: tool_img01,
        },
        {
          id: 2,
          name: '匯率查詢',
          content: '快速查詢各國匯率，幫助你即時掌握幣值變化，精打細算旅費',
          image: tool_img02,
        },
        {
          id: 3,
          name: '機票/租車查詢',
          content: '結合多家平台資訊，提供最優惠的機票與租車選擇',
          image: tool_img03,
        },
        {
          id: 4,
          name: '互動地圖',
          content: '探索景點、路線與交通資訊，讓你玩得更順更開心',
          image: tool_img04,
        },
        {
          id: 5,
          name: '文化介紹',
          content: '深入了解目的地文化與風俗，讓旅程更有深度與樂趣',
          image: tool_img05,
        },
      ],
      reviews: [
        {
          name: '王小明',
          avatar: avatar_img01,
          badgeIcon: badge_03,
          badgeText: '世界探索者',
          stars: 5,
          hashtag: '#旅遊神器讚讚！',
          content:
            '旅遊神器太好用了！非常適合旅遊中毒者使用，到了一個國家，能夠馬上顯示天氣預報，非常方便！',
        },
        {
          name: '劉小芬',
          avatar: avatar_img02,
          badgeIcon: badge_01,
          badgeText: '初心旅人',
          stars: 4,
          hashtag: '#真人客服解決了我的問題！',
          content:
            'TripEasy五星級服務，24小時皆有真人客服，不會操作，馬上就有人可詢問解決！要安排行程肯定要來～',
        },
        {
          name: '陳小花',
          avatar: avatar_img03,
          badgeIcon: badge_02,
          badgeText: '熱血旅遊家',
          stars: 3,
          hashtag: '#行程推薦',
          content:
            '首頁的朋友專區超適合旅遊規劃新手，推薦的行程真的非常適合朋友旅遊，價格也很合理！',
        },
        {
          name: '游小彥',
          avatar: avatar_img04,
          badgeIcon: badge_03,
          badgeText: '世界探索者',
          stars: 5,
          hashtag: '#資深旅遊者大力推',
          content:
            '身為資深背包客，真的非常推薦這個平台！安排購買行程一次到位，讓出去玩更能輕鬆自在',
        },
        {
          name: '王小明',
          avatar: avatar_img01,
          badgeIcon: badge_03,
          badgeText: '世界探索者',
          stars: 5,
          hashtag: '#旅遊神器讚讚！',
          content:
            '旅遊神器太好用了！非常適合旅遊中毒者使用，到了一個國家，能夠馬上顯示天氣預報，非常方便！',
        },
        {
          name: '劉小芬',
          avatar: avatar_img02,
          badgeIcon: badge_04,
          badgeText: '初心旅人',
          stars: 4,
          hashtag: '#真人客服解決了我的問題！',
          content:
            'TripEasy五星級服務，24小時皆有真人客服，不會操作，馬上就有人可詢問解決！要安排行程肯定要來～',
        },
        {
          name: '陳小花',
          avatar: avatar_img03,
          badgeIcon: badge_02,
          badgeText: '熱血旅遊家',
          stars: 3,
          hashtag: '#行程推薦',
          content:
            '首頁的朋友專區超適合旅遊規劃新手，推薦的行程真的非常適合朋友旅遊，價格也很合理！',
        },
        {
          name: '游小彥',
          avatar: avatar_img04,
          badgeIcon: badge_05,
          badgeText: '世界探索者',
          stars: 5,
          hashtag: '#資深旅遊者大力推',
          content:
            '身為資深背包客，真的非常推薦這個平台！安排購買行程一次到位，讓出去玩更能輕鬆自在',
        },
      ],
      reviewIndex: 0,
      visibleCount: 4,
      starBold,
      starLine,
    };
  },
  computed: {
    visibleReviews() {
      return this.reviews.slice(this.reviewIndex, this.reviewIndex + this.visibleCount);
    },
  },

  methods: {
    scrollToNext() {
      const section = document.querySelector('.home_content');
      if (section) {
        const offset = -120; // 👈 想往上留空多少 px，可自行調整
        const top = section.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
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

    startAutoPlay() {
      this.autoPlayTimer = setInterval(() => {
        this.toolIndex = (this.toolIndex + 1) % this.tools.length;
      }, 4000);
    },

    stopAutoPlay() {
      clearInterval(this.autoPlayTimer);
    },

    handleClick(index) {
      this.toolIndex = index;
      this.stopAutoPlay();

      // 若之前有 delay 還沒執行，先清掉
      clearTimeout(this.resumeTimer);
      this.resumeTimer = setTimeout(() => {
        this.startAutoPlay();
      }, 5000); // 停 5 秒後恢復輪播
    },

    nextSlide() {
      if (this.reviewIndex + this.visibleCount < this.reviews.length) {
        this.reviewIndex++;
        this.$nextTick(() => {
          this.triggerReviewAnimation();
        });
      }
    },
    prevSlide() {
      if (this.reviewIndex > 0) {
        this.reviewIndex--;
        this.$nextTick(() => {
          this.triggerReviewAnimation();
        });
      }
    },
    triggerReviewAnimation() {
      const cards = document.querySelectorAll('.review_card');
      cards.forEach((card) => {
        card.classList.remove('show');
        // 強制重繪（reflow）讓動畫可以重新觸發
        void card.offsetWidth;
        card.classList.add('show');
      });
    },
    truncatedText(text) {
      return text.length > 50 ? text.slice(0, 50) + '...' : text;
    },
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    // 對所有 review_card 套用觀察器
    this.$nextTick(() => {
      const cards = document.querySelectorAll('.review_card');
      cards.forEach((card) => observer.observe(card));
    });

    window.addEventListener('scroll', this.handleScroll, { passive: true });

    this.currentImages = [...this.imagesTaiwan];
    this.startAutoSlide(); // 開始自動在 Taiwan/World 間切換

    this.startAutoPlay();
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    this.stopAutoPlay();
    clearTimeout(this.resumeTimer);
  },
};
</script>

<style scoped>
@import '@/assets/css/reset.css';
@import '@/assets/css/common.css';

/* --- common --- */
h2 {
  display: inline-block;
  position: relative;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 38.4px;
  z-index: 1;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 1px; /* 底線與文字距離 */
  width: 160px; /* 底線長度，這裡你可以自行調整 */
  height: 0.4em; /* 高度決定底色的厚度 */
  border-bottom: 9px solid #b1d6ca;
  z-index: -1; /* 底線在文字下面 */
  border-radius: 4px; /* 圓角可選 */
}

.home_content {
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

.header_img {
  align-self: center;
}

.header_img img {
  width: 550px;
  margin: 0 100px 0 20px;
}

/* --- 小插圖 --- */
.header_country .illustration span {
  position: absolute;
}

.header_country .illustration span:first-child {
  top: 0;
  left: 20px;
}

.header_country .illustration span:last-child {
  bottom: 0;
  right: 20px;
}

/* --- header_slogan --- */
.header_slogan {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 150px;
  font-size: 36px;
  font-weight: bold;

  padding: 30px 40px;

  background-color: #ffffff;
}

/* --- 文字 --- */
.header_slogan .slogan_content {
  writing-mode: vertical-rl;
  text-orientation: upright;

  letter-spacing: 12px;
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
.item_category {
  margin-bottom: 180px;
}

.item_category ul {
  display: flex;
  justify-content: space-between;
  gap: 24px;

  margin: 60px 0 30px 0;
}

.item_category ul li {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;

  color: #333333;
  background: #f2f2f2;
  border: 2px solid #d4d4d4;
  border-radius: 28px;

  padding: 34px 64px;
}

.item_category ul li h3 {
  font-size: 24px;
  font-weight: 700;
}

.item_category ul li img {
  width: 180px;
}

.item_category ul li p {
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}

/* --- product --- */
.product {
  margin-bottom: 180px;
}

.product_content {
  display: flex;

  justify-content: space-between;
}

.product_content .content_left {
  width: 50%;
}

.product_content .content_right {
  width: 40%;
}

/* --- product item_title --- */
.product_content .item_title {
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
}

.product_content .content_left .type_group {
  writing-mode: vertical-lr;
}

.product_content .content_left .type_group li a {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;

  border: 2px solid transparent;
  border-radius: 100px;
  color: #5b5b5b;

  padding: 14px 7px;
  letter-spacing: 5px;

  transition: background-color 0.5s ease;
}

.product_content .content_left .type_group li:first-child {
  margin-right: 20px;
}

.product_content .content_left .type_group a:hover {
  background-color: #d4d4d4;
  color: #5b5b5b;
}

.product_content .content_left .type_group a:focus {
  color: #5b5b5b;
  background-color: transparent;
  border: 2px solid #d4d4d4;
}

.product_content .content_left .type_group .active {
  background-color: #5b5b5b;
  color: #ffffff;
}

/* --- product item_group --- */
.product_content .content_left .item_group {
  display: flex;
  gap: 24px;

  align-items: center;
}

.product_content .content_left .item_group a {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;

  border-radius: 100px;
  border: 2px solid #5b5b5b;
  color: #5b5b5b;

  padding: 7px 14px 5px 14px;
  letter-spacing: 2px;

  transition: background-color 0.5s ease;
}

.product_content .content_left .item_group a:hover,
.product_content .content_left .item_group .active {
  background-color: #333333;
  border: 2px solid #333333;
  color: #ffffff;
}

/* product product_item */
.content_left .product_item {
  margin-top: 17px;
  margin-bottom: 45px;
}

.content_left .product_item .i_list {
  border-bottom: 1px solid #d4d4d4;
  padding: 10px 0;
}

.content_left .product_item .i_list .i_container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 12px;
  border-radius: 10px;

  transition: 0.5s background-color ease;
}

.content_left .product_item .i_container:hover {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}

.content_left .product_item .product_left ul {
  display: flex;
  gap: 4px;

  align-items: center;

  margin-bottom: 14px;
}

.content_left .product_item .product_left ul li {
  font-size: 12px;
  background-color: #ffdd78;
  border-radius: 40px;
  font-weight: 700;

  padding: 4px 12px;
}

.content_left .product_item .product_left h3 {
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 4px;

  font-weight: 700;
}

.content_left .product_item .product_right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  color: #212121;
  line-height: 30px;
}

.content_left .product_item .product_right p:first-child {
  font-weight: 400;
  letter-spacing: 3px;

  margin-bottom: 4px;
}

.content_left .product_item .product_right p:last-child span:first-child {
  font-weight: 700;
  letter-spacing: 3px;
}

.content_left .product_item .product_right p:last-child span:last-child {
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 20px;
}

.content_left .product_item .product_right .favorite {
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.5s ease;

  cursor: pointer;
}

.content_left .product_item .i_container:hover .favorite {
  opacity: 1;
}

/* product product_page */
.product_content .content_left .product_page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-weight: bold;
}

.product_content .content_left .product_page img {
  border-radius: 20px;
  background: #d4d4d4;

  padding: 4px;
  vertical-align: middle;

  cursor: pointer;

  transition: 0.5s background-color ease;
}

.product_content .content_left .product_page img:hover {
  background-color: #d4d4d484;
}

.product_content .content_right {
  display: flex;
  align-items: center;
}

/* product main_item */
.product_content .content_right .main_item img {
  width: 500px;
}

.product_content .content_right .main_item {
  position: relative;
}

/* product illustration */
.product_content .content_right .illustration img {
  width: 120px;

  position: absolute;
}

.product_content .content_right .illustration .l_first {
  z-index: -10;
  width: 160px;
  top: 35px;
  right: -80px;
}

.product_content .content_right .illustration .l_last {
  bottom: 10px;
  left: 0;
}

/* product more */
.product .more {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  font-size: 20px;
  font-weight: 400;

  cursor: pointer;

  margin-top: 10px;
}

.product .more span {
  display: inline-block;
}

.product .more span img {
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

/* --- travel_tool --- */
.travel_tool {
  margin-bottom: 180px;
}

.travel_title {
  margin-bottom: 150px;
}

.travel_content {
  display: flex;
  justify-content: space-between;
  gap: 30px;

  position: relative;
}

.travel_content .main_item img {
  width: 500px;
  border-radius: 600px;
  border: 4px solid #ffffff;
}

.travel_content .travel_function li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  text-align: center;
  line-height: 25px;

  color: #5b5b5b;
  border: 2px solid #333333;
  border-radius: 100px;

  padding: 12px 20px;
  font-weight: 700;

  transition:
    0.6s background-color ease,
    0.6s color ease;
}

.travel_content .travel_function li a.active,
.travel_content .travel_function li a:hover {
  color: #ffffff;
  background: #333333;
}

.travel_content .travel_function .func {
  position: absolute;
  z-index: 10; /* 提高層級 */
}

.travel_content .travel_function .func1 {
  top: -80px;
  left: 410px;
}
.travel_content .travel_function .func2 {
  top: 40px;
  left: 500px;
}
.travel_content .travel_function .func3 {
  top: 185px;
  left: 530px;
}
.travel_content .travel_function .func4 {
  top: 330px;
  left: 500px;
}
.travel_content .travel_function .func5 {
  top: 450px;
  left: 410px;
}

.travel_content .travel_dot li {
  width: 15px;
  height: 15px;
  text-align: center;

  background: #d4d4d4;
  border-radius: 100px;
}

.travel_content .travel_dot li.active {
  background: #333333;
}

.travel_content .travel_dot .dot {
  position: absolute;
  z-index: 10;
}

.travel_content .travel_dot .dot1 {
  top: -100px;
  left: 530px;
}
.travel_content .travel_dot .dot2 {
  top: 40px;
  left: 633px;
}
.travel_content .travel_dot .dot3 {
  top: 235px;
  left: 685px;
}
.travel_content .travel_dot .dot4 {
  top: 420px;
  left: 643px;
}
.travel_content .travel_dot .dot5 {
  top: 560px;
  left: 545px;
}

svg.arc-path {
  position: absolute;
  top: -100px;
  left: 300px;
  z-index: 0;
}

.travel_right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_content .travel_new {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 450px;
  height: 450px;
  font-size: 28px;
  font-weight: 700;
  background: #ffffff;
  border-radius: 420px;

  text-align: center;
  letter-spacing: 6px;
  line-height: 38px;

  padding: 32px 48px;
}

/* travel_tool illustration */
.main_content .illustration img {
  width: 180px;

  position: absolute;
}

.main_content .illustration .l_first {
  width: 90px;
  top: 0px;
  left: 730px;
}

.main_content .illustration .l_last {
  bottom: 0px;
  right: 0;
}

/* travel_tool more */
.travel_tool .more {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  font-size: 20px;
  font-weight: 400;

  cursor: pointer;

  margin-top: 100px;
}

.travel_tool .more span {
  display: inline-block;
}

.travel_tool .more span img {
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

/* --- review --- */
.reviews .main_contents {
  display: flex;

  margin-top: 90px;
  position: relative;
}

.reviews .main_contents .review_contents {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.reviews .main_contents .review_contents li {
  background-color: #ffffff;

  border-radius: 12px;
  padding: 52px 32px 40px 32px;
  position: relative;

  width: 25%;
}

.reviews .main_contents .review_contents li .avatar {
  position: absolute;
  top: -35px;
  left: 30px;

  border-radius: 100px;
}

.reviews .main_contents .review_contents li .reviews_info {
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid #d4d4d4; /* 或你要的顏色 */
}

.reviews .main_contents .review_contents li .i_title {
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 700;
  margin-bottom: 8px;
}

.reviews .main_contents .review_contents li .i_title .name {
  font-size: 20px;
}

.reviews .main_contents .review_contents li .i_title .badge {
  display: flex;
  align-items: center;
  gap: 4px;
}

.reviews .main_contents .review_contents li .i_title .badge span {
  color: #5b5b5b;
}

.reviews .main_contents .review_contents li .rating img {
  width: 16px;
}

.reviews .main_contents .review_contents li .reviews_content .hashtag {
  font-size: 20px;
  font-weight: 700;
  color: #212121;

  margin-bottom: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 1; /* 最多顯示 3 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reviews .main_contents .review_contents li .reviews_content .content {
  line-height: 24px;
  letter-spacing: 3px;

  display: -webkit-box;
  -webkit-line-clamp: 3; /* 最多顯示 3 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reviews .main_contents .left_btn,
.reviews .main_contents .right_btn {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  border: 2px solid #5b5b5b;
  border-radius: 100px;
  padding: 16px;

  background-color: #f2f2f2;
  cursor: pointer;

  transition: 0.4s filter ease;
}

.reviews .main_contents .left_btn {
  top: 120px;
  left: -84px;
}

.reviews .main_contents .right_btn {
  top: 120px;
  right: -84px;
}

.reviews .main_contents .left_btn:hover,
.reviews .main_contents .right_btn:hover {
  filter: invert(1);
  border: 2px solid #333333;
}

.review_card {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.review_card.show {
  opacity: 1;
}
</style>
