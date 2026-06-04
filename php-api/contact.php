<?php
require __DIR__ . '/db.php';

api_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    api_response(['success' => false, 'message' => 'Method not allowed'], 405);
}

$input = api_json_input();

$name = trim((string)($input['name'] ?? ''));
$email = trim((string)($input['email'] ?? ''));
$phone = trim((string)($input['phone'] ?? ''));
$message = trim((string)($input['message'] ?? ''));
$source = trim((string)($input['source'] ?? 'website'));
$location = trim((string)($input['location'] ?? ''));
$package = $input['package'] ?? null;

if ($name === '' || $email === '' || $message === '') {
    api_response(['success' => false, 'message' => 'Name, email, and message are required.'], 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    api_response(['success' => false, 'message' => 'Please enter a valid email address.'], 422);
}

try {
    $pdo = api_pdo();
    $stmt = $pdo->prepare(
        'INSERT INTO contact_leads (source, name, email, phone, location, message, package_json, ip_address, user_agent)
         VALUES (:source, :name, :email, :phone, :location, :message, :package_json, :ip_address, :user_agent)'
    );
    $stmt->execute([
        'source' => $source,
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'location' => $location,
        'message' => $message,
        'package_json' => $package ? json_encode($package, JSON_UNESCAPED_SLASHES) : null,
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);

    $config = api_config()['mail'];
    $subject = sprintf('%s: %s', $config['subject_prefix'], ucfirst(str_replace('-', ' ', $source)));
    $bodyLines = [
        "New Webstep lead",
        "Source: {$source}",
        "Name: {$name}",
        "Email: {$email}",
        "Phone: {$phone}",
        "Location: {$location}",
        "",
        "Message:",
        $message,
    ];

    if ($package) {
        $bodyLines[] = "";
        $bodyLines[] = "Package:";
        $bodyLines[] = json_encode($package, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    $headers = [
        'From: ' . $config['from'],
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
    ];

    @mail($config['to'], $subject, implode("\n", $bodyLines), implode("\n", $headers));

    api_response(['success' => true, 'message' => 'Lead saved successfully.']);
} catch (Throwable $e) {
    api_response(['success' => false, 'message' => 'Unable to save lead right now.'], 500);
}
