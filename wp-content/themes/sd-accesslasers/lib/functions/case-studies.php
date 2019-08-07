<?php
    
    
    function _s_get_relationship_field_list( $field = '', $heading, $links = false ) {
                        
    if( empty( $field ) ) {
        return false;
    }
    
    $rows = get_field( $field );
    
    if( empty( $rows ) ) {
        return false;
    }
    
    $list = '';
    
    foreach( $rows as $row ) {
        $title = get_the_title( $row->ID );  
        $permalink = get_permalink( $row->ID ); 
        
        if( $links ) {
            $list .= sprintf( '<li><a href="%s">%s</a></li>', $permalink, $title ); 
        } else {
            $list .= sprintf( '<li><span>%s</span></li>', $title ); 
        }
        
    }
    
    if( empty( $list ) ) {
        return false;
    }
                
    return sprintf( '<div class="panel"><h5>%s</h5><ul class="no-bullet">%s</ul></div>', $heading, $list );
}