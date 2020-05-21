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
            <section class="categories-section__wrapper" id="gallery">
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
    <section class="block-advantages">
        <div class="container">
            <h2 class="main-title text-center h2"><?php echo get_post_meta(get_the_ID(), 'advantages_title', true); ?></h2>
            <div class="block-advantages__wrapper">
                <?php
                $advantages_list = get_field('advantages_list');
                foreach ($advantages_list as $content) { ?>
                    <div class="block-advantages__item-wrapper">
                        <div class="block-advantages__item">
                            <img class="block-advantages__icon" src="<?php echo $content['advantages_icon']; ?>"
                                 alt="icon"/>
                            <p class="block-advantages__description">
                                <?php echo $content['advantages_description']; ?>
                            </p>
                            <div class="block-advantages__text-block">
                                <?php echo $content['advantages_text']; ?>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
    <section class="order-info">
        <div class="container">
            <h2 class="main-title h2 text-center"><?php echo get_post_meta(get_the_ID(), 'order_info_title', true); ?></h2>
            <div class="order-info__wrapper">
                <div class="order-info__list">
                    <img class="order-info__logo" src="/wp-content/themes/mercedes_hire/assets/img/mercedes-logo.png"
                         alt="logo"/>
                    <div class="order-info__item-wrapper">
                        <?php
                        $order_info_list = get_field('order_info_list');
                        foreach ($order_info_list as $item) { ?>
                            <div class="order-info__item">
                                <img class="order-info__icon" src="<?php echo $item['order_info_icon']; ?>" alt="icon">
                                <div class="order-info__caption">
                                    <p class="order-info__item-title"><?php echo $item['order_info_text']; ?></p>
                                    <div class="order-info__description"><?php echo $item['order_info_description']; ?></div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php layerslider(4); ?>
    <section class="bottom-section">
        <div class="container">
            <h2 class="main-title text-center h2"><?php echo get_post_meta(get_the_ID(), 'client_title', true); ?></h2>
            <div class="bottom-section__wrapper js-client-slider">
                <?php
                $client_list = get_field('client_list');
                foreach ($client_list as $content) { ?>
                    <div class="bottom-section__item-wrapper">
                        <div class="bottom-section__item">
                            <img class="bottom-section__logo" src="<?php echo $content['client_logo']; ?>" alt="logo"/>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
    <section class="seo-text">
        <div class="container">
            <div class="seo-text__wrapper">
                <?php echo get_post_meta(get_the_ID(), 'seo_text_field', true); ?>
            </div>
        </div>
    </section>
<?php get_footer(); ?>