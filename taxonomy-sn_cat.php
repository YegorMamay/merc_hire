<?php get_header();  ?>
<div class="cars-section">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php
        $post_id = get_the_ID();
        $cars_params = get_field('cars_parameters', $post_id);
        $cars_main_image = get_field('cars_main_image', $post_id);
        $additional_parameters = get_field('additional_parameters', $post_id);
        $car_item = get_field('car_list', $post_id);
        $row_catalog = get_field('car_categories', $post_id);
        $seo_block = get_field('car_block_seo', $post_id);
        ?>
    <div class="cars-section__top-section">
        <img class="cars-section__main-image" src="<?php echo $cars_main_image; ?>" alt="image">
        <div class="cars-section__container container">
            <div class="cars-section__caption">
                <div class="cars-section__description"><?php echo get_post_meta(get_the_ID(), 'cars_main_description', true); ?></div>
                <h1 class="cars-section__title h2"><?php single_cat_title() ?></h1>
            </div>
        </div>
    </div>
</div>
<?php // if (function_exists('kama_breadcrumbs')) kama_breadcrumbs(' » '); ?>
<div class="cars-content">
    <div class="container">
        <?php if (!empty($cars_params)) { ?>
            <div class="cars-content__wrapper" id="car-content">
                <div class="cars-content__block">
                    <div class="cars-content__item">
                        <div class="cars-content__field">
                            <span class="cars-content__value js-count" data-value="<?php echo $cars_params['cars_price_hour']; ?>"></span>
                            <span class="cars-content__prefix"><?php echo $cars_params['cars_price_hour_prefix']; ?></span>
                        </div>
                        <div class="cars-content__description"><?php echo $cars_params['cars_price_hour_text']; ?></div>
                    </div>
                </div>
                <div class="cars-content__block">
                    <div class="cars-content__item">
                        <div class="cars-content__field">
                            <span class="cars-content__value js-count" data-value="<?php echo $cars_params['cars_price_day']; ?>"></span>
                            <span class="cars-content__prefix"><?php echo $cars_params['cars_price_day_prefix']; ?></span>
                        </div>
                        <div class="cars-content__description"><?php echo $cars_params['cars_price_day_text']; ?></div>
                    </div>
                </div>
                <div class="cars-content__block">
                    <div class="cars-content__item">
                        <div class="cars-content__field">
                            <span class="cars-content__value js-count" data-value="<?php echo $cars_params['cars_price_other']; ?>"></span>
                            <span class="cars-content__prefix"><?php echo $cars_params['cars_price_other_prefix']; ?></span>
                        </div>
                        <div class="cars-content__description"><?php echo $cars_params['cars_price_other_text']; ?></div>
                    </div>
                </div>
            </div>
            <div class="cars-content__row">
                <?php foreach ($additional_parameters as $parameter) { ?>
                    <div class="cars-content__col">
                        <img class="cars-content__icon" src="<?php echo $parameter['additional_parameters_icon']; ?>" alt="icon">
                        <div class="cars-content__caption">
                            <span class="cars-content__text"><?php echo $parameter['additional_parameters_text']; ?></span>
                            <span class="cars-content__price"><?php echo $parameter['additional_parameters_price']; ?></span>
                        </div>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
        <?php if (!empty($car_item)) { ?>
            <section class="block-cars">
                <?php  $count_car = 1; ?>
                <?php foreach ($car_item as $item) { ?>
                    <?php
                    $preview_image = $item['car_item_gallery']['car_item_additional_image'];
                    $car_option = $item['car_item_options'];
                    ?>
                    <div class="block-cars__item js-car-item">
                        <h2 class="block-cars__title h2"><?php echo $item['car_item_title']; ?></h2>
                        <div class="car-gallery" id="car-gallery-<?php echo $count_car; ?>">
                            <a href="<?php echo $item['car_item_gallery']['car_item_main_image']; ?>" data-fancybox="gallery<?php echo $count_car; ?>" class="car-gallery__image-wrapper">
                                <img class="car-gallery__main-image" src="<?php echo $item['car_item_gallery']['car_item_main_image']; ?>" alt="image">
                            </a>
                            <div class="car-gallery__preview">
                                <?php $count_image = 1; ?>
                                <?php foreach ($preview_image as $image_id) { ?>
                                    <a class="car-gallery__preview-wrapper" data-fancybox="gallery<?php echo $count_car; ?>" href="<?php echo $image_id['url']; ?>">
                                        <img class="car-gallery__preview-image" src="<?php echo $image_id['sizes']['thumbnail']; ?>" alt="image">
                                        <?php if($count_image == 4) { ?>
                                            <buttom type="button" class="car-gallery__button"><?php echo $item['car_item_gallery']['car_item_button']; ?></buttom>
                                        <?php }?>
                                    </a>
                                    <?php $count_image++; ?>
                                <?php } wp_reset_postdata();?>
                            </div>
                        </div>
                        <div class="car-option">
                            <div class="car-option__wrapper">
                                <?php foreach ($car_option['car_option'] as $option) { ?>
                                    <div class="car-option__field">
                                        <img class="car-option__icon" src="<?php echo $option['car_option_icon']; ?>" alt="icon">
                                        <div class="car-option__caption">
                                            <span class="car-option__title"><?php echo $option['car_option_text']; ?></span>
                                            <span class="car-option__price"><?php echo $option['car_option_price']; ?></span>
                                        </div>
                                    </div>
                                <?php }?>
                            </div>
                            <div class="car-option__button-wrapper">
                                <button type="button" data-title="<?php echo $item['car_item_title']; ?>" class="btn btn-primary js-car-request <?php the_lang_class('js-request'); ?>"><?php echo $car_option['car_item_button']; ?></button>
                            </div>
                        </div>
                    </div>
                    <?php $count_car++; ?>
                <?php } ?>
            </section>
        <?php } ?>
        <?php if (!empty($row_catalog)) { ?>
            <div class="catalog-row">
                <?php echo do_shortcode($row_catalog); ?>
            </div>
        <?php } ?>
        <?php if (!empty($seo_block)) { ?>
            <div class="block-content">
                <?php echo $seo_block; ?>
            </div>
        <?php } ?>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
<?php get_footer(); ?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script>
    (function ($) {
        for(var i = 1; i < $('.js-car-item').length; i++) {
            $('#car-gallery-'+ i +'[data-fancybox="gallery'+ i+ '"]').fancybox({
                speed: 330,
                loop: true,
                opacity: 'auto',
                infobar: true,
                slideShow: true,
                fullScreen: true,
                thumbs: true,
                closeBtn: true,
                smallBtn: 'auto',
                buttons: [
                    "close"
                ],
                image: {
                    preload: "auto",
                    protect: true
                }
            });
        }

        $('.js-car-request').on('click', function () {
            $('[data-field-id="field11"]').val("");
            var currentCarTitle = $(this).attr('data-title');
            $('[data-field-id="field11"]').val(currentCarTitle);
        });
    })(jQuery);
</script>