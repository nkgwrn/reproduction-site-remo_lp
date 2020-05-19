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

$(function () {
  //背景画像のtopの位置を取得
  var bg1_top = $(".p-mv").offset().top;

  // ウィンドウの高さを取得
  var win_h = $(window).height();

  //背景画像を動かすタイミングの位置を計算
  var start_bg1 = bg1_top - win_h;

  $(window).scroll(function () {
    //スクロール量
    var y = $(this).scrollTop();

    //スクロール量と動かすタイミング位置を判定した場合は背景画像を動かす
    if (y >= start_bg1) {
      $(".p-mv").css("background-position-y", -(y - bg1_top) * 0.3 + "px");
    }
  });
});
