$(function () {
  $(".slider")
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("slider_zoom");
    })
    .slick({
      autoplay: true,
      fade: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnFocus: false,
      pauseOnHover: false,
    })
    .on({
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        $(".slick-slide", this).eq(nextSlide).addClass("slider_zoom");
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      afterChange: function () {
        $(".remove-animation", this).removeClass(
          "remove-animation slider_zoom"
        );
      },
    });
});



