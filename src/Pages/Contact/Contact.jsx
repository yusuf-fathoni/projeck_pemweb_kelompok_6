import React, { useState, useEffect } from 'react';
import './Contact.css';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const navigate = useNavigate();
  const [showReviews, setShowReviews] = useState(false);
  const [reviewsLoaded, setReviewsLoaded] = useState(false); // Track if reviews were ever loaded
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Fix AOS configuration to prevent Range errors
    try {
      AOS.init({ 
        duration: 1000,
        once: true,
        disable: 'mobile', // Disable AOS on mobile to prevent errors
        offset: 50,
        delay: 0,
        easing: 'ease-in-out'
      });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
    
    // Cleanup function to prevent memory leaks
    return () => {
      try {
        AOS.refresh();
      } catch (error) {
        console.warn('AOS refresh failed:', error);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost/backend/review/create.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: formData.name,
          email: formData.email,
          pesan: formData.message,
        }),
      });

      const result = await response.json();

      alert(result.message); // Tampilkan pesan dari server
      setFormData({ name: '', email: '', message: '' }); // Reset form
      navigate('/'); // Balik ke home
    } catch (error) {
      alert('Gagal mengirim pesan. Silakan coba lagi.');
      console.error(error);
    }
  };

  const fetchReviews = async () => {
    setLoading(true);
    setShowReviews(true); // Set showReviews true sebelum fetch
    setReviewsLoaded(true); // Mark that reviews have been loaded
    try {
      const response = await fetch('http://localhost/backend/review/read.php');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      alert('Gagal mengambil data review. Silakan coba lagi.');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const closeReviews = () => {
    setShowReviews(false);
    setEditingReview(null);
  };

  const openEmailModal = () => {
    setShowEmailModal(true);
  };

  const closeEmailModal = () => {
    setShowEmailModal(false);
    // Hanya reset userEmail jika belum terverifikasi
    if (!isEmailVerified()) {
      setUserEmail('');
    }
  };

  const verifyEmail = () => {
    if (!userEmail.trim()) {
      alert('Masukkan email Anda');
      return;
    }
    
    const userReviews = reviews.filter(review => review.email === userEmail);
    if (userReviews.length === 0) {
      alert('Tidak ada review dengan email tersebut');
      return;
    }
    
    setShowEmailModal(false);
    // Jangan reset userEmail agar tombol edit/hapus bisa muncul
    // setUserEmail('');
    // Email sudah terverifikasi, buka modal review untuk menampilkan tombol edit/hapus
    setShowReviews(true);
    alert(`Email berhasil diverifikasi! Anda dapat mengedit dan menghapus review Anda.`);
  };

  const startEditReview = (review) => {
    if (review.email !== userEmail) {
      alert('Anda hanya bisa mengedit review Anda sendiri');
      return;
    }
    
    setEditingReview({
      id: review.id_review, // Gunakan id_review dari backend
      nama: review.nama,
      email: review.email,
      pesan: review.pesan
    });
  };

  const cancelEdit = () => {
    setEditingReview(null);
  };

  const saveEdit = async () => {
    if (!editingReview) return;

    try {
      const response = await fetch('http://localhost/backend/review/update.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingReview.id,
          nama: editingReview.nama,
          email: editingReview.email,
          pesan: editingReview.pesan,
        }),
      });

      const result = await response.json();

      if (result.message) {
        alert(result.message);
        setEditingReview(null);
        // Refresh reviews
        fetchReviews();
      } else {
        alert('Gagal mengupdate review');
      }
    } catch (error) {
      alert('Gagal mengupdate review. Silakan coba lagi.');
      console.error('Update error:', error);
    }
  };

  const deleteReview = async (review) => {
    if (review.email !== userEmail) {
      alert('Anda hanya bisa menghapus review Anda sendiri');
      return;
    }

    if (!window.confirm('Apakah Anda yakin ingin menghapus review ini?')) {
      return;
    }

    try {
      const response = await fetch('http://localhost/backend/review/delete.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: review.id_review, // Gunakan id_review dari backend
        }),
      });

      const result = await response.json();

      if (result.message) {
        alert(result.message);
        // Refresh reviews
        fetchReviews();
      } else {
        alert('Gagal menghapus review');
      }
    } catch (error) {
      alert('Gagal menghapus review. Silakan coba lagi.');
      console.error('Delete error:', error);
    }
  };

  const handleEditChange = (field, value) => {
    setEditingReview(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const canEditReview = (review) => {
    return userEmail && review.email === userEmail;
  };

  // Check if user has verified their email
  const isEmailVerified = () => {
    return userEmail && userEmail.trim() !== '' && reviews.some(review => review.email === userEmail);
  };

  const resetVerification = () => {
    setUserEmail('');
    alert('Verifikasi email telah direset. Silakan verifikasi email lain jika diperlukan.');
  };

  return (
    <>
      <Header />

      <div className="contact-container">
        <div className="class-button" data-aos="fade-down">
          <button className="back-button" onClick={() => navigate('/')}>
            &larr; Kembali
          </button>
          <button className="review-button" onClick={fetchReviews} disabled={loading}>
            {loading ? 'Loading...' : '📝 Lihat Review'}
          </button>
          {reviewsLoaded && (
            <div className="verification-buttons">
              <button className="verify-button" onClick={openEmailModal}>
                {isEmailVerified() ? '✅ Email Terverifikasi' : '🔐 Verifikasi Email'}
              </button>
              {isEmailVerified() && (
                <button className="reset-button" onClick={resetVerification}>
                  🔄 Reset
                </button>
              )}
            </div>
          )}
        </div>

        <h2 className="section-title" data-aos="fade-up">HALAMAN CONTACT</h2>

        <h2 className="contact-title" data-aos="fade-up">
          CONTACT <span>US</span>
        </h2>
        <p className="contact-desc" data-aos="fade-up">
          Kami senang mendengar dari Anda. Silahkan hubungi kami melalui informasi berikut atau kirim pesan langsung.
        </p>

        <div className="contact-content">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-right"
          >
            <label>Nama:</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label>Pesan:</label>
            <textarea
              rows="4"
              placeholder="Tulis pesan Anda"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">KIRIM</button>
          </form>

          <div className="contact-info" data-aos="fade-left">
            <h3>Info</h3>
            <p>
              <i className="fa fa-envelope"></i> ruangbaca33@gmail.com
            </p>
            <p>
              <i className="fa fa-phone"></i> +62 876-5987-3407
            </p>
            <p>
              <i className="fa fa-clock-o"></i> 09.00–17.00 WIB
            </p>

            <div className="footer-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Email Verification Modal */}
      {showEmailModal && (
        <div className="review-modal-overlay" onClick={closeEmailModal}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="review-modal-header">
              <h3>Verifikasi Email</h3>
              <button className="close-button" onClick={closeEmailModal}>
                &times;
              </button>
            </div>
            <div className="review-modal-content">
              <p>Masukkan email Anda untuk mengedit/menghapus review:</p>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="email-input"
              />
              <div className="modal-buttons">
                <button className="verify-email-btn" onClick={verifyEmail}>
                  Verifikasi
                </button>
                <button className="cancel-btn" onClick={closeEmailModal}>
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviews && (
        <div className="review-modal-overlay" onClick={closeReviews}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="review-modal-header">
              <h3>Review dari Pengunjung</h3>
              <button className="close-button" onClick={closeReviews}>
                &times;
              </button>
            </div>
            <div className="review-modal-content">
              {loading ? (
                <p className="no-reviews">Loading review...</p>
              ) : reviews.length === 0 ? (
                <p className="no-reviews">Belum ada review.</p>
              ) : (
                <div className="reviews-list">
                  {reviews.map((review, index) => {
                    return (
                    <div key={index} className="review-item">
                      {editingReview && editingReview.id === review.id_review ? (
                        // Edit Mode - Semua field bisa diedit
                        <div className="edit-review-form">
                          <div className="edit-field">
                            <label>Nama:</label>
                            <input
                              type="text"
                              value={editingReview.nama}
                              onChange={(e) => handleEditChange('nama', e.target.value)}
                              className="edit-input"
                              placeholder="Nama"
                            />
                          </div>
                          <div className="edit-field">
                            <label>Email:</label>
                            <input
                              type="email"
                              value={editingReview.email}
                              onChange={(e) => handleEditChange('email', e.target.value)}
                              className="edit-input"
                              placeholder="Email"
                            />
                          </div>
                          <div className="edit-field">
                            <label>Pesan:</label>
                            <textarea
                              value={editingReview.pesan}
                              onChange={(e) => handleEditChange('pesan', e.target.value)}
                              className="edit-textarea"
                              placeholder="Pesan"
                              rows="4"
                            />
                          </div>
                          <div className="edit-buttons">
                            <button className="save-btn" onClick={saveEdit}>
                              Simpan
                            </button>
                            <button className="cancel-btn" onClick={cancelEdit}>
                              Batal
                            </button>
                          </div>
                        </div>
                      ) : (
                        // View Mode
                        <>
                          <div className="review-header">
                            <h4>{review.nama}</h4>
                            <span className="review-date">
                              {new Date(review.tanggal_kirim).toLocaleDateString('id-ID', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <p className="review-email">{review.email}</p>
                          <p className="review-message">{review.pesan}</p>
                          {canEditReview(review) && (
                            <div className="review-actions">
                              <button 
                                className="edit-btn" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  startEditReview(review);
                                }}
                              >
                                ✏️ Edit
                              </button>
                              <button 
                                className="delete-btn" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  deleteReview(review);
                                }}
                              >
                                🗑️ Hapus
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Contact;
