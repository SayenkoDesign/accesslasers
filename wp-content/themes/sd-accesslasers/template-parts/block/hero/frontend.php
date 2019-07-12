<?php
/**
 * Filename hero/frontend.php
 *
 * @package _s
 */

$image     = get_field( 'image' );
$title     = get_field( 'title' );
$sub_title = get_field( 'sub_title' );
$content   = get_field( 'content' );
$button    = get_field( 'button' );
$format    = get_field( 'format' );
$advanced  = get_field( 'advanced' );

if ( 'left' === $format ) {
	$image_col_order   = 1;
	$content_col_order = 2;
} else {
	$image_col_order   = 2;
	$content_col_order = 1;
}
?>
<section class="hero <?php _s_acf_section_classes( $advanced ); ?>" id="<?php echo $advanced['id']; ?>">
	
</section>
