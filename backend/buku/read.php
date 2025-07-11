<?php
// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../config/koneksi.php';

// Ambil semua data dari tabel buku
// Coba dengan nama kolom yang mungkin benar
$sql = "SELECT * FROM buku ORDER BY id_buku DESC";
$query = mysqli_query($conn, $sql);

if ($query) {
    // Simpan hasil dalam array
    $result = [];
    
    while ($row = mysqli_fetch_assoc($query)) {
        $result[] = $row;
    }
    
    // Ubah array ke format JSON dan tampilkan
    echo json_encode([
        "success" => true,
        "data" => $result,
        "message" => "Data berhasil diambil"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "data" => [],
        "message" => "Gagal mengambil data: " . mysqli_error($conn)
    ]);
}
?>
