<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];

    // Basic form validation (you may need more robust validation)
    if (empty($firstname) || empty($lastname) || empty($email) || empty($subject)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Compose email message
    $to = "laurensymok@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "First Name: $firstname\nLast Name: $lastname\nEmail: $email\nSubject: $subject";

    // Send email
    mail($to, $subject, $message);

    echo "Message sent successfully!";
}
?>
