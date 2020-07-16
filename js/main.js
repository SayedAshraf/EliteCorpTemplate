// $(function () {
//   "use strict";
//   //aduist slider height
//   var winH = $(window).height(),
//     upperH = $(".upper-bar").innerHeight(),
//     navH = $(".navbar").innerheight();
//   $(".slider").height(winH - (upperH + navH));
// });

$(document).ready(function () {
  "use strict";
  //aduist slider height
  var winH = $(window).height();
  var upperH = $(".upper-bar").innerHeight();
  console.log(upperH);
  var navH = $(".navbar").innerHeight();
  console.log(navH);
  $(".slider , .carousel-item").height(winH - (upperH + navH));
});
