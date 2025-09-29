<?php
// phpmailer-installer.php
// Lightweight installer script for use on cPanel File Manager or shared hosting
// Usage: upload this file to your site root, open it in a browser (https://your-domain/phpmailer-installer.php)
// It will attempt to download a stable PHPMailer zip release and extract it into vendor/phpmailer/phpmailer
// After a successful run, delete this file for security.

set_time_limit(0);
$targetDir = __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'phpmailer' . DIRECTORY_SEPARATOR . 'phpmailer';
$zipName = __DIR__ . DIRECTORY_SEPARATOR . 'phpmailer.zip';
$releaseUrl = 'https://github.com/PHPMailer/PHPMailer/releases/latest/download/phpmailer.zip';

function rrmdir($dir){
    if(!is_dir($dir)) return;
    $objects = scandir($dir);
    foreach($objects as $object){
        if($object=="."||$object=="..") continue;
        $path = $dir . DIRECTORY_SEPARATOR . $object;
        if(is_dir($path)) rrmdir($path); else unlink($path);
    }
    rmdir($dir);
}

if(is_dir($targetDir)){
    echo "Target directory already exists: $targetDir<br>\n";
    echo "If you want to reinstall, delete the folder vendor/phpmailer/phpmailer and re-run this script.<br>\n";
    exit;
}

// download
echo "Downloading PHPMailer...<br>\n";
$ctx = stream_context_create(array('http'=>array('timeout'=>60)));
$zip = @file_get_contents($releaseUrl, false, $ctx);
if($zip === false){
    echo "Failed to download PHPMailer zip from $releaseUrl.\n";
    echo "If your host blocks direct GitHub downloads, download the zip locally and upload it via cPanel File Manager, then extract to vendor/phpmailer/phpmailer.<br>\n";
    exit;
}
file_put_contents($zipName, $zip);

// extract
$zipObj = new ZipArchive;
$res = $zipObj->open($zipName);
if($res === TRUE){
    echo "Extracting...<br>\n";
    $tempDir = __DIR__ . DIRECTORY_SEPARATOR . 'phpmailer_tmp';
    if(is_dir($tempDir)) rrmdir($tempDir);
    mkdir($tempDir, 0755, true);
    $zipObj->extractTo($tempDir);
    $zipObj->close();
    // find extracted root folder
    $items = scandir($tempDir);
    foreach($items as $it){
        if($it=='.'||$it=='..') continue;
        $src = $tempDir . DIRECTORY_SEPARATOR . $it;
        if(is_dir($src)){
            // move src to targetDir
            if(!is_dir(dirname($targetDir))) mkdir(dirname($targetDir),0755,true);
            rename($src, $targetDir);
            break;
        }
    }
    rrmdir($tempDir);
    unlink($zipName);
    echo "PHPMailer installed to vendor/phpmailer/phpmailer<br>\n";
    // create a minimal autoload.php that includes PHPMailer src files for older code
    $autoload = __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';
    $autoloadContent = <<<'PHP'
<?php
// Minimal autoloader for PHPMailer placed at vendor/autoload.php
spl_autoload_register(function($class){
    $prefix = 'PHPMailer\\\\';
    if(strpos($class, $prefix) !== 0) return;
    $rel = substr($class, strlen($prefix));
    $file = __DIR__ . '/phpmailer/phpmailer/src/' . str_replace('\\\
', '/', $rel) . '.php';
    if(file_exists($file)) require $file;
});
// Also provide classmap for common names
if(file_exists(__DIR__ . '/phpmailer/phpmailer/src/PHPMailer.php')) require __DIR__ . '/phpmailer/phpmailer/src/PHPMailer.php';
if(file_exists(__DIR__ . '/phpmailer/phpmailer/src/SMTP.php')) require __DIR__ . '/phpmailer/phpmailer/src/SMTP.php';
if(file_exists(__DIR__ . '/phpmailer/phpmailer/src/Exception.php')) require __DIR__ . '/phpmailer/phpmailer/src/Exception.php';
PHP;
    file_put_contents($autoload, $autoloadContent);
    echo "Created vendor/autoload.php\n";
    echo "\nInstallation complete. IMPORTANT: delete phpmailer-installer.php from the server now.\n";
} else {
    echo "Failed to open zip archive.\n";
    exit;
}

?>
