<?php
require __DIR__ . '/db.php';

api_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    api_response(['success' => false, 'message' => 'Method not allowed'], 405);
}

$type = $_GET['type'] ?? '';
$allowedTypes = ['packages', 'portfolio', 'case-studies'];

if (!in_array($type, $allowedTypes, true)) {
    api_response(['success' => false, 'message' => 'Invalid content type'], 400);
}

try {
    $pdo = api_pdo();
    $stmt = $pdo->prepare('SELECT data FROM dynamic_content WHERE type = :type AND is_active = 1 ORDER BY updated_at DESC LIMIT 1');
    $stmt->execute(['type' => $type]);
    $row = $stmt->fetch();

    if (!$row) {
        api_response(['success' => true, 'data' => null]);
    }

    $data = json_decode($row['data'], true);
    api_response(['success' => true, 'data' => $data]);
} catch (Throwable $e) {
    api_response(['success' => false, 'message' => 'Content API error'], 500);
}
