<?php
// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../config/koneksi.php';

// Ambil data JSON dari Postman
$data = json_decode(file_get_contents("php://input"), true);

// Ambil isi data dari JSON
$id_buku = $data['id_buku'];
$judul = $data['judul'];
$penulis = $data['penulis'];
$kategori = $data['kategori'];
$tahun = $data['tahun_terbit'];
$jumlah_halaman = $data['jumlah_halaman'];
$penerbit = $data['penerbit'];
$file_pdf = $data['file_pdf'];
$gambar = $data['gambar'];

// Query untuk update data buku
$sql = "UPDATE buku SET 
            judul='$judul',
            penulis='$penulis',
            kategori='$kategori',
            tahun_terbit='$tahun',
            jumlah_halaman=$jumlah_halaman,
            penerbit='$penerbit',
            file_pdf='$file_pdf',
            gambar='$gambar'
        WHERE id_buku=$id_buku";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["pesan" => "Buku berhasil diperbarui"]);
} else {
    echo json_encode(["pesan" => "Gagal memperbarui buku"]);
}
?>
