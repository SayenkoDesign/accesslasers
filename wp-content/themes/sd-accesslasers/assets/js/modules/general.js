import $ from 'jquery';

export default {
	init() {
		// Example scroll to element
		/*
		 $('.scroll-next').on('click',function(e){

		 $.smoothScroll({
		 offset: -100,
		 scrollTarget: $('main section:first-child'),
		 });
		 });
		 */

		$('html').addClass('window-loaded');
        
        
        // Frontpage
        
            // Technologies
            $('.section-technologies .grid header').matchHeight({row:true});
            $('.section-technologies .grid .description').matchHeight({row:true});
            $('.section-technologies .grid .grid-image').matchHeight({row:true});
            $('.section-technologies .grid footer').matchHeight({row:true});
	},
};
