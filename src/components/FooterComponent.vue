<template>
  <div class="footer">
    <div class="container footer_container">
      <div class="footer_left">
        <router-link to="/"><img src="@/assets/img/logo.png" alt="TripEasy" /></router-link>
        <ul class="contact_item">
          <li>公司地址：台北市中山區忠孝東路二段211號</li>
          <li>電話：02-1234-5678</li>
          <li>公司統編：12345678</li>
        </ul>
        <p>© Copyright 2025 TripEasy</p>
      </div>

      <div class="footer_middle">
        <ul>
          <li><h4>公司資訊</h4></li>
          <li><a href="#">關於我們</a></li>
        </ul>
        <ul>
          <li><h4>客戶服務</h4></li>
          <li><a href="#">常見問題</a></li>
          <li><a href="#">旅遊回饋</a></li>
          <li><a href="#">退款政策</a></li>
        </ul>
        <ul>
          <li><h4>合作與業務</h4></li>
          <li><a href="#">商務合作洽談</a></li>
          <li><a href="#">成為供應商</a></li>
        </ul>
        <ul>
          <li><h4>法律與條款</h4></li>
          <li><a href="#">隱私權政策</a></li>
          <li><a href="#">使用者條款</a></li>
          <li><a href="#">Cookie 政策</a></li>
        </ul>
      </div>

      <div class="footer_right">
        <ul class="community_item">
          <li class="community-circle">
            <a href="#"><img src="@/assets/img/Vector.png" alt="facebook" /></a>
          </li>
          <li class="community-circle">
            <a href="#"><img src="@/assets/img/logo-instagram.png" alt="instagram" /></a>
          </li>
          <li class="community-circle">
            <a href="#"><img src="@/assets/img/logo-X.png" alt="twitter" /></a>
          </li>
        </ul>
        <p>
          走走停停都是風景 <br />
          Even the pauses are beautiful. <br />
          Every step, every pause— <br />
          it's all part of the view.
        </p>
      </div>
    </div>
  </div>

  <div class="chat-widget">
    <div class="speech-bubble">Hi! 需要幫忙嗎？</div>
    <img class="car-image" src="@/assets/img/service_car.png" alt="客服按鈕" />
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
/* 建議直接使用 common.css 中既有樣式 */
</style>
