<?php
	
	global $shopkeeper_theme_options;


	$page_id = "";
	$the_excerpt = "";
	if ( is_single() || is_page() ) {
		$page_id = get_the_ID();
	} else if ( is_home() ) {
		$page_id = get_option('page_for_posts');	
		$page = get_post($page_id); 
		$the_excerpt = $page->post_excerpt;		
	}

    $blog_with_sidebar = "";
    if ( (isset($shopkeeper_theme_options['sidebar_blog_listing'])) && ($shopkeeper_theme_options['sidebar_blog_listing'] == "1" ) ) $blog_with_sidebar = "yes";
    if (isset($_GET["blog_with_sidebar"])) $blog_with_sidebar = $_GET["blog_with_sidebar"];

	
	if (get_post_meta( $page_id, 'page_title_meta_box_check', true )) {
		$page_title_option = get_post_meta( $page_id, 'page_title_meta_box_check', true );
	} else {
		$page_title_option = "on";
	}	

	$page_header_src = "";

	if (!is_front_page()):
    	if ( $page_header_src = wp_get_attachment_url( get_post_thumbnail_id( $page_id ) ) );
    endif;

?>

<div id="primary" class="content-area">                    
                
    <div id="content" class="site-content blog" role="main">             

		<?php if (!empty($page_header_src) && !is_category() && !is_author() && !is_date() && !is_tag() ): ?>
		    <header class="entry-header-page with-featured-img" style="background:url(<?php echo $page_header_src; ?>) center center no-repeat; background-size: cover;">
		<?php else: ?>
			<header class="entry-header-page">
		<?php endif; ?>

			<div class="row">
				<div class="xlarge-8 large-10 xlarge-centered large-centered columns without-sidebar index-layout-1">
					<ul class="list_categories list-centered">
					<?php 
						if ( is_category() ) : ?>
							<div class="page-type page-title-desc"><?php _e( 'Categoría', 'shopkeeper' ); ?></div>
							<h1 class="page-title blog-listing"><?php echo single_cat_title("", false) ?></h1>  
							<?php $args = array(
									'show_option_all'    => '',
									'orderby'            => 'name',
									'order'              => 'ASC',
									'style'              => 'list',
									'show_count'         => 0,
									'hide_empty'         => 1,
									'use_desc_for_title' => 1,
									'child_of'           => get_cat_id( single_cat_title("", false) ),
									'feed'               => '',
									'feed_type'          => '',
									'feed_image'         => '',
									'exclude'            => '',
									'exclude_tree'       => '',
									'include'            => '',
									'hierarchical'       => 1,
									'title_li'           => '',
									'show_option_none'   => '',
									'number'             => null,
									'echo'               => 1,
									'depth'              => 1,
									'current_category'   => 0,
									'pad_counts'         => 0,
									'taxonomy'           => 'category',
									'walker'             => null
							); 
						else: ?>
						<?php if( is_tag() ) : ?>
							<h1 class="page-title blog-listing"><?php echo single_tag_title("", false ); ?> </h1>
						<?php elseif( is_author() ) : ?>
							<h1 class="page-title blog-listing"><?php echo get_the_author(); ?> </h1>
						<?php elseif( is_date() ) : ?>
							<h1 class="page-title blog-listing"><?php echo get_the_archive_title(); ?> </h1>
						<?php elseif ( (isset($page_title_option)) && ($page_title_option == "on") ) : ?>
							<h1 class="page-title blog-listing"> <?php single_post_title();?> </h1>
						<?php endif; ?>
						<?php $args = array(
								'show_option_all'    => '',
								'orderby'            => 'name',
								'order'              => 'ASC',
								'style'              => 'list',
								'show_count'         => 0,
								'hide_empty'         => 1,
								'use_desc_for_title' => 1,
								'child_of'           => 0,
								'feed'               => '',
								'feed_type'          => '',
								'feed_image'         => '',
								'exclude'            => '',
								'exclude_tree'       => '',
								'include'            => '',
								'hierarchical'       => 1,
								'title_li'           => '',
								'show_option_none'   => 'No categories',
								'number'             => null,
								'echo'               => 1,
								'depth'              => 1,
								'current_category'   => 0,
								'pad_counts'         => 0,
								'taxonomy'           => 'category',
								'walker'             => null
						); 
						 endif; ?>

						<?php $current_cat = is_home()? 'current-cat' : ''; ?>
						
	            		<li class="cat-item <?php echo $current_cat; ?>">
							<a href="<?php if ( get_option( 'show_on_front' ) == 'page' ) echo get_permalink( get_option('page_for_posts' ) );
								else echo esc_url( home_url() );?>"><?php echo __( 'Home', 'shopkeeper'); ?>
							</a>
						</li>

					   <?php wp_list_categories( $args ); ?> 

					</ul>

					<?php if ( ! empty( category_description($current_cat) ) ) : ?>
						<div class="page-desc">
							<?php echo category_description($current_cat); ?> 
						</div>
					<?php endif; ?>

					<?php if( !empty($the_excerpt) ) : ?>
						<div class="page-desc"><?php echo $the_excerpt; ?></div>
					<?php endif; ?>

				</div><!-- .large-10-->
			</div><!-- .row-->
		</header>
				
		<div class="row">
			
			<?php if ( (isset($shopkeeper_theme_options['sidebar_blog_listing'])) && ($shopkeeper_theme_options['sidebar_blog_listing'] == "1" ) ) : ?>
			<div class="large-12 columns with-sidebar">
			<?php else : ?>
			<div class="xxlarge-10 xlarge-11 large-12 large-centered columns index-layout-1">
			<?php endif; ?>

				<div class="blog-post-container">
						
					<ul id="masonry_grid" class="blog-posts masonry_columns_3" data-columns>
						
							<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>


								<li class="blog-posts2 <?php echo get_post_format(); ?>">
									<div class="blog-post-inner">
									
										<h2 class="entry-title-archive">
											<a href="<?php echo has_post_format('link') ? esc_url( shopkeeper_get_link_url() ) : the_permalink() ; ?>" class="thumbnail_archive">
												<span class="thumbnail_archive_container">
													<?php the_post_thumbnail('shop_single'); ?>
												</span>
												<span class="titulo-blog-post"><?php the_title(); ?></span>
											</a>
										</h2>
												 
										<div class="post_meta_archive"><?php shopkeeper_entry_archives(); ?></div>
												
										<div class="entry-content-archive">
											
											<?php if (get_option('rss_use_excerpt') == 0) : ?>
												<p style="font-size: 14px;"><?php excerpt('22'); ?></p>
												<a class="boton-activar" href="<?php echo get_permalink(); ?>"><?php _e('Ver más', 'shopkeeper'); ?></a> 
											<?php elseif (get_option('rss_use_excerpt') == 1) : ?>
												<p style="font-size: 14px;"><?php excerpt('22'); ?></p>
												<br/>
												<a href="<?php the_permalink(); ?>" class="boton-activar" >
													<?php _e('Ver más', 'shopkeeper'); ?>
												</a>
											<?php else : ?>
												<p style="font-size: 14px;"><?php excerpt('22'); ?></p>
												<a class="boton-activar" href="<?php echo get_permalink(); ?>"><?php _e('Ver más', 'shopkeeper'); ?></a> 
											<?php endif ?>
											
										</div>
											   
									</div><!--blog-post-inner-->
								</li><!-- .blog-post-->
				
							<?php endwhile; ?>
					</ul>

				</div>
				
				<?php if ( (isset($shopkeeper_theme_options['sidebar_blog_listing'])) && ($shopkeeper_theme_options['sidebar_blog_listing'] == "1" ) ) : ?>
				<div class="blog-sidebar">
					<?php get_sidebar(); ?>
				</div><!-- .columns-->
				<?php endif; ?>

			</div><!-- .columns-->

			<?php getbowtied_the_posts_navigation(); ?>


		</div><!-- .row-->		

        <?php get_template_part( 'no-results', 'index' ); ?>
       
    </div><!-- #content -->    
                 
</div><!-- #primary -->