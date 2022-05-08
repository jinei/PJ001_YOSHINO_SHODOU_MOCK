window.onload = function () {
  $('.sp_menu').hide();

  // トップのスライダー
  $('.slider').slick({
    speed: 1500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  // 画面下部のスライダー
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

  // アニメーション表示
  fadeAnime();

  // 画面表示
  const openFlg = sessionStorage.getItem('openFlg') == "true";
  // 一度でも開いたことがある場合
  if (openFlg) {
    $("#splash").fadeOut(800);
  }
  // ページに初めて来た時
  else {
    sessionStorage.setItem('openFlg', true);
    $("#splash img").addClass('fadeIn')
    $("#splash").delay(1500).fadeOut(800);
  }
};

// ヘッダーの表示
const headerIn = $('.header_in');
if (headerIn.length > 0) {
  const headerInOffset = headerIn.offset().top;
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    // ヘッダー表示
    if (headerInOffset < scroll) {
      $('.header_box').addClass('active');
      $('.line_qr_fix_wrap').addClass('active');
    } else {
      $('.header_box').removeClass('active');
      $('.line_qr_fix_wrap').removeClass('active');
    }

    fadeAnime();
  });
}


$(".header_sp_menu_btn").click(function () {
  $(this).toggleClass('active');
  $('.sp_menu').fadeToggle();
});

$('#datepicker').datepicker();

function fadeAnime() {
  $('.fadeInTrigger').each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}
