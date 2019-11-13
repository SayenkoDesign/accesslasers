<?php

// Redirect single resource if page is blocked

function _redirect_single_people()
{
    if ( is_singular( 'people' ) ) {
        
        global $post;
        
        
        $permalink = sprintf( '%s#%s', trailingslashit( get_permalink( 100 ) ), $term );
        
        wp_safe_redirect( $permalink, 302 );
        exit();
    }
}
// add_action( 'template_redirect', '_redirect_single_people' );