<?php
include '../config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$sql = "SELECT * FROM review ORDER BY tanggal_kirim DESC";
$result = mysqli_query($conn, $sql);

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);
?>
