<?php
/**
 * Template Name: Reviews
 **/
?>

<?php get_header(); ?>
<div class="block-reviews">
    <div class="block-reviews__top-section">
        <?php the_post_thumbnail('full'); ?>
        <div class="block-reviews__container container">
            <div class="cars-section__caption">
                <div class="block-reviews__description"><?php echo get_field('reviews_description'); ?></div>
                <h1 class="block-reviews__title h2"><?php the_title() ?></h1>
            </div>
        </div>
    </div>
</div>
<div class="reviews-content">
    <div class="container">
        <div class="reviews-content__top-section">
            <h2 class="main-title text-center h2"><?php echo get_field('reviews_list_title') ?></h2>
            <div class="reviews-content__description"><?php echo get_field('reviews_list_description') ?></div>
            <?php if (have_posts()): while (have_posts()): the_post(); ?>
                <?php $reviews_list = get_field('reviews_list'); ?>
                <div class="reviews-content__wrapper">
                    <?php echo do_shortcode($reviews_list); ?>
                </div>
                <?php wp_link_pages(); ?>
            <?php endwhile;
            else: ?>
                <?php get_template_part('loops/content', 'none'); ?>
            <?php endif; ?>
        </div>
        <div class="reviews-content__bottom-section">
            <h2 class="main-title text-center h2"><?php echo get_field('reviews_other_title') ?></h2>
            <div class="reviews-content__description"><?php echo get_field('reviews_other_description') ?></div>
        </div>
        <div class="car-categories">
            <?php $catalog_cars = get_field('reviews_car_categories'); ?>
            <?php echo do_shortcode($catalog_cars); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>
<!-- Magnific Popup core CSS file -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
<script>
    (function ($) {
        $(document).ready(function () {

            $('.review-image').magnificPopup({
                type: 'image',
                removalDelay: 700,
                closeOnContentClick: false,
                mainClass: 'mfp-fade',
                image: {
                    verticalFit: true,
                    markup: '<div class="mfp-figure" xmlns="http://www.w3.org/1999/html">'+
                                '<div class="mfp-close"></div>'+
                                '<div class="mfp-img"></div>'+
                            '</div>',

                    cursor: 'mfp-zoom-out-cur',

                    tError: '<a href="%url%">The image</a> could not be loaded.'
                },

                zoom: {
                    enabled: true,
                    duration: 400
                },

                preload: true,

                callbacks: {
                    open: function() {
                        var fixedOverlay = {
                            'overflow':'unset',
                            'margin': '0'
                        }

                        $('html, body').css(fixedOverlay);
                    }
                }
            });
        });

        window.onload = function () {

            $(document).on('click', '.mfp-img', function () {
                $(this).toggleClass('active');
            });
        }
    })(jQuery);
</script>
