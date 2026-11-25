AOS.init({ duration: 800, once: true });

new Swiper('.reviews-slider', {
  loop: true,55
  autoplay: { delay: 3500, pauseOnMouseEnter: true },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

Fancybox.bind("[data-fancybox='gallery']", {});