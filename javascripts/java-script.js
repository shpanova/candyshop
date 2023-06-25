$(document).ready(function(){

  $(".raz").click(function(){
      $(".raz").addClass("av");
      $(".raz1").addClass("nv");
      $(".raz1").removeClass("av");
      $(".raz").removeClass("nv");
  });

  $(".raz1").click(function(){
      $(".raz1").addClass("av");
      $(".raz").addClass("nv");
      $(".raz").removeClass("av");
      $(".raz1").removeClass("nv");
  });

  $(window).bind('scroll',function(e){
      parallaxScroll();
  });

  function parallaxScroll(){
      var scrolled = $(window).scrollTop();
      $('.p1').css('top',(0-(scrolled*.25))+'px');
      $('.p2').css('top',(0-(scrolled*.2))+'px');
      $('.p3').css('top',(0-(scrolled*.9))+'px');
      $('.p4').css('top',(0-(scrolled*.7))+'px');
      $('.p5').css('top',(0-(scrolled*1.1))+'px');
      $('.p6').css('top',(0-(scrolled*.5))+'px');
      $('.p7').css('top',(0-(scrolled*1.2))+'px');
      $('.p8').css('top',(0-(scrolled*.9))+'px');
      $('.p9').css('top',(0-(scrolled*1.5))+'px');
  }



});
