<?php
// Career - Benefits

if( ! class_exists( 'Career_Benefits' ) ) {
    class Career_Benefits extends Element_Section {
                
        public function __construct() {
            parent::__construct();
            
            $fields = get_field( 'benefits' );
            $this->set_fields( $fields );
                        
            $settings = get_field( 'settings' );
            $this->set_settings( $settings );
                        
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
                     $this->get_name() . '-benefits'
                ]
            );   

            $this->add_render_attribute(
                'wrapper', 'id', [
                     $this->get_name() . '-benefits'
                ], true
            );            
            
        }          
        
        // Add content
        public function render() {
                        
            $heading = $this->get_fields( 'heading' ) ? $this->get_fields( 'heading' ) : '';
            $heading = _s_format_string( $heading, 'h2' );
            
            $grid = $this->get_grid();
                        
            return sprintf( '<div class="grid-container">
                                <div class="grid-x grid-margin-x">
                                <div class="cell">%s</div>
                                </div>%s
                            </div>',
                            $heading,
                            $grid
                         );  
        }
        
        
        private function get_grid() {
            
            $rows = $this->get_fields( 'grid' );
            
            if( empty( $rows ) ) {
                return false;
            }
                               
            $items = '';
               
            foreach( $rows as $key => $row ) {  
                $items .= $this->get_item( $key, $row );
            }
            
            return sprintf( '<div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3 align-center grid">%s</div>', 
                                    $items );
        }
        
        
        private function get_item( $key, $row ) {
                        
            if( empty( $row ) ) {
                return false;   
            }
                                             
            $image = $row['grid_image'];
            $image = sprintf( '<div class="icon">%s</div>', _s_get_acf_image( $image, 'thumbnail' ) );                                   
            $heading = _s_format_string( $row['grid_title'], 'h4' ); 
            //$description = _s_format_string( $row['grid_description'], 'p' );
            
            if( ! $heading && ! $image ) {
                return false;
            }
            
            $count = $key + 1;
                      
            return sprintf( '<div class="cell">
                                <div class="grid-item">
                                    <span>%s</span>
                                    <div class="grid-image">%s</div>
                                    <header>%s</header>
                                </div>
                            </div>', 
                            str_pad( $count, 2, "0", STR_PAD_LEFT ),
                            $image,
                            $heading
                         );
        }
        
    }
}
   
new Career_Benefits;