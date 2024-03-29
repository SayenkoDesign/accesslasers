<?php
get_header(); ?>
  
<div id="primary" class="content-area">

    <main id="main" class="site-main" role="main">
        <?php
        while ( have_posts() ) :

            the_post();

            _s_get_template_part( 'template-parts/product', 'details' );
            echo '<div class="group">';
            _s_get_template_part( 'template-parts/product', 'slideshow' );
            _s_get_template_part( 'template-parts/product', 'options' );
            _s_get_template_part( 'template-parts/global', 'faq' );
            echo '</div>';
                
        endwhile;       
       ?>

    </main>

</div>

<?php

get_footer();
