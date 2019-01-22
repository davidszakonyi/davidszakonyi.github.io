
(function ($) {

    "use strict";
	
	// RESIZABLE IMAGES
	if(isExists('.responsive-img-bg')){
		
		$('.responsive-img-bg .p-item').each(function(){
			
			var $this = $(this),
				imgSrc = $this.find('img').attr('src');
			
			$this.css({'background-image': 'url('+imgSrc+')'});
		});		
	}
	

	// REVOLUTION SLIDER
	
	if(isExists('#rev_slider_28_1')){
		var tpj=jQuery;
		var revapi28;
		
		if(tpj("#rev_slider_28_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_28_1");
		}else{
			revapi28 = tpj("#rev_slider_28_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"revolution/js/",
				dottedOverlay:"none",
				delay:15000,
				
				navigation: {
					
					keyboardNavigation:"on",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					arrows: {
						style:"uranus",
						enable:true,
						hide_onmobile:false,
						hide_onleave:false,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:20,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:20,
							v_offset:0
						}
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"metis",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:50,
						space:5,
						tmp:''
					}
				},

				gridwidth:[960,750],
				gridheight:[768,600],
				lazyType:"none",
				
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				
				shuffle:"off",
				autoHeight:"on",

				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}
	
				
	$('[data-menu]').on('click', function(){
		
		var mainMenu = $(this).data('menu');
		
		$(mainMenu).toggleClass('visible-menu');
		
	});
	
	if(isExists('.venobox')){
		$('.venobox').attr('data-gall', 'gallery').venobox({
			framewidth: '50%',        // default: ''
			frameheight: '',       // default: ''
			border: '0px',             // default: '0'
			bgcolor: '#5dff5e',         // default: '#fff'
			titleattr: 'data-title',    // default: 'title'
			numeratio: false,            // default: false
			infinigall: true            // default: false
		}); 

	}
	
	
})(jQuery);



function isExists(elem){
	if ($(elem).length > 0) { 
		return true;
	}
	return false;
}
