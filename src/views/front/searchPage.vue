<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

  <div class="container-fluid px-0">
      <div class="hero-banner position-relative d-flex align-items-center justify-content-center">
        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-end px-4 px-md-5">
            <h2 class="main-title text-white fw-bold text-end pe-5 pe-md-5 flex-grow-1 text-shadow-lg">
                購物專區
            </h2>
            <div class="verse-container d-flex flex-row-reverse align-items-start pe-3">
                <p class="right-text me-3">
                世界這麼大、<br />
                不必走得太遠<br />
                也能遇見<br />
                讓你心動的風景
                </p>
                <p class="right-text">
                跟著我們<br />
                把每一次出走<br />
                變成生活裡<br />
                最溫柔的片段
                </p>
            </div>
        </div>
    </div>

    <!-- 搜尋區 -->
    <div class="bg-white py-4">
      <div class="container">
        <div class="row g-3 align-items-end">
          <div class="col-6 col-md-3">
            <label class="form-label">分類</label>
            <select class="form-select" v-model="filters.category">
              <option  disabled value="">旅行團</option>
              <option>背包客</option>
            </select>
          </div>
          <div class="col-6 col-md-3">
            <label class="form-label">項目類別</label>
            <select class="form-select" v-model="filters.category">
              <option disabled value="">旅遊行程</option>
              <option>美食專區</option>
              <option>飯店專區</option>
              <option>旅遊專區</option>
            </select>
          </div>

          
          <div class="col-6 col-md-3">
            <label class="form-label">偏好分類</label>
            <select class="form-select" v-model="filters.category">
              <option disabled value="">選擇分類</option>
              <option>探索冒險系</option>
              <option>放鬆療癒系</option>
              <option>文化體驗系</option>
              <option>美食探索系</option>
              <option>都市感官系</option>
              <option>自然療癒系</option>
              <option>親子家庭系</option>
              <option>拍照打卡系</option>
              <option>懶人輕鬆系</option>
              <option>特殊主題系</option>
            </select>
          </div>

          <!-- 國家 -->
          <div class="col-6 col-md-3">
            <label class="form-label">所在國家</label>
            <select class="form-select" v-model="filters.country">
              <option disabled value="">選擇國家</option>
              <option>台灣</option>
              <option>日本</option>
              <option>韓國</option>
              <option>泰國</option>
              <option>新加坡</option>
              <option>馬來西亞</option>
              <option>美國</option>
            </select>
          </div>

          <!-- 地區 -->
          <div class="col-6 col-md-3">
            <label class="form-label">所在地區</label>
            <select class="form-select" v-model="filters.country" >
              <option disabled value="">選擇地區</option>
              <option>台北市</option>
              <option>新北市</option>
              <option>宜蘭市</option>
              <option>桃園市</option>
              <option>新竹市</option>
            </select>
          </div>

          <!-- 金額 -->
          <div class="col-6 col-md-3">
            <label class="form-label">購買金額</label>
            <input type="text" class="form-control" placeholder="最小金額" />
          </div>
          <div class="col-6 col-md-3">
            <input type="text" class="form-control mt-4" placeholder="最大金額" />
          </div>

          <!-- 日期區間 -->
          <div class="col-6 col-md-3">
            <label class="form-label">旅遊日期</label>
            <input type="date" class="form-control" placeholder="最早日期"/>
            <span>-</span>
            <input type="date" class="form-control" placeholder="最晚日期"/>
          </div>

          <!-- 天數 -->
          <label class="form-label">旅遊天數</label>
            <select class="form-select" placeholder="選擇天數" v-model="filters.country" >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <!-- 關鍵字 -->
          <div class="col-6 col-md-3">
            <label class="form-label">關鍵字</label>
            <input type="text" class="form-control" placeholder="請輸入關鍵字" v-model="filters.keyword" />
          </div>

          <!-- 搜尋 -->
          <div class="col-6 col-md-3">
            <button class="btn btn-outline-dark w-100 mt-4">搜尋</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品清單區 -->
  <div class="container my-5">
      <div class="row gy-4">
        <div class="col-12" v-for="(item, index) in paginatedItems" :key="index">
          <div class="d-flex bg-white rounded shadow-sm overflow-hidden">

            <!-- 圖片 -->
            <img :src="item.img" class="img-fluid" style="width: 160px; height: auto; object-fit: cover;" />

            <!-- 內容 -->
            <div class="p-3 flex-grow-1">
              <div class="d-flex justify-content-between">
                <!-- 標籤 -->
                <div>
                  <span v-if="item.tag1" class="badge bg-warning text-dark me-1">{{ item.tag1 }}</span>
                  <span v-if="item.tag2" class="badge bg-secondary text-white me-1">{{ item.tag2 }}</span>
                  <span v-if="item.tag3" class="badge bg-danger text-white">{{ item.tag3 }}</span>
                </div>
                <div class="text-end">
                  <div>{{ item.date }}</div>
                  <div class="fw-bold text-danger">NT${{ item.price.toLocaleString() }}</div>
                  <small class="text-muted text-decoration-line-through">NT${{ item.original.toLocaleString() }}</small>
                </div>
              </div>
              <h5 class="mt-2">{{ item.title }}</h5>

              <!-- 收藏 -->
              <span
                class="fs-5 favorite-icon"
                :class="{ active: item.isFavorite }"
                @click="toggleFavorite(item)"
                role="button"
                title="收藏"
              >
                {{ item.isFavorite ? '♥' : '♡' }}
              </span>

              <p class="mb-2 small">{{ item.desc }}</p>
              <button class="btn btn-outline-dark btn-sm">查看詳情</button>
              
            </div>
          </div>
        </div>
      </div>

      <!-- 分頁器 -->
      <nav class="d-flex justify-content-center mt-4">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="prevPage">&laquo;</button>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="goToPage(page)">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="nextPage">&raquo;</button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>


<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { reactive, computed, ref } from 'vue';

const filters = reactive({
  category: '',
  country: '',
  keyword: '',
});

const allItems = [
  {
    title: '摩洛哥｜撒哈拉沙漠',
    desc: '薩哈拉沙漠是全球最大的熱帶沙漠，面積達到約940萬平方公里，橫跨多個國家，擁有壯麗的沙丘和多樣的生態系統。這裡的氣候極端，白天的氣溫可達50攝氏度，而夜晚則驟降至接近零度。沙漠中的生物適應了這種極端環境，形成了獨特的生態平衡。每年，無數探險者和攝影愛好者被這片神秘的土地所吸引，來此探索其壯觀的自然景觀和豐富的文化遺產。',
    price: 18800,
    original: 20800,
    date: '2025.04.10 ~ 2025.04.12',
    tag1: '探索冒險',
    tag2: '自然療癒',
    img: '@/assets/img/search/view1.png',
    isFavorite: false,
  },
  {
    title: '秘魯｜馬丘比丘',
    desc: '馬丘比丘是秘魯最著名的古代遺址之一，坐落在安第斯山脈的高處，海拔約2430米。這座印加城市以其壯觀的石造建築和壯麗的自然景觀而聞名，周圍環繞著雲霧繚繞的山峰和翠綠的山谷。遊客可以在這裡欣賞到精美的梯田、神秘的神廟和壯觀的日出，感受印加文明的魅力。每年吸引著成千上萬的遊客前來探索這片歷史悠久的土地，體驗古代文化的獨特氛圍。',
    price: 120000,
    original: 140800,
    date: '2025.04.10 ~ 2025.04.12',
    tag1: '懶人輕鬆',
    tag2: '自然療癒',
    img: '@/assets/img/search/view2.png',
    isFavorite: false,
  },
  {
    title: '土耳其｜熱氣球之旅',
    desc: '在土耳其，熱氣球飛行是一項令人驚嘆的體驗，尤其是在卡帕多奇亞地區。這裡的獨特地貌和壯麗的日出景色吸引了無數遊客。乘坐熱氣球，您可以俯瞰到奇特的岩石形成、古老的洞穴住宅和廣袤的葡萄園。飛行過程中，您會感受到微風拂面，並且能夠拍攝到壯觀的全景，這將成為您旅行中難忘的回憶。',
    price: 18800,
    original: 20800,
    date: '2025.04.10 ~ 2025.04.12',
    tag1: '文化體驗',
    tag2: '自然療癒',
    img: '@/assets/Shopping.png',
    isFavorite: false,
  },
  {
    title: '義大利｜文藝復興巡禮',
    desc: '義大利的旅程充滿了迷人的景點和豐富的歷史。從羅馬的古老遺跡，如羅馬競技場和萬神殿，到威尼斯的浪漫運河，這裡每一個角落都散發著藝術的氣息。佛羅倫斯的烏菲茲美術館收藏了無數大師的作品，而比薩的斜塔則是建築奇蹟的象徵。無論是品嚐當地的美食，還是漫步在古老的街道上，義大利都會讓你流連忘返，感受到無與倫比的魅力。',
    price: 18800,
    original: 20800,
    date: '2025.04.10 ~ 2025.04.12',
    tag1: '都市感官',
    tag2: '拍照打卡',
    img: '@/assets/Shopping.png',
    isFavorite: false,
  },
  {
    title: '加拿大｜洛磯山脈',
    desc: '加拿大洛磯山脈是自然愛好者的天堂，擁有壯觀的山脈、清澈的湖泊和茂密的森林。這裡的班夫國家公園以其壯麗的冰川湖泊和壯觀的山景而聞名，遊客可以在此進行徒步旅行、滑雪和野生動物觀賞。冰原大道則是通往洛磯山脈的絕佳路線，沿途可欣賞到壯觀的冰川和壯麗的山脈景色。無論是夏季的綠意盎然，還是冬季的白雪皚皚，洛磯山脈都展現出無與倫比的自然美。',
    price: 18800,
    original: 20800,
    date: '2025.04.10 ~ 2025.04.12',
    tag1: '探索冒險',
    tag2: '自然療癒',
    img: '@/assets/Shopping.png',
    isFavorite: false,
  },
  {
    title: '美國｜大峽谷',
    desc: '美國大峽谷是世界上最壯觀的自然奇觀之一，深達1800米，長約446公里，寬度從6到29公里不等。這裡的岩石層顯示了地球數百萬年的地質歷史，色彩斑斕的岩壁在陽光下閃耀著迷人的光芒。遊客可以在觀景台欣賞壯麗的景色，或參加徒步旅行和漂流等冒險活動，體驗大峽谷的壯闊與神秘。每年吸引數百萬遊客前來探索這片壯麗的自然寶藏。',
    price: 18800,
    original: 20800,
    date: '2025.04.10 ~ 2025.04.12',
    tag1: '探索冒險',
    tag2: '自然療癒',
    img: '@/assets/Shopping.png',
    isFavorite: false,
  },
];

// 愛心收藏
// const favorites = ref([]);
// function toggleFavorite(item) {
//   item.isFavorite = !item.isFavorite;
//   if (item.isFavorite) {
//     favorites.value.push(item);
//   } else {
//     favorites.value = favorites.value.filter(i => i.title !== item.title);
//   }
// }

const currentPage = ref(1);
const itemsPerPage = 3;

const totalPages = computed(() => Math.ceil(allItems.length / itemsPerPage));

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return allItems.slice(start, start + itemsPerPage);
});

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function goToPage(page) {
  currentPage.value = page;
}
</script>

<style scoped>
body {
  background-color: #f9f9f9;
}

.hero-banner {
  height: 450px;
  background-image: url('@/assets/img/search/banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.main-title {
  font-size: 3.8rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
}

.right-text {
  color: white;
  font-size: 1.1rem;
  line-height: 1.5;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  writing-mode: vertical-lr;
  text-orientation: upright;
}
.img-fluid{
  width: 332px;
  height: 192px;
  background-image: url('@/assets/img/search/view1.png');
}


.favorite-icon {
  cursor: pointer;
  color: #aaa;
  transition: color 0.3s ease;
}

.favorite-icon .hover {
  color: red;
}


</style>
