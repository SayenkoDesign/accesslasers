<?php
/*
Template Name: Careers
*/

add_filter( 'body_class', function ( $classes ) {
  unset( $classes[ array_search('page-template-default', $classes ) ] );
  $classes[] = '';
  return $classes;
}, 99 );

get_header(); ?>

<?php
_s_get_template_part( 'template-parts/careers', 'hero' );

printf( '<div class="share-container show-for-xxlarge">%s</div>', _s_get_addtoany_share_icons() );

?>

<div id="primary" class="content-area">

	<main id="main" class="site-main" role="main">
	<?php
        _s_get_template_part( 'template-parts/careers', 'collage' );
        _s_get_template_part( 'template-parts/careers', 'values' );
        _s_get_template_part( 'template-parts/careers', 'testimonials' );
        _s_get_template_part( 'template-parts/careers', 'jobs' );
	?>
	</main>


</div>

<?php
get_footer();
