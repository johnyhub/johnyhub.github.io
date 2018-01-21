// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
//    $('.navbar-collapse ul li a').click(function(){ 
//            $('.navbar-toggle:visible').click();
//    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

$('html').on('click', '.backToTop', function(e) {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    e.preventDefault();
});

// language //
$(document).ready(function(){
        var itaImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Italien.gif";
    	var engImgLink = "url(../img/Grossbritanien.png)";
		var deuImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Deutschland.gif";
		var fraImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Frankreich.gif";

		var imgBtnSel = $('#imgBtnSel');
		var imgBtnIta = $('#imgBtnIta');
		var imgBtnEng = $('#imgBtnEng');
		var imgBtnDeu = $('#imgBtnDeu');
		var imgBtnFra = $('#imgBtnFra');

		var imgNavSel = $('#imgNavSel');
		var imgNavIta = $('#imgNavIta');
		var imgNavEng = $('#imgNavEng');
		var imgNavDeu = $('#imgNavDeu');
		var imgNavFra = $('#imgNavFra');

		var spanNavSel = $('#lanNavSel');
		var spanBtnSel = $('#lanBtnSel');

		imgBtnSel.attr("src",engImgLink);
		imgBtnIta.attr("src",itaImgLink);
		imgBtnEng.attr("src",engImgLink);
		imgBtnDeu.attr("src",deuImgLink);
		imgBtnFra.attr("src",fraImgLink);

		imgNavSel.attr("src",engImgLink);
		imgNavIta.attr("src",itaImgLink);
		imgNavEng.attr("src",engImgLink);
		imgNavDeu.attr("src",deuImgLink);
		imgNavFra.attr("src",fraImgLink);

		$( ".language" ).on( "click", function( event ) {
			var currentId = $(this).attr('id');

			if(currentId == "navIta") {
				imgNavSel.attr("src",itaImgLink);
				spanNavSel.text("ITA");
			} else if (currentId == "navEng") {
				imgNavSel.attr("src",engImgLink);
				spanNavSel.text("ENG");
			} else if (currentId == "navDeu") {
				imgNavSel.attr("src",deuImgLink);
				spanNavSel.text("DEU");
			} else if (currentId == "navFra") {
				imgNavSel.attr("src",fraImgLink);
				spanNavSel.text("FRA");
			}

			if(currentId == "btnIta") {
				imgBtnSel.attr("src",itaImgLink);
				spanBtnSel.text("ITA");
			} else if (currentId == "btnEng") {
				imgBtnSel.attr("src",engImgLink);
				spanBtnSel.text("ENG");
			} else if (currentId == "btnDeu") {
				imgBtnSel.attr("src",deuImgLink);
				spanBtnSel.text("DEU");
			} else if (currentId == "btnFra") {
				imgBtnSel.attr("src",fraImgLink);
				spanBtnSel.text("FRA");
			}
			
		});
});

$("p.days").on('click', function() {
    $(this).toggleClass("border");
});

