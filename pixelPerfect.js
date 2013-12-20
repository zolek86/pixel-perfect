/*
 * jQuery Pixel Perfect v1.0
 *
 * Copyright 2013, Bartosz Żołnierek
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ( $ ) {

    $.pixelPerfect = function(options) {

	 	var settings = $.extend({
	            code: '117', // code for key: F6
	            imagePath: "project.jpg",
	            imageWidth: 1920
	        }, options );

	 	var body = $('body').append('<img style="display:none"id="pixelPerfectImage" src="'+settings.imagePath+'" />').html();
		var bodyHeight = $('body').css('height');
		var state = 0; // 0 - html, 1 - image
		var bodyOverflow = $('body').css('overflow');

        $(document).keydown(function(e) {
        	if(e.which==settings.code) {
				var scrollTop = $(window).scrollTop();
        		if(state==0) {
	        		$('body').html('');
	        		if(settings.imageWidth>$(window).width()) {
		        		$('body').html('<div style="position:relative;margin: 0 auto;"><img src="'+settings.imagePath+'" style="position:absolute;left:50%;margin-left:-'+settings.imageWidth/2+'px;"/></div>');
	        			$('body').css('overflow','hidden');	
	        		}
		        	else {
		        		$('body').html('<div style="position:relative;margin: 0 auto;width:100%;text-align:center;"><img src="'+settings.imagePath+'" style="position:relative;margin:0 auto" width="'+settings.imageWidth+'" /></div>');
	        			$('body').css('overflow',bodyOverflow);	
		        	}
	        		$('body').css('height',bodyHeight);
	        		state = 1;
	        	} else {
	        		$('body').html(body);
	        		state = 0;
	        	}
				$(window).scrollTop(scrollTop);
	        	e.preventDefault();
        	}
        })
        return true;
    };
 
}( jQuery ));