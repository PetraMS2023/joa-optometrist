<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $position = htmlspecialchars($_POST['practice']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Create email content
    $to = "ce@joa-optometrist.org"; // Replace with your email
    $subject = "New Job Application: $position";
    $boundary = md5(time()); // Boundary for separating parts in the email

    // Headers for multipart email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

    // Email body content with the file attachment
    $email_content = "--{$boundary}\r\n";
    $email_content .= "Content-Type: text/html; charset=UTF-8\r\n";
    $email_content .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $email_content .= "
        <html>
        <head>
            <title>New Job Application</title>
        </head>
        <body>
            <h2>New Job Application</h2>
            <p><strong>Full Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Practice Number:</strong> $practice</p>
            <p><strong>Cover Letter / Additional Information:</strong> $message</p>
        </body>
        </html>
    \r\n";
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Application submitted successfully!";
    } else {
        echo "Failed to submit application.";
    }
} else {
    echo "Invalid request method.";
}
?>
