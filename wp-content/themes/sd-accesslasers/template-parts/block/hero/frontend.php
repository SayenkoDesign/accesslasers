<?php
/**
 * Filename hero/frontend.php
 *
 * @package _s
 */

$image     = get_field( 'image' );
$advanced  = get_field( 'advanced' );

var_dump( $block_data );
?>
<section class="hero <?php _s_acf_section_classes( $advanced ); ?>" id="<?php echo $block['id']; ?>">
	<?php
    echo _s_get_acf_image( $image );
    ?>
</section>
