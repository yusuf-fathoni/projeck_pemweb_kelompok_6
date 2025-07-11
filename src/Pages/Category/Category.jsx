import React, { useEffect, useState } from 'react';
import './Category.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CardBook from '../../Components/CardBook/CardBook';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const initialDummyBooks = [
  { id_buku: 'd1', judul: 'Agama Negara', kategori: 'AGAMA', penulis: 'Dr. A. Bakir Ihsan, Dr Cucu Nurhayati', tahun_terbit: '2020', jumlah_halaman: '200', penerbit: 'Penerbit A', file_pdf: '', gambar: 'images/agama1.jpeg' },
  { id_buku: 'd2', judul: 'PPAI', kategori: 'AGAMA', penulis: 'M. Ali Mahmudi, Syafruddin, Jumahir, Farid Haluti, Kuni Safingah, Taufik Abdillah Syukur, Isna Nurul Inayati, Sudirman', tahun_terbit: '2019', jumlah_halaman: '180', penerbit: 'Penerbit B', file_pdf: '', gambar: 'images/agama2.jpeg' },
  { id_buku: 'd3', judul: 'Merawat NKRI', kategori: 'AGAMA', penulis: 'Dr. H.M. Zaki, S.Ag., M.Pd', tahun_terbit: '2021', jumlah_halaman: '210', penerbit: 'Penerbit C', file_pdf: '', gambar: 'images/agama3.jpg' },
  { id_buku: 'd4', judul: 'Toleransi Agama', kategori: 'AGAMA', penulis: 'Dr. Baidi Bukhori, S.Ag., M.Si', tahun_terbit: '2018', jumlah_halaman: '170', penerbit: 'Penerbit D', file_pdf: '', gambar: 'images/agama4.jpeg' },
  { id_buku: 'd5', judul: 'Toleransi', kategori: 'AGAMA', penulis: 'Moch. Sya`roni Hasan, M.Pd.I.', tahun_terbit: '2017', jumlah_halaman: '160', penerbit: 'Penerbit E', file_pdf: '', gambar: 'images/agama5.jpeg' },
  { id_buku: 'd6', judul: 'Cantik itu Luka', kategori: 'FIKSI', penulis: 'Eka Kurniawan', tahun_terbit: '2015', jumlah_halaman: '300', penerbit: 'Penerbit F', file_pdf: '', gambar: 'images/fiksi1.jpg' },
  { id_buku: 'd7', judul: 'Sang Pemimpi', kategori: 'FIKSI', penulis: 'Andrea Hirata', tahun_terbit: '2016', jumlah_halaman: '250', penerbit: 'Penerbit G', file_pdf: '', gambar: 'images/fiksi2.jpg' },
  { id_buku: 'd8', judul: 'Berani Bahagia', kategori: 'FIKSI', penulis: 'Ichiro Kishimi, Fumitake Koga', tahun_terbit: '2018', jumlah_halaman: '220', penerbit: 'Penerbit H', file_pdf: '', gambar: 'images/fiksi3.png' },
  { id_buku: 'd9', judul: 'Berjalan di Atas Air', kategori: 'FIKSI', penulis: 'Rahman Mangunssara', tahun_terbit: '2019', jumlah_halaman: '190', penerbit: 'Penerbit I', file_pdf: '', gambar: 'images/fiksi4.jpg' },
  { id_buku: 'd10', judul: 'Laut Bercerita', kategori: 'FIKSI', penulis: 'Leila S. Chudori', tahun_terbit: '2020', jumlah_halaman: '210', penerbit: 'Penerbit J', file_pdf: '', gambar: 'images/fiksi5.jpeg' },
  { id_buku: 'd11', judul: 'Web Programming', kategori: 'PEMROGRAMAN', penulis: 'Ani Oktarini Sari, Ari Abdillah, Sunarti', tahun_terbit: '2022', jumlah_halaman: '320', penerbit: 'Penerbit K', file_pdf: '', gambar: 'images/program1.jpg' },
  { id_buku: 'd12', judul: 'Belajar Web', kategori: 'PEMROGRAMAN', penulis: 'Dendy Kurniawan, S.Kom., M.Kom', tahun_terbit: '2021', jumlah_halaman: '280', penerbit: 'Penerbit L', file_pdf: '', gambar: 'images/program2.png' },
  { id_buku: 'd13', judul: 'Membuat Web', kategori: 'PEMROGRAMAN', penulis: 'Moh Muthohir, S.Kom., M.Kom', tahun_terbit: '2020', jumlah_halaman: '260', penerbit: 'Penerbit M', file_pdf: '', gambar: 'images/program3.jpg' },
  { id_buku: 'd14', judul: 'Dasar pemrograman', kategori: 'PEMROGRAMAN', penulis: 'Trija Fayeldi, M.Si, Tatik Retno Murniasih, S.Si., M.Pd', tahun_terbit: '2019', jumlah_halaman: '240', penerbit: 'Penerbit N', file_pdf: '', gambar: 'images/program4.jpg' },
  { id_buku: 'd15', judul: 'Pemrograman', kategori: 'PEMROGRAMAN', penulis: 'Ismah, M.Si', tahun_terbit: '2018', jumlah_halaman: '230', penerbit: 'Penerbit O', file_pdf: '', gambar: 'images/program5.jpeg' },
  { id_buku: 'd16', judul: 'Bola Volly', kategori: 'OLAHRAGA', penulis: 'Dwi Yulia Nur Mulyadi, M', tahun_terbit: '2017', jumlah_halaman: '150', penerbit: 'Penerbit P', file_pdf: '', gambar: 'images/olahraga1.jpeg' },
  { id_buku: 'd17', judul: 'Sepakbola', kategori: 'OLAHRAGA', penulis: 'Agus Salim', tahun_terbit: '2016', jumlah_halaman: '140', penerbit: 'Penerbit Q', file_pdf: '', gambar: 'images/olahraga2.jpeg' },
  { id_buku: 'd18', judul: 'Bola Basket', kategori: 'OLAHRAGA', penulis: 'Dr. Saichudin, M.Kes, Sayyid Agil Rifqi Munawar, S.Or', tahun_terbit: '2015', jumlah_halaman: '130', penerbit: 'Penerbit R', file_pdf: '', gambar: 'images/olahraga3.jpeg' },
  { id_buku: 'd19', judul: 'Olahraga Yoga', kategori: 'OLAHRAGA', penulis: 'I Wayan Ambartana, S.K.M., M.Fis. Ni Made Yuni Gumala, S.K.M., M.Kes.', tahun_terbit: '2014', jumlah_halaman: '120', penerbit: 'Penerbit S', file_pdf: '', gambar: 'images/olahraga4.jpeg' },
  { id_buku: 'd20', judul: 'Tenis Meja', kategori: 'OLAHRAGA', penulis: 'Guntur Firmansyah, Didik Hariyanto', tahun_terbit: '2013', jumlah_halaman: '110', penerbit: 'Penerbit T', file_pdf: '', gambar: 'images/olahraga5.png' },
];

const categories = ['AGAMA', 'FIKSI', 'PEMROGRAMAN', 'OLAHRAGA'];

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dummyBooks, setDummyBooks] = useState(initialDummyBooks);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [editType, setEditType] = useState(null); // 'dummy' or 'db'
  // const daftarRef = React.useRef(null); // dihapus

  // Fetch books from backend
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost/backend/buku/read.php");
      const data = await response.json();
      if (data.success) {
        setBooks(data.data);
      } else {
        setError(data.message || "Gagal mengambil data buku");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengambil data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    fetchBooks();
    if (location.state && location.state.refresh) {
      fetchBooks();
      window.history.replaceState({}, document.title);
    }
    // eslint-disable-next-line
  }, [location.state]);

  // Edit dummy book (only in state)
  const handleEditDummy = (book) => {
    setEditId(book.id_buku);
    setEditForm({ ...book });
    setEditType('dummy');
  };

  // Edit db book
  const handleEditDb = (book) => {
    setEditId(book.id_buku);
    setEditForm({ ...book });
    setEditType('db');
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (editType === 'dummy') {
      setDummyBooks(dummyBooks.map(b => b.id_buku === editForm.id_buku ? { ...editForm } : b));
      setEditId(null);
      setEditType(null);
    } else if (editType === 'db') {
      try {
        const response = await fetch("http://localhost/backend/buku/update.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editForm),
        });
        const data = await response.json();
        if (data.pesan && data.pesan.includes("berhasil")) {
          setEditId(null);
          setEditType(null);
          fetchBooks();
        } else {
          alert("Gagal update buku");
        }
      } catch {
        alert("Terjadi kesalahan");
      }
    }
  };

  // Delete db book
  const handleDelete = async (id_buku) => {
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      try {
        const response = await fetch("http://localhost/backend/buku/delete.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: id_buku }),
        });
        const data = await response.json();
        if (data.success) {
          fetchBooks();
        } else {
          alert("Gagal menghapus buku");
        }
      } catch {
        alert("Terjadi kesalahan");
      }
    }
  };

  // Hapus buku dummy
  const handleDeleteDummy = (id_buku) => {
    if (window.confirm("Yakin ingin menghapus buku utama ini?")) {
      setDummyBooks(dummyBooks.filter(b => b.id_buku !== id_buku));
    }
  };

  // Gabungkan dummyBooks dan books dari backend
  const allBooks = [...dummyBooks, ...books];

  // Helper untuk resolve gambar
  const resolveImage = (book) => {
    if (book.gambar && book.gambar.startsWith('http')) {
      return book.gambar;
    } else if (book.gambar && book.gambar.startsWith('images/')) {
      return `/${book.gambar}`; // public/images/namafile
    } else if (book.gambar) {
      return `http://localhost/backend/uploads/images/${book.gambar}`;
    }
    return '/images/default-book.jpg';
  };

  // Helper untuk mendapatkan ID buku yang benar untuk navigasi
  const getBookId = (book) => {
    // Jika buku dari database, gunakan id_buku
    if (book.id_buku && !book.id_buku.startsWith('d')) {
      return book.id_buku;
    }
    // Jika buku dummy, gunakan id_buku
    return book.id_buku;
  };

  // Modal edit akan ditampilkan ketika editId !== null

  return (
    <>
      <Header />
      <div className="category-page">
        <div className="class-button">
          <button onClick={() => navigate('/')}>&larr; Kembali</button>
          <Link to="/add-book" className="add-book-btn">
            <button style={{ backgroundColor: '#4CAF50', color: 'white', marginLeft: '10px' }}>
              + Tambah Buku
            </button>
          </Link>
        </div>

        <h2 className="section-title">HALAMAN KATEGORI BUKU</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          categories.map((cat) => (
            <div key={cat} className="category-section">
              <h3>{cat}</h3>
              <div className="book-grid">
                {allBooks.filter((book) => book.kategori === cat).length === 0 ? (
                  <p style={{ color: '#888', fontStyle: 'italic' }}>Belum ada buku di kategori ini.</p>
                ) : (
                  allBooks
                    .filter((book) => book.kategori === cat)
                    .map((book) => (
                      <div key={book.id_buku} className="book-card-wrapper" data-aos="fade-up">
                        <div>
                          <div style={{ cursor: 'pointer' }} onClick={() => navigate(`/book/${getBookId(book)}`)}>
                            <CardBook
                              id={book.id_buku}
                              title={book.judul}
                              image={resolveImage(book)}
                            />
                          </div>
                          <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                            {String(book.id_buku).startsWith('d') ? (
                              <>
                                <button onClick={() => handleEditDummy(book)}>✏️ Edit</button>
                                <button onClick={() => handleDeleteDummy(book.id_buku)}>🗑️ Hapus</button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => handleEditDb(book)}>✏️ Edit</button>
                                <button onClick={() => handleDelete(book.id_buku)}>🗑️ Hapus</button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          ))
        )}

        {/* Modal Edit Buku */}
        {editId !== null && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
            onClick={() => { setEditId(null); setEditType(null); }}
          >
            <div 
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '30px',
                width: '100%',
                maxWidth: '500px',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(0)',
                animation: 'modalSlideIn 0.3s ease-out'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ margin: '0 0 20px 0', textAlign: 'center', color: '#333' }}>
                ✏️ Edit Buku
              </h3>
              <form onSubmit={handleEditSubmit} className="edit-book-form-modal">
                <div className="form-group">
                  <label>Judul Buku:</label>
                  <input 
                    name="judul" 
                    value={editForm.judul} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Penulis:</label>
                  <input 
                    name="penulis" 
                    value={editForm.penulis} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Kategori:</label>
                  <select 
                    name="kategori" 
                    value={editForm.kategori} 
                    onChange={handleEditChange} 
                    required
                  >
                    <option value="AGAMA">AGAMA</option>
                    <option value="FIKSI">FIKSI</option>
                    <option value="PEMROGRAMAN">PEMROGRAMAN</option>
                    <option value="OLAHRAGA">OLAHRAGA</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Tahun Terbit:</label>
                  <input 
                    name="tahun_terbit" 
                    type="number" 
                    value={editForm.tahun_terbit} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Jumlah Halaman:</label>
                  <input 
                    name="jumlah_halaman" 
                    type="number" 
                    value={editForm.jumlah_halaman} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Penerbit:</label>
                  <input 
                    name="penerbit" 
                    value={editForm.penerbit} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Sinopsis:</label>
                  <textarea 
                    name="synopsis" 
                    value={editForm.synopsis || ''} 
                    onChange={handleEditChange} 
                    rows="3"
                  />
                </div>
                
                <div className="form-group">
                  <label>Gambar:</label>
                  <input 
                    name="gambar" 
                    value={editForm.gambar} 
                    onChange={handleEditChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label>File PDF:</label>
                  <input 
                    name="file_pdf" 
                    value={editForm.file_pdf} 
                    onChange={handleEditChange} 
                  />
                </div>
                
                <div className="modal-actions">
                  <button type="submit" className="save-btn">💾 Simpan</button>
                  <button type="button" className="cancel-btn" onClick={() => { setEditId(null); setEditType(null); }}>
                    ❌ Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Category;

/* Tambahkan CSS di file Category.css:
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
}
.modal-edit-book {
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  z-index: 1001;
  min-width: 320px;
  max-width: 90vw;
}
.edit-book-form-modal input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 15px;
}
*/
