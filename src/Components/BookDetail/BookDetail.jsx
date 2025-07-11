import React, { useState, useEffect } from 'react';
import './BookDetail.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';

// Data buku dari Category.jsx
const dummyBooks = [
  { id_buku: 'd1', judul: 'Agama Negara', kategori: 'AGAMA', penulis: 'Dr. A. Bakir Ihsan, Dr Cucu Nurhayati', tahun_terbit: '2020', jumlah_halaman: '200', penerbit: 'Penerbit A', file_pdf: '/files/Agama1.pdf', gambar: 'images/agama1.jpeg', synopsis: 'Agama dan negara merupakan dua entitas yang merepresentasikan kuasa dalam kehidupan umat manusia. Agama wujud kuasa langit (Tuhan) dan negara simbol kuasa bumi (manusia).' },
  { id_buku: 'd2', judul: 'PPAI', kategori: 'AGAMA', penulis: 'M. Ali Mahmudi, Syafruddin, Jumahir, Farid Haluti, Kuni Safingah, Taufik Abdillah Syukur, Isna Nurul Inayati, Sudirman', tahun_terbit: '2019', jumlah_halaman: '180', penerbit: 'Penerbit B', file_pdf: '/files/Agama2.pdf', gambar: 'images/agama2.jpeg', synopsis: 'Relasi agama dan negara semakin menemukan ruang ekspresinya di alam demokrasi yang memungkinkan keterlibatan kaum agamawan dalam politik.' },
  { id_buku: 'd3', judul: 'Merawat NKRI', kategori: 'AGAMA', penulis: 'Dr. H.M. Zaki, S.Ag., M.Pd', tahun_terbit: '2021', jumlah_halaman: '210', penerbit: 'Penerbit C', file_pdf: '/files/Agama3.pdf', gambar: 'images/agama3.jpg', synopsis: 'Pluralitas agama dan heterogenitas budaya menjadi ciri khas Bangsa Indonesia. Kedua entitas ini diyakini sebagai takdir.' },
  { id_buku: 'd4', judul: 'Toleransi Agama', kategori: 'AGAMA', penulis: 'Dr. Baidi Bukhori, S.Ag., M.Si', tahun_terbit: '2018', jumlah_halaman: '170', penerbit: 'Penerbit D', file_pdf: '/files/Agama4.pdf', gambar: 'images/agama4.jpeg', synopsis: 'Keragaman hayati, bahasa, budaya, adat, suku, hingga agama yang dimiliki Indonesia meniscayakan adanya toleransi antar warga negara.' },
  { id_buku: 'd5', judul: 'Toleransi', kategori: 'AGAMA', penulis: 'Moch. Sya`roni Hasan, M.Pd.I.', tahun_terbit: '2017', jumlah_halaman: '160', penerbit: 'Penerbit E', file_pdf: '/files/Agama5.pdf', gambar: 'images/agama5.jpeg', synopsis: 'Manusia sebagai makhluk sosial pasti mempunyai perbedaan, baik perbedaan dari segi kepribadiannya maupun dari segi sosialnya.' },
  { id_buku: 'd6', judul: 'Cantik itu Luka', kategori: 'FIKSI', penulis: 'Eka Kurniawan', tahun_terbit: '2015', jumlah_halaman: '300', penerbit: 'Penerbit F', file_pdf: '/files/Fiksi1.pdf', gambar: 'images/fiksi1.jpg', synopsis: 'Novel realisme magis yang menceritakan tragedi keluarga Dewi Ayu, seorang pelacur cantik, dan keturunan-keturunannya di kota Halimunda.' },
  { id_buku: 'd7', judul: 'Sang Pemimpi', kategori: 'FIKSI', penulis: 'Andrea Hirata', tahun_terbit: '2016', jumlah_halaman: '250', penerbit: 'Penerbit G', file_pdf: '/files/Fiksi2.pdf', gambar: 'images/fiksi2.jpg', synopsis: 'Menceritakan perjuangan tiga sahabat, Ikal, Arai, dan Jimbron, untuk meraih impian melanjutkan pendidikan ke jenjang tinggi di Perancis.' },
  { id_buku: 'd8', judul: 'Berani Bahagia', kategori: 'FIKSI', penulis: 'Ichiro Kishimi, Fumitake Koga', tahun_terbit: '2018', jumlah_halaman: '220', penerbit: 'Penerbit H', file_pdf: '/files/fiksi3.pdf', gambar: 'images/fiksi3.png', synopsis: 'Sang pemuda, yang kini sudah menjadi guru yang bertekad mem-praktikkan ide-ide Adler, menghubungi filsuf itu sekali lagi.' },
  { id_buku: 'd9', judul: 'Berjalan di Atas Air', kategori: 'FIKSI', penulis: 'Rahman Mangunssara', tahun_terbit: '2019', jumlah_halaman: '190', penerbit: 'Penerbit I', file_pdf: '/files/Fiksi4.pdf', gambar: 'images/fiksi4.jpg', synopsis: 'Novel yang ada di tangan Anda ini bukan cerita biasa, melainkan sebuah novel yang lahir dari pengalaman nyata sang penulis.' },
  { id_buku: 'd10', judul: 'Laut Bercerita', kategori: 'FIKSI', penulis: 'Leila S. Chudori', tahun_terbit: '2020', jumlah_halaman: '210', penerbit: 'Penerbit J', file_pdf: '/files/Fiksi5.pdf', gambar: 'images/fiksi5.jpeg', synopsis: 'Novel yang mengisahkan kisah nyata tentang sekelompok aktivis mahasiswa yang hilang pada tahun 1998, di masa Orde Baru.' },
  { id_buku: 'd11', judul: 'Web Programming', kategori: 'PEMROGRAMAN', penulis: 'Ani Oktarini Sari, Ari Abdillah, Sunarti', tahun_terbit: '2022', jumlah_halaman: '320', penerbit: 'Penerbit K', file_pdf: '/files/Program1.pdf', gambar: 'images/program1.jpg', synopsis: 'Buku Web Programing berisikan materi belajar mengenai dasar-dasar pemrograman web. Buku ini direkomendasikan bagi pemula belajar pemrograman web.' },
  { id_buku: 'd12', judul: 'Belajar Web', kategori: 'PEMROGRAMAN', penulis: 'Dendy Kurniawan, S.Kom., M.Kom', tahun_terbit: '2021', jumlah_halaman: '280', penerbit: 'Penerbit L', file_pdf: '/files/program2.pdf', gambar: 'images/program2.png', synopsis: 'Buku ini menjelaskan bagaimana belajar dasar-dasar web dengan mudah, praktis dan cepat disertakan contoh latihan-latihan.' },
  { id_buku: 'd13', judul: 'Membuat Web', kategori: 'PEMROGRAMAN', penulis: 'Moh Muthohir, S.Kom., M.Kom', tahun_terbit: '2020', jumlah_halaman: '260', penerbit: 'Penerbit M', file_pdf: '/files/Program3.pdf', gambar: 'images/program3.jpg', synopsis: 'Berisikan materi belajar mengenai dasar-dasar pemrograman web. Buku ini direkomendasikan bagi pemula belajar pemrograman web.' },
  { id_buku: 'd14', judul: 'Dasar pemrograman', kategori: 'PEMROGRAMAN', penulis: 'Trija Fayeldi, M.Si, Tatik Retno Murniasih, S.Si., M.Pd', tahun_terbit: '2019', jumlah_halaman: '240', penerbit: 'Penerbit N', file_pdf: '/files/Program4.pdf', gambar: 'images/program4.jpg', synopsis: 'Buku Web Programing berisikan materi belajar mengenai dasar-dasar pemrograman web. Buku ini direkomendasikan bagi pemula belajar pemrograman web.' },
  { id_buku: 'd15', judul: 'Pemrograman', kategori: 'PEMROGRAMAN', penulis: 'Ismah, M.Si', tahun_terbit: '2018', jumlah_halaman: '230', penerbit: 'Penerbit O', file_pdf: '/files/Program5.pdf', gambar: 'images/program5.jpeg', synopsis: 'Python merupakan salah satu bahasa pemrograman yang populer belakangan ini karena beberapa faktor fleksibelitas.' },
  { id_buku: 'd16', judul: 'Bola Volly', kategori: 'OLAHRAGA', penulis: 'Dwi Yulia Nur Mulyadi, M', tahun_terbit: '2017', jumlah_halaman: '150', penerbit: 'Penerbit P', file_pdf: '/files/Olahraga1.pdf', gambar: 'images/olahraga1.jpeg', synopsis: 'Buku pembelajaran bola voli yang berisi teknik-teknik dasar dan strategi permainan bola voli.' },
  { id_buku: 'd17', judul: 'Sepakbola', kategori: 'OLAHRAGA', penulis: 'Agus Salim', tahun_terbit: '2016', jumlah_halaman: '140', penerbit: 'Penerbit Q', file_pdf: '/files/Olahraga2.pdf', gambar: 'images/olahraga2.jpeg', synopsis: 'Pada dasarnya sepakbola adalah olahraga yang memainkan bola dengan menggunakan kaki. Tujuan utamanya dari permainan ini adalah untuk mencetak gol.' },
  { id_buku: 'd18', judul: 'Bola Basket', kategori: 'OLAHRAGA', penulis: 'Dr. Saichudin, M.Kes, Sayyid Agil Rifqi Munawar, S.Or', tahun_terbit: '2015', jumlah_halaman: '130', penerbit: 'Penerbit R', file_pdf: '/files/Olahraga3.pdf', gambar: 'images/olahraga3.jpeg', synopsis: 'Permainan bolabasket merupakan salah satu olahraga permainan bola besar berkelompok yang terdiri atas dua tim.' },
  { id_buku: 'd19', judul: 'Olahraga Yoga', kategori: 'OLAHRAGA', penulis: 'I Wayan Ambartana, S.K.M., M.Fis. Ni Made Yuni Gumala, S.K.M., M.Kes.', tahun_terbit: '2014', jumlah_halaman: '120', penerbit: 'Penerbit S', file_pdf: '/files/Olahraga4.pdf', gambar: 'images/olahraga4.jpeg', synopsis: 'Yoga (asthanga) sering digambarkan secara metaforis sebagai pohon dan terdiri dari delapan aspek, atau "anggota tubuh".' },
  { id_buku: 'd20', judul: 'Tenis Meja', kategori: 'OLAHRAGA', penulis: 'Guntur Firmansyah, Didik Hariyanto', tahun_terbit: '2013', jumlah_halaman: '110', penerbit: 'Penerbit T', file_pdf: '/files/Olahraga5.pdf', gambar: 'images/olahraga5.png', synopsis: 'Tenis meja adalah cabang olahraga yang tempat bermainnya didalam ruangan/gedung (indoor game) yang dimainkan oleh 2 orang atau 4 orang.' },
];

function resolveImage(book) {
  if (!book.gambar) return '/images/default-book.jpg';
  if (book.gambar.startsWith('http')) return book.gambar;
  if (book.gambar.startsWith('images/')) return '/' + book.gambar;
  // Jika hanya nama file
  return `http://localhost/backend/uploads/images/${book.gambar}`;
}

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek di dummyBooks dulu
    const found = dummyBooks.find((b) => b.id_buku === id);
    if (found) {
      setBook(found);
      setLoading(false);
    } else {
      // Jika tidak ditemukan, fetch dari backend
      fetch('http://localhost/backend/buku/read.php')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.data) {
            const foundDb = data.data.find((b) => String(b.id_buku) === String(id));
            setBook(foundDb || null);
          } else {
            setBook(null);
          }
          setLoading(false);
        })
        .catch(() => {
          setBook(null);
          setLoading(false);
        });
    }
  }, [id]);

  // Handle edit form change
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Handle edit submit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk menyimpan perubahan
    // Untuk sementara, kita hanya menutup modal
    setShowEditModal(false);
    alert('Buku berhasil diedit!');
  };

  // Open edit modal
  const openEditModal = () => {
    setEditForm({ ...book });
    setShowEditModal(true);
  };

  // Handle PDF view
  const handlePdfView = (pdfLink) => {
    if (pdfLink) {
      // Buka PDF di tab baru
      window.open(pdfLink, '_blank');
    } else {
      alert('File PDF tidak tersedia');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="book-detail-container">
          <div className="class-button">
            <button className="back-button" onClick={() => navigate(-1)}>&larr; Kembali</button>
            <h2>Loading...</h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!book) {
    return (
      <>
        <Header />
        <div className="book-detail-container">
          <div className="class-button">
            <button className="back-button" onClick={() => navigate(-1)}>&larr; Kembali</button>
            <h2>Buku tidak ditemukan</h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="book-detail-container">
        <div className="class-button">
          <button className="back-button" onClick={() => navigate(-1)}>&larr; Kembali</button>
          <button className="edit-button" onClick={openEditModal}>✏️ Edit Buku</button>
        </div>
        
        <h2 className="book-title">{book.judul}</h2>

        <div className="book-detail-content">
          <div className="book-image">
            <img src={resolveImage(book)} alt={`Cover ${book.judul}`} />
          </div>
          <div className="book-info">
            <h3>{book.judul}</h3>
            <p className="synopsis">
              Sinopsis: {book.synopsis || 'Sinopsis belum tersedia.'}
            </p>
            <hr />
            <div className="book-meta">
              <p>Penulis: <span>{book.penulis}</span></p>
              <p>Kategori: <span>{book.kategori}</span></p>
              <p>Tahun Terbit: <span>{book.tahun_terbit || 'Tidak diketahui'}</span></p>
              <p>Jumlah Halaman: <span>{book.jumlah_halaman || 'Tidak diketahui'}</span></p>
              <p>Penerbit: <span>{book.penerbit || 'Tidak diketahui'}</span></p>
            </div>
            <div className="book-actions">
              <button 
                className="btn-view" 
                onClick={() => handlePdfView(book.file_pdf)}
                disabled={!book.file_pdf}
              >
                {book.file_pdf ? '📖 Baca PDF' : '❌ PDF Tidak Tersedia'}
              </button>
              {book.file_pdf && (
                <a href={book.file_pdf} target="_blank" rel="noopener noreferrer" className="download-link">
                  <button className="btn-download">📥 Download PDF</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
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
          onClick={() => setShowEditModal(false)}
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
            
            <form onSubmit={handleEditSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Judul Buku:
                </label>
                <input 
                  name="judul" 
                  value={editForm.judul || ''} 
                  onChange={handleEditChange} 
                  required 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Penulis:
                </label>
                <input 
                  name="penulis" 
                  value={editForm.penulis || ''} 
                  onChange={handleEditChange} 
                  required 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Kategori:
                </label>
                <select 
                  name="kategori" 
                  value={editForm.kategori || ''} 
                  onChange={handleEditChange} 
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="AGAMA">AGAMA</option>
                  <option value="FIKSI">FIKSI</option>
                  <option value="PEMROGRAMAN">PEMROGRAMAN</option>
                  <option value="OLAHRAGA">OLAHRAGA</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Tahun Terbit:
                </label>
                <input 
                  name="tahun_terbit" 
                  type="number" 
                  value={editForm.tahun_terbit || ''} 
                  onChange={handleEditChange} 
                  required 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Jumlah Halaman:
                </label>
                <input 
                  name="jumlah_halaman" 
                  type="number" 
                  value={editForm.jumlah_halaman || ''} 
                  onChange={handleEditChange} 
                  required 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Penerbit:
                </label>
                <input 
                  name="penerbit" 
                  value={editForm.penerbit || ''} 
                  onChange={handleEditChange} 
                  required 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Sinopsis:
                </label>
                <textarea 
                  name="synopsis" 
                  value={editForm.synopsis || ''} 
                  onChange={handleEditChange} 
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px',
                    resize: 'vertical',
                    minHeight: '80px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  Gambar:
                </label>
                <input 
                  name="gambar" 
                  value={editForm.gambar || ''} 
                  onChange={handleEditChange} 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
                  File PDF:
                </label>
                <input 
                  name="file_pdf" 
                  value={editForm.file_pdf || ''} 
                  onChange={handleEditChange} 
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button 
                  type="submit" 
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#218838';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#28a745';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  💾 Simpan
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowEditModal(false)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#5a6268';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#6c757d';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  ❌ Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default BookDetail;
