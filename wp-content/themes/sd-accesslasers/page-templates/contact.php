<?php
/*
Template Name: Contact
*/


get_header(); ?>

<div id="primary" class="content-area">

    <main id="main" class="site-main" role="main">
    <?php    
    while ( have_posts() ) :

        the_post();
                    
        echo '<div class="row">';
        
            echo '<div class="small-12 large-6 columns column-block">';
                
                printf( '<div class="go-back"><a href="%s">%s</a></div>', home_url(), __( 'Back to website', '_s' ) );
                
                the_title( '<h1>', '</h1>' );
            
                the_content();
                
            echo '</div>';
            
            $map = '';
            
            $locations = get_field( 'locations' );
            
            $zoom_level = 6;
            
            if( ! empty( $locations ) ) {
                $markers = '';
                foreach( $locations as $key => $location ) {
                    $title          = $location['title'];
                    $description    = $location['description'];
                    $marker         = $location['marker'];
                    
                    $markers .= sprintf( '<div class="marker" data-center="%s" data-id="%s" data-lat="%s" data-lng="%s"><div class="infobox"><div class="details"><h5>%s</h5><p>%s</p></div></div></div>',
                                      $key ? 'false' : 'true',
                                      $key + 1,
                                      $marker['lat'],
                                      $marker['lng'],
                                      $title, 
                                      $description
                                   );                    
                }
                
                $map = sprintf( '<div class="acf-map-container"><div class="acf-map-legend-container"><h3>%s</h3><ul class="no-bullet acf-map-legend" /></div><div class="acf-map" data-zoom-level="%s"><div class="markers hide">%s</div></div></div>',
                        __( 'Locations', '_s' ),
                        $zoom_level,
                        $markers
                      );
            }
            
            printf( '<div class="small-12 large-6 columns  column-block">%s</div>', $map );
        
        echo '</div>';
            
    endwhile;
    ?>
    </main>


</div>

<?php
get_footer();
