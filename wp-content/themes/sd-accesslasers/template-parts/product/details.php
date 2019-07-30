<?php

/*
Product - Details
*/


if( ! class_exists( 'Product_Details' ) ) {
    class Product_Details extends Element_Section {
        
        public function __construct() {
            parent::__construct();
              
            $fields['photos'] = get_field( 'photos' );  
            $fields['application'] = get_field( 'application' );
            $fields['technology'] = get_field( 'technology' );
            $fields['description'] = get_field( 'description' );
            $fields['downloads'] = get_field( 'downloads' );          
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
                     $this->get_name() . '-product-details'
                ]
            );            
        } 
        
        
       
           
        
        // Add content
        public function render() {
                     
            $heading = _s_format_string( get_the_title(), 'h1', [ 'class' => 'h3' ] );
            
            $classes = [ 'auto' ];
            $photos = $this->get_photos();
            if( ! empty( $photos ) ) {
                $classes = [ 'large-5 large-offset-1' ];
                $photos = sprintf( '<div class="cell large-6">%s</div>', $photos );
            }
            
            
            $buttons = $this->get_buttons();
            
            $group = '';
            $application = $this->get_application();
            if( ! empty( $application ) ) {
                $group .= sprintf( '<div class="cell large-shrink">%s</div>', $application );
            }
            
            $technology = $this->get_technology();
            if( ! empty( $technology ) ) {
                $group .= sprintf( '<div class="cell large-auto">%s</div>', $technology );
            }
            
            if( ! empty( $group ) ) {
                $group = sprintf( '<div class="grid-x grid-margin-x application-technology">%s</div>', $group );
            }
            
            $description = $this->get_description();
            
            $downloads = $this->get_downloads();
            
            return sprintf( '<div class="grid-container"><div class="grid-x grid-x-margin">%s<div class="cell %s">%s%s%s%s%s</div></div></div>',
                            $photos,
                            join( '', $classes ),
                            $heading,
                            $buttons,
                            $group, 
                            $description,
                            $downloads
            );
               
        }
        
        
        private function get_buttons() {
            
            $request = sprintf( '<a data-open"request-product" class="button">%s</a>', __( 'request product' ) );
            $phone = get_field( 'phone', 'option' );
            if( ! empty( $phone ) ) {
                $phone = sprintf( '<a href="%s" class="button phone">%s</a>', _s_format_telephone_url( $phone ), $phone );
            }            
            
            return sprintf( '<div class="stacked-for-medium expanded button-group">%s%s</div>', $request, $phone );
                        
        }
        
        
        // Slick slider phoots
        private function get_photos() {
            $photos = $this->get_fields( 'photos' );
            
            if( empty( $photos) ) {
                return false;
            }
            
            $slides = array_map( function ( $id ) {
                return wp_get_attachment_image( $id, 'large' );
            }, $photos );
            
            if( ! empty( $slides ) ) {
                return sprintf( '<div class="photos slick">%s</div>', join( '', $slides ) ); 
            }
            
            return false;
        }
        
        
        private function get_application() {
            $field = $this->get_fields( 'application' );
            if( empty( $field[ 'heading' ] ) || empty( $field[ 'applications' ] )  ) {
                return false;
            }
            
            $heading = _s_format_string( $field[ 'heading' ], 'h3', [ 'class' => 'h6' ] );
            
            $rows = $field[ 'applications' ];
            $list = '';
            foreach( $rows as $row => $post_id ) {
                $list .= sprintf( '<li><a href="%s">%s</a></li>', get_permalink( $post_id ), get_the_title( $post_id ) );
            }
            
            if( ! empty( $list ) ) {
                $list = sprintf( '<ul>%s</ul>', $list );
            }
            
            return sprintf( '%s%s', $heading, $list );
        }
        
        
        private function get_technology() {
             $field = $this->get_fields( 'technology' );
            if( empty( $field[ 'heading' ] ) || empty( $field[ 'list' ] )  ) {
                return false;
            }
            
            $heading = _s_format_string( $field[ 'heading' ], 'h3', [ 'class' => 'h6' ] );
            
            $rows = $field[ 'list' ];
            $list = '';
            foreach( $rows as $row ) {
                $item = $row['item'];
                if( ! empty( $item ) ) {
                    $list .= sprintf( '<li><span>%s</span></li>', $item );
                }
            }
            
            if( ! empty( $list ) ) {
                $list = sprintf( '<ul>%s</ul>', $list );
            }
            
            return sprintf( '%s%s', $heading, $list );
        }
        
        
        private function get_description() {
            if( ! empty( $this->get_fields( 'description' ) ) ) {
                return sprintf( '<div class="description">%s</div>', $this->get_fields( 'description' ) );
            }
            return false;
        }
        
        
        private function get_downloads() {
            $rows = $this->get_fields( 'downloads' );
            
            $buttons = '';
            
            if( ! empty( $rows ) ) {
                foreach( $rows as $row ) {                    
                    if( ! empty( $row  ) ) {
                        $icon = strtolower( $row['icon'] );
                        $icon = sprintf( '<i><img src="%s" /></i>', _s_asset_path( sprintf( 'images/product/icons/%s.svg', $icon ) ) );
                        
                        $label = $row['label'];
                        $file = $row['file'];
                        
                        $buttons .= sprintf( '<a href="%s" class="button"><span>%s%s</span></a>', $file, $icon, $label );
                    }
                }
                
                $buttons = sprintf( '<div class="downloads">%s</div>', $buttons );
            }
            
            return $buttons;
        }
        
    }
}
   
new Product_Details; 