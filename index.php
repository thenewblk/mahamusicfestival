<?php get_template_part('templates/page', 'header'); ?>

		<div class="social">
			<a href="https://twitter.com/mahafestival" target="_blank" class="link"><img src="<?php bloginfo('template_directory'); ?>/img/twitter-04.svg" /></a>
			<a href="https://www.facebook.com/MahaMusicFestival" target="_blank" class="link"><img src="<?php bloginfo('template_directory'); ?>/img/facebook-05.svg" /></a>
			<a href="https://instagram.com/mahamusicfest/" target="_blank" class="link"><img src="<?php bloginfo('template_directory'); ?>/img/instagram-06.svg" /></a>
			<a href="mailto:info@mahamusicfestival.com" target="_blank" class="link"><img src="<?php bloginfo('template_directory'); ?>/img/mail-07.svg" /></a>
		</div>


    	<div class="content-wrapper top-section" id="top">
    		<div class="video-container">
				<video id="video-background" class="video-wrap" poster="<?php bloginfo('template_directory'); ?>/img/video.png" autoplay="" muted="" loop="" >
					<source src="<?php bloginfo('template_directory'); ?>/video/video_shorter.mp4" type="video/mp4">
					<source src="<?php bloginfo('template_directory'); ?>/video/video_shorter.webm" type="video/webm">
				</video>
			</div>
			<div class="content-inner">
				<div class="schnakel_logo_container">
					<div class="schnakel_logo_line"></div>
					<div class="schnakel_logo">
						<img class="schnakel_logo_image" src="<?php bloginfo('template_directory'); ?>/dist/images/schnakel1.png" />
						<span class="schnakel_presents">presents</span>
					</div>
					<div class="schnakel_logo_line"></div>
				</div>
				<img class="top-tape" src="<?php bloginfo('template_directory'); ?>/dist/images/top-tape.png" />
				<span class="top ticket button">
					<img src="<?php bloginfo('template_directory'); ?>/svg/buytickets.svg" />
					<img src="<?php bloginfo('template_directory'); ?>/svg/underline_2.svg" />
				</span>
			</div>
		</div>
    	<div class="content-wrapper sponsor-section">
			<div class="content-inner">
				<div class="sponsors" id="sponsors"></div>
			</div>
		</div>

<?php the_posts_navigation(); ?>