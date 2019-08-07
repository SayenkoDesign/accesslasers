<?php
// Case Study - Testimonial

if( ! class_exists( 'Testimonial_Section' ) ) {
    class Testimonial_Section extends Element_Section {
                        
        public function __construct() {
            parent::__construct();
                        
            $fields = get_field( 'testimonial' );
            $this->set_fields( $fields );
            
            if( empty( $this->render() ) ) {
                return;
            }
                      
            // print the section
            $this->print_element();        
        }
              
        // Add default attributes to section        
        protected function _add_render_attributes() {
            
            // use parent attributes
            parent::_add_render_attributes();
    
            $this->add_render_attribute(
                'wrapper', 'class', [
                     $this->get_name() . '-testimonial',
                     $this->get_name() . '-testimonial' . '-' . $this->get_id(),
                ]
            ); 
                        
        }  
                
        
        // Add content
        public function render() {
                        
            $fields = $this->get_fields();  
                                        
            $photo = $this->get_fields( 'photo' );
            $photo = _s_get_acf_image( $photo, 'medium' );
            $message = $this->get_fields( 'message' );
            
            if( $this->get_fields( 'name' ) ) {
            $name = _s_format_string( '- ' . $this->get_fields( 'name' ), 'h6' );
            
            }
            
            if( empty( $photo ) || empty( $message ) || empty( $name ) ) {
                return false;
            }
 
            
            $quote_mark = sprintf( '<div class="quote-mark"><span><img src="%scase-studies/quote-icon.svg" /></span></div>', trailingslashit( THEME_IMG ) );
            
            $quote = sprintf( '<div class="quote">%s%s%s</div>', $quote_mark, $message, $name );
                
            return sprintf( '<div class="grid-container fluid"><div class="grid-x grid-margin-x">    
            <div class="cell large-5">%s</div><div class="cell large-auto">%s</div></div></div>', $photo, $quote );
           
        }
        

        
    }
}
   
new Testimonial_Section;
