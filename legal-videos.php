<?php
require_once __DIR__ . '/config.php';
include __DIR__ . '/inc/head.php';
include __DIR__ . '/inc/header.php';
?>

<div class="container inner_section">
    <h1>Video Library</h1>
    <p>Short explainer videos from our solicitors covering common family law topics—child maintenance, financial disclosures, mediation and court processes.</p>

    <div class="video-grid">
        <div class="video-item">
            <h4>How child maintenance is calculated</h4>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Child maintenance" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-item">
            <h4>Preparing for a financial settlement</h4>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Financial settlement" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<?php include __DIR__ . '/inc/footer.php'; ?>
