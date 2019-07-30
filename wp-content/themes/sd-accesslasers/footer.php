<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?>

</div><!-- #content -->


<footer class="site-footer" id="site-footer" role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
	<div class="wrap">
    
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="left cell large-4 xxlarge-6 xxxlarge-4">
                <div class="grid-x grid-margin-x">
                <?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
					<div class="cell xsmall-12 small-6 large-12 xxlarge-auto sidebar-footer sidebar-footer-1" role="complementary">
						<?php dynamic_sidebar( 'footer-1' ); ?>
					</div><!-- #primary-sidebar -->
				<?php endif; ?>
                <?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
					<div class="cell xsmall-12 small-6 large-12 xxlarge-auto sidebar-footer sidebar-footer-2" role="complementary">
						<?php dynamic_sidebar( 'footer-2' ); ?>
					</div><!-- #primary-sidebar -->
				<?php endif; ?>
                </div>
            </div>
            <div class="right cell large-auto">
            <?php
            $footer_cta = get_field( 'footer_cta', 'option' );
            $heading = $button = '';
            if( ! empty( $footer_cta[ 'heading' ] ) ) {
                $heading = sprintf( '<h2>%s</h2>', $footer_cta[ 'heading' ] );
            }
            
            if( ! empty( $footer_cta[ 'button' ]['link'] ) ) {
                                
                $args = [
                    'link' => $footer_cta[ 'button' ]['link'],
                    'echo' => false,
                    'classes' => 'button large',
                ];
                $button  = sprintf( '<p>%s</p>', _s_acf_button( $args ) );
            }
            
            printf( '<div class="content">%s%s</div>', $heading, $button );
            
            // Company
            $hours      = get_field( 'hours', 'option' );
            $phone      = get_field( 'phone', 'option' );
            $directions = get_field( 'directions', 'option' );
            
            $out = '';
            
            if( ! empty( $hours ) ) {
                $out .= sprintf( '<li class="hours">%s</li>', $hours );
            }
            
            if( ! empty( $phone ) ) {
                $out .= sprintf( '<li class="phone"><a href="%s">%s</a></li>', _s_format_telephone_url( $phone ), $phone );
            }
            
            if( ! empty( $directions ) ) {
                $label = $directions[ 'label' ];
                $url   = $directions[ 'url' ];
                if( $label && $url ) {
                    $out  .= sprintf( '<li class="directions"><a href="%s">%s</a></li>', $url, $label );
                }
            }
            
            if( ! empty( $out ) ) {
                printf( '<div class="content"><ul class="hours-phone-directions">%s</ul></div>', $out );
            }
            
            if( _s_get_social_icons() ) {
                printf( '<div class="content">%s</div>',  _s_get_social_icons() );
            }
            ?>
            
            </div>
          </div>
        </div>
	</div>

</footer><!-- #colophon -->

<?php

wp_footer();
?>
</body>
</html>
