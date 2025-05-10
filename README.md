# projeck_pemweb_kelompok_6

# 📚 Ruang Baca

Website sederhana yang dibuat dengan ReactJS untuk menampilkan koleksi buku digital dan informasi seputar perpustakaan. Project ini cocok digunakan untuk pembelajaran frontend development menggunakan React.

## 🚀 Fitur Utama

- Halaman Beranda dengan hero image dan daftar buku
- Navigasi antar halaman: Home, About, Contact, dan Kategori Buku
- Komponen modular: Header, Footer, Card Buku, dan Detail Buku
- Animasi menggunakan Framer Motion dan AOS
- Styling custom dengan CSS lokal (tanpa Tailwind atau Bootstrap)

## 🛠️ Teknologi yang Digunakan

- [ReactJS](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- CSS (tanpa framework UI)

##  User flow
    [Home Page]
     |
     |---> [Klik Buku] --------> [Book Detail Page]
     |
     |---> [Klik "About"] ------> [About Page]
     |
     |---> [Klik "Contact"] ----> [Contact Page]
     |
     |---> [Klik "Category"] ---> [Category Page]

## 📁 Struktur Folder

```plaintext
src/
├── assets/              # Gambar & aset visual
├── Components/          # Komponen UI seperti Header, Footer, dll
├── Pages/               # Halaman utama: Home, About, Contact, Category
├── styles/              # File CSS global
├── App.js               # Komponen utama aplikasi
├── index.js             # Entry point React
