<?php

namespace Roots\Sage\Init;

use Roots\Sage\Assets;

/**
 * Theme setup
 */
function setup() {
  // Make theme available for translation
  // Community translations can be found at https://github.com/roots/sage-translations
  load_theme_textdomain('sage', get_template_directory() . '/lang');

  // Enable plugins to manage the document title
  // http://codex.wordpress.org/Function_Reference/add_theme_support#Title_Tag
  add_theme_support('title-tag');

  // Register wp_nav_menu() menus
  // http://codex.wordpress.org/Function_Reference/register_nav_menus
  register_nav_menus([
    'primary_navigation' => __('Primary Navigation', 'sage')
  ]);

  // Add post thumbnails
  // http://codex.wordpress.org/Post_Thumbnails
  // http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
  // http://codex.wordpress.org/Function_Reference/add_image_size
  add_theme_support('post-thumbnails');

  // Add post formats
  // http://codex.wordpress.org/Post_Formats
  add_theme_support('post-formats', ['aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio']);

  // Add HTML5 markup for captions
  // http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5
  add_theme_support('html5', ['caption', 'comment-form', 'comment-list']);

  // Tell the TinyMCE editor to use a custom stylesheet
  add_editor_style(Assets\asset_path('styles/editor-style.css'));
}
add_action('after_setup_theme', __NAMESPACE__ . '\\setup');

/**
 * Register sidebars
 */
function widgets_init() {
  register_sidebar([
    'name'          => __('Primary', 'sage'),
    'id'            => 'sidebar-primary',
    'before_widget' => '<section class="widget %1$s %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h3>',
    'after_title'   => '</h3>'
  ]);

  register_sidebar([
    'name'          => __('Footer', 'sage'),
    'id'            => 'sidebar-footer',
    'before_widget' => '<section class="widget %1$s %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h3>',
    'after_title'   => '</h3>'
  ]);
}
add_action('widgets_init', __NAMESPACE__ . '\\widgets_init');

// Register Custom Post Type
function band_post_type() {

  $labels = array(
    'name'                => _x( 'Bands', 'Post Type General Name', 'text_domain' ),
    'singular_name'       => _x( 'Band', 'Post Type Singular Name', 'text_domain' ),
    'menu_name'           => __( 'Bands', 'text_domain' ),
    'name_admin_bar'      => __( 'Bands', 'text_domain' ),
    'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
    'all_items'           => __( 'All Bands', 'text_domain' ),
    'add_new_item'        => __( 'Add New Band', 'text_domain' ),
    'add_new'             => __( 'Add New Band', 'text_domain' ),
    'new_item'            => __( 'New Item', 'text_domain' ),
    'edit_item'           => __( 'Edit Item', 'text_domain' ),
    'update_item'         => __( 'Update Item', 'text_domain' ),
    'view_item'           => __( 'View Item', 'text_domain' ),
    'search_items'        => __( 'Search Item', 'text_domain' ),
    'not_found'           => __( 'Band Not found', 'text_domain' ),
    'not_found_in_trash'  => __( 'No Bands found in Trash', 'text_domain' ),
  );
  $rewrite = array(
    'slug'                => 'band',
    'with_front'          => true,
    'pages'               => true,
    'feeds'               => true,
  );
  $args = array(
    'label'               => __( 'band', 'text_domain' ),
    'description'         => __( 'Band Description', 'text_domain' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'editor', 'excerpt' ),
    'taxonomies'          => array( 'post_tag' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'menu_position'       => 5,
    'show_in_admin_bar'   => true,
    'show_in_nav_menus'   => true,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'rewrite'             => $rewrite,
    'capability_type'     => 'page',
  );
  register_post_type( 'band', $args );

}

add_action('init', __NAMESPACE__ . '\\band_post_type');


// Register Custom Post Type
function band_news_link_post_type() {

  $labels = array(
    'name'                => _x( 'Band News Links', 'Post Type General Name', 'text_domain' ),
    'singular_name'       => _x( 'Band News Link', 'Post Type Singular Name', 'text_domain' ),
    'menu_name'           => __( 'Band News Link', 'text_domain' ),
    'name_admin_bar'      => __( 'Band News Link', 'text_domain' ),
    'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
    'all_items'           => __( 'All Items', 'text_domain' ),
    'add_new_item'        => __( 'Add New News Link', 'text_domain' ),
    'add_new'             => __( 'Add New', 'text_domain' ),
    'new_item'            => __( 'New Item', 'text_domain' ),
    'edit_item'           => __( 'Edit Item', 'text_domain' ),
    'update_item'         => __( 'Update Item', 'text_domain' ),
    'view_item'           => __( 'View Item', 'text_domain' ),
    'search_items'        => __( 'Search Item', 'text_domain' ),
    'not_found'           => __( 'Not found', 'text_domain' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
  );
  $args = array(
    'label'               => __( 'band_news_link', 'text_domain' ),
    'description'         => __( 'Band News Link Description', 'text_domain' ),
    'labels'              => $labels,
    'supports'            => array( 'title', ),
    'taxonomies'          => array( 'category', 'post_tag' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'menu_position'       => 5,
    'show_in_admin_bar'   => true,
    'show_in_nav_menus'   => true,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'page',
  );
  register_post_type( 'band_news_link', $args );

}

// Hook into the 'init' action
add_action('init', __NAMESPACE__ . '\\band_news_link_post_type');
// Hook into the 'init' action
// add_action( 'init', 'band_post_type', 0 );

function wp_api_encode_acf($data,$post,$context){
  $data['meta'] = array_merge($data['meta'],get_fields($post['ID']));
  return $data;
}

if( function_exists('get_fields') ){
  add_filter('json_prepare_post', __NAMESPACE__ . '\\wp_api_encode_acf', 10, 3);
}

