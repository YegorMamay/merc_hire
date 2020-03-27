<?php
/**
 * Template Name: Home Page
 **/
?>

<?php get_header(); ?>
<?php get_template_part('loops/content', 'home'); ?>
    <section class="categories-section">
        <div class="container">
            <h2 class="main-title h2 text-center"><?php echo get_post_meta(get_the_ID(), 'categories_title', true); ?></h2>
            <div class="categories-section__description"><?php echo get_post_meta(get_the_ID(), 'categories_description', true); ?></div>
            <?php $category_list_field = get_post_meta($post->ID, 'categories_list', true); ?>
            <section class="categories-section__wrapper">
                <?php if (has_nav_menu('footer-categories')) { ?>
                    <div class="categories-section__caption">
                        <?php wp_nav_menu(array(
                            'theme_location' => 'footer-categories',
                            'container' => false,
                            'menu_class' => 'categories-section__list js-top-slider',
                            'menu_id' => '',
                            'fallback_cb' => 'wp_page_menu',
                            'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'depth' => 1
                        )); ?>
                    </div>
                <?php } ?>
                <?php echo do_shortcode($category_list_field); ?>
            </section>
        </div>
    </section>
<?php get_footer(); ?>