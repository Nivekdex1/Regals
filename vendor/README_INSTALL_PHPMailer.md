PHPMailer installer for shared hosting

What this is

This folder contains a small installer (`phpmailer-installer.php`) you can upload to your site root using cPanel File Manager. When you open that file in a browser it will attempt to download and extract PHPMailer into `vendor/phpmailer/phpmailer` and create a minimal `vendor/autoload.php` so your code can use `require 'vendor/autoload.php';`.

How to use (cPanel)
1. In cPanel > File Manager, upload `phpmailer-installer.php` into your site root (the same folder as `contact-handler.php`).
2. In a browser, open: `https://your-domain/phpmailer-installer.php`.
3. Wait for the success message. When complete, delete `phpmailer-installer.php` from the server for security.

Alternative (recommended if Composer is available)
- SSH into the server and run: `composer require phpmailer/phpmailer`
- This creates a proper `vendor/` with a full Composer autoloader.

Notes
- If your host blocks direct downloads from GitHub, download the PHPMailer zip locally and upload it via File Manager, then extract to `vendor/phpmailer/phpmailer` and create `vendor/autoload.php` as shown in the examples.
- After PHPMailer is installed, `contact-handler.php` will try to `require 'vendor/autoload.php'` and use SMTP sending.
- Remove the installer script after use.
