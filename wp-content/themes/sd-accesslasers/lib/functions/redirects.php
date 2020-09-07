<?php

// Redirect single resource if page is blocked

function _redirect_single_people()
{
    if ( is_singular( 'people' ) ) {
        
        global $post;
        
        // what page is this person on?
        
        $about = 100;
        
        $permalink = sprintf( '%s#%s', trailingslashit( get_permalink( $about ) ), sanitize_title_with_dashes( get_the_title( $post->ID ) ) );
        
        wp_safe_redirect( $permalink, 302 );
        exit();
    }
}
add_action( 'template_redirect', '_redirect_single_people' );


function _redirect_single_history()
{
    if ( is_singular( 'history' ) ) {
        
        global $post;
                
        $about = 100;
        
        $permalink = sprintf( '%s#%s', trailingslashit( get_permalink( $about ) ), 'section-about-history' );
        
        wp_safe_redirect( $permalink, 302 );
        exit();
    }
}
add_action( 'template_redirect', '_redirect_single_history' );