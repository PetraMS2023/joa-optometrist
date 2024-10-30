<?php
// استلام البيانات من الطلب
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];

// إعداد البريد الإلكتروني
$to = "registration@joa-optometrist.org";
$subject = "عملية تسجيل جديده";
$message = "الاسم: $name\nالبريد الالكتروني : $email\nرقم الهاتف : $phone";
$headers = "From: no-reply@yourwebsite.com";

// إرسال البريد الإلكتروني
if(mail($to, $subject, $message, $headers)) {
    echo "تم الارسال بنجاح";
} else {
    echo " فشل في الارسال ";
}
?>
