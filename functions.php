<?php
if (!defined('ABSPATH')) {
    exit;
}

// 1. Khai báo hỗ trợ tính năng cơ bản của WordPress
function lahoaithu_theme_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'lahoaithu_theme_setup');

// 2. Nạp toàn bộ Font, CSS và JavaScript
function lahoaithu_enqueue_assets()
{
    $theme_uri = get_template_directory_uri();

    // Nạp Font Google
    wp_enqueue_style(
        'lahoaithu-google-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Nạp các file CSS theo đúng thứ tự
    wp_enqueue_style('lahoaithu-reset', $theme_uri . '/css/reset.css', array(), '1.0');
    wp_enqueue_style('lahoaithu-variables', $theme_uri . '/css/variables.css', array('lahoaithu-reset'), '1.0');
    wp_enqueue_style('lahoaithu-base', $theme_uri . '/css/base.css', array('lahoaithu-variables'), '1.0');
    wp_enqueue_style('lahoaithu-components', $theme_uri . '/css/components.css', array('lahoaithu-base'), '1.0');
    wp_enqueue_style('lahoaithu-responsive', $theme_uri . '/css/responsive.css', array('lahoaithu-components'), '1.0');
    wp_enqueue_style('lahoaithu-main-style', get_stylesheet_uri(), array('lahoaithu-responsive'), '1.0');

    // Nạp file JavaScript chính
    wp_enqueue_script('lahoaithu-main-js', $theme_uri . '/java/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'lahoaithu_enqueue_assets');
