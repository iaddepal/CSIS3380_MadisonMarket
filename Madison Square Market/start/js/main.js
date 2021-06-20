$(document).ready(function(){
    $("#cart").mouseover(function(){
      $("#cartMenu").show();
    });
    $("#account").mouseover(function(){
    $("#accountMenu").show();
    });
    $("#help").mouseover(function(){
        $("#helpMenu").show();
        });
    $(".dropdown-menu").mousemove(function(){
        $(".dropdown-menu").hide();
    });

  });