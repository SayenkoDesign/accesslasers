<?php

get_header(); ?>

<?php
// Hero
_s_get_template_part( 'template-parts/case-study', 'hero' );

?>

<div class="grid-container">

    <div class="grid-x grid-margin-x">    
  
        <div id="primary" class="cell content-area">
            
                <main id="main" class="site-main" role="main">
                           
                    <?php
                    
                    $classes[] = 'small-up-1 medium-up-2 large-up-3 xlarge-up-4';
                    
                    printf( '<div class="grid-x grid-margin-x %s grid">', join( ' ', $classes ) );
                     
                    if ( have_posts() ) : ?>
                        
                       <?php
                                                      
                        while ( have_posts() ) :
            
                            the_post();
                                                                   
                            _s_get_template_part( 'template-parts/case-study', 'post-column' );
                            
                        endwhile;
                   
                    endif; 
                    
                    echo '</div>';
                    
                    if( function_exists( '_s_paginate_links' ) ) {
                        echo _s_paginate_links();
                    } else {
                        echo paginate_links();   
                    }
                    ?>
            
                </main>
            
        </div>
        
    </div>
</div>
<?php
get_footer();
