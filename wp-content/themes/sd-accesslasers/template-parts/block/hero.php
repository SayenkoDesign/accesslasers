<?php

/*
Block - Hero
		
*/

if( ! class_exists( 'Hero_Block' ) ) {
    class Hero_Block extends Element_Block {
        
        public function __construct( $data ) {
            parent::__construct( $data );
                        
            $fields = get_field( 'hero' );            
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
            
            
            $background_image       = $this->get_fields( 'image' );
            
            if( ! empty( $background_image ) ) {
                $background_image = _s_get_acf_image( $background_image, 'hero', true );
                $background_position_x  = strtolower(  $this->get_fields( 'background_position_x' ) );
                $background_position_y  = strtolower( $this->get_fields( 'background_position_y' ) );
                $background_overlay     = $this->get_fields( 'background_overlay' );
                
                $this->add_render_attribute( 'wrapper', 'class', 'has-background' );
                $this->add_render_attribute( 'background', 'class', 'background-image' );
                $this->add_render_attribute( 'background', 'style', sprintf( 'background-image: url(%s);', $background_image ) );
                $this->add_render_attribute( 'background', 'style', sprintf( 'background-position: %s %s;', 
                                                                          $background_position_x, $background_position_y ) );
                
                if( true == $background_overlay ) {
                     $this->add_render_attribute( 'background', 'class', 'background-overlay' ); 
                }
                                                                          
            }             
        } 
        
        
        // Add content
        public function render() {
            
            $output = '';
            
            if( is_admin() ) {
                $output = $this->backend();
            } else {
                $output = $this->frontend();
            }
            
            return $output;
        }
        
        
        /**
         * Render element on frontend.
         *
         * Generates the final HTML on the frontend.
         *
         * @since 1.0.0
         * @access private
         */
        public function frontend() {
            /*$heading        = $this->get_fields( 'heading' ) ? $this->get_fields( 'heading' ) : get_the_title();
            $heading        = _s_format_string( $heading, 'h1' );
            
            $subheading = empty( $this->get_fields( 'subheading' ) ) ? '' : _s_format_string( $this->get_fields( 'subheading' ), 'h2' );
            
            $description = empty( $this->get_fields( 'description' ) ) ? '' : _s_format_string( $this->get_fields( 'description' ), 'p' );

            return sprintf( '<div class="row align-middle"><div class="column"><div class="hero-content">%s%s%s</div></div></div>', 
                            $heading,
                            $subheading,
                            $description
                         );
                         */
            $image     = get_field( 'image' );
            $advanced  = get_field( 'advanced' );
            return  sprintf( 'frontend %s', _s_get_acf_image( $image ) );
        }
        
        
        /**
         * Render element on backend.
         *
         * Generates the final HTML on the backend.
         *
         * @since 1.0.0
         * @access private
         */
        private function backend() {
            
            $image     = get_field( 'image' );
            $advanced  = get_field( 'advanced' );
            return  sprintf( '%s %s', get_field( 'heading' ),  _s_get_acf_image( $image ) );
            
        }
    }
}
   
new Hero_Block( $data ); // pass block data