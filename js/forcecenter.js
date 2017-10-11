
    // -------------------------------------------------------------
	//   Force Centered Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#forcecentered');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'centered', 
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 2,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
            scrollTrap:   false,
            keyboardNavBy: 'pages', 
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
        
	}());
    
 // -------------------------------------------------------------
	//   Force Centered Navigation for FAQ page
 	// -------------------------------------------------------------
	(function () {
		var $frame = $('#forcecentered2');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered', 
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
//			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
            scrollTrap:   false,
            keyboardNavBy: 'pages', 
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
        
	}());

// FAQ page on click change arrows  
$("a.faq1").on("click", function(){
    $("a.faq1 p").toggleClass("active");
     
});

$("a.faq2").on("click", function(){
    $("a.faq2 p").toggleClass("active");
     
});

$("a.faq3").on("click", function(){
    $("a.faq3 p").toggleClass("active");
     
});

$("a.faq4").on("click", function(){
    $("a.faq4 p").toggleClass("active");
     
});

$("a.faq5").on("click", function(){
    $("a.faq5 p").toggleClass("active");
     
});
$("a.faq6").on("click", function(){
    $("a.faq6 p").toggleClass("active");
     
});
$("a.faq7").on("click", function(){
    $("a.faq7 p").toggleClass("active");
     
});
$("a.faq8").on("click", function(){
    $("a.faq8 p").toggleClass("active");
     
});

















