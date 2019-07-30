<?php
// About - Mission

if( ! class_exists( 'About_Mission_Section' ) ) {
    class About_Mission_Section extends Element_Section {
        
        public function __construct() {
            parent::__construct();
                                    
            $fields = get_field( 'mission' );
            $this->set_fields( $fields );
                                    
            // Render the section
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
                     $this->get_name() . '-mission',
                ]
            ); 
            
            $this->add_render_attribute(
                'wrapper', 'id', [
                     $this->get_name() . '-mission',
                ],
                true
            ); 
                        
        }  
        
        
        
        // Add content
        public function render() {
            
            $title = $this->get_fields( 'title' );
            $text = $this->get_fields( 'text' );
            $photos = $this->get_fields( 'photos' );
            
            $margins = $this->get_fields( 'photo_margins' );
            $margins = $margins ? ' with-margins' : '';
            
            if( empty( $title . $text  ) ) {
                return;
            }
            
            $collage = '';
            $images = [];
            if( ! empty( $photos ) ) {
                foreach( $photos as $photo ) {
                    $images[] = sprintf( '<div class="background" style="background-image: url(%s);"></div>', _s_get_acf_image( $photo['ID'], 'medium', true ) );
                }
                
                
                $first = sprintf( '<div class="item">%s</div>', join( '', array_slice( $images, 0, 3 ) ) );
                
                $remainder = '';
                $images = array_slice( $images, 3, count( $images ) - 3 );
                foreach( $images as $image ) {
                    $remainder .= sprintf( '<div class="item">%s</div>', $image );
                }
                
                $collage = sprintf( '<div class="column show-for-large"><div class="photos%s">%s%s</div></div>', $margins, $first, $remainder );
            }
                        
            $title = sprintf( '<h2 class="section-title">%s</h2>', $title );
            
            // Superscript first letter
            $text = preg_replace( '~(?<=^<p>)(\W*)(\w)(?=[\s\S]*</p>$)~i',
                       '$1<span class="first-letter">$2</span>',
                       wpautop( $text ) );
            
            $content = sprintf( '<div class="column"><div class="entry-content">%s%s</div></div>', $title, $text );
            
            return sprintf( '<div class="row large-unstack">%s%s</div>', $collage, $content );
            
        }
        
    }
}
   
new About_Mission_Section;
