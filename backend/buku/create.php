<?php
// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../config/koneksi.php';

// Handle file uploads
$judul = $_POST['judul'];
$penulis = $_POST['penulis'];
$kategori = $_POST['kategori'];
$tahun = $_POST['tahun_terbit'];
$halaman = $_POST['jumlah_halaman'];
$penerbit = $_POST['penerbit'];

// Handle PDF file upload
$file_pdf = "";
if (isset($_FILES['pdf_file']) && $_FILES['pdf_file']['error'] == 0) {
    $pdf_name = time() . '_' . $_FILES['pdf_file']['name'];
    $pdf_destination = '../uploads/pdfs/' . $pdf_name;
    
    // Create directory if not exists
    if (!file_exists('../uploads/pdfs/')) {
        mkdir('../uploads/pdfs/', 0777, true);
    }
    
    if (move_uploaded_file($_FILES['pdf_file']['tmp_name'], $pdf_destination)) {
        $file_pdf = $pdf_name;
    }
}

// Handle image file upload
$gambar = "";
if (isset($_FILES['image_file']) && $_FILES['image_file']['error'] == 0) {
    $image_name = time() . '_' . $_FILES['image_file']['name'];
    $image_destination = '../uploads/images/' . $image_name;
    
    // Create directory if not exists
    if (!file_exists('../uploads/images/')) {
        mkdir('../uploads/images/', 0777, true);
    }
    
    if (move_uploaded_file($_FILES['image_file']['tmp_name'], $image_destination)) {
        $gambar = $image_name;
    }
} elseif (isset($_POST['gambar_url']) && !empty($_POST['gambar_url'])) {
    // Use URL image if provided
    $gambar = $_POST['gambar_url'];
}

$sql = "INSERT INTO buku (judul, penulis, kategori, tahun_terbit, jumlah_halaman, penerbit, file_pdf, gambar)
        VALUES ('$judul', '$penulis', '$kategori', '$tahun', $halaman, '$penerbit', '$file_pdf', '$gambar')";

if (mysqli_query($conn, $sql)) {
    echo json_encode([
        "pesan" => "Buku berhasil ditambahkan",
        "file_pdf" => $file_pdf,
        "gambar" => $gambar
    ]);
} else {
    echo json_encode([
        "pesan" => "Gagal menambahkan buku: " . mysqli_error($conn)
    ]);
}
?>
