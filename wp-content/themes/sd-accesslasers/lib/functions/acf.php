<?php

// Hide ACF fields on live site
/*
if( false == WP_DEBUG ) {
    add_filter('acf/settings/show_admin', '__return_false');   
}
*/
// Google API KEY, Key is stored inside functions.php
function my_acf_init() {
	acf_update_setting( 'google_api_key', GOOGLE_API_KEY );
}

add_action( 'acf/init', 'my_acf_init' );


/**
 *  Creates ACF Options Page(s)
 */

if ( function_exists( 'acf_add_options_sub_page' ) ) {

	acf_add_options_page( array(
		'page_title' => 'Theme Settings',
		'menu_title' => 'Theme Settings',
		'menu_slug'  => 'theme-settings',
		'capability' => 'edit_posts',
		'redirect'   => true
	) );

	/*
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Social',
		'menu_title' 	=> 'Social',
		'menu_slug' 	=> 'theme-settings-social',
		'parent' 		=> 'theme-settings',
		'capability' => 'edit_posts',
		 'redirect' 	=> false,
		'autoload' => true,
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Footer CTA',
		'menu_title' 	=> 'Footer CTA',
		'menu_slug' 	=> 'theme-settings-footer-cta',
		'parent' 		=> 'theme-settings',
		'capability' => 'edit_posts',
		 'redirect' 	=> false,
		'autoload' => true,
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Books Settings',
		'menu_title' 	=> 'Books Settings',
		'parent'     => 'edit.php?post_type=book',
		'capability' => 'edit_posts'
	));
	*/


}

function _s_block_category( $categories, $post ) {
	return array_merge(
		[
			[
				'slug'  => 'theme-blocks',
				'title' => __( 'Theme Blocks', '_s' ),
			],
		],
		$categories
	);
}

add_filter( 'block_categories', '_s_block_category', 10, 2 );

/**
 * Register Gutenberg Blocks
 */
function _s_acf_register_blocks() {

	// check function exists
	if ( function_exists( 'acf_register_block' ) ) {

		// Hero
		acf_register_block( array(
			'name'            => 'hero',
			'title'           => __( 'Hero', '_s' ),
			'description'     => __( 'Hero', '_s' ),
			'render_callback' => '_s_acf_block_render_callback',
			'category'        => 'theme-blocks',
			'icon'            => 'admin-comments',
			'keywords'        => array( 'hero' ),
		) );		
	}
}

add_action( 'acf/init', '_s_acf_register_blocks' );


function _s_acf_block_render_callback( $block ) {

	// convert name ("acf/testimonial") into path friendly slug ("testimonial")
	$slug = str_replace( 'acf/', '', $block['name'] );

	// include a template part from within the "template-parts/block" folder
    if( is_admin() ) {
        $template = get_theme_file_path( "/template-parts/block/{$slug}/backend.php" );
    } else {
        $template = get_theme_file_path( "/template-parts/block/{$slug}/frontend.php" );   
    }
    
	if ( file_exists( $template ) ) {
		include( $template );
	}
}

function _s_get_acf_image( $attachment_id = false, $size = 'large', $background = false, $attr = array() ) {

	if ( ! absint( $attachment_id ) ) {
		return false;
	}

	if ( wp_is_mobile() ) {
		$size = 'large';
	}

	if ( $background ) {
		$background = wp_get_attachment_image_src( $attachment_id, $size );

		return $background[0];
	}

	return wp_get_attachment_image( $attachment_id, $size, '', $attr );

}


function _s_get_acf_image_url( $attachment_id = false, $size = 'large' ) {

	return _s_get_acf_image( $attachment_id, $size = 'large', true );

}


function _s_get_acf_link( $link, $args = [] ) {
	if ( ! is_array( $link ) ) {
		$link = [ 'url' => $link ];
	}

	$link = wp_parse_args( $link, $args );

	if ( empty( $link['title'] ) ) {
		return false;
	}

	return sprintf( '<a href="%s">%s</a>', $link['url'], $link['title'] );
}


function _s_get_acf_oembed( $iframe ) {


	// use preg_match to find iframe src
	preg_match( '/src="(.+?)"/', $iframe, $matches );
	$src = $matches[1];


	// add extra params to iframe src
	$params = array(
		'controls' => 1,
		'hd'       => 1,
		'autohide' => 1,
		'rel'      => 0
	);

	$new_src = add_query_arg( $params, $src );

	$iframe = str_replace( $src, $new_src, $iframe );


	// add extra attributes to iframe html
	$attributes = 'frameborder="0"';

	$iframe = str_replace( '></iframe>', ' ' . $attributes . '></iframe>', $iframe );

	$iframe = sprintf( '<div class="embed-container">%s</div>', $iframe );


	// echo $iframe
	return $iframe;
}


// Exclude current post from related posts field
function my_relationship_query( $args, $field, $post_id ) {

	// exclude current post from being selected
	$args['exclude'] = $post_id;


	// return
	return $args;

}

// add_filter('acf/fields/relationship/query/name=related_posts', 'my_relationship_query', 10, 3);


/**
 * Echo or return the target for use in an anchor tag.
 *
 * @param $link
 *
 * @return string
 */
function _s_acf_link_target( $link, $echo = true ) {
	$type = $link['type'];

	switch ( $type ) {
		case 'anchor':
			$target = sprintf( '#%s', esc_attr( $link['target'] ) );
			break;
		default:
			$target = esc_url( $link['target'] );
			break;
	}

	if ( $echo ) {
		echo $target;
	}

	return $target;
}

/**
 * Echo or return an ACF button.
 *
 * @param $button
 *
 * @return string|bool
 */
function _s_acf_button( $button, $echo = true ) {
	$target  = _s_acf_link_target( $button['link'], false );
	$classes = [ $button['color'] ];
	$label   = $button['label'] ?? '';

	if ( empty( $label ) ) {
		return false;
	}

	$output = sprintf(
		'<a href="%s" class="button %s">%s</a>',
		esc_attr( $target ),
		esc_attr( implode( ' ', $classes ) ),
		esc_html( $label )
	);

	if ( $echo ) {
		echo $output;
	}

	return $output;
}


function _s_acf_section_classes( $settings, $echo = true ) {
	$classes = [];
	// Background Color
	switch ( $settings['background_color'] ) {
		case 'blue' :
			$classes[] = 'blue';
			break;
		default:
			break;
	}

	if ( $echo ) {
		echo esc_attr( implode( ' ', $classes ) );
	}

	return $classes;
}
