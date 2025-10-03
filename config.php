<?php
// Site-wide configuration
ini_set('display_errors',0);
date_default_timezone_set('Europe/London');
$site = [
    'title' => 'Oldham Legal - Family & Divorce Solicitors',
    'contact_email' => 'info@oldhamlegal.co.uk',
    'log_file' => __DIR__ . '/contact.log',
];

// Ensure includes path constant
if(!defined('INCLUDES_DIR')) define('INCLUDES_DIR', __DIR__ . '/inc');

// Load optional local configs (smtp, recaptcha) if present but do not fail if missing
if(file_exists(__DIR__ . '/smtp-config.php')) include __DIR__ . '/smtp-config.php';
if(file_exists(__DIR__ . '/recaptcha-config.php')) include __DIR__ . '/recaptcha-config.php';

?>
