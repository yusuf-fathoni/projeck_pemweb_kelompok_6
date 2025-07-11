<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if (  _SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include '../config.php';


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Ambil data dari body JSON
$data = json_decode(file_get_contents("php://input"));

$nama = $data->nama ?? '';
$email = $data->email ?? '';
$password = $data->password ?? '';

// Validasi input kosong
if (empty($nama) || empty($email) || empty($password)) {
    echo json_encode(["error" => "Nama, email, dan password wajib diisi"]);
    exit;
}

// Cek apakah email sudah digunakan
$cek = $conn->prepare("SELECT id FROM users WHERE email = ?");
$cek->bind_param("s", $email);
$cek->execute();
$cek->store_result();

if ($cek->num_rows > 0) {
    echo json_encode(["error" => "Email sudah digunakan"]);
    exit;
}

$hashed = password_hash($password, PASSWORD_DEFAULT);

// Simpan ke database
$stmt = $conn->prepare("INSERT INTO users (nama, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nama, $email, $hashed);

if ($stmt->execute()) {
    echo json_encode(["message" => "User ditambahkan"]);
} else {
    echo json_encode(["error" => "Gagal menambahkan user: " . $stmt->error]);
}
?>
