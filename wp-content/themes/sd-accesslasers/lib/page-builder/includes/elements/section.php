<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor section element class.
 *
 * Elementor repeater handler class is responsible for initializing the section
 * element.
 *
 * @since 1.0.0
 */
class Element_Section extends Element_Base {
            
    /**
	 * Get section name.
	 *
	 * Retrieve the section name.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Section name.
	 */
	public function get_name() {
		return 'section';
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
        
        return sprintf( '<%s %s><div %s><div %s>', 
                        esc_html( $this->get_html_tag() ), 
                        $this->get_render_attribute_string( 'wrapper' ),
                        $this->get_render_attribute_string( 'wrap' ),
                        $this->get_render_attribute_string( 'container' )
                        );
    }
    

	/**
	 * After section rendering.
	 *
	 * Used to add stuff after the section element.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function after_render() {
        return sprintf( '</div></div></%s>', esc_html( $this->get_html_tag() ) );
	}
    

	/**
	 * Add section render attributes.
	 *
	 * Used to add render attributes to the section element.
	 *
	 * @since 1.3.0
	 * @access protected
	 */
	protected function _add_render_attributes() {
        
        parent::_add_render_attributes();
                
        // Default        
        $this->add_render_attribute(
            'wrapper', 'class', [
                $this->get_name(),
                $this->get_name() . '-' . $this->get_id()
            ]
        );
        
        
        if( empty( $this->add_render_attribute( 'id' ) ) ) {
            $this->add_render_attribute(
                'wrapper', 'id', [
                    $this->get_name() . '-' . $this->get_id()
                ]
            );   
        }
        
		
	}

	/**
	 * Get HTML tag.
	 *
	 * Retrieve the section element HTML tag.
	 *
	 * @since 1.5.3
	 * @access private
	 *
	 * @return string Section HTML tag.
	 */
	public function get_html_tag() {
	
		$html_tag = 'section';

		return $html_tag;
	}    
}
