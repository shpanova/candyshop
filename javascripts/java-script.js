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
      $('.p2').css('top',(0-(scrolled*.2))+'px');
      $('.p3').css('top',(0-(scrolled*.9))+'px');
      $('.p4').css('top',(0-(scrolled*.7))+'px');
      $('.p5').css('top',(0-(scrolled*1.1))+'px');
      $('.p6').css('top',(0-(scrolled*.5))+'px');
      $('.p7').css('top',(0-(scrolled*1.2))+'px');
      $('.p8').css('top',(0-(scrolled*.9))+'px');
      $('.p9').css('top',(0-(scrolled*1.5))+'px');
  }

  $(".kry").click(function(){
      $(".krr").addClass("notwork");
      $(".krf").addClass("notwork");
      $(".kry").removeClass("notwork");
      $(".krr").removeClass("krra");
      $(".krf").removeClass("krfa");
      $(".kry").addClass("krya");

  });

  $(".krr").click(function(){
      $(".kry").addClass("notwork");
      $(".krf").addClass("notwork");
      $(".krr").removeClass("notwork");
      $(".kry").removeClass("krya");
      $(".krf").removeClass("krfa");
      $(".krr").addClass("krra");
  });

  $(".krf").click(function(){
      $(".kry").addClass("notwork");
      $(".krr").addClass("notwork");
      $(".krf").removeClass("notwork");
      $(".kry").removeClass("krya");
      $(".krr").removeClass("krra");
      $(".krf").addClass("krfa");
  });

  $(".i1").click(function(){
      $(".i2").addClass("notwork");
      $(".i3").addClass("notwork");
      $(".i1").removeClass("notwork");
      $(".i2").removeClass("ia1");
      $(".i3").removeClass("ia1");
      $(".i1").addClass("ia1");
  });

  $(".i2").click(function(){
      $(".i1").addClass("notwork");
      $(".i3").addClass("notwork");
      $(".i2").removeClass("notwork");
      $(".i1").removeClass("ia1");
      $(".i3").removeClass("ia1");
      $(".i2").addClass("ia1");
  });

  $(".i3").click(function(){
      $(".i1").addClass("notwork");
      $(".i2").addClass("notwork");
      $(".i3").removeClass("notwork");
      $(".i1").removeClass("ia1");
      $(".i2").removeClass("ia1");
      $(".i3").addClass("ia1");
  });


  $(".kry").click(function(){
    if($(".kry").hasClass("krya") && $(".i1").hasClass("ia1")){
      $(".im11").attr("src","img/111.png");
    }
    if($(".kry").hasClass("krya") && $(".i2").hasClass("ia1")){
      $(".im11").attr("src","img/21.png");
    }
    if($(".kry").hasClass("krya") && $(".i3").hasClass("ia1")){
      $(".im11").attr("src","img/31.png");
    }
  });

  $(".krr").click(function(){
    if($(".krr").hasClass("krra") && $(".i1").hasClass("ia1")){
      $(".im11").attr("src","img/12.png");

    }
    if($(".krr").hasClass("krra") && $(".i2").hasClass("ia1")){
      $(".im11").attr("src","img/222.png");
    }

    if($(".krr").hasClass("krra") && $(".i3").hasClass("ia1")){
      $(".im11").attr("src","img/32.png");
    }

  });

  $(".krf").click(function(){
    if($(".krf").hasClass("krfa") && $(".i1").hasClass("ia1")){
      $(".im11").attr("src","img/13.png");
    }
    if($(".krf").hasClass("krfa") && $(".i2").hasClass("ia1")){
      $(".im11").attr("src","img/23.png");
    }
    if($(".krf").hasClass("krfa") && $(".i3").hasClass("ia1")){
      $(".im11").attr("src","img/333.png");
    }
  });

  $(".i1").click(function(){
    if($(".i1").hasClass("ia1") && $(".kry").hasClass("krya")){
      $(".im11").attr("src","img/111.png");
    }

    if($(".i1").hasClass("ia1") && $(".krr").hasClass("krra")){
      $(".im11").attr("src","img/12.png");

    }
    if($(".i1").hasClass("ia1") && $(".krf").hasClass("krfa")){
      $(".im11").attr("src","img/13.png");
    }
  });

  $(".i2").click(function(){
    if($(".i2").hasClass("ia1") && $(".kry").hasClass("krya")){
      $(".im11").attr("src","img/21.png");
    }
    if($(".i2").hasClass("ia1") && $(".krr").hasClass("krra")){
      $(".im11").attr("src","img/222.png");
    }
    if($(".i2").hasClass("ia1") && $(".krf").hasClass("krfa")){
      $(".im11").attr("src","img/23.png");
    }

  });

  $(".i3").click(function(){
    if($(".i3").hasClass("ia1") && $(".kry").hasClass("krya")){
      $(".im11").attr("src","img/31.png");
    }
    if($(".i3").hasClass("ia1") && $(".krr").hasClass("krra")){
      $(".im11").attr("src","img/32.png");
    }
    if($(".i3").hasClass("ia1") && $(".krf").hasClass("krfa")){
      $(".im11").attr("src","img/333.png");
    }
  });




});
