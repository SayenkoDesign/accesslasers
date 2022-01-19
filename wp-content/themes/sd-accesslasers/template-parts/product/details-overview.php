<?php

/*
Product - Details
*/


if (!class_exists('Product_Details')) {
	class Product_Details extends Element_Section
	{

		public function __construct()
		{
			parent::__construct();

			$fields['description'] = get_field('description');
			$fields['download_group'] = get_field('download_group');

			$fields['series'] = get_field('series');
			$fields['technology'] = get_field('technology');
			
			
			$this->set_fields($fields);

			$settings = [];
			$this->set_settings($settings);

			// Render the section
			$this->render();

			// print the section
			$this->print_element();
		}

		// Add default attributes to section        
		protected function _add_render_attributes()
		{

			// use parent attributes
			parent::_add_render_attributes();

			$this->add_render_attribute(
				'wrapper',
				'class',
				[
					$this->get_name() . '-product-details'
				]
			);
		}





		// Add content
		public function render()
		{

			$out = '';

			$heading = sprintf('<header>%s</header>', _s_format_string(get_the_title(), 'h1', ['class' => 'h2']));

			$buttons = $this->get_buttons();
			$description = $this->get_description();
			$downloads = $this->get_downloads();

			$out .= sprintf('<div class="grid-x grid-margin-x"><div class="cell large-5 large-offset-7">%s</div></div>', $heading);

			$out .= sprintf(
				'<div class="grid-x grid-margin-x grid-margin-bottom">
								<div class="cell large-5 large-order-2 large-offset-1">%2$s<div class="show-for-large">%3$s</div></div>
								<div class="cell large-6">%1$s<div class="hide-for-large">%3$s</div></div>
							  </div>',
				$description,
				$buttons,
				$downloads
			);


			$series = $this->get_series();
			$technology = $this->get_technology();

			$out .= sprintf(
				'<div class="grid-x grid-margin-x grid-margin-bottom">
							<div class="cell large-auto">%s</div>
							<div class="cell large-shrink large-offset-1 application-technology">%s</div>
						  </div>',
				$series,
				$technology
			);



			return sprintf('<div class="grid-container">%s</div>', $out);
		}


		private function get_buttons()
		{

			$request = sprintf('<a data-open="contact" class="button">%s</a>', __('request product'));
			$phone = get_field('phone', 'option');
			if (!empty($phone)) {
				$phone = sprintf('<a href="%s" class="button phone"><span>%s</span></a>', _s_format_telephone_url($phone), $phone);
			}

			return sprintf('<div class="stacked-for-medium expanded button-group">%s%s</div>', $request, $phone);
		}


		private function get_description()
		{
			if (!empty($this->get_fields('description'))) {
				return sprintf('<div class="description">%s</div>', $this->get_fields('description'));
			}
			return false;
		}


		private function get_downloads()
		{

			$groups = $this->get_fields('download_group');

			if (empty($groups)) {
				return false;
			}

			$out = '';

			foreach ($groups as $group) {
				$heading = $group['heading'];
				$rows = $group['downloads'];

				if (!empty($heading)) {
					$out .= sprintf('<h6>%s</h6>', $heading);
				}

				$buttons = '';

				if (!empty($rows)) {
					foreach ($rows as $row) {
						if (!empty($row)) {
							$icon = strtolower($row['icon']);
							$icon = sprintf('<i><img src="%s" /></i>', _s_asset_path(sprintf('images/product/icons/%s.svg', $icon)));

							$label = $row['label'];
							$file = $row['file'];

							$buttons .= sprintf('<a href="%s" class="button"><span>%s%s</span></a>', $file, $icon, $label);
						}
					}

					$buttons = sprintf('<div class="downloads">%s</div>', $buttons);
				}

				$out .= $buttons;
			}

			if (empty($out)) {
				return false;
			}

			return sprintf('<div class="download-group"><h3>Downloads of Popular Configurations</h3>%s</div>', $out);
		}


		private function get_series()
		{
			$rows = $this->get_fields( 'series' );
            
            if( empty( $rows ) ) {
                return false;
            }
                               
            $items = '';
               
            foreach( $rows as $row ) {  
                $items .= $this->get_item( $row );
            }
            
            return $items;
		}
        
        
        private function get_item( $row ) {
                        
            if( empty( $row ) ) {
                return false;   
            }
                                             
            $image = $row['photo'];
            $image = _s_get_acf_image( $image, 'medium' );                                   
            $heading = _s_format_string( $row['title'], 'h3' ); 
			$description = $row['description'];
			$products = $this->get_products( $row['products'] );
			$specifications = $this->get_specifications( $row['specifications'] );
            
            if( ! $heading && ! $image ) {
                return false;
            }

                                  
            return sprintf( '<div class="grid-x grid-margin-x grid-margin-bottom">
								<div class="cell medium-7 large-5">
									%s
								</div>
								<div class="cell medium-5 large-7">
									<div class="grid-x grid-margin-x">	
										<div class="cell large-7">%s%s%s</div>
										<div class="cell large-5">%s</div>
									</div>
								</div>
							</div>', 
                            $image,
                            $heading, 
							$description, 
							$products,
							$specifications
                         );
        }


		private function get_technology()
		{
			$field = $this->get_fields('technology');
			if (empty($field['heading']) || empty($field['posts'])) {
				return false;
			}

			$heading = _s_format_string($field['heading'], 'h3');

			$posts = $field['posts'];
			return _s_get_relationship_field_list($posts, $heading, true, 'technology');
		}


		private function get_products( $links )
		{
			if( empty( $links ) ) {
				return false;
			}

			$products = [];

			foreach( $links as $link ) {
					$link = $link['product'];
					$link_url = $link['url'];
					$link_title = $link['title'];
					$link_target = $link['target'] ? $link['target'] : '_self';
					$products[] = sprintf( '<a href="%s" target="%s">%s</a>',
											esc_url( $link_url ),
											esc_attr( $link_target ),
											esc_html( $link_title )
									);
			
			}

			return sprintf( '<div class="product-links">%s</div>', ul( $products ) );
		}


		private function get_specifications( $rows ) {

			if( empty( $rows ) ) {
				return false;
			}

			return sprintf( '<div class="specifications"><h3>Specifications</h3><ul>%s</ul></div>', nl2li( $rows ) );
		}
	}
}

new Product_Details;
