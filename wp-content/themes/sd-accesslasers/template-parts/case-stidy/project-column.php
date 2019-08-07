<?php
/**
 * Project - Column
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	<?php
    $background = sprintf( ' style="background-image: url(%s)"', get_the_post_thumbnail_url( get_the_ID(), 'medium' ) );
    
    $project = new Single_Project( get_the_ID() );
    $service_icon = $project->get_service_icon();
                                                            
    printf( '<a class="thumbnail" href="%s"%s>%s</a><div class="panel" data-equalizer-watch>%s</div>', 
            get_permalink(),
            $background, 
            $service_icon, 
            sprintf( '<h3><a href="%s">%s</a></h3>', get_the_permalink(), get_the_title() )
           );
    ?>
    
    <footer class="entry-footer">
    <?php
    printf( '<p><a href="%s">See Project</a></p>', get_permalink() )
    ?>
    </footer>
    
</article><!-- #post-## -->
