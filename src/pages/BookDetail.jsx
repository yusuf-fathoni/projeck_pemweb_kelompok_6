import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import bukuList from '../data/bukuList';

function BookDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = bukuList.find(b => b.id === parseInt(id));

  if (!book) return <p>Buku tidak ditemukan.</p>;

  return (
    <div className="book-detail-container">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h2>Detail Buku</h2>
      </div>

      <div className="book-detail-content">
        <div className="book-image">
          <img src={book.image} alt="Sampul Buku" />
          <a href={book.pdf} target="_blank" rel="noopener noreferrer">
            <button className="view-button">Lihat Buku</button>
          </a>
        </div>

        <div className="book-info">
          <h3>Judul Buku: {book.title}</h3>
          <p><strong>Sinopsis:</strong> {book.description}</p>
          <p><strong>Penulis:</strong> {book.author}</p>
          <p><strong>Tahun Terbit:</strong> {book.year}</p>
          <p><strong>Jumlah Halaman:</strong> {book.pages}</p>
          <p><strong>Penerbit:</strong> {book.publisher}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookDetail;