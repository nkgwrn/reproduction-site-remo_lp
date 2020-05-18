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
