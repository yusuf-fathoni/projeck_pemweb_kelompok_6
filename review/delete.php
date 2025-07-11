<?php
include '../config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"));
$id = $data->id ?? '';

if (!$id) {
    echo json_encode(["message" => "ID tidak ditemukan"]);
    exit;
}

$sql = "DELETE FROM review WHERE id_review=$id";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["message" => "Review berhasil dihapus."]);
} else {
    echo json_encode(["message" => "Gagal menghapus review: " . mysqli_error($conn)]);
}
?>
