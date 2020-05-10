<?php get_header();  ?>
<div class="cars-section">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php
        $post_id = get_the_ID();
        $cars_params = get_field('cars_parameters', $post_id);
        $cars_main_image = get_field('cars_main_image', $post_id);
        $additional_parameters = get_field('additional_parameters', $post_id);
        $content_car = get_field('car_list', $post_id);
//        echo '<pre>' , var_dump($content_car) , '</pre>';
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
            <?php foreach ($additional_parameters as $parameter) { ?>
                <?php echo $parameter['additional_parameters_icon']; ?>
                <?php echo $parameter['additional_parameters_text']; ?>
                <?php echo $parameter['additional_parameters_price']; ?>
            <?php } ?>
        <?php } ?>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
<?php echo do_shortcode('[sn_cat id="28, 30, 35, 37, 39, 41" term="categories" list="false"]'); ?>
<?php get_footer(); ?>
