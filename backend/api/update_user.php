<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'connect.php';
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$id = $_POST['id'] ?? null;
$nama = $_POST['nama'] ?? null;
$email = $_POST['email'] ?? null;
$biodata = $_POST['biodata'] ?? null;

// Cek jika ada file foto_profil
$foto_profil = null;
if (isset($_FILES['foto_profil']) && $_FILES['foto_profil']['error'] === UPLOAD_ERR_OK) {
    $ext = pathinfo($_FILES['foto_profil']['name'], PATHINFO_EXTENSION);
    $filename = 'profile_' . $id . '_' . time() . '.' . $ext;
    $target = '../public/images/' . $filename; // Pastikan folder ini ada dan writable
    if (move_uploaded_file($_FILES['foto_profil']['tmp_name'], $target)) {
        $foto_profil = $filename;
    }
}

// Validasi
if (!$id || !$nama || !$email) {
    echo json_encode(["error" => "ID, nama, dan email wajib diisi"]);
    exit;
}

// Cek email sudah digunakan user lain
$cek = $conn->prepare("SELECT id FROM users WHERE email = ? AND id != ?");
$cek->bind_param("si", $email, $id);
$cek->execute();
$cek->store_result();
if ($cek->num_rows > 0) {
    echo json_encode(["error" => "Email sudah digunakan user lain"]);
    exit;
}

// Update ke database
if ($foto_profil) {
    $stmt = $conn->prepare("UPDATE users SET nama = ?, email = ?, biodata = ?, foto_profil = ? WHERE id = ?");
    $stmt->bind_param("ssssi", $nama, $email, $biodata, $foto_profil, $id);
} else {
    $stmt = $conn->prepare("UPDATE users SET nama = ?, email = ?, biodata = ? WHERE id = ?");
    $stmt->bind_param("sssi", $nama, $email, $biodata, $id);
}

if ($stmt->execute()) {
    echo json_encode(["message" => "User berhasil diupdate", "foto_profil" => $foto_profil]);
} else {
    echo json_encode(["error" => "Gagal mengupdate user: " . $stmt->error]);
}
?>
