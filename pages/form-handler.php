<?php
$page_title = "Contact";
?>
<!DOCTYPE html>
<html lang="en">

<?php include "includes/meta.php" ?>

<body>
    <?php include "includes/header.php" ?>
    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Collect and sanitize input
        $firstname = trim($_POST["firstname"] ?? '');
        $lastname = trim($_POST["lastname"] ?? '');
        $email = trim($_POST["email"] ?? '');
        $user_subject = trim($_POST["subject"] ?? '');

        // Basic validation
        $errors = [];
        if ($firstname === '') {
            $errors['firstname'] = 'Please enter your first name.';
        }
        if ($lastname === '') {
            $errors['lastname'] = 'Please enter your last name.';
        }
        if ($email === '') {
            $errors['email'] = 'Please enter your email address.';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please provide a valid email address.';
        }
        if ($user_subject === '') {
            $errors['subject'] = 'Please enter a message or subject.';
        }

        // Prepare JSON response helper
        $is_ajax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
            || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false);

        if (!empty($errors)) {
            if ($is_ajax) {
                header('Content-Type: application/json');
                echo json_encode(['success' => false, 'errors' => $errors]);
                exit;
            } else {
                // Non-AJAX fallback: show first error
                $first = reset($errors);
                echo $first;
                exit;
            }
        }

        // Compose email
        $to = "laurensymok@gmail.com"; // Replace with the recipient address you expect
        $mail_subject = "New Contact Form Submission";
        $message = "First Name: " . htmlspecialchars($firstname, ENT_QUOTES) . "\n"
            . "Last Name: " . htmlspecialchars($lastname, ENT_QUOTES) . "\n"
            . "Email: " . htmlspecialchars($email, ENT_QUOTES) . "\n"
            . "Subject: " . htmlspecialchars($user_subject, ENT_QUOTES) . "\n";

        // Recommended headers (many MTAs / spam filters require a From header)
        $headers = [];
        // Use a domain address for From so receiving servers accept it. Replace with a real address on your domain.
        $headers[] = 'From: webmaster@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
        $headers[] = 'Reply-To: ' . $email;
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers_str = implode("\r\n", $headers);

        // Prefer PHPMailer+SMTP when available
        $sent = false;
        $send_errors = [];

        // Attempt PHPMailer if composer vendor autoload exists
        if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
            require_once __DIR__ . '/../vendor/autoload.php';
            try {
                $smtp_config = require __DIR__ . '/../includes/smtp_config.php';

                $mail = new PHPMailer\PHPMailer\PHPMailer(true);
                if (!empty($smtp_config['debug'])) {
                    $mail->SMTPDebug = (int) $smtp_config['debug'];
                }
                $mail->isSMTP();
                $mail->Host = $smtp_config['host'];
                $mail->SMTPAuth = true;
                $mail->Username = $smtp_config['username'];
                $mail->Password = $smtp_config['password'];
                if (!empty($smtp_config['secure'])) {
                    $mail->SMTPSecure = $smtp_config['secure'];
                }
                $mail->Port = (int) $smtp_config['port'];

                $mail->setFrom($smtp_config['from_email'], $smtp_config['from_name']);
                $mail->addReplyTo($email);
                $mail->addAddress($to);
                $mail->Subject = $mail_subject;
                $mail->Body = $message;
                $mail->AltBody = $message;

                $sent = $mail->send();
            } catch (Exception $e) {
                $send_errors[] = 'PHPMailer exception: ' . $e->getMessage();
            }
        }

        // Fallback to mail() if PHPMailer wasn't available or failed
        if (!$sent) {
            // Try the native mail as a fallback
            $sent = mail($to, $mail_subject, $message, $headers_str);
            if (!$sent) {
                $err = error_get_last();
                $send_errors[] = 'mail() failed: ' . print_r($err, true);
            }
        }

        if ($sent) {
            if ($is_ajax) {
                header('Content-Type: application/json');
                echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
                exit;
            } else {
                echo "Message sent successfully!";
            }
        } else {
            error_log("Contact form: send failed - " . implode(' | ', $send_errors));
            if ($is_ajax) {
                header('Content-Type: application/json');
                echo json_encode(['success' => false, 'message' => 'Message could not be sent. Please try again later.']);
                exit;
            } else {
                echo "Message could not be sent. Please try again later.";
            }
        }
    } else {
        echo "Invalid request.";
    }
    ?>
</body>

</html>