(function ($) {
  "use strict";

  // mobile dropdown

  jQuery(".dropdown-icon").on("click", function () {
    // alert()
    // $(this).next('.mob-submenu').slideToggle();
    jQuery(this).toggleClass("active").next("ul, .mega-menu, .mega-menu2").slideToggle();
    jQuery(this).parent().siblings().children("ul, .mega-menu, .mega-menu2").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  // sticky header

  window.addEventListener('scroll', function () {
    const header = document.querySelector('header.header-area');
    header.classList.toggle("sticky", window.scrollY > 0);
  });
 

  var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".testi-next-btn",
      prevEl: ".testi-prev-btn",
    },
  });

 /// active sidebar item added active class
 
  $(".sidebar-button").click(function () {
    $(this).toggleClass("active");
  });
  document
    .querySelector(".sidebar-button")
    .addEventListener("click", () =>
      document
        .querySelector(".main-menu, .sidebar-menu")
        .classList.toggle("show-menu")
    );

  $(".menu-close-btn").on("click", function () {
    $(".sidebar-menu").removeClass("show-menu");
  });
  $("#container1").twentytwenty();
})(jQuery);
