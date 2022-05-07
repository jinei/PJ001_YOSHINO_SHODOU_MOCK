window.onload = function () {
  $('.sp_menu').hide();
  $('.header_box').hide();
  $('.slider').slick({
    speed: 1500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  $('.img_slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  });

};

$(".header_sp_menu_btn").click(function () {
  $(this).toggleClass('active');
  $('.sp_menu').fadeToggle();
});

$('#datepicker').datepicker();