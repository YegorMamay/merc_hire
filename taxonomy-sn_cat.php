<?php get_header(); ?>
<div class="cars-wrapper">
    <?php if (have_posts()) : while (have_posts()) : the_post();
        $post_id = get_the_ID(); ?>
        <?php
        $cars_params = get_field('cars_parameters', $post_id);
        $cars_main_image = get_field('cars_main_image', $post_id);
        $additional_parameters = get_field('additional_parameters', $post_id);
        ?>
    <div class="cars-wrapper__top-section">
        <img class="cars-wrapper__main-image" src="<?php echo $cars_main_image; ?>" alt="image">
        <div class="cars-wrapper__container container">
            <div class="cars-wrapper__caption">
                <div class="cars-wrapper__description"><?php echo get_post_meta(get_the_ID(), 'cars_main_description', true); ?></div>
                <h1 class="cars-wrapper__title h2"><?php single_cat_title() ?></h1>
            </div>
        </div>
    </div>
        <?php // if (function_exists('kama_breadcrumbs')) kama_breadcrumbs(' » '); ?>
        <?php if (!empty($cars_params)) { ?>
            <?php echo $cars_params['cars_price_hour']; ?>
            <?php echo $cars_params['cars_price_hour_text']; ?>
            <?php echo $cars_params['cars_price_hour_prefix']; ?>
            <?php echo $cars_params['cars_price_day']; ?>
            <?php echo $cars_params['cars_price_day_text']; ?>
            <?php echo $cars_params['cars_price_day_prefix']; ?>
            <?php echo $cars_params['cars_price_other']; ?>
            <?php echo $cars_params['cars_price_other_text']; ?>
            <?php echo $cars_params['cars_price_other_prefix']; ?>
            <?php foreach ($additional_parameters as $parameter) { ?>
                <?php echo $parameter['additional_parameters_icon']; ?>
                <?php echo $parameter['additional_parameters_text']; ?>
                <?php echo $parameter['additional_parameters_price']; ?>
            <?php } ?>
        <?php } ?>
    <?php endwhile; ?>
    <?php endif; ?>
    <?php echo do_shortcode('[sn_cat id="28, 30, 35, 37, 39, 41" term="categories" list="false"]'); ?>
</div>

<?php get_footer(); ?>
