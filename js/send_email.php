<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];

    $to = 'invicibledev@gmail.com';
    $subject = 'Contact Form Submission';
    $headers = "From: <$email>";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200); // Success
    } else {
        http_response_code(500); // Server error
    }
} else {
    http_response_code(400); // Bad request
}
?>
