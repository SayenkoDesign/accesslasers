<?php
// About -Leadership

if( ! class_exists( 'Abount_Leadership_Section' ) ) {
    class Abount_Leadership_Section extends Element_Section {
        
        var $post_type = 'people';
        
        public function __construct() {
            parent::__construct();
            
            $fields = get_field( 'leadership' );
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
                     $this->get_name() . '-leadership'
                ]
            );   

            $this->add_render_attribute(
                'wrapper', 'id', [
                     $this->get_name() . '-leadership'
                ], true
            );            
            
        }          
        
        // Add content
        public function render() {
            
            $fields = $this->get_fields();
            
            // Header
            $title = _s_format_string( $this->get_fields( 'title' ), 'h2', [ 'class' => 'section-title' ] );
            if( ! empty( $title ) ) {
                $title = sprintf( '<div class="column row">%s</div>', $title );
            }
            
            $people = $this->people();
            if( ! empty( $people ) ) {
                return $title . $people;
            } 
                        
        }
        
        
        private function people() {
                        
            $post_ids = $this->get_fields( 'people' );
                                
            $args = array(
                'post_type' => $this->post_type,
                'order' => 'ASC',
                'orderby' => 'menu_order',
                'posts_per_page' => 500
            );
            
            if( ! empty( $post_ids ) ) {
                $args['orderby'] = 'post__in';
                $args['post__in'] = $post_ids;
                $args['posts_per_page'] = count( $post_ids );
            }
            
            $loop = new WP_Query( $args );
            
            $posts = [];
            
            if ( $loop->have_posts() ) :                 
                          
                while ( $loop->have_posts() ) :
    
                    $loop->the_post(); 
                    
                    $posts[] = $this->get_person();
    
                endwhile;
                
                wp_reset_postdata();
                
            endif; 
                        
            if( empty( $posts ) ) {
                return false;
            }
                        
            // Get the CTA
            $cta = $this->get_cta();
            
            $classes = '';
            
            $cards = wp_list_pluck( $posts, 'card' );
            
            $modals = sprintf( '<div class="hide">%s</div>', join( '', wp_list_pluck( $posts, 'modal' ) ) );
                                                            
            if( ! empty( $cta ) ) {
                $classes = ' has-cta';
               // array_splice( $cards, 7, 0, $cta );
               array_push( $cards, $cta );
            }
            
            $cards = join( '', $cards );
            
            $close = '<button class="close-button" data-close aria-label="Close modal" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33">
  <path fill="currentColor" fill-rule="evenodd" stroke="currentColor" d="M32.028 29.848l-13.346-13.35L32.028 3.153c.63-.63.63-1.553 0-2.182-.63-.628-1.55-.628-2.18-.002L16.498 14.32l-.354-.354L3.154.97C2.523.343 1.6.343.97.968.343 1.6.343 2.523.969 3.152L14.32 16.498l-.354.353L.971 29.847c-.628.632-.628 1.55-.002 2.18.631.63 1.554.63 2.184 0l13.345-13.345.353.354 12.997 12.991c.631.63 1.549.63 2.18 0 .63-.63.63-1.548 0-2.179z"/>
</svg><span class="screen-reader-text">close</span></button>';

            $reveal = sprintf( '<div class="reveal reveal-leadership" id="leadership" data-reveal data-v-offset="75">%s<div class="container"></div></div>', $close );
                                   
            return sprintf( '<div class="row small-up-2 medium-large-up-3 large-up-4 align-center grid%s" data-equalizer>%s</div>%s%s', 
                             $classes,
                             $cards,
                             $modals,
                             $reveal
                          );
        }
        
        
        private function get_person() {
                     
            $thumbnail = sprintf( ' style="background-image: url(%s)"', get_the_post_thumbnail_url( get_the_ID(), 'medium' ) );
            $thumbnail = sprintf( '<div class="thumbnail"%s></div>', $thumbnail );
            
            $position  = get_field( 'position' );
            $position = _s_format_string( $position, 'p', [ 'class' => 'position' ] );
            
            $linkedin = get_field( 'linkedin' );
            if( ! empty( $linkedin ) ) {
                $linkedin = sprintf( '<a href="%s" class="linkedin">%s</a>', $linkedin, get_svg( 'linkedin' ) );
            }
            
            $more = sprintf( '<span class="more" aria-hidden="true">%s</span>', __( 'more', '_s' ) );
            
            $title = sprintf( '<header>%s%s%s</header>', 
                                the_title( '<h4>', '</h4>', false ), 
                                $position, 
                                $more );   
                                                 
            $secondary_photo = get_field( 'secondary_photo' );
            $photo = '';
            if( ! empty( $secondary_photo ) ) {
                $photo = _s_get_acf_image( $secondary_photo, 'medium' );
            } else {
                $photo = get_the_post_thumbnail_url( get_the_ID(), 'medium' );
            }
            
            $args['card'] = sprintf( '<article id="post-%s" class="%s"><button data-open="leadership" data-person="person-%s"><div class="panel">%s<div class="details" data-equalizer-watch>%s</div></div></button></article>',
                                     get_the_ID(), 
                                     join( ' ', get_post_class( 'column' ) ),
                                     get_the_ID(), 
                                     $thumbnail,
                                     $title
                                   );
            
            $title = sprintf( '<header>%s%s</header>', 
                                the_title( '<h3>', '</h3>', false ), 
                                $position
                            );   
            
            $args['modal'] = sprintf( '<div class="panel" id="person-%s">%s%s<div class="details">%s%s%s</div></div>', 
                                      get_the_ID(), 
                                      $title,
                                      $photo, 
                                      $linkedin,
                                      apply_filters( 'the_content', get_field( 'bio' ) ),
                                      $this->get_articles()
                                   );
            
            return $args;
            
        }
        
        
        private function get_cta() {
            
            $cta = $this->get_fields( 'call_to_action' );
            if( empty( $cta ) ) {
                return false;
            }
            
            $cta = array_filter( $cta );
            if( count( $cta ) < 3 ) {
                return false;
            }
            
            $icon = sprintf( '<img src="%sfooter/dc-trademark.svg" />', trailingslashit( THEME_IMG ) );
            
            return sprintf( '<article class="column cta"><div class="call-to-action"><div class="cta-box">%s<h3>%s</h3><a href="%s" class="button">%s</a></div></div></article>', 
                            $icon,
                            $cta['title'], 
                            $cta['button_url'], 
                            $cta['button_text'] 
                          );   
        
        }
    
        
        private function get_articles() {
            $rows = get_field( 'articles' );
            $list = [];
            $content = '';
            if( ! empty( $rows ) ) {
                foreach( $rows as $row ) {
                    $list[] = sprintf( '<a href="%s">%s</a>', get_permalink( $row ), get_the_title( $row ) );
                }
                
                $content = sprintf( '<h4>%s</h4>%s', __( 'Published Articles', '_s' ), ul( $list, ['class' => 'links' ] ) );
            }
            
            return $content;
        }
        
        
        
    }
}
   
new Abount_Leadership_Section;