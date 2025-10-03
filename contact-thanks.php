<?php
require __DIR__ . '/config.php';
$page_title = 'Thank you - ' . $site['title'];
include INCLUDES_DIR . '/head.php';
include INCLUDES_DIR . '/header.php';
?>

<section class="inner_section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2>Thank you</h2>
                <p>Your message has been received. We'll be in touch shortly.</p>
                <a href="index.php" class="btn">Return Home</a>
            </div>
        </div>
    </div>
</section>

<?php include INCLUDES_DIR . '/footer.php'; ?>
