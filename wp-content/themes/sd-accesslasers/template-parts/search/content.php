<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
        <?php
        $post_type = 'post' == get_post_type() ? 'article' : get_post_type();
        $label = '';
        $pt = get_post_type_object( get_post_type() );
        if( ! is_wp_error( $pt ) ) {
            $label = $pt->labels->singular_name;
            $label = 'post' == get_post_type() ? 'article' : $label;
        } else {
            $label = str_replace( '_', ' ', $post_type );   
        }
        $permalink = get_the_permalink();
        $target = '';
        
        printf( '<div class="entry-post-type hide-for-large"><span>%s</span></div>', strtoupper( $label ) );
        ?>
		<?php 
        printf( '<h2 class="entry-title"><a href="%s"%s>%s</a></h2>', $permalink, $target,  get_the_title() );
        ?>
        <?php
        printf( '<div class="entry-post-type show-for-large"><span>%s</span></div>', strtoupper( $label ) );
        ?>
	</header><!-- .entry-header -->	
    
    <div class="entry-content">
        <?php
        $search_results_description = get_field( 'search_results_description' );
        if( ! empty( $search_results_description ) ) {
            printf( '<div class="search-result-description">%s</div>', $search_results_description );
        }
        
        // Post Types: Page/Post/Service/Project/job 
        
        if( 'post' == get_post_type() ) {
            echo '<div class="entry-meta">';
            _s_posted_on( 'M d, Y' );
            echo '</div>';
        } 
        ?>
    </div>
    <footer class="entry-footer">
    <?php
    printf( '<p><a href="%s"%s class="link green">Read More</a></p>', $permalink, $target );
    ?>
    </footer>
</article><!-- #post-## -->
