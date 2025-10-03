<?php
require __DIR__ . '/config.php';
$page_title = 'Contact - ' . $site['title'];
include INCLUDES_DIR . '/head.php';
include INCLUDES_DIR . '/header.php';
?>

<div class="breadcumb-area d-flex style_two">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcumb-content">
                    <div class="breadcumb-title"><h4>CONTACT</h4></div>
                    <ul><li><a href="index.php">HOME <i class="flaticon flaticon-right-arrow"></i></a></li><li>CONTACT</li></ul>
                </div>
            </div>
        </div>
    </div>
 </div>

<section class="contact_area inner_section style_three">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <?php
                if(session_status() !== PHP_SESSION_ACTIVE) session_start();
                $old = isset($_SESSION['form_input']) ? $_SESSION['form_input'] : array();
                $errs = isset($_SESSION['form_errors']) ? $_SESSION['form_errors'] : array();
                unset($_SESSION['form_input'], $_SESSION['form_errors']);
                if(!empty($errs)){
                    echo '<div class="alert alert-danger"><ul>';
                    foreach($errs as $er) echo '<li>'.htmlspecialchars($er).'</li>';
                    echo '</ul></div>';
                }
                ?>
                <form action="contact-handler.php" method="POST" id="dreamit-form" novalidate>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="select-title"><h3>Select Department</h3></div>
                            <div class="form_box">
                                <div class="form_field_inner style-two">
                                    <select name="department" id="contact" required>
                                        <option value="">Select department</option>
                                        <option value="Family Law - Financial" <?php echo (isset($old['department']) && $old['department']==='Family Law - Financial')?'selected':''; ?>>Family Law - Financial</option>
                                        <option value="Family Law - Children" <?php echo (isset($old['department']) && $old['department']==='Family Law - Children')?'selected':''; ?>>Family Law - Children</option>
                                        <option value="Prenuptial Agreements" <?php echo (isset($old['department']) && $old['department']==='Prenuptial Agreements')?'selected':''; ?>>Prenuptial Agreements</option>
                                        <option value="Mediation & ADR" <?php echo (isset($old['department']) && $old['department']==='Mediation & ADR')?'selected':''; ?>>Mediation & ADR</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form_box mb-30">
                                <input type="text" name="name" id="contact-name" placeholder="Name" required value="<?php echo isset($old['name'])?htmlspecialchars($old['name']):''; ?>">
                                <div class="invalid-feedback" id="err-name" style="display:none;color:#d9534f;font-size:0.9em;margin-top:6px;">Please enter your name.</div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form_box mb-30">
                                <input type="text" name="phone" placeholder="Phone" value="<?php echo isset($old['phone'])?htmlspecialchars($old['phone']):''; ?>">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form_box mb-30">
                                <input type="email" name="email" id="contact-email" placeholder="Email" required value="<?php echo isset($old['email'])?htmlspecialchars($old['email']):''; ?>">
                                <div class="invalid-feedback" id="err-email" style="display:none;color:#d9534f;font-size:0.9em;margin-top:6px;">Please enter a valid email address.</div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form_box mb-30">
                                <input type="text" name="date" placeholder="Preferred date (dd/mm/yyyy)" value="<?php echo isset($old['date'])?htmlspecialchars($old['date']):''; ?>">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form_box mb-30">
                                <input type="text" name="time" placeholder="Time" value="<?php echo isset($old['time'])?htmlspecialchars($old['time']):''; ?>">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form_box mb-30">
                                <textarea name="message" id="contact-message" cols="30" rows="10" placeholder="Write Message"><?php echo isset($old['message'])?htmlspecialchars($old['message']):'Appointment Note'; ?></textarea>
                                <div class="invalid-feedback" id="err-message" style="display:none;color:#d9534f;font-size:0.9em;margin-top:6px;">Please enter a message.</div>
                            </div>
                            <div class="quote_button">
                                <button class="btn" type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="contact-thumb"><img src="static/picture/contact-thumb.png" alt=""></div>
            </div>
        </div>
    </div>
</section>

<?php include INCLUDES_DIR . '/footer.php'; ?>
