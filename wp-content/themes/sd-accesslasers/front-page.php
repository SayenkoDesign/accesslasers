<?php
/**
 * Custom Body Class
 *
 * @param array $classes
 *
 * @return array
 */

add_filter( 'body_class', function ( $classes ) {
	unset( $classes[ array_search( 'page-template-default', $classes ) ] );

	// $classes[] = '';
	return $classes;
}, 99 );

get_header(); ?>

<div class="grid-container">

    <div class="grid-x grid-margin-x">    
  
        <div id="primary" class="cell content-area">
    
            <main id="main" class="site-main" role="main">
    
                <?php while ( have_posts() ) : ?>
                    <?php the_post(); ?>
    
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    
                        <div class="entry-content">
                            <section>
                                <div class="wrap">
                                  <div class="grid-x grid-margin-x">
                                    <div class="cell large-6">cell</div>
                                    <div class="cell large-6">cell</div>
                                  </div>
                                </div>
                            </section>
                            <?php the_content(); ?>
                        </div><!-- .entry-content -->
    
                        <footer class="entry-footer">
                            <?php
                            edit_post_link(
                                sprintf(
                                /* translators: %s: Name of current post */
                                    esc_html__( 'Edit %s', '_s' ),
                                    the_title( '<span class="screen-reader-text">"', '"</span>', false )
                                ),
                                '<span class="edit-link">',
                                '</span>'
                            );
                            ?>
                        </footer><!-- .entry-footer -->
    
                    </article><!-- #post-## -->
    
                <?php endwhile; ?>
    
            </main>
    
        </div>
    
    </div>
    
</div>

<?php
get_footer();
