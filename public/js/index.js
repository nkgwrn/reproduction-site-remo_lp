// var scrollAnimationElm = document.querySelectorAll('.js-fadein');
// var scrollAnimationFunc = function() {
//   for(var i = 0; i < scrollAnimationElm.length; i++) {
//     var triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('show');
//     }
//   }
// }
// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);
// window.onscroll = scrollAnimationFunc;

window.addEventListener(
  "DOMContentLoaded",
  function () {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 500,
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    });
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  //背景画像のtopの位置を取得
  const $element = document.getElementById("js-bg");
  const rect = $element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const bg1_top = rect.top + scrollTop; // offset().top;

  // ウィンドウの高さを取得
  var win_h = window.innerHeight;
  //背景画像を動かすタイミングの位置を計算
  var start_bg1 = bg1_top - win_h;
  window.onscroll = function () {
    var y =
      window.document.documentElement.scrollTop || document.body.scrollTop;
    var setTop = -(y - bg1_top) * 0.3 + "px";

    if (y >= start_bg1) {
      $element.style.top = setTop;
    }
  };

  var win_w = window.innerWidth;
  var toggle = document.getElementById("js-toggle");
  var headNav = document.getElementById("js-headNav");
  var Nav = document.getElementById("js-nav");

  toggle.onclick = function () {
    if (win_w <= 768) {
      toggle.classList.toggle("is-active");
      headNav.classList.toggle("is-open");
      Nav.classList.toggle("is-open");
    }
  };
});

// var scrollAnimationElm = document.querySelectorAll('.js-fadein');
// var scrollAnimationFunc = function() {
//   for(var i = 0; i < scrollAnimationElm.length; i++) {
//     var triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('is-show');
//     }
//   }
// }
// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);