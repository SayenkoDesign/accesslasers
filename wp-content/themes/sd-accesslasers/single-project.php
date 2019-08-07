<?php

get_header(); ?>

<?php
_s_get_template_part( 'template-parts/projects', 'post-hero' );
?>
    
<div id="primary" class="content-area">

    <main id="main" class="site-main" role="main">
        <?php
        while ( have_posts() ) :

            the_post();
            
             _s_get_template_part( 'template-parts/projects', 'content-project' );
                            
        endwhile;
                        
       ?>

    </main>
    
    <?php
    _s_get_template_part( 'template-parts/projects', 'testimonial' );   
    ?>
    
    <footer class="post-footer">
        <div class="container">
            <div class="wrap">
                <div class="column row">
                <?php
                
                echo _s_get_the_post_navigation( [
                    'prev_text'                  => __( '<span><</span> %title' ),
                    'next_text'                  => __( '%title <span>></span>' ),
                ] );
        
                ?> 
                </div>    
            </div> 
        </div>      
    </footer><!-- .entry-footer -->

</div>



<?php
get_footer();
