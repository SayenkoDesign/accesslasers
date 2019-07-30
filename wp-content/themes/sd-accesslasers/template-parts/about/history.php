<?php
// About - History

if( ! class_exists( 'About_History' ) ) {
    class About_History extends Element_Section {
        
        var $post_type = 'history';
        
        public function __construct() {
            parent::__construct();
                        
            $fields = get_field( 'history' );
            $this->set_fields( $fields );
                        
            $settings = get_field( 'settings' );
            $this->set_settings( $settings );
                        
            // Render the section
            $this->render();
            
            // print the section
            $this->print_element();        
        }
              
        // Add default attributes to section        
        protected function _add_render_attributes() {
            
            // use parent attributes
            parent::_add_render_attributes();
    
            $this->add_render_attribute(
                'wrapper', 'class', [
                     $this->get_name() . '-history',
                     'full-width'
                ]
            );   

            $this->add_render_attribute(
                'wrapper', 'id', [
                     $this->get_name() . '-history'
                ], true
            );            
            
        }          
        
        // Add content
        public function render() {

            $args = array(
                'post_type' => $this->post_type,
                'order' => 'DESC',
                'orderby' => 'title_number',
                'posts_per_page' => -1,
            );
            
            $loop = new WP_Query( $args );
            
            $out = '';
                        
            if ( $loop->have_posts() ) :                 
                          
                while ( $loop->have_posts() ) :
    
                    $loop->the_post(); 
                    
                    $index = $loop->current_post;
                    $alignment = $index % 2 ? 'event-odd' : 'event-even';
                    
                    $data = [ 'alignment' => $alignment];
                                        
                    $out .= _s_get_template_part( 'template-parts/about', 'event', $data, true );
                        
                endwhile;
                
            endif; 
            
            wp_reset_postdata();
                        
            $title = _s_format_string( $this->get_fields( 'title' ), 'h2', [ 'class' => 'section-title' ] );
                        
            return sprintf( '<div class="column row">%s<div class="timeline">%s<span class="line"></span></div></div>', $title, $out );
                        
        }
    }
}
   
new About_History;