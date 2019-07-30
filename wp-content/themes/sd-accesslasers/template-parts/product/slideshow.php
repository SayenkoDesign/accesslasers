<?php

/*
Product - Slideshpw
*/


if( ! class_exists( 'Product_Slideshow' ) ) {
    class Product_Slideshow extends Element_Section {
        
        public function __construct() {
            parent::__construct();
              
            $fields = get_field( 'slideshow' );           
            $this->set_fields( $fields );
            
            $settings = [];
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
                     $this->get_name() . '-product-slideshow'
                ]
            );            
        } 
        
        
       
           
        
        // Add content
        public function render() {
            
            /*
            slideshow - content/photo            
            */
                        
            
            
            return sprintf( '<div class="grid-container"><div class="grid-x grid-x-margin"><div class="cell">%s</div></div></div>',
                            $slideshow
            );
               
        }
        
    }
}
   
new Product_Slideshow; 