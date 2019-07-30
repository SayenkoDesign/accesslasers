<?php
// About - Hero

if( ! class_exists( 'About_Hero_Block' ) ) {
    class About_Hero_Block extends Element_section {
                
        public function __construct() {
            parent::__construct();
                                    
            $fields = get_field( 'hero' );
            $this->set_fields( $fields );
            
            // Fields are cloned as a group, because we don't want all fields
            $settings['background_options'] = $this->get_fields( 'background_options' );
            $settings['background_options']['background_type'] = 'image'; // force background type = image
            $settings['other_options'] = $this->get_fields( 'other_options' );
            $settings['display_options'] = $this->get_fields( 'display_options' );
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
                     'hero-' . $this->get_name()
                ]
            ); 
            
            
            $this->add_render_attribute(
                'wrapper', 'id', [
                     'hero-' . $this->get_name()
                ]
            ); 
                        
        } 
               
        
        // Add content
        public function render() {
            $out = '';
            
            if ( have_rows( 'hero' ) ) :
                while ( have_rows( 'hero' ) ) :
                    the_row();
                    $out .= _s_get_template_part( 'template-parts/content-blocks', 'block-hero', false, true ); 
                endwhile;
                wp_reset_postdata();
            endif;   
            
            return $out;       
        }
        
    }
}
   
new About_Hero_Block;
