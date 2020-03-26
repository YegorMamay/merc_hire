<footer class="footer js-footer">
    <div class="footer__wrapper">
        <?php $footer_titles = get_field('footer_titles'); ?>
        <div class="container">
            <?php if (is_active_sidebar('footer-widget-area')) : ?>
                <div class="pre-footer">
                    <div class="container">
                        <div class="row">
                            <?php dynamic_sidebar('footer-widget-area'); ?>
                        </div>
                    </div>
                </div><!-- .pre-footer end-->
            <?php endif; ?>
            <div class="row">
                <div class="col-12 col-lg-3">
                    <div class="footer-logo">
                        <?php get_default_logo_link([
                            'name' => 'logo.svg',
                            'options' => [
                                'class' => 'logo-img',
                                'width' => 96,
                                'height' => 96,
                            ],
                        ])
                        ?>
                        <div class="footer-logo__caption">
                            <p class="footer-logo__title"><?php echo bloginfo('name'); ?></p>
                            <p class="footer-logo__description"><?php echo bloginfo('description'); ?></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <?php if (has_nav_menu('footer-nav')) { ?>
                        <nav class="footer__list">
                            <p class="footer__column-title"><?php echo $footer_titles['footer_title_about']; ?></p>
                            <?php wp_nav_menu(array(
                                'theme_location' => 'footer-nav',
                                'container' => false,
                                'menu_class' => 'footer__nav',
                                'menu_id' => '',
                                'fallback_cb' => 'wp_page_menu',
                                'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                                'depth' => 3
                            )); ?>
                        </nav>
                    <?php } ?>
                </div>
                <div class="col-12 col-lg-3">
                    <?php if (has_nav_menu('footer-categories')) { ?>
                        <nav class="footer__list">
                            <p class="footer__column-title"><?php echo $footer_titles['footer_title_categories']; ?></p>
                            <?php wp_nav_menu(array(
                                'theme_location' => 'footer-categories',
                                'container' => false,
                                'menu_class' => 'footer__nav',
                                'menu_id' => '',
                                'fallback_cb' => 'wp_page_menu',
                                'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                                'depth' => 3
                            )); ?>
                        </nav>
                    <?php } ?>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="footer__container">
                        <p class="footer__column-title"><?php echo $footer_titles['footer_title_contacts']; ?></p>
                        <?php echo do_shortcode('[bw-phone]'); ?>
                        <div class="footer__messengers">
                            <?php echo do_shortcode('[bw-messengers]'); ?>
                        </div>
                        <button type="button" class="btn btn-secondary <?php the_lang_class('js-call-back'); ?>">
                            <?php pll_e('call-back', 'brainworks'); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom-section">
        <div class="container">
            <div class="footer__row">
                <div class="footer__col">
                    <div class="date">&copy; <?php echo date('Y'); ?>. <?php pll_e('all-rights-reserved'); ?></div>
                </div>
                <div class="footer__col">
                    <div class="footer__link-section">
                        <?php $footer_links = get_field('footer_list'); ?>
                        <?php foreach ($footer_links as $content) { ?>
                            <a class="footer__links" href="<?php echo $content['footer_link']; ?>">
                                <?php echo $content['footer_text_link']; ?>
                            </a>
                        <?php } ?>
                    </div>
                </div>
                <div class="footer__col">
                    <?php $footer_payment = $footer_titles['footer_payment']; ?>
                    <div class="footer__item-wrapper">
                        <?php foreach ($footer_payment as $option) { ?>
                            <a class="footer__payment-link" href="<?php echo $option['footer_link']; ?>">
                                <img class="footer__payment-logo" src="<?php echo $option['footer_link_image']; ?>" alt="payment" />
                            </a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

</div><!-- .wrapper end Do not delete! -->

<?php scroll_top(); ?>

<div class="is-hide"><?php svg_sprite(); ?></div>

<?php wp_footer(); ?>

</body>
</html>
