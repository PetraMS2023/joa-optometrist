<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $position = htmlspecialchars($_POST['position']);
    $experience = htmlspecialchars($_POST['experience']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Handle file upload
    $file = $_FILES['resume'];
    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo "Error uploading file.";
        exit;
    }

    // File information
    $file_tmp = $file['tmp_name'];
    $file_name = $file['name'];
    $file_type = $file['type'];
    $file_size = $file['size'];

    // Check file size (optional, limit 5MB)
    if ($file_size > 5 * 1024 * 1024) { // 5MB limit
        echo "File is too large. Max size is 5MB.";
        exit;
    }

    // Read the file content for attachment
    $file_content = chunk_split(base64_encode(file_get_contents($file_tmp)));

    // Create email content
    $to = "careers@joa-optometrist.org"; // Replace with your email
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
            <p><strong>Position Applied For:</strong> $position</p>
            <p><strong>Years of Experience:</strong> $experience</p>
            <p><strong>Cover Letter / Additional Information:</strong> $message</p>
        </body>
        </html>
    \r\n";
    
    // File attachment content
    $email_content .= "--{$boundary}\r\n";
    $email_content .= "Content-Type: {$file_type}; name=\"{$file_name}\"\r\n";
    $email_content .= "Content-Disposition: attachment; filename=\"{$file_name}\"\r\n";
    $email_content .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $email_content .= $file_content . "\r\n";
    $email_content .= "--{$boundary}--";

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
