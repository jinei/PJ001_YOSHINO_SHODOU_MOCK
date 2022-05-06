window.onload = function () {
  $('.sp_menu').hide();
  $('.header_box').hide();
};

$(".header_sp_menu_btn").click(function () {
  $(this).toggleClass('active');
  $('.sp_menu').fadeToggle();
});

$('#datepicker').datepicker();
