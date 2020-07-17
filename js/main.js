$(document).ready(function () {
  "use strict";
  //aduist slider height
  var winH = $(window).height();
  var upperH = $(".upper-bar").innerHeight();
  console.log(upperH);
  var navH = $(".navbar").innerHeight();
  console.log(navH);
  $(".slider , .carousel-item").height(winH - (upperH + navH));

  //Featured Work Shuffles
  $(".list-item").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
