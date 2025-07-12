# 📚 Dokumentasi Form Backend Ruang-Baca

## 🎯 Overview
Dokumentasi ini menjelaskan sistem form backend untuk aplikasi Ruang-Baca yang terdiri dari 3 modul utama: **Buku**, **Review**, dan **User/Login**. Semua form telah dioptimalkan dengan fitur-fitur modern dan user-friendly.

## 📋 Daftar Form yang Tersedia

### 📖 Modul Buku (`/backend/buku/`)

#### 1. **Create Buku** (`create.php`)
- **Fungsi**: Menambahkan buku baru ke perpustakaan
- **Fitur**:
  - ✅ Form input lengkap dengan validasi
  - ✅ Upload gambar cover buku (JPG, PNG, GIF)
  - ✅ Upload file PDF buku
  - ✅ Preview file yang diupload
  - ✅ Notifikasi sukses yang tetap di halaman yang sama
  - ✅ Form dikosongkan setelah berhasil menambahkan
  - ✅ Validasi input real-time
  - ✅ Responsive design

#### 2. **Read Buku** (`read.php`)
- **Fungsi**: Menampilkan daftar semua buku
- **Fitur**:
  - ✅ Tabel daftar buku dengan informasi lengkap
  - ✅ Preview cover buku
  - ✅ Tombol aksi: Lihat, Edit, Hapus
  - ✅ Sorting berdasarkan ID terbaru
  - ✅ Responsive table design
  - ✅ Tombol "Tambah Buku Baru"

#### 3. **Update Buku** (`update.php`)
- **Fungsi**: Menampilkan daftar buku untuk dipilih untuk diedit
- **Fitur**:
  - ✅ Tabel daftar buku dengan tombol edit
  - ✅ Tombol aksi: Lihat, Edit
  - ✅ Navigasi ke form edit individual
  - ✅ Tombol "Tambah Buku Baru"

#### 4. **Edit Form Buku** (`edit_form.php`)
- **Fungsi**: Form edit buku individual
- **Fitur**:
  - ✅ Form edit dengan data yang sudah terisi
  - ✅ Preview file yang sudah ada
  - ✅ Upload file baru (opsional)
  - ✅ Validasi input
  - ✅ Notifikasi sukses
  - ✅ Responsive design

#### 5. **Delete Buku** (`delete.php`)
- **Fungsi**: Menampilkan daftar buku untuk dipilih untuk dihapus
- **Fitur**:
  - ✅ Tabel daftar buku dengan tombol hapus
  - ✅ Tombol aksi: Lihat, Hapus
  - ✅ Peringatan penghapusan
  - ✅ Navigasi ke konfirmasi penghapusan

#### 6. **Delete Confirm Buku** (`delete_confirm.php`)
- **Fungsi**: Konfirmasi penghapusan buku individual
- **Fitur**:
  - ✅ Preview data buku yang akan dihapus
  - ✅ Konfirmasi penghapusan
  - ✅ Peringatan permanen
  - ✅ Hapus file terkait (gambar & PDF)

#### 7. **View Buku** (`view.php`)
- **Fungsi**: Menampilkan detail buku
- **Fitur**:
  - ✅ Tampilan detail lengkap buku
  - ✅ Preview cover dan PDF
  - ✅ Tombol download PDF
  - ✅ Responsive design

---

### ⭐ Modul Review (`/backend/review/`)

#### 1. **Create Review** (`create.php`)
- **Fungsi**: Menambahkan review baru
- **Fitur**:
  - ✅ Form input review dengan validasi
  - ✅ Rating bintang interaktif (1-5)
  - ✅ Validasi email dan pesan
  - ✅ Notifikasi sukses yang tetap di halaman yang sama
  - ✅ Form dikosongkan setelah berhasil menambahkan
  - ✅ Responsive design

#### 2. **Read Review** (`read.php`)
- **Fungsi**: Menampilkan daftar semua review
- **Fitur**:
  - ✅ Tabel daftar review dengan informasi lengkap
  - ✅ Display rating bintang
  - ✅ Tombol aksi: Lihat, Edit, Hapus
  - ✅ Sorting berdasarkan ID terbaru
  - ✅ Responsive table design

#### 3. **Update Review** (`update.php`)
- **Fungsi**: Menampilkan daftar review untuk dipilih untuk diedit
- **Fitur**:
  - ✅ Tabel daftar review dengan tombol edit
  - ✅ Tombol aksi: Lihat, Edit
  - ✅ Navigasi ke form edit individual
  - ✅ Tombol "Tambah Review Baru"

#### 4. **Edit Form Review** (`edit_form.php`)
- **Fungsi**: Form edit review individual
- **Fitur**:
  - ✅ Form edit dengan data yang sudah terisi
  - ✅ Rating bintang interaktif
  - ✅ Validasi input
  - ✅ Notifikasi sukses
  - ✅ Responsive design

#### 5. **Delete Review** (`delete.php`)
- **Fungsi**: Menampilkan daftar review untuk dipilih untuk dihapus
- **Fitur**:
  - ✅ Tabel daftar review dengan tombol hapus
  - ✅ Tombol aksi: Lihat, Hapus
  - ✅ Peringatan penghapusan
  - ✅ Navigasi ke konfirmasi penghapusan

#### 6. **Delete Confirm Review** (`delete_confirm.php`)
- **Fungsi**: Konfirmasi penghapusan review individual
- **Fitur**:
  - ✅ Preview data review yang akan dihapus
  - ✅ Konfirmasi penghapusan
  - ✅ Peringatan permanen
  - ✅ Avatar reviewer

#### 7. **View Review** (`view.php`)
- **Fungsi**: Menampilkan detail review
- **Fitur**:
  - ✅ Tampilan detail lengkap review
  - ✅ Rating bintang visual
  - ✅ Responsive design

---

### 👤 Modul User/Login (`/backend/login/`)

#### 1. **Create User** (`create_user.php`)
- **Fungsi**: Menambahkan user baru
- **Fitur**:
  - ✅ Form registrasi user
  - ✅ Validasi input
  - ✅ Enkripsi password
  - ✅ Notifikasi sukses
  - ✅ Responsive design

#### 2. **Read User** (`read_user.php`)
- **Fungsi**: Menampilkan daftar semua user
- **Fitur**:
  - ✅ Tabel daftar user
  - ✅ Tombol aksi: Lihat, Edit, Hapus
  - ✅ Responsive table design

#### 3. **Update User** (`update_user.php`)
- **Fungsi**: Form edit user
- **Fitur**:
  - ✅ Form edit user
  - ✅ Validasi input
  - ✅ Update password (opsional)
  - ✅ Notifikasi sukses

#### 4. **Delete User** (`delete_user.php`)
- **Fungsi**: Form hapus user
- **Fitur**:
  - ✅ Konfirmasi penghapusan
  - ✅ Preview data user
  - ✅ Peringatan permanen

#### 5. **View User** (`view_user.php`)
- **Fungsi**: Menampilkan detail user
- **Fitur**:
  - ✅ Tampilan detail user
  - ✅ Responsive design

#### 6. **Login User** (`login_user.php`)
- **Fungsi**: Form login user
- **Fitur**:
  - ✅ Form login
  - ✅ Validasi credentials
  - ✅ Session management
  - ✅ Redirect setelah login

---

## 🎨 Fitur Umum Semua Form

### ✨ UI/UX Features
- **Modern Design**: Gradient background, rounded corners, shadows
- **Responsive**: Mobile-friendly design
- **Animations**: Smooth transitions dan hover effects
- **Icons**: Emoji icons untuk visual appeal
- **Color Coding**: Warna berbeda untuk setiap jenis aksi

### 🔒 Security Features
- **Input Validation**: Validasi server-side dan client-side
- **SQL Injection Protection**: Prepared statements
- **XSS Protection**: HTML escaping
- **File Upload Security**: Validasi tipe file dan ukuran
- **Password Hashing**: Enkripsi password user

### 📱 Responsive Design
- **Mobile First**: Optimized untuk mobile devices
- **Flexible Layout**: Grid dan flexbox untuk layout
- **Touch Friendly**: Tombol dan input yang mudah disentuh
- **Readable Text**: Font size yang sesuai untuk mobile

### 🔄 User Experience
- **Loading States**: Indikator loading saat proses
- **Success/Error Messages**: Notifikasi yang jelas
- **Form Persistence**: Data form tidak hilang saat error
- **Navigation**: Breadcrumb dan tombol kembali
- **Confirmation**: Konfirmasi untuk aksi penting

---

## 🚀 Cara Penggunaan

### 1. **Akses Form**
```
http://localhost/backend/buku/create.php
http://localhost/backend/review/create.php
http://localhost/backend/login/create_user.php
```

### 2. **Workflow CRUD**
- **Create**: Form input → Validasi → Simpan → Notifikasi sukses
- **Read**: Tabel daftar → Tombol aksi → Navigasi ke detail/edit/delete
- **Update**: Daftar → Pilih item → Form edit → Simpan → Notifikasi
- **Delete**: Daftar → Pilih item → Konfirmasi → Hapus → Notifikasi

### 3. **File Upload**
- **Gambar**: JPG, PNG, GIF (max 5MB)
- **PDF**: File PDF (max 10MB)
- **Auto Rename**: Timestamp + nama file asli
- **Validation**: Tipe file dan ukuran

---

## 🔧 Konfigurasi Database

### Struktur Tabel Buku
```sql
CREATE TABLE buku (
    id_buku INT PRIMARY KEY AUTO_INCREMENT,
    judul VARCHAR(255) NOT NULL,
    penulis VARCHAR(255) NOT NULL,
    kategori VARCHAR(100) NOT NULL,
    tahun_terbit INT,
    jumlah_halaman INT,
    penerbit VARCHAR(255),
    deskripsi TEXT,
    gambar VARCHAR(255),
    file_pdf VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Struktur Tabel Review
```sql
CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    pesan TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Struktur Tabel User
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 Struktur File

```
backend/
├── buku/
│   ├── create.php          # Form tambah buku
│   ├── read.php            # Daftar buku
│   ├── update.php          # Daftar buku untuk edit
│   ├── edit_form.php       # Form edit buku
│   ├── delete.php          # Daftar buku untuk hapus
│   ├── delete_confirm.php  # Konfirmasi hapus buku
│   └── view.php            # Detail buku
├── review/
│   ├── create.php          # Form tambah review
│   ├── read.php            # Daftar review
│   ├── update.php          # Daftar review untuk edit
│   ├── edit_form.php       # Form edit review
│   ├── delete.php          # Daftar review untuk hapus
│   ├── delete_confirm.php  # Konfirmasi hapus review
│   └── view.php            # Detail review
├── login/
│   ├── create_user.php     # Form tambah user
│   ├── read_user.php       # Daftar user
│   ├── update_user.php     # Form edit user
│   ├── delete_user.php     # Form hapus user
│   ├── view_user.php       # Detail user
│   └── login_user.php      # Form login
├── uploads/
│   ├── images/             # Folder gambar buku
│   └── pdfs/               # Folder PDF buku
└── config.php              # Konfigurasi database
```

---

## 🎯 Keunggulan Sistem

### ✅ **User Experience**
- Interface yang intuitif dan mudah digunakan
- Feedback yang jelas untuk setiap aksi
- Navigasi yang konsisten
- Loading states dan animasi

### ✅ **Security**
- Validasi input yang ketat
- Protection terhadap SQL injection
- File upload yang aman
- Password hashing

### ✅ **Performance**
- Optimized queries
- Efficient file handling
- Responsive design
- Fast loading times

### ✅ **Maintainability**
- Code yang terstruktur
- Dokumentasi yang lengkap
- Consistent coding style
- Modular architecture

---

## 🔄 Integrasi dengan Frontend

Semua form backend terintegrasi dengan API yang digunakan frontend React:

- **Buku API**: `/backend/buku/read.php` (JSON response)
- **Review API**: `/backend/review/read.php` (JSON response)
- **User API**: `/backend/login/` (Session-based)

Data yang diinput melalui form backend langsung tersedia di frontend tanpa perlu refresh.

---

## 📞 Support

Untuk pertanyaan atau masalah terkait form backend, silakan hubungi tim development atau buat issue di repository.

---

*Dokumentasi ini terakhir diperbarui pada: Desember 2024* 