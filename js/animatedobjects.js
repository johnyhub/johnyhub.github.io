$(document).ready(function() {
       $('.carousel-caption').addClass('animated zoomIn');
        // hide our element on page load
//        $('#quality').css('opacity', 0);

        $('.leftin').waypoint(function() {
            $('.leftin').addClass('animated bounceInLeft');
        },                          
                              {
            offset: '70%'
        });
        $('.rightin').waypoint(function() {
            $('.rightin').addClass('animated2 bounceInRight');
        },                          
                              {
            offset: '70%'
        });
    $('.fadedown').waypoint(function() {
            $('.fadedown').addClass('animated fadeInLeft');
        },                          
                              {
            offset: '70%'
        });
    $('.fadeup').waypoint(function() {
            $('.fadeup').addClass('animated fadeInRight');
        },                          
                              {
            offset: '70%'
        });
    $('.bouncein').waypoint(function() {
            $('.bouncein').addClass('animated infinite bounceIn');
            $('.statmap-right').addClass('animated bounceInDown'); 
            $('.statmap-left').addClass('animated fadeInLeft'); 
            $('.stat-list').addClass('animated fadeInUp');
        },                          
                              {
            offset: '70%'
        });
    $('.featured-game1').waypoint(function() {
            $('.featured-game1').addClass('animated fadeInLeft');
         $('.featured-game2').addClass('animated fadeInUp');
         $('.featured-game3').addClass('animated fadeInDown');
         $('.featured-game4').addClass('animated fadeInRight');
        },                          
                              {
            offset: '70%'
        });
    
    
    
    });


