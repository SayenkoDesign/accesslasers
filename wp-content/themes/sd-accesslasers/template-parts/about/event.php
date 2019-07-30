

<article id="post-<?php the_ID(); ?>" <?php post_class( $alignment );?>>
    
        <div class="event">
            
            <div class="panel">  
            
                <?php
                   $background = '';
                   $thumbnail = get_the_post_thumbnail_url( get_the_ID(), 'medium' );
                   if( ! empty( $thumbnail ) ) {
                       $background = sprintf( 'style="background-image: url(%s);"', $thumbnail );
                   }
                ?>
                <div class="thumbnail" <?php echo $background; ?>><span></span></div>
             
                <div class="entry-content">
                
                    <header><?php the_title( '<h2>', '</h2>' );?></header>
                
                    <?php 
                    the_content(); 		
                    ?>
                    
                </div><!-- .entry-content -->
            
            </div>
                  
        </div>
    
    
</article><!-- #post-## -->
