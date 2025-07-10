<?php
include '../config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"));

$id     = $data->id_review ?? '';
$nama   = $data->nama ?? '';
$email  = $data->email ?? '';
$pesan  = $data->pesan ?? '';

if (!$id || !$nama || !$email || !$pesan) {
    echo json_encode(["message" => "Semua field wajib diisi"]);
    exit;
}

$sql = "UPDATE review SET nama='$nama', email='$email', pesan='$pesan' WHERE id_review=$id";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["message" => "Review berhasil diubah."]);
} else {
    echo json_encode(["message" => "Gagal mengubah review."]);
}
?>
