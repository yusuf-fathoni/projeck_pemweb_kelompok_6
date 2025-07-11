<?php
include '../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$result = $conn->query("SELECT * FROM users");

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode($users);
?>
