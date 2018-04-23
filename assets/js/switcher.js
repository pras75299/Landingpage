/*==============================
	STYLE SWITCHER SCRIPT INSTALLATION
 ===============================*/
 
(function($) {
	"use strict";

	$(".style1" ).click(function(){
		$("#colors" ).attr("href", "assets/switcher/style1.css" );
		return false;
	});

	$(".style2" ).click(function(){
		$("#colors" ).attr("href", "assets/switcher/style2.css" );
		return false;
	});

	$(".style3" ).click(function(){
		$("#colors" ).attr("href", "assets/switcher/style3.css" );
		return false;
	});

	$(".style4" ).click(function(){
		$("#colors" ).attr("href", "assets/switcher/style4.css" );
		return false;
	});

	
	// Style Switcher	
	$('#style-switcher').animate({
		left: '-220px'
	});

	$('#style-switcher h2 a').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		console.log(div.css('left'));
		if (div.css('left') === '-220px') {
			$('#style-switcher').animate({
				left: '0px'
			}); 
		} else {
			$('#style-switcher').animate({
				left: '-220px'
			});
		}
	});

	$('.colors li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery);

