import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">

      {/* Navigasi kembali */}
      <div className="back-navigation">
        <Link to="/category" className="back-button">←</Link>
        <h2 className="page-title">📭 Contact Us</h2>
      </div>

      {/* Konten */}
      <div className="contact-content">
        <p className="contact-text">
          Kami senang mendengar dari Anda. Silakan hubungi kami melalui informasi berikut atau kirim pesan langsung:
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" placeholder="Nama Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" placeholder="Tulis pesan..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Kirim</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:Ruangbaca33@gmail.com">Ruangbaca33@gmail.com</a></p>
          <p><strong>Telepon:</strong> <a href="tel:+6287659873407">0876-5987-3407</a></p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-nav">
          <Link to="/" className="footer-item">Home</Link>
          <Link to="/about" className="footer-item">About</Link>
          <Link to="/category" className="footer-item">Category</Link>
          <Link to="/contact" className="footer-item">Contact</Link>
        </div>
        <div className="footer-text">
          <i>Created by Kelompok 6</i>
          <p>© 2025 Ruang Baca Digital. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
