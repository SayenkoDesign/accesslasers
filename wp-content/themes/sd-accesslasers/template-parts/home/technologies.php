<?php
// Home - What

if( ! class_exists( 'Home_Technologies_Section' ) ) {
    class Home_Technologies_Section extends Element_Section {
                
        public function __construct() {
            parent::__construct();
            
            $fields = get_field( 'technologies' );
            $this->set_fields( $fields );
                        
            $settings = get_field( 'settings' );
            $this->set_settings( $settings );
                        
            // Render the section
            if( empty( $this->render() ) ) {
                //return;   
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
                     $this->get_name() . '-technologies'
                ]
            );   

            $this->add_render_attribute(
                'wrapper', 'id', [
                     $this->get_name() . '-technologies'
                ], true
            );            
            
        }          
        
        // Add content
        public function render() {
                        
            $heading = $this->get_fields( 'heading' ) ? $this->get_fields( 'heading' ) : '';
            $heading = _s_format_string( $heading, 'h2' );
            
            $technologies = $this->get_grid();
                        
            return sprintf( '<div class="grid-container">
                                <div class="grid-x grid-margin-x">
                                <div class="cell">%s</div>
                                </div>%s
                            </div>',
                            $heading,
                            $technologies
                         );  
        }
        
        
        private function get_grid() {
            
            $rows = $this->get_fields( 'grid' );
            
            if( empty( $rows ) ) {
                return false;
            }
            
            // Let's cache images
                   
            $items = '';
               
            foreach( $rows as $row ) {  
                $items .= $this->get_item( $row );
            }
            
            return sprintf( '<div class="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3 align-center grid">%s</div>', 
                                    $items );
        }
        
        
        private function get_item( $row ) {
                        
            if( empty( $row ) ) {
                return false;   
            }
                                                                    
            $heading = _s_format_string( $row['grid_title'], 'h4' ); 
            $description = _s_format_string( $row['grid_description'], 'p' );
            $image = $row['grid_image'];
            $image = sprintf( '<div class="icon">%s</div>', _s_get_acf_image( $image, 'thumbnail' ) );
            $list = $row['grid_list'];
            if( ! empty( $list ) ) {
                
                $list_items = '';
                
                foreach( $list as $item ) {
                    $list_items .= sprintf( '<li>%s</li>', $item['item'] );
                }
                
                if( ! empty( $list_items ) ) {
                    $list = sprintf( '<div class="options"><h6>%s</h6><ul>%s</ul></div>', __( 'Technologies Covered:' ), $list_items  );
                } else {
                    $list = false;
                }             
            }
            
            if( $heading && ! $description && ! $image && ! $list ) {
                return false;
            }
                      
            return sprintf( '<div class="cell">
                                <div class="grid-item">
                                    <header>%s</header>
                                    <div class="description">%s</div>
                                    <div class="grid-image">%s</div>
                                    <footer>%s</footer>
                                </div>
                            </div>', 
                            $heading,
                            $description,
                            $image, 
                            $list
                         );
        }
        
    }
}
   
new Home_Technologies_Section;
