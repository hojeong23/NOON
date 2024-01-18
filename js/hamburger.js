$(function () {
  $("#slide-open").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide").addClass("on");
    }
  });
  $("#slide ul li a").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide").addClass("on");
    }


  });

  function scrollDisable() { // body 스크롤 비활성화
    $('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
    });
  }
  function scrollAble() { // body 스크롤 활성화
    $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
  }

  $("#slide-open").click(function () {
    $('.slide').toggleClass('active');
    if ($('.slide').hasClass('active')) {
      scrollDisable();
    } else {
      scrollAble();
    }
  });










  // $('a[href*="#"]:not([href="#"])').click(function () {
  //   if (
  //     location.pathname.replace(/^\//, "") ==
  //     this.pathname.replace(/^\//, "") &&
  //     location.hostname == this.hostname
  //   ) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  //     if (target.length) {
  //       $("html, body").animate(
  //         {
  //           scrollTop: target.offset().top,
  //         },
  //         500
  //       ); //움직이는 시간 조정
  //       return false;
  //     }
  //   }
  // });
});
