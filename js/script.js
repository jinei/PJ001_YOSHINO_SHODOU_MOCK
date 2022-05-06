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

};

$(".header_sp_menu_btn").click(function () {
  $(this).toggleClass('active');
  $('.sp_menu').fadeToggle();
});

$('#datepicker').datepicker();