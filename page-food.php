<?php
/**
 * Template Name: Food Page Template
 */
?>

  <?php get_template_part('templates/page', 'header'); ?>
	<section id="apply">
		<img class="press_logo" src="<?php bloginfo('template_directory'); ?>/img/logo.png" />
	<?php while ( have_posts() ) : the_post(); ?>
		<article>
			<?php the_content(); ?>
		</article>
		<header>
			<h1><?php the_title(); ?></h1>
		</header>
		<aside>
			<?php gravity_form(3, false, false, false, '', false); ?>
		</aside>
	<?php endwhile; ?>
	</section>
