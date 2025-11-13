<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

  <div class="container-fluid px-0">
      <div class="hero-banner d-flex align-items-center justify-content-center">
        <div class="container top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-end px-4 px-md-5">
            <h2 class="main-title text-white fw-bold text-center pe-5 pe-md-9 flex-grow-1 text-shadow-lg">
                購物專區
            </h2>
            <div class="verse-container d-flex flex-row-reverse align-items-start pe-3">
                <p class="right-text">
                世界這麼大、<br />
                不必走得太遠<br />
                也能遇見<br />
                讓你心動的風景
                </p>
                <p class="right-text me-5">
                跟著我們<br />
                把每一次出走<br />
                變成生活裡<br />
                最溫柔的片段
                </p>
            </div>
        </div>
      </div>

    <!-- 搜尋區+商品清單區+分頁器 -->
      <div class="main-content">
        <a href="#" style="text-decoration: none; color: #5b5b5b">首頁</a> /
        <a
          href="#"
          style="text-decoration: none; color: #5b5b5b; font-weight: 700"
          >購物專區</a
        >

        <!-- 搜尋區 -->
        <div class="bg-white py-4">
          <div class="container">
            <!-- 所在國家 / 地區 -->
            <div class="row g-3 align-items-end mb-3">
              <!-- 國家 -->
              <div class="col-6 col-md-3">
                <div class="d-flex align-items-center">
                  <label class="form-label mb-0 me-3" style="white-space: nowrap"
                    >所在國家</label
                  >
                  <select
                    class="form-select"
                    v-model="filters.country"
                    style="width: 180px"
                  >
                    <option disabled value="">選擇國家</option>
                    <option>台灣</option>
                  </select>
                </div>
              </div>

              <!-- 地區 -->
              <div class="col-6 col-md-3">
                <div class="d-flex align-items-center">
                  <label class="form-label mb-0 me-3" style="white-space: nowrap"
                    >所在地區</label
                  >
                  <select
                    class="form-select"
                    v-model="filters.area"
                    style="width: 180px"
                  >
                    <option disabled value="">選擇地區</option>
                    <option>台北市</option>
                    <option>新北市</option>
                    <option>宜蘭縣</option>
                    <option>桃園市</option>
                    <option>新竹縣</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 金額 -->
            <div class="row g-3 align-items-end mb-3">
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                  <label class="form-label mb-0 me-3" style="white-space: nowrap"
                    >購買金額</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    placeholder="最小金額"
                    v-model.number="filters.minPrice"
                    style="width: 180px"
                  />
                  <span class="mx-1"> – </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="最大金額"
                    v-model.number="filters.maxPrice"
                    style="width: 180px"
                  />
                </div>
              </div>
            </div>

            <!-- 日期區間 -->
            <div class="row g-3 align-items-end mb-3">
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                  <label class="form-label mb-0 me-3" style="white-space: nowrap"
                    >旅遊日期</label
                  >
                  <div class="flex-grow-1 me-0">
                    <input
                      type="date"
                      class="form-control"
                      v-model="filters.startDate"
                      style="width: 180px"
                    />
                  </div>
                  <span class="mx-1"> – </span>
                  <div class="flex-grow-1 ms-0">
                    <input
                      type="date"
                      class="form-control"
                      v-model="filters.endDate"
                      style="width: 180px"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 天數 -->
            <div class="row g-3 align-items-end mb-3">
              <div class="col-6 col-md-3">
                <div class="d-flex align-items-center">
                  <label class="form-label mb-0 me-3" style="white-space: nowrap"
                    >旅遊天數</label
                  >
                  <select
                    class="form-select"
                    v-model="filters.days"
                    style="width: 180px"
                  >
                    <option disabled value="">選擇天數</option>
                    <option value="1">1日</option>
                    <option value="2">2日</option>
                    <option value="3">3日</option>
                    <option value="4">4日</option>
                    <option value="5">5日</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 關鍵字 -->
            <div class="row g-3 align-items-end mb-3">
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                  <label
                    class="form-label mb-0"
                    style="white-space: nowrap; margin-right: 2em"
                    >關鍵字</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入關鍵字（標題或介紹）"
                    v-model="filters.keyword"
                    style="width: 376px"
                  />
                </div>
              </div>
            </div>

            <!-- 搜尋 -->
            <div class="col-12 col-md-12 text-end">
              <button class="btn btn-outline-dark mt-4 btn-oval" @click="onSearch">
                搜尋
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 排序與每頁顯示數量控制列 -->
      <div class="container d-flex justify-content-between align-items-center my-3">
          <!-- 每頁顯示筆數選單 -->
          <div class="d-flex align-items-center">
            <select v-model="itemsPerPage" @change="onItemsPerPageChange" class="form-select form-select-lg" style="width: 180px;">
              <option :value="2">筆數：2</option>
              <option :value="4">筆數：4</option>
              <option :value="6">筆數：6</option>
              <option :value="6" selected>筆數</option>
            </select>
          </div>
          <!-- 金額排序選單 -->
          <div class="d-flex align-items-center">
            <select v-model="sortOrder" @change="onSortOrderChange" class="form-select form-select-lg" style="width: 180px;">
              <option value=null>金額排序</option>
              <option value="asc">金額升序 ▲</option>
              <option value="desc">金額降序 ▼</option>
            </select>
          </div>
        </div>

    <!-- 商品清單區 -->
  <div class="container my-5">
      <div class="row gy-4">
        <div class="col-12" v-for="(item) in paginatedItems" :key="item.id">
          <div class="d-flex bg-white rounded shadow-sm overflow-hidden">

            <!-- 圖片 -->
            <img :src="item.img" class="img-fluid" style="object-fit: cover;" />

            <!-- 內容 -->
            <div class="p-3 flex-grow-1">

                <!-- 標籤 -->
                <div>
                  <span v-if="item.tag1" class="badge bg-warning text-dark me-1">{{ item.tag1 }}</span>
                  <span v-if="item.tag2" class="badge bg-secondary text-white me-1">{{ item.tag2 }}</span>
                  <span v-if="item.tag3" class="badge bg-danger text-white">{{ item.tag3 }}</span>
                </div>

              <!-- 主內容區塊：左側(title/desc) + 右側(日期/價格/按鈕) -->
              <div class="d-flex">
                <!-- 左側：title + 收藏 + desc -->
                <div class="flex-grow-1">
                  <div class="d-flex align-items-center mb-1">
                    <h5 class="mb-0">{{ item.title }}</h5>
                    <span
                      class="fs-5 favorite-icon ms-2"
                      :class="{ active: item.isFavorite }"
                      @click="toggleFavorite(item)"
                      role="button"
                      title="收藏"
                    >
                      {{ item.isFavorite ? '♥' : '♡' }}
                    </span>
                  </div>
                  <p class="mb-2 small text-start">{{ item.desc }}</p>
                </div>

                <!-- 右側：日期/價格/按鈕 -->
                <div class="text-end ms-3" style="min-width: 210px;">
                  <div>{{ formatDateRange(item) }}</div>
                  <div class="price-custom mt-2 mb-1">
                    NT${{ item.price.toLocaleString() }}
                  </div>
                  <small class="text-muted text-decoration-line-through d-block mb-2">
                    NT${{ item.original.toLocaleString() }}
                  </small>
                  <router-link to="/tourfakeUSA">
                    <button class="btn btn-outline-dark btn-sm">查看詳情</button>
                  </router-link>
                </div>

              </div>

            </div>

          </div>
        </div>

      <!-- 分頁器 -->
      <nav class="d-flex justify-content-center mt-4" v-if="totalPages > 1">
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
    </div>
  </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>


<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';


import { reactive, computed, ref } from 'vue';

// TODO: 目前先移除：分類(背包客、旅行團)、項目類別、偏好分類，後續再補上
const filters = reactive({
  country: '', // 國家
  area: '', // 地區
  days: '', // 天數
  keyword: '', // 關鍵字
  minPrice: null, // 最小金額
  maxPrice: null, // 最大金額
  startDate: '', // 起始日期 YYYY-MM-DD
  endDate: '', // 結束日期 YYYY-MM-DD
});

const sortOrder = ref(null) // null=沒排序, 'asc'=升序, 'desc'=降序
const itemsPerPage = ref(6); //預設每夜的顯示項目是6筆
const currentPage = ref(1); //頁面顯示的初始值1，代表每次開啟都會是第1頁

// 假資料項目
const allItems = ref([
  {
    id: 1,
    country: '台灣',
    area: '宜蘭縣',
    days: 1,
    title: '台灣｜龜山島賞鯨半日＋環島登島｜1日',
    desc: '搭船前往龜山島外海賞鯨，登島環湖步道，近距離感受龜山島地質與海景魅力，適合一日小旅行。',
    price: 1880,
    original: 2280,
    startDate: '2025-04-10',
    endDate: '2025-04-10',
    tag1: '海景小旅行',
    tag2: '自然療癒',
    img: 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_C100_164_22.jpg',
    isFavorite: false,
  },
  {
    id: 2,
    country: '台灣',
    area: '新北市',
    days: 1,
    title: '台灣｜九份老街山城散步｜1日',
    desc: '走訪九份老街、阿妹茶樓周邊巷弄，品嚐在地芋圓與茶點，夜晚俯瞰山城與海灣夜景，感受復古山城氛圍。',
    price: 1680,
    original: 1980,
    startDate: '2025-04-12',
    endDate: '2025-04-12',
    tag1: '拍照打卡',
    tag2: '文化體驗',
    img: 'https://newtaipei.travel/content/images/attractions/27525/1024x768_attractions-image-fwfaxumoiegq42wwkiwkpg.jpg',
    isFavorite: false,
  },
  {
    id: 3,
    country: '台灣',
    area: '台北市',
    days: 2,
    title: '台灣｜陽明山溫泉花季小旅行｜2日',
    desc: '春季賞花、秋冬泡湯，一次體驗陽明山國家公園步道、擎天崗草原與在地溫泉旅宿，適合放鬆度假。',
    price: 4280,
    original: 4880,
    startDate: '2025-03-20',
    endDate: '2025-03-21',
    tag1: '放鬆療癒',
    tag2: '溫泉假期',
    img: 'https://www.settour.com.tw/ss_img/poi/20220406/424ff8c7-b4e2-4685-8660-421c211f3e63.jpg',
    isFavorite: false,
  },
  {
    id: 4,
    country: '台灣',
    area: '桃園市',
    days: 2,
    title: '台灣｜小烏來天空步道＆溪谷秘境｜2日',
    desc: '造訪小烏來天空步道、瀑布群與周邊溪谷秘境，入住山林民宿，感受北台灣山城的靜謐與涼爽。',
    price: 3980,
    original: 4380,
    startDate: '2025-05-01',
    endDate: '2025-05-02',
    tag1: '探索冒險',
    tag2: '自然步道',
    img: 'https://travel.tycg.gov.tw/content/images/attractions/100594/1024x768_attractions-image-_b9jct2c-kstzrkluhayiq.jpg',
    isFavorite: false,
  },
  {
    id: 5,
    country: '台灣',
    area: '新竹縣',
    days: 2,
    title: '台灣｜內灣老街＆山林小火車｜2日',
    desc: '搭乘內灣線小火車，漫步老街品嚐客家小吃，走訪周邊吊橋與溪畔步道，感受懷舊鐵道風情。',
    price: 3580,
    original: 3990,
    startDate: '2025-06-15',
    endDate: '2025-06-16',
    tag1: '親子家庭',
    tag2: '文化體驗',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Neiwan_Old_Theatre.jpg/250px-Neiwan_Old_Theatre.jpg',
    isFavorite: false,
  },
  {
    id: 6,
    country: '台灣',
    area: '台北市',
    days: 1,
    title: '台灣｜台北城市散步＆夜市美食｜1日',
    desc: '白天走訪中正紀念堂、西門町等經典景點，夜晚逛夜市大啖小吃，適合初次來台北的旅人。',
    price: 1480,
    original: 1780,
    startDate: '2025-07-05',
    endDate: '2025-07-05',
    tag1: '都市感官',
    tag2: '美食探索',
    img: 'https://www.travel.taipei/image/337108/?r=1667871197126',
    isFavorite: false,
  },
  {
    id: 7,
    country: '台灣',
    area: '宜蘭縣',
    days: 3,
    title: '台灣｜宜蘭山海祕境小旅行｜3日',
    desc: '結合蘇澳冷泉、南方澳漁港、太平山森林步道等景點，三日走訪宜蘭山海風景與在地小吃。',
    price: 8980,
    original: 9880,
    startDate: '2025-08-10',
    endDate: '2025-08-12',
    tag1: '自然療癒',
    tag2: '懶人輕鬆',
    img: 'https://kafu.tw/wp-content/uploads/pixnet/be2825d81f131f35e02a8880cc5266ac.jpg',
    isFavorite: false,
  },
  {
    id: 8,
    country: '台灣',
    area: '新北市',
    days: 3,
    title: '台灣｜東北角海岸＆平溪放天燈｜3日',
    desc: '行程串連東北角海岸線、鼻頭角步道、平溪放天燈與十分老街，適合喜歡拍照與海岸風景的旅人。',
    price: 9180,
    original: 10280,
    startDate: '2025-09-18',
    endDate: '2025-09-20',
    tag1: '拍照打卡',
    tag2: '海岸風景',
    img: 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_752_26.jpg',
    isFavorite: false,
  },
]);

// 愛心收藏
function toggleFavorite(item) {
  item.isFavorite = !item.isFavorite;
  allItems.value = [...allItems.value];
}

// 搜尋按鈕：目前主要作用是重置到第一頁
function onSearch() {
  currentPage.value = 1;
}

// 每次排序改變時，重置回第 1 頁
function onSortOrderChange() {
  currentPage.value = 1;
}

// 每次筆數改變時，重置回第 1 頁
function onItemsPerPageChange() {
  currentPage.value = 1;
}


// 先做「篩選」
const filteredItems = computed(() => {
  return allItems.value.filter((item) => {
    // 國家
    if (filters.country && item.country !== filters.country) return false;
    // 地區
    if (filters.area && item.area !== filters.area) return false;
    // 天數
    if (filters.days && item.days !== Number(filters.days)) return false;
    // 金額下限
    if (filters.minPrice != null && filters.minPrice !== '') {
      if (item.price < Number(filters.minPrice)) return false;
    }
    // 金額上限
    if (filters.maxPrice != null && filters.maxPrice !== '') {
      if (item.price > Number(filters.maxPrice)) return false;
    }
    // 日期起訖（簡單用字串比對，因為是 YYYY-MM-DD）
    if (filters.startDate && item.startDate < filters.startDate) return false;
    if (filters.endDate && item.endDate > filters.endDate) return false;

    // 關鍵字：標題 + 描述
    if (filters.keyword && filters.keyword.trim() !== '') {
      const kw = filters.keyword.trim();
      const text = `${item.title}${item.desc}`;
      if (!text.includes(kw)) return false;
    }

    return true;
  });
});

// 再依金額排序
const sortedItems = computed(() => {
  const items = [...filteredItems.value];
  if (sortOrder.value === 'asc') {
    return items.sort((a, b) => a.price - b.price);
  } else if (sortOrder.value === 'desc') {
    return items.sort((a, b) => b.price - a.price);
  }
  return items; // 不排序
});

// 分頁
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return sortedItems.value.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() =>
  Math.ceil(sortedItems.value.length / itemsPerPage.value),
);

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function goToPage(page) {
  currentPage.value = page;
}

// 顯示用日期格式
function formatDateRange(item) {
  const format = (d) => d.replaceAll('-', '.');
  return `${format(item.startDate)} ~ ${format(item.endDate)}`;
}
</script>

<style scoped>
body {
  background-color: #f9f9f9;
}

.main-content{
  max-width: 1296px;
  margin-left: auto;
  margin-right: auto;
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
}


.favorite-icon {
  cursor: pointer;
  color: #aaa;
  transition: color 0.3s;
}

.favorite-icon.active {
  color: red;
}

.price-custom {
  font-size: 24px;
  font-weight: 700;
  font-family: 'Noto Serif TC', serif;
  color: red;
  letter-spacing: 1px;
  text-align: right;
}


</style>
