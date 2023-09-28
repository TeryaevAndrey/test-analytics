const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".news__arrows-right",
    prevEl: ".news__arrows-left",
  },
  spaceBetween: 16,
  slidesPerGroup: 1,

  breakpoints: {
    425: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2.5,
    },

    1024: {
      slidesPerView: 2,
      initialSlide: 2,
    },
  },
});
