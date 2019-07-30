<?php
/**
 * ACF Blocks
 *
 * A place to custom functionality related to Advanced Custom Fields.
 *
 * @package _s
 */

// If ACF isn't activated, then bail.
if ( ! class_exists( 'acf' ) ) {
	return false;
}


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		[
			[
				'slug'  => 'theme-blocks',
				'title' => __( 'Theme Blocks', '_s' ),
			]
		],
		$categories
	);
}, 10, 2 );

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
            //'post_types' => array('post', 'page'),
            //'mode' => 'auto',
            'supports' => ['anchor' => true]
		) );		
        
        // Grid
        /*
		acf_register_block( array(
			'name'            => 'grid',
			'title'           => __( 'Grid', '_s' ),
			'description'     => __( 'Grid', '_s' ),
			'render_callback' => '_s_acf_block_render_callback',
			'category'        => 'theme-blocks',
			'icon'            => 'admin-comments',
			'keywords'        => array( 'acf grid' ),
            //'post_types' => array('post', 'page'),
            //'mode' => 'auto',
            'supports' => ['anchor' => true]
		) );		*/
        
        // About - core Values
        /*
		acf_register_block( array(
			'name'            => 'core-values',
			'title'           => __( 'Core Values', '_s' ),
			'description'     => __( 'About - core values', '_s' ),
			'render_callback' => '_s_acf_block_render_callback',
			'category'        => 'theme-blocks',
			'icon'            => 'admin-comments',
			'keywords'        => array( 'acf core values' ),
            'post_types' => array('page'),
            //'mode' => 'auto',
            'supports' => ['anchor' => true]
		) );
        */
	}
}

// add_action( 'acf/init', '_s_acf_register_blocks' );


