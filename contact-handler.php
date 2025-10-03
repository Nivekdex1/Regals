<?php
// Simple contact handler for Namecheap shared hosting
// Saves basic sanitised input and attempts to send email using mail().
// Adjust recipient and headers as needed.

// Configuration
$recipient = 'info@oldhamlegal.co.uk';
$companyAddress = "Enterprise House, 656 Chester Road, Birmingham, West Midlands, B23 5TE, England";

// Optional SMTP configuration: create a file named smtp-config.php (not committed) with
// $smtpConfig = [ 'host'=>..., 'port'=>..., 'username'=>..., 'password'=>..., 'secure'=> 'ssl'|'tls' ];
// If present and PHPMailer is installed (vendor/autoload.php), the handler will use SMTP.
$use_smtp = false;
$smtpConfig = null;
if(file_exists(__DIR__ . '/smtp-config.php')){
    // smtp-config.php should set $smtpConfig as described above
    include __DIR__ . '/smtp-config.php';
    if(!empty($smtpConfig) && is_array($smtpConfig)) $use_smtp = true;
}

function clean($v){
    return trim(strip_tags($v));
}

// Only accept POST
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header('Location: contact.php');
    exit;
}

// Start session to preserve input on errors
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

// Read fields (support new standardized names and preserve backward compatibility)
$department = isset($_POST['department']) ? clean($_POST['department']) : (isset($_POST['contact'])?clean($_POST['contact']):'');
$name = isset($_POST['name']) ? clean($_POST['name']) : (isset($_POST['Victim Name'])?clean($_POST['Victim Name']):'');
$phone = isset($_POST['phone']) ? clean($_POST['phone']) : (isset($_POST['Phone'])?clean($_POST['Phone']):'');
$email = isset($_POST['email']) ? clean($_POST['email']) : (isset($_POST['Email'])?clean($_POST['Email']):'');
$date = isset($_POST['date']) ? clean($_POST['date']) : (isset($_POST['mm/dd/yyyy'])?clean($_POST['mm/dd/yyyy']):'');
$time = isset($_POST['time']) ? clean($_POST['time']) : (isset($_POST['Time'])?clean($_POST['Time']):'');
$message = isset($_POST['message']) ? clean($_POST['message']) : '';
// recaptcha token
$recaptcha_token = isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '';

// Basic validation
$errors = array();
if(empty($name)) $errors[] = 'Please provide your name.';
if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Please provide a valid email address.';

// If recaptcha-config exists, verify token
$recaptchaEnabled = false;
if(file_exists(__DIR__ . '/recaptcha-config.php')){
    include __DIR__ . '/recaptcha-config.php';
    if(!empty($recaptchaKeys['secret_key'])) $recaptchaEnabled = true;
}

if($recaptchaEnabled){
    if(empty($recaptcha_token)){
        $errors[] = 'Please complete the reCAPTCHA.';
    } else {
        // verify with Google
        $resp = @file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($recaptchaKeys['secret_key']) . '&response=' . urlencode($recaptcha_token));
        $respData = $resp ? json_decode($resp, true) : null;
        if(!$respData || empty($respData['success']) || $respData['score'] === 0){
            $errors[] = 'reCAPTCHA verification failed.';
        }
    }
}

if(count($errors)>0){
    // Preserve input and errors in session for UX on redirect
    $_SESSION['form_errors'] = $errors;
    $_SESSION['form_input'] = [
        'department'=>$department,'name'=>$name,'phone'=>$phone,'email'=>$email,'date'=>$date,'time'=>$time,'message'=>$message
    ];
    header('Location: contact.php?e=1');
    exit;
}

// Build email
$subject = "Website enquiry: ".($department?:'General enquiry');
$body = "You have received a new enquiry from the website.\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Preferred date: $date\n";
$body .= "Preferred time: $time\n";
$body .= "Department: $department\n\n";
$body .= "Message:\n$message\n\n";
$body .= "Company address: $companyAddress\n";

// Use a safe From header to avoid mail injection and SPF issues; set Reply-To to user email if valid
$safe_from_email = filter_var($recipient, FILTER_VALIDATE_EMAIL) ? $recipient : 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$headers = "From: " . mb_encode_mimeheader('Oldham Legal Website') . " <" . $safe_from_email . ">\r\n";
if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    // sanitize reply-to
    $headers .= "Reply-To: " . $email . "\r\n";
}

// Attempt to send
// Attempt to send via SMTP using PHPMailer if configured, otherwise use mail()
$sent = false;
if($use_smtp){
    // Try to use PHPMailer if composer autoload is present
    $autoload = __DIR__ . '/vendor/autoload.php';
    if(file_exists($autoload)){
        try{
            require $autoload;
            $mail = new PHPMailer\PHPMailer\PHPMailer(true);
            // Server settings
            $mail->isSMTP();
            $mail->Host = $smtpConfig['host'];
            $mail->SMTPAuth = true;
            $mail->Username = $smtpConfig['username'];
            $mail->Password = $smtpConfig['password'];
            $mail->SMTPSecure = isset($smtpConfig['secure']) ? $smtpConfig['secure'] : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = $smtpConfig['port'];

            // Recipients
            $mail->setFrom($smtpConfig['username'], 'Oldham Legal Website');
            $mail->addAddress($recipient);
            $mail->addReplyTo($email, $name);

            // Content
            $mail->isHTML(false);
            $mail->Subject = $subject;
            $mail->Body    = $body;

            $sent = $mail->send();
        }catch(Throwable $e){
            // On any failure, fall back to mail() below
            $sent = false;
            @file_put_contents(__DIR__ . '/contact.log', date('c') . " | SMTP ERROR: " . $e->getMessage() . "\n", FILE_APPEND | LOCK_EX);
        }
    }
}

if(!$sent){
    $sent = @mail($recipient, $subject, $body, $headers);
}

// Optional: log to file on the server (permissions required)
$logline = date('Y-m-d H:i:s') . " | " . ($sent ? 'SENT' : 'FAILED') . " | " . $email . " | " . str_replace("\n"," ",substr($body,0,500)) . "\n";
@file_put_contents(__DIR__ . '/contact.log', $logline, FILE_APPEND | LOCK_EX);

if($sent){
    header('Location: contact-thanks.php');
    exit;
} else {
    // Fallback: redirect back with failure flag
    header('Location: contact.php?e=2');
    exit;
}

?>
