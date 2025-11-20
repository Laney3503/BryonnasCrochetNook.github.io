<?php
// Check the honeypot field (bot spam protection)
if (!empty($_POST['_gotcha'])) {
    die("Spam detected.");
}

// Collect form data
$order = $_POST['order'];
$first = $_POST['first_name'];
$last = $_POST['last_name'];
$email = $_POST['email'];

// Your email
$to = "bcn.shop24@gmail.com";

// Email subject
$subject = "New Custom Order Request";

// Email body
$message = "
A new custom order has been submitted.

Order Details:
$order

Customer Information:
Name: $first $last
Email: $email
";

// Email headers
$headers = "From: noreply@yourwebsite.com\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo "Your order has been sent successfully! I will contact you within 5 business days.";
} else {
    echo "There was an error sending your order. Please try again later.";
}
?>
