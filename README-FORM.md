Contact form: deployment and SMTP notes

1) Overview
- `contact-handler.php` handles POST requests from `contact.html`. It will attempt to send email via SMTP using PHPMailer if you create `smtp-config.php` and install PHPMailer via Composer; otherwise it falls back to PHP mail().

2) Recommended (SMTP via PHPMailer) — best deliverability
- On your Namecheap hosting account, create `smtp-config.php` in the site root with your SMTP credentials (do not commit this file to git).
- Example: copy `smtp-config.example.php` to `smtp-config.php` and update the password.
- Install PHPMailer via Composer in the site root (if Composer is available):

```bash
composer require phpmailer/phpmailer
```

- Ensure `vendor/autoload.php` is present; the handler will auto-detect it.

3) Using Namecheap SMTP
- Based on the details you provided (control panel screenshot), recommended secure settings are:
  - Host: oldhamlegal.co.uk
  - Port: 465 (SSL) or 587 (TLS)
  - Username: contact@oldhamlegal.co.uk
  - Password: (use your mailbox password)
  - Secure: 'ssl' for port 465, 'tls' for port 587

4) If you do NOT want to use SMTP
- The handler will call PHP mail() as a fallback. Note that mail() may be rate-limited or marked as spam; using SMTP is recommended for reliability.

5) Security notes
- Do NOT commit `smtp-config.php` to source control. Add it to `.gitignore` if you use git.
- Consider using environment variables or a secrets manager where available.
- For higher-volume transactional email, consider using a provider (SendGrid, Mailgun, Amazon SES) and configure SMTP credentials accordingly.

6) Troubleshooting
- If email isn't arriving, check `contact.log` in the site root for 'SENT' or 'FAILED' entries and SMTP error messages (if PHPMailer used).
- Check Namecheap server mail settings and any outbound restrictions in their dashboard.

7) Next steps I can do for you
- Install PHPMailer and wire up `smtp-config.php` if you paste credentials (I will NOT store them in the repo; I'll create `smtp-config.php` locally only if you confirm and want me to write it).
- Add reCAPTCHA and improved validation/UI.
- Replace the mail fallback with a third-party form backend if preferred.

