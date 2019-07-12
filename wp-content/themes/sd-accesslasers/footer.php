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
		<div class="row primary-footer align-center">
			<div class="column small-12 medium-10 large-6 footer-col-3 large-order-1">
				<?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
					<div class="sidebar-footer sidebar-footer-1" role="complementary">
						<?php dynamic_sidebar( 'footer-3' ); ?>
					</div><!-- #primary-sidebar -->
				<?php endif; ?>

			</div>

			<div class="column small-12 medium-7 large-4 footer-col-1">
				<div class="site-branding">
					<div class="logo">
						<a href="<?php echo esc_url( home_url() ); ?>">
							<?php printf( '<img src="%s" alt="site logo" class="" />', _s_asset_path( 'svg/y-logo.svg' ) ); ?>
						</a>
					</div>
				</div>
				<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
					<div class="sidebar-footer sidebar-footer-1" role="complementary">
						<?php dynamic_sidebar( 'footer-1' ); ?>
					</div><!-- #primary-sidebar -->
				<?php endif; ?>


			</div>
			<div class="column small-12 medium-3 large-2 footer-col-2">
				<?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
					<div class="sidebar-footer sidebar-footer-2" role="complementary">
						<?php dynamic_sidebar( 'footer-2' ); ?>
					</div><!-- #primary-sidebar -->
				<?php endif; ?>
				<?php echo _s_get_social_icons(); ?>
			</div>
		</div>
		<div class="row sub-footer align-center">
			<div class="column text-center footer-col-bottom">
				<?php if ( is_active_sidebar( 'footer-bottom' ) ) : ?>
					<div class="sidebar-footer sidebar-footer-bottom" role="complementary">
						<?php dynamic_sidebar( 'footer-bottom' ); ?>
					</div><!-- #primary-sidebar -->
				<?php endif; ?>

			</div>
		</div>
	</div>

</footer><!-- #colophon -->

<?php

wp_footer();
?>
</body>
</html>
