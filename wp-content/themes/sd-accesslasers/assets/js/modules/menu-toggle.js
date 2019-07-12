import $ from 'jquery';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';

export default {
	init() {

		const $menuToggle = $( '.js-menu-toggle' );

		if ( !MediaQuery.atLeast( 'large' ) ) {
			$( $menuToggle.data( 'menu' ) ).hide();
		}

		$menuToggle.click( ( event ) => {
			$( $( event.target ).data( 'menu' ) ).slideToggle();
		} );

		$( window ).on( 'changed.zf.mediaquery', function( event, newSize, oldSize ) {
			if ( MediaQuery.atLeast( 'large' ) ) {
				$( $menuToggle.data( 'menu' ) ).show();
			} else {
				$( $menuToggle.data( 'menu' ) ).hide();
			}
		} );
	},
};
