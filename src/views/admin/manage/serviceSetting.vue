<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
   <div class="container my-5">
      <div class="row">
        <!-- 左側欄 -->
        <div class="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control border-end-0"
              placeholder="我想問..."
              v-model="search"
            />
            <button
              class="btn btn btn-outline-light border-start-0"
              type="button"
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
          <h5 class="mb-3">常見問題</h5>
          <ul class="list-group">
            <li
              v-for="(category, i) in categories"
              :key="i"
              class="list-group-item list-group-item-action"
              :class="{ active: currentCategory === category }"
              @click="selectCategory(category)"
              style="cursor: pointer"
            >
              {{ category }}
            </li>
          </ul>
        </div>
        <!-- 右側內容 -->
        <div class="col-md-9">
          <h2 class="mb-4">{{ currentCategory }}</h2>

          <div class="accordion" id="faqAccordion">
            <div v-for="(item, index) in filteredFaqs" :key="index" class="accordion-item">
              <h2 class="accordion-header" :id="'heading-' + index">
              <button
                class="accordion-button justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse-' + index"
                :aria-expanded="activeIndex === index"
                :aria-controls="'collapse-' + index"
                @click="toggle(index)"
              >
                {{ item.title }}
                <span class="toggle-icon ms-2">{{ activeIndex === index ? '−' : '+' }}</span>
              </button>
              </h2>
              <div
                :id="'collapse-' + index"
                class="accordion-collapse collapse"
                :class="{ show: activeIndex === index }"
                :aria-labelledby="'heading-' + index"
                data-bs-parent="#faqAccordion"
              >
              <!-- FAQ 展開內容 -->
              <div class="accordion-body">
                <div v-if="currentCategory === '提出問題' && index === 0">
                  <textarea
                    class="form-control"
                    v-model="userQuestion"
                    rows="3"
                    placeholder="請輸入您的問題"
                  ></textarea>
                  <button class="btn btn-primary mt-2" @click="submitQuestion">送出</button>
                </div>
                <div v-else v-html="item.content"></div>
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

export default {
  name: 'serviceSetting',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      search: '',
      activeIndex: null,
      currentCategory: '🧭 行程安排相關',
      categories: [
        '🧭 行程安排相關',
        '✈️ 交通與接送',
        '💳 報名與付款',
        '🛡 旅遊安全與保險',
        '提出問題',
      ],
      faqs: {
        '🧭 行程安排相關': [
          { title: 'Q : 是否提供機票與接送服務？', content: 'A : 是的，完整的每日行程時間表將在出發前7天透過電子郵件提供，包含集合時間、交通安排、景點順序與自由活動時段，讓您提早做好準備。' },
          { title: 'Q : 需要準備什麼證件或旅遊文件？', content: 'A : 行程大多為團體活動，建議全程參與。但若您有特殊需求，可於出發前聯繫客服協助備註，我們會視情況提供可行的彈性安排。' },
        ],
        '✈️ 交通與接送': [
          { title: 'Q : 是否提供機票與接送服務？', content: 'A : 大部分行程提供機票與當地接送服務，詳情請參考各商品頁說明。若需加購機票或單程接送，可聯繫客服為您安排。' },
          { title: 'Q : 需要準備什麼證件或旅遊文件？', content: 'A : 參團旅客需備妥有效護照（效期6個月以上），部分目的地可能需簽證。我們將在出發前提供準備清單，確保您順利出行。' },
        ],
        '💳 報名與付款': [
          { title: 'Q : 報名付款方式有哪些？是否支援分期？', content: 'A : 我們提供信用卡、轉帳等多種付款方式，部分方案支援分期付款，詳情請洽客服。' },
          { title: 'Q : 報名後可以取消或更改日期嗎？', content: 'A : 依據商品規定可能產生手續費，請提前聯絡客服協助處理更改或取消。' },
        ],
        '🛡 旅遊安全與保險': [
          { title: 'Q : 有沒有提供旅遊保險？需另外加購嗎？', content: 'A : 行程包含基本旅責險，建議旅客視需求加購個人旅遊平安保險或海外醫療險。我們也可代為加保，歡迎出發前洽詢。' },
        ],
        '提出問題': [
          { title: '如何為您服務?', content: '<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>' },
        ]          
      },
      userQuestion: '',


      errorMsg: '',
    };
  },
  computed: {
    filteredFaqs() {
      const keyword = this.search.trim().toLowerCase();
      const list = this.faqs[this.currentCategory] || [];
      return list.filter((item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.content.toLowerCase().includes(keyword)
      );
    }
  },

  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    },
    selectCategory(category) {
      this.currentCategory = category
      this.activeIndex = null
    },
    submitQuestion() {
      const cleanInput = this.userQuestion.trim();

      if (!cleanInput) {
        alert('請輸入問題內容');
        return;
      }

      // 實際使用應送出至 API 並 server 端再做驗證與清理
      console.log('使用者問題：', cleanInput);
      alert('問題已送出，我們會盡快回覆您');
      this.userQuestion = '';
    } 
  },
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
/* @import '@/assets/css/user_register.css'; */

.row{
  padding:50px opx;
}

.accordion-button::after {
  display: none !important;
}

.accordion-button .toggle-icon {
  font-weight: bold;
  font-size: 1.25rem;
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
