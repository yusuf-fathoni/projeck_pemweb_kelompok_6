<?php
// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../config.php';

// Ambil data dari body (format JSON)
$data = json_decode(file_get_contents("php://input"), true);

// Ambil id dari JSON
$id = $data['id'];

// Query hapus data berdasarkan ID (gunakan nama kolom yang benar)
$sql = "DELETE FROM buku WHERE id_buku=$id";

if (mysqli_query($conn, $sql)) {
    echo json_encode([
        "success" => true,
        "message" => "Buku berhasil dihapus"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Gagal menghapus buku: " . mysqli_error($conn)
    ]);
}
?>
