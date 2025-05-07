import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import './BookDetail.css'; // siapkan CSS-nya
import sampleBookCover from '../assets/coverbuku.png'; // contoh gambar buku

function BookDetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // nanti bisa dipakai buat ambil data dari backend atau file

  return (
    <div className="book-detail-container">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h2>Detail Buku</h2>
      </div>

      <div className="book-detail-content">
        <div className="book-image">
          <img src={sampleBookCover} alt="Sampul Buku" />
          <a href="/files/buku1.pdf" target="_blank" rel="noopener noreferrer">
            <button className="view-button">Lihat Buku</button>
          </a>
        </div>

        <div className="book-info">
          <h3>Judul Buku: Dunia Data</h3>
          <p><strong>Sinopsis:</strong> Buku ini menjelaskan konsep dasar dan penerapan ilmu data untuk pemula.</p>
          <p><strong>Penulis:</strong> Anisa Pratama</p>
          <p><strong>Tahun Terbit:</strong> 2023</p>
          <p><strong>Jumlah Halaman:</strong> 220</p>
          <p><strong>Penerbit:</strong> Baca Cerdas</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookDetail;
