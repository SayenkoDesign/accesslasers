<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="dns-prefetch" href="//fonts.googleapis.com">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_FAVICONS; ?>/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo THEME_FAVICONS; ?>/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo THEME_FAVICONS; ?>/favicon-16x16.png">
	<link rel="manifest" href="<?php echo THEME_FAVICONS; ?>/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2B70AA">
	<meta name="msapplication-TileColor" content="#2B70AA">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head(); ?>
</head>

<body <?php body_class( wp_is_mobile() ? 'is-mobile' : 'is-desktop' ); ?>>

<ul class="skip-link screen-reader-text">
	<li><a href="#content" class="screen-reader-shortcut"><?php esc_html_e( 'Skip to content', '_s' ); ?></a></li>
	<li><a href="#footer" class="screen-reader-shortcut"><?php esc_html_e( 'Skip to footer', '_s' ); ?></a></li>
</ul>

<div class="sticky-header">
	<header id="top" class="site-header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
		<div class="wrap">
			<div class="row small-collapse large-uncollapse">
				<div class="column small-12 large-6">
					<div class="site-branding">
						<div class="logo shrink">
							<a href="<?php echo esc_url( home_url() ); ?>">
								<?php printf( '<img src="%s" alt="site logo" class="" />', _s_asset_path( 'svg/y-logo.svg' ) ); ?>
							</a>
						</div>
						<a class="title" href="<?php echo esc_url( home_url() ); ?>">
							<?php _e( 'Website Title' ); ?>
						</a>
						<button class="menu-toggle js-menu-toggle" data-menu="#primary-menu"><span class="screen-reader-text">Toggle Menu</span></button>
					</div>
				</div>
				<div class="column small-12 large-6">
					<div class="nav-secondary">
						<?php
						wp_nav_menu( [
							'theme_location'  => 'secondary',
							'menu'            => 'Secondary Menu',
							'container'       => '',
							'container_class' => '',
							'container_id'    => '',
							'menu_id'         => 'secondary-menu',
							'menu_class'      => 'menu',
							'before'          => '',
							'after'           => '',
							'link_before'     => '',
							'link_after'      => '',
							'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>'
						] );
						?>
					</div>
				</div>
			</div>

			<nav id="site-navigation" class="nav-primary" role="navigation" aria-label="Main" itemscope itemtype="https://schema.org/SiteNavigationElement">

				<div class="row small-collapse large-uncollapse">
					<div class="column">
						<?php

						// Desktop Menu
						$args = array(
							'theme_location'  => 'primary',
							'menu'            => 'Primary Menu',
							'container'       => '',
							'container_class' => '',
							'container_id'    => '',
							'menu_id'         => 'primary-menu',
							'menu_class'      => 'menu vertical large-horizontal',
							'before'          => '',
							'after'           => '',
							'link_before'     => '',
							'link_after'      => '',
							'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>'
						);
						wp_nav_menu( $args );
						?>

					</div>
				</div>

			</nav>
		</div><!-- wrap -->

	</header><!-- #masthead -->
</div>

<div id="page" class="site-container">

	<div id="content" class="site-content">
