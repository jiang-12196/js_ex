window.onload = function () {
  imgMove($('.hand'),60);
  function imgMove(obj, speed) {
      $(window).mousemove(function (e) {
          var x = e.clientX;
          var y = e.clientY;
          var winWidth = $(window).width();
          var winHeight = $(window).height();
          obj.css({
              "transform": "translate3d(" + (x - winWidth/2)/speed + "px," + "0px, 0px"
          })
      })
  }
};