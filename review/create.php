<?php

header("Access-Control-Allow-Origin: *"); // kalau mau spesifik: http://localhost:3000
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

include '../config.php';
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["message" => "Data tidak terbaca"]);
    exit;
}

$nama  = isset($data->nama) ? $data->nama : '';
$email = isset($data->email) ? $data->email : '';
$pesan = isset($data->pesan) ? $data->pesan : '';

// Validasi
if (empty($nama) || empty($email) || empty($pesan)) {
    echo json_encode([
        "message" => "Semua field harus diisi.",
        "debug" => [$nama, $email, $pesan]
    ]);
    exit;
}

// DEBUG: tampilkan query sebelum dijalankan
$sql = "INSERT INTO review (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";
if (mysqli_query($conn, $sql)) {
    echo json_encode(["message" => "Review berhasil dikirim."]);
} else {
    echo json_encode([
        "message" => "Gagal mengirim review.",
        "error" => mysqli_error($conn),
        "sql" => $sql
    ]);
}
?>
