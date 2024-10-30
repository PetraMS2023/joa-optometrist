<?php
// استلام البيانات من الطلب
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];

// إعداد البريد الإلكتروني
$to = "registration@joa-optometrist.org";
$subject = "New exhibition registration";
$message = "Name: $name\nEmail : $email\nPhone Number : $phone";
$headers = "From: no-reply@yourwebsite.com";

// إرسال البريد الإلكتروني
if(mail($to, $subject, $message, $headers)) {
    echo "Sent successfully";
} else {
    echo " Failed to send ";
}
?>
