const swiper1 = new Swiper(".mySwiper-1", {
  initialSlide: 0,
  slidesPerView: 1.75, // 一度に表示する枚数
  spaceBetween: 30, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  loop: true,
  speed: 1000, // 少しゆっくり(デフォルトは300)
  // autoplay: { // 自動再生
  //   delay: 0,// s秒後に次のスライド
  //   disableOnInteraction: false,// 矢印をクリックしても自動再生を止めない
  // },
  pagination: {
    // ページネーション
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // 前後の矢印
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".mySwiper-2", {
  initialSlide: 0,
  slidesPerView: 1, // 一度に表示する枚数
  spaceBetween: 30, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  loop: true,
  speed: 1000, // 少しゆっくり(デフォルトは300)
  // autoplay: { // 自動再生
  //   delay: 0,// s秒後に次のスライド
  //   disableOnInteraction: false,// 矢印をクリックしても自動再生を止めない
  // },
  pagination: {
    // ページネーション
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // 前後の矢印
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerNavSp = document.querySelector(".header-nav-sp");
const toggleLink = document.querySelectorAll(".toggle-link");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  headerNavSp.classList.toggle("active");
});
toggleLink.forEach(function (element) {
  element.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    headerNavSp.classList.toggle("active");
  });
});
