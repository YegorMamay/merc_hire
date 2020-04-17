<?php
/**
 * Template Name: Avtopark
 **/
?>

<?php get_header(); ?>
<div class="catalog-caption">
    <?php the_post_thumbnail('full'); ?>
    <div class="container catalog-caption__wrapper">
        <h1 class="catalog-caption__title h2"><?php the_title() ?></h1>
    </div>
</div>
<div class="container">
<?php if (have_posts()): while (have_posts()): the_post(); ?>
    <?php if (function_exists('kama_breadcrumbs')) kama_breadcrumbs(' » '); ?>
    <div class="main-catalog">
        <h2 class="main-title h3 text-center"><?php echo get_post_meta(get_the_ID(), 'category_title', true); ?></h2>
        <div class="main-catalog__description"><?php echo get_post_meta(get_the_ID(), 'category_description', true); ?></div>
        <div class="main-catalog__wrapper">
            <?php $category_items = get_field('category_list'); ?>
            <?php echo do_shortcode($category_items); ?>
        </div>
    </div>
    <div class="bottom-content">
        <?php the_content() ?>
    </div>
    <?php wp_link_pages(); ?>
<?php endwhile;
else: ?>
    <?php get_template_part('loops/content', 'none'); ?>
<?php endif; ?>

</div><!-- /.container -->
<?php get_footer(); ?>
