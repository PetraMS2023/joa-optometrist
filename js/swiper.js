
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    421: {
      slidesPerView: 1.2,
    },
    575: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: 1.9,
    },
    800: {
      slidesPerView: 2.1,
    },
    950: {
      slidesPerView: 2.5,
    },
    1140: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<img class="${className}" src="${this.slides[index].firstElementChild.src}"></img>`;
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  
});

