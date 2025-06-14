<template>
  <div class="footer">
    <div class="container footer_container">
      <div class="footer_left">
        <router-link to="/"><img src="@/assets/img/logo/logo.png" alt="TripEasy" /></router-link>
        <ul class="contact_item">
          <li>公司地址：台北市中山區忠孝東路二段211號</li>
          <li>電話：02-1234-5678</li>
          <li>公司統編：12345678</li>
        </ul>
        <p class="m-none-left">© Copyright 2025 TripEasy</p>
      </div>

      <div class="footer_middle">
        <ul>
          <li><h4>公司資訊</h4></li>
          <li><a href="#">關於我們</a></li>
        </ul>
        <ul>
          <li><h4>客戶服務</h4></li>
          <li>
            <router-link to="/admin/manage/service">常見問題</router-link>
          </li>
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
        <ul class="contact_item">
          <li>公司地址：台北市中山區忠孝東路二段211號</li>
          <li>電話：02-1234-5678</li>
          <li>公司統編：12345678</li>
        </ul>

        <ul class="community_item">
          <li class="community-circle">
            <a href="#"><img src="@/assets/img/icon/logo-facebook.svg" alt="facebook" /></a>
          </li>
          <li class="community-circle">
            <a href="#"><img src="@/assets/img/icon/logo-instagram.svg" alt="instagram" /></a>
          </li>
          <li class="community-circle">
            <a href="#"><img src="@/assets/img/icon/logo-X.svg" alt="twitter" /></a>
          </li>
        </ul>

        <p class="m-none-right">
          走走停停都是風景 <br />
          Even the pauses are beautiful. <br />
          Every step, every pause— <br />
          it's all part of the view.
        </p>
      </div>

      <div class="footer_bottom">
        <p>© Copyright 2025 TripEasy</p>
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
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
@import '@/assets/css/reset.css';
@import '@/assets/css/common.css';

/* ----------------------  footer  ------------------------- */
.footer {
  background-color: #ffffff;
}

.footer_container {
  display: flex;
  justify-content: space-between;
  padding: 3.125rem 0;
}

.footer_left img {
  max-width: 51%;
}

.footer_right .contact_item,
.footer_left .contact_item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 2rem;
  margin-bottom: 2.5rem;

  color: #212121;
}

.footer_bottom p,
.footer_left p {
  font-size: 0.875rem;
  color: #939393;
}

.footer_middle {
  display: flex;
  flex-wrap: wrap;
  gap: 3.75rem;
}

.footer_middle ul {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer_middle h4 {
  padding: 0.5rem 0.75rem;

  color: #333333;
  font-weight: bold;
}

.footer_middle a {
  display: block;
  padding: 0.5rem 0.75rem;

  color: #212121;
  border: 1px solid transparent;
  transition: color 0.3s ease;
}

.footer_middle a:hover {
  color: #b1d6ca;
}

.footer_middle a:focus {
  border: 1px dashed #c1e9dc;
}

.footer_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
}

.footer_right .community_item {
  display: flex;
  justify-content: right;
  gap: 0.75rem;
}

.community_item a {
  display: block;
  padding: 0.5rem;
}

.community-circle {
  width: 2.5rem; /* 40px */
  height: 2.5rem; /* 40px */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.3125rem;

  transition:
    background-color 0.5s ease,
    transform 0.5s ease;
}

.community-circle:hover {
  background-color: #e4e2e2; /* 淺灰色圓背景 */
  cursor: pointer;

  transform: translateY(-2px); /* 微微上移一點 */
}

.footer_right p {
  color: #939393;
  font-size: 0.75rem; /* 12px */
  line-height: 1.6;
}

.footer_right .contact_item,
.footer_bottom {
  display: none;
}

@media (max-width: 1440px) {
  .container {
    padding: 1.25rem; /* 調整容器內邊距 */
  }
}

@media (max-width: 1439px) {
  .m-none-right {
    display: none; /* 隱藏特定元素 */
  }
}

@media (max-width: 980px) {
  .footer_left .contact_item,
  .m-none-left {
    display: none; /* 隱藏特定元素 */
  }

  .footer_right .contact_item,
  .footer_bottom {
    display: block;
  }

  .footer_left {
    text-align: center;
  }

  .footer_left img {
    max-width: 20%;
  }

  .footer_container {
    flex-direction: column;
    gap: 1.5rem;
  }

  .footer_middle {
    justify-content: space-around;
  }

  .footer_right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footer_right .contact_item {
    text-align: left;
  }

  .footer_bottom {
    text-align: center;
  }
}

@media (max-width: 520px) {
  .footer_left {
    text-align: left;
  }

  .footer_left img {
    max-width: 30%;
  }

  .footer_middle {
    justify-content: flex-start;
    gap: 2.5rem;
  }

  .footer_middle ul {
    width: 45%;
  }

  .footer_right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

/* 客服按鈕 */
.chat-widget {
  position: fixed;
  bottom: 10px;
  right: 10px;
  text-align: center;
  z-index: 1000;
}

.chat-widget img {
  max-width: 88%;
  cursor: pointer;
}

.speech-bubble {
  display: inline-block;
  background-color: #bce0d5;
  color: #222;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem; /* 14px */
  font-weight: bold;
  position: absolute;
  bottom: 100%; /* 放在圖片正上方 */
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.625rem; /* 10px */
  white-space: nowrap;
}

/* 小箭頭也要調整位置 */
.speech-bubble::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #bce0d5;
}

.car-image {
  transition: transform 0.3s ease;
}

.chat-widget:hover .car-image {
  transform: translate(-5px, -5px) rotate(5deg); /* 往左上翹一點 */
}

@media (max-width: 1440px) {
  .chat-widget img {
    max-width: 70%;
  }

  .chat-widget {
    bottom: 1px;
    right: 1px;
  }
}

@media (max-width: 980px) {
  .chat-widget img {
    max-width: 50%;
  }

  .speech-bubble {
    padding: 0.3rem 0.8rem;
  }

  /* 小箭頭也要調整位置 */
  .speech-bubble::after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #bce0d5;
  }
}

@media (max-width: 520px) {
}
</style>
