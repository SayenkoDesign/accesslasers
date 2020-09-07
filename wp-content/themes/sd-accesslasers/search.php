<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package _s
 */


get_header(); 

_s_get_template_part( 'template-parts/search', 'hero' );
?>

<div class="grid-container">

    <div class="grid-x grid-padding-x">    
  
        <div id="primary" class="cell content-area">
            
            <main id="main" class="site-main" role="main">
            
            <header class="entry-header">
                <h1 class="entry-title">Search Results</h1>
            </header><!-- .entry-header -->
            
            <?php
             
            if ( have_posts() ) :  
            
                while ( have_posts() ) :
    
                    the_post();
                        
                    get_template_part( 'template-parts/search/content', get_post_type() );
    
                endwhile;
                
                if( function_exists( '_s_paginate_links' ) ) {
                    $pagination =  _s_paginate_links();
                } else {
                    $pagination = paginate_links();   
                }
                
                global $wp_query;                
                if( $wp_query->max_num_pages > 1 ) :
                    echo $pagination;
                endif;
                                
            else :
    
                get_template_part( 'template-parts/content', 'none' );
    
            endif; ?>
    
            </main>
        
        </div>
    
    </div>

</div>

<?php
get_footer();
