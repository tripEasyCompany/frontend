<template>
  <div class="wrap">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <!-- <div class="content">
      <div class="about">
        <h1>這是搜索頁面!</h1>
      </div>
    </div> -->

  <!-- Main Content -->

    <!-- <div class="content">
      <div class="about">
        
      </div>
    </div> -->

   <!-- Banner -->
  <header class="banner">
    <img src="../search/image/banner.jpg" alt="Banner 圖片" class="banner-img" />
    <div class="banner-text">
      <h1>購物專區</h1>
      <p class="right-text">
        世界這麼大、<br />
        不必走得太遠<br />
        也能遇見<br />
        讓你心動的風景
      </p>
      <p class="right-text-2">
        跟著我們<br />
        把每一次出走<br />
        變成生活裡<br />
        最溫柔的片段
      </p>
    </div>
  </header>

  <!-- 商品搜尋篩選區 -->
  <section class="filters">
    <form>
      <p>分類</p>  
      <select>
        <option>旅行團</option>
        <option>背包客</option>
      </select>

      <p>項目類別</p>
      <select>
        <option> 旅遊行程</option>
        <option> 旅遊行程</option>
        <option> 旅遊行程</option>
        <option> 旅遊行程</option>
      </select>

      <p>偏好分類</p>
      <select>
        <option> 旅遊行程</option>
        <option> 旅遊行程</option>
        <option> 旅遊行程</option>
        <option> 旅遊行程</option>
      </select>
    </form>

    <form>
      <p>所在國家</p>
      <select>
        <option>選擇國家</option>
        <option>台灣</option>
      </select>

      <p>所在地區</p>
      <select>
        <option>選擇地區</option>
        <option>新北市新店區</option>
        <option>台北市信義區</option>
      </select>
    </form> 

    <form>
      <p>購買金額</p>
      <input type="text" placeholder="最小金額" />
      <p>–</p>
      <input type="text" placeholder="最大金額" />
    </form>

    <form>
      <p>旅遊日期</p>
      <input type="date" />
      <input type="date" />
    </form>

    <form>
      <input type="text" placeholder="關鍵字" />
    </form>

    <form>
      <button type="submit">搜尋</button>
    </form>
  </section>

  <!-- 商品清單 -->
  <main class="product-list">
    <div class="product">
      <img src="../search/image/view1.png" alt="摩洛哥圖片" />
      <div class="info">
        <h3>摩洛哥 | 綠洲沙漠</h3>
        <p>探索撒哈拉沙漠的神秘之旅，騎駱駝穿越金色沙丘。</p>
        <div class="price">NT$18,800</div>
        <button>查看詳情</button>
      </div>
    </div>

    <div class="product">
      <img src="../search/image/view2.jpg" alt="秘魯圖片" />
      <div class="info">
        <h3>秘魯 | 馬丘比丘</h3>
        <p>漫步古印加帝國，穿越高山遺跡，體驗世界遺產魅力。</p>
        <div class="price">NT$120,000</div>
        <button>查看詳情</button>
      </div>
    </div>

    <div class="product">
      <img src="pic3.jpg" alt="土耳其圖片" />
      <div class="info">
        <h3>土耳其 | 熱氣球之旅</h3>
        <p>搭乘熱氣球飛越卡帕多奇亞奇岩地貌，壯麗無比。</p>
        <div class="price">NT$18,800</div>
        <button>查看詳情</button>
      </div>
    </div>

    <!-- 更多商品可持續加入 -->
  </main>

  <!-- 分頁 -->
  <footer class="pagination">
    <button>«</button>
    <button class="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>»</button>
  </footer>

    
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
  name: 'searchPage',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      errorMsg: '',
    };
  },
  mounted() {
    
  },
  watch: {
    
  },
  methods: {
    
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
