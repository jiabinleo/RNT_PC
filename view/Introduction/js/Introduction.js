$(function() {
  var about = {
    init: () => {
      $(".activeSpan").css("width", "375px;");
    },
    linstent: () => {
      about.swipers();
    },
    swipers: function() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: 5000,
        loop: true,
        speed: 1000,
        // slidesPerView: 'auto',
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false,
        centeredSlides: true
      });
    }
  };
  about.linstent();
});
