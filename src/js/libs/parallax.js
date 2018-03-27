// Effect Parallax
var parallax = function () {
  
  function EasyPeasyParallax() {
      if ((screen.width >= 900)) {
          scrollPos = $(this).scrollTop();
          $('.parallax').css({
              'background-position' : '50%' + (+scrollPos/30)+"px"
          });
          $('.move-parallax').css({
              'margin-top': 2*(scrollPos/6)+"px",
              'opacity': 1-(scrollPos/500)
          });

          $('.slow-parallax').css({
              'margin-bottom': .5*(scrollPos/10)+"px"
          });
          $('.slow2-parallax').css({
              'margin-bottom': 2*(scrollPos/6)+"px"
          });

      }
  };


  $(window).scroll(function() {
    if($('.parallax').length>0){
      EasyPeasyParallax();
    }
  });


}

module.exports = parallax;