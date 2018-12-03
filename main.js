$(document).ready(function(){
  flag = 0;
  $("#main").click(function(){
    if(flag == 0) {
      $("#main").animate({height: '50px', width: '50px'},100);
      $("#c1").animate({top: '50%', left: '43%'}, 200);
      $("#c1").animate({height: '50px', width: '50px'}, 200);
      $("#c1 img").delay(500).fadeIn(100);

      $("#c2").animate({top: '40%', left: '50%'}, 200);
      $("#c2").animate({height: '50px', width: '50px'}, 200);
      $("#c2 img").delay(500).fadeIn(100);

      $("#c3").animate({top: '50%', left: '57%'}, 200);
      $("#c3").animate({height: '50px', width: '50px'}, 200);
      $("#c3 img").delay(500).fadeIn(100);

      $("#main").css("background-image", "url('cancel.png')");
      $("#main").css("background-size", "60% 60%");
      $("#main").css("background-position", "center");
      $("#main").css("background-repeat", "no-repeat");
      flag = 1;
    }
    else {
      $("#main").animate({height: '55px', width: '55px'}, 100);
      $("#c1").animate({height: '5px', width: '5px'}, 100);
      $("#c1").animate({top: '60%', left: '49%'}, 200);
      $("#c1 img").css("display", "none");

      $("#c2").animate({height: '5px', width: '5px'}, 100);
      $("#c2").animate({top: '60%', left: '50%'}, 200);
      $("#c2 img").css("display", "none");

      $("#c3").animate({height: '5px', width: '5px'}, 100);
      $("#c3").animate({top: '60%', left: '51%'}, 200);
      $("#c3 img").css("display", "none");

      $("#main").css("background-image", "none");
      flag = 0;
    }
  })


})