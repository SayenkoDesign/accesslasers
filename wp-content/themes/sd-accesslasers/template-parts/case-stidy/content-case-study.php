<?php
/**
 * Template part for displaying single posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */
?>

<section class="section-content">
    <div class="container">
    <div class="wrap">

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="column row">
                <header class="entry-header">
                    <?php
                    $project = new Single_Project( get_the_ID() );
                    $icon = $project->get_service_icon( 'page_icon' );
                    if( ! empty( $icon ) ) {
                        echo $icon;
                    }
                    
                    the_title( '<h1 class="entry-title">', '</h1>' ); 
                    ?>
                </header><!-- .entry-header -->
                </div>
                <div class="row">
                    <div class="entry-content column small-12 large-6 xlarge-7 small-order-2 large-order-1">
                    
                        <?php 
                        the_content(); 		
                        ?>
                        
                    </div><!-- .entry-content -->
                    
                    <div class="column column-block small-12 large-5 xlarge-4 small-order-1 large-order-2 sidebar">
                        <?php
                        $columns = '';
                        $project = new Single_Project( get_the_ID() );
                        $industry = $project->get_industry();
                        $location = $project->get_location();
                        $services = $project->get_services(); 
                        if( $industry || $location ) {
                            $columns .= sprintf( '<div class="column column-block small-12 medium-4 large-6">%s%s</div>', $industry, $location );
                        }
                        
                        if( $services ) {
                            $columns .= sprintf( '<div class="column column-block small-12 medium-4 large-6">%s</div>', $services );
                        }
                        
                        $logo = get_field( 'logo' );
                        if( ! empty( $logo ) ) {
                            $columns .= sprintf( '<div class="column column-block small-12 medium-4 large-12"><hr class="show-for-large" />%s</div>', _s_get_acf_image( $logo, 'thumbnail' ) );
                        }
                        
                        printf( '<div class="row">%s</div>', $columns );
                        
                        
                        ?>
                    </div>
                
                </div>
                        
            </article><!-- #post-## -->
                    
    </div>
    </div>
</section>