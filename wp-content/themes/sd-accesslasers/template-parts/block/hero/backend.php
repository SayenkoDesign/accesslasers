<?php
/**
 * Filename hero/backend.php
 *
 * @package _s
 */

$image     = get_field( 'image' );
$advanced  = get_field( 'advanced' );
?>
<section class="hero <?php _s_acf_section_classes( $block['className']  ); ?>" id="<?php echo $advanced['id']; ?>">
	<?php
    echo _s_get_acf_image( $image );
    ?>
</section>
