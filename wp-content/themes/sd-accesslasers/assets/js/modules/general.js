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

		// Mobile, allow top lvel menu item to toggle sub menu
		$('li.menu-item-has-children > a').on('click',function(e){

			var $toggle = $(this).parent().find('.sub-menu-toggle');

			if( $toggle.is(':visible') ) {
				$toggle.trigger('click');
				e.preventDefault();
			}



		});
	},
};
