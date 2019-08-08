<?php

/*
Home - Hero
		
*/


if( ! class_exists( 'Home_Hero' ) ) {
    class Home_Hero extends Element_Section {
        
        public function __construct() {
            parent::__construct();
            
            $fields = get_field( 'hero' );
            $this->set_fields( $fields );
                                    
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
                     $this->get_name() . '-hero'
                ]
            );
            
            $background_image       = $this->get_fields( 'background_image' );
            $background_position_x  = strtolower( $this->get_fields( 'background_position_x' ) ) ?: 'center';
            $background_position_y  = strtolower( $this->get_fields( 'background_position_y' ) ) ?: 'center';
            $background_overlay     = $this->get_fields( 'background_overlay' );
            
            
            
            if( ! empty( $background_image ) ) {
                $background_image = _s_get_acf_image( $background_image, 'hero', true );
            } else  {
                $background_image = get_the_post_thumbnail_url( get_the_ID(), 'hero' );
                
                if( empty( $background_image ) ) {
                    $background_image = get_field( 'post_image_fallback', 'option' );
                    if( ! empty( $background_image ) ) {
                        $background_image = wp_get_attachment_image_src( $background_image, 'hero' );
                    }   
                }
            }
            
            $this->add_render_attribute( 'wrapper', 'class', 'has-background' );
            $this->add_render_attribute( 'background', 'class', 'background-image' );
            $this->add_render_attribute( 'background', 'style', sprintf( 'background-image: url(%s);', $background_image ) );
            $this->add_render_attribute( 'background', 'style', sprintf( 'background-position: %s %s;', 
                                                                      $background_position_x, $background_position_y ) );
            
            if( true == $background_overlay ) {
                 $this->add_render_attribute( 'background', 'class', 'background-overlay' ); 
            }
                                                                          
        }
        
        
        /**
	 * Before section rendering.
	 *
	 * Used to add stuff before the section element.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function before_render() {            
        
        $this->add_render_attribute( 'wrap', 'class', 'wrap' );
        
        $this->add_render_attribute( 'container', 'class', 'container' );
        
        $arrow = sprintf( '<a href="#section-what" data-smooth-scroll data-offset="40"><img src="%sicons/arrow-down-white.svg" class="arrow-down" /></a>', trailingslashit( THEME_IMG ) );
        
        return sprintf( '<%s %s><div %s></div><div %s>%s<div %s>', 
                        esc_html( $this->get_html_tag() ), 
                        $this->get_render_attribute_string( 'wrapper' ),
                        $this->get_render_attribute_string( 'background' ),
                        $this->get_render_attribute_string( 'wrap' ),
                        $arrow,
                        $this->get_render_attribute_string( 'container' )
                        );
    }

        
        // Add content
        public function render() {
            
            $heading = $this->get_fields( 'heading' ) ? $this->get_fields( 'heading' ) : get_the_title();
            $heading = _s_format_string( $heading, 'h1' );
            
            $description = empty( $this->get_fields( 'description' ) ) ? '' : _s_format_string( $this->get_fields( 'description' ), 'p' );
            
            $button = $this->get_fields( 'button' );
            if( ! empty( $button['link'] ) ) {
                                
                $args = [
                    'link' => $button['link'],
                    'echo' => false,
                    'classes' => 'button large',
                ];
                $button  = sprintf( '<p>%s</p>', _s_acf_button( $args ) );
            }
    
            return sprintf( '<div class="grid-container"><div class="grid-x grid-padding-x align-bottom">
                                <div class="cell"><div class="hero-content">%s%s%s</div></div>
                            </div></div>',
                            $heading,
                            $description,
                            $button
                         );
        }
    }
}
   
new Home_Hero; 