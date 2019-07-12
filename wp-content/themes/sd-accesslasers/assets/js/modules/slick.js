import $ from 'jquery';
import 'slick-carousel/slick/slick';

export default {
	init() {
		$( '.js-slick-hero-carousel' ).slick( {
			arrows: false,
			autoplay: true,
		} );

		$( '.js-slick-testimonials-carousel' ).slick( {
			arrows: false,
			dots: true,
			adaptiveHeight: true,
		} );

		$( '.js-slick-image-carousel' ).slick( {
			mobileFirst: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '20%',
						arrows: true,
					},
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '20%',
						arrows: true,
					},
				},
			],
		} );

		// Example

		/*$( '<div class="slick-arrows"></div>' ).insertAfter( '.section-videos .slick' ); // add arrows below slick slider, easier to position


		 $('.section-videos .slick').slick({
		 dots: false,
		 infinite: true,
		 speed: 300,
		 slidesToShow: 2,
		 slidesToScroll: 2,
		 appendArrows: $('.section-videos .slick-arrows'),
		 responsive: [
		 {
		 breakpoint: 979,
		 settings: {
		 slidesToShow: 1,
		 slidesToScroll: 1
		 }
		 }
		 ]
		 });
		 */
	},
};
