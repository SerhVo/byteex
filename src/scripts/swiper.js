import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
const img1 = new URL("../assets/img_desk/icon-pag1.jpg", import.meta.url).href;
const img2 = new URL("../assets/img_desk/icon-pag2.jpg", import.meta.url).href;

document.addEventListener("DOMContentLoaded", function () {
  // Первый Swiper (только на мобилках)
  if (window.innerWidth <= 1024) {
    setTimeout(() => {
      new Swiper(".swiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }, 100); 
  }

  // Второй Swiper (основной с миниатюрами)
  new Swiper(".custom-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    // Миниатюрная пагинация
    pagination: {
      el: ".custom-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        const images = [img1, img2, img1, img2, img1, img2, img1, img2];
        return `<span class="${className}" style="background-image: url(${images[index]});"></span>`;
      },
    },

    // Навигация (стрелки)
    // navigation: {
    //   nextEl: ".custom-swiper-next",
    //   prevEl: ".custom-swiper-prev",
    // },
  });
});
