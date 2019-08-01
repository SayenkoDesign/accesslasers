<?php
// Leadership - People

if( ! class_exists( 'Leadership_People_Section' ) ) {
    class Leadership_People_Section extends Element_Section {
        
        var $post_type = 'people';
        
        public function __construct() {
            parent::__construct();      
        }
              
        // Add default attributes to section        
        protected function _add_render_attributes() {
            
            // use parent attributes
            parent::_add_render_attributes();
    
            $this->add_render_attribute(
                'wrapper', 'class', [
                     $this->get_name() . '-people'
                ]
            );   

            $this->add_render_attribute(
                'wrapper', 'id', [
                     $this->get_name() . '-people'
                ], true
            );            
            
        }          
        
        // Add content
        public function render() {
            
            $fields = $this->get_fields();
            
            $heading = $this->get_fields( 'heading' ) ? $this->get_fields( 'heading' ) : get_the_title();
            $heading = _s_format_string( $heading, 'h2' );
                                    
            $people = $this->people();
            
            return sprintf( '<div class="grid-container">
                                <div class="grid-x grid-margin-x">
                                <div class="cell">%s</div>
                                </div>%s
                            </div>',
                            $heading,
                            $people
                         );  
                    
        }
        
        
        private function people() {
                        
            $post_ids = $this->get_fields( 'posts' );
                                
            if( empty( $post_ids ) ) {
                return false;
            }
        
            $args = array(
                'post_type' => 'people',
                'order' => 'ASC',
                'orderby' => 'post__in',
                'post__in' => $post_ids,
                'posts_per_page' => count( $post_ids ),
                'no_found_rows' => true,
                'update_post_meta_cache' => false,
                'update_post_term_cache' => false,
                'fields' => 'ids'
            );
            
            $loop = new WP_Query( $args );
            
            $posts = [];
            
            if ( $loop->have_posts() ) :                 
                          
                while ( $loop->have_posts() ) :
    
                    $loop->the_post(); 
                    
                    $posts[] = $this->get_person();
    
                endwhile;
                
                wp_reset_postdata();
                
            endif; 
                        
            if( empty( $posts ) ) {
                return false;
            }
                        
            // Get the CTA
            $cta = $this->get_cta();
                                                                        
            if( ! empty( $cta ) ) {
                $classes = ' has-cta';
               array_push( $posts, $cta );
            }
                                                           
            return sprintf( '<div class="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3 align-center grid">%s</div>', 
                                    join( '', $posts ) );
        }
        
        
        
        private function get_person() {
                     
            $thumbnail = sprintf( ' style="background-image: url(%s)"', get_the_post_thumbnail_url( get_the_ID(), 'medium' ) );
            $thumbnail = sprintf( '<div class="thumbnail"%s></div>', $thumbnail );
            
            $position  = get_field( 'position' );
            $position = _s_format_string( $position, 'p', [ 'class' => 'position' ] );
            
            $linkedin = get_field( 'linkedin' );
            if( ! empty( $linkedin ) ) {
                $linkedin = sprintf( '<a href="%s" class="linkedin">%s</a>', $linkedin, get_svg( 'linkedin' ) );
            }
                        
            $heading = the_title( '<h4>', '</h4>', false ); 
                                                             
            return sprintf( '<div class="cell">
                                <div class="grid-item">
                                    <div class="grid-image">%s</div>
                                    <header>%s%s</header>
                                    <footer>%s</footer>
                                </div>
                            </div>', 
                            $thumbnail,
                            $heading,
                            $position,
                            $linkedin
                         );
            
        }
        
        
        private function get_cta() {
            
            $cta = $this->get_fields( 'call_to_action' );
            if( empty( $cta ) ) {
                return false;
            }
            
            $cta = array_filter( $cta );
            if( count( $cta ) < 3 ) {
                return false;
            }
            
            $icon = sprintf( '<img src="%sfooter/dc-trademark.svg" />', trailingslashit( THEME_IMG ) );
            
            return sprintf( '<article class="column cta"><div class="call-to-action"><div class="cta-box">%s<h3>%s</h3><a href="%s" class="button">%s</a></div></div></article>', 
                            $icon,
                            $cta['title'], 
                            $cta['button_url'], 
                            $cta['button_text'] 
                          );   
        
        }
    }
}
   
/*new Leadership_People_Section; */

$fields = get_field( 'people' );

if( ! empty( $fields ) ) {
    foreach( $fields as $key => $field ) {
        $section = new Leadership_People_Section();
        $section->set_fields( $field );
        $section->add_render_attribute( 'wrapper', 'class', $section->get_name() . '-people' ); 
        $section->render();
        $section->print_element();  

    }
}
