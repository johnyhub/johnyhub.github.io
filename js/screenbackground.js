$(document).ready(function(){
              $("#high").click(function(){
                  
                  $(".screen-content").removeClass().addClass("screen-content screen-img1 animated flipInY");
                  //add tilme out to remove class animation
                  window.setTimeout( function(){
                  $(".screen-content").removeClass('animated flipInY');
            }, 1000);  
               });
        $("#easy").click(function(){
                  $(".screen-content").removeClass().addClass("screen-content screen-img2 animated flipInY");
            //add tilme out to remove class animation
                  window.setTimeout( function(){
                  $(".screen-content").removeClass('animated flipInY');
            }, 1000);  
            
               });
    $("#ftp").click(function(){
                  
                  $(".screen-content").removeClass().addClass("screen-content screen-img3 animated flipInY");
                  //add tilme out to remove class animation
                  window.setTimeout( function(){
                  $(".screen-content").removeClass('animated flipInY');
            }, 1000);  
               });
    $("#tel").click(function(){
                  
                  $(".screen-content").removeClass().addClass("screen-content screen-img4 animated flipInY");
                  //add tilme out to remove class animation
                  window.setTimeout( function(){
                  $(".screen-content").removeClass('animated flipInY');
            }, 1000);  
               });
    $("#prem").click(function(){
                  
                  $(".screen-content").removeClass().addClass("screen-content screen-img5 animated flipInY");
                  //add tilme out to remove class animation
                  window.setTimeout( function(){
                  $(".screen-content").removeClass('animated flipInY');
            }, 1000);  
               });
    
    
    });