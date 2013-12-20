/*
 * jQuery Pixel Perfect v1.1
 *
 * Copyright 2013, Bartosz Żołnierek
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ( $ ) {

    $.pixelPerfect = function(options) {

	 	var settings = $.extend({
	            code: 117, // code for key: F6
	            opacityCode: 118, // code for key: F7
	            imagePath: "project.jpg",
	            imageWidth: 1920,
	            opacity: 0.65
	        }, options );

	 	var body = $('body').prepend('<img style="overflow-x:hidden;display:none;position:absolute;z-index:5000;top:0;left:50%;margin-left:-'+settings.imageWidth/2+'px;" id="pixelPerfectImage" src="'+settings.imagePath+'" />').html();
		var state = 0; // 0 - html, 1 - image

		var ppi = $("#pixelPerfectImage");

		// console.log(settings.code);
        $(document).keydown(function(e) {
        	switch(e.which) {
        		case settings.code: 
		        	e.preventDefault();
	        		if(state==0) {
        				ppi.css('opacity',1);
        				ppi.show();
        				state = 1;
        			}
	        		else {
	        			if(ppi.is(':visible') && ppi.css('opacity')==settings.opacity) {
	        				ppi.css('opacity',1);
	        				state = 1;
	        			}
	        			else {
		        			ppi.hide();	
			        		state = 0;
	        			}	
	        		}
        		break;
        		case settings.opacityCode:
		        	e.preventDefault();
        			if(state==0) {
        				ppi.css('opacity',settings.opacity);
        				ppi.show();
        				state = 1;
        			}
	        		else {
	        			console.log(ppi.css('opacity'));
	        			if(ppi.is(':visible') && ppi.css('opacity')==1) {
							ppi.css('opacity',settings.opacity);
	        				state = 1;
	        			} else {
		        			ppi.hide();		
			        		state = 0;
	        			}
	        		}
        		break;
        	}
    		// console.log(settings.ppi);	
        });
        return true;
    };
 
}( jQuery ));