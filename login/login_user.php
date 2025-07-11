<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include '../config.php';


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

$email = $data->email ?? '';
$password = $data->password ?? '';

if (empty($email) || empty($password)) {
    echo json_encode(["error" => "Email dan password wajib diisi"]);
    exit;
}

$stmt = $conn->prepare("SELECT id, nama, email, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    if (password_verify($password, $user['password'])) {
        // Jangan kirim password ke frontend!
        unset($user['password']);
        echo json_encode(["message" => "Login berhasil", "user" => $user]);
    } else {
        echo json_encode(["error" => "Password salah"]);
    }
} else {
    echo json_encode(["error" => "Email tidak ditemukan"]);
}
?>
