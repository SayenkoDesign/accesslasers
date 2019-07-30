<?php
// About - Core Values

if( ! class_exists( 'About_Core_Values' ) ) {
    class About_Core_Values extends Element_Section {
        
        public function __construct() {
            parent::__construct();

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
                     'core-values-' . $this->get_name()
                ]
            ); 
            
            
            $this->add_render_attribute(
                'wrapper', 'id', [
                     'core-values-' . $this->get_name()
                ]
            ); 
                        
        } 
        
        
        
        
        // Add content
        public function render() {
            
            $out = '';
            
            if ( have_rows( 'core_values' ) ) :
                while ( have_rows( 'core_values' ) ) :
                    the_row();
                    $out .= _s_get_template_part( 'template-parts/content-blocks', 'block-core_values', false, true ); 
                endwhile;
                wp_reset_postdata();
            endif;   
            
            return $out;   
            
        }
        
    }
}
   
new About_Core_Values;
