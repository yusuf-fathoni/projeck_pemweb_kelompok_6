import React, { useEffect, useState } from 'react';
import './ReviewList.css'; // CSS cantik kita nanti disini
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';


const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ nama: '', email: '', pesan: '' });
  const navigate = useNavigate();

  const fetchReviews = async () => {
    const res = await fetch('http://localhost/backend/review/read.php');
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Yakin ingin menghapus review ini?');
    if (!confirm) return;

    const res = await fetch('http://localhost/backend/review/delete.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_review: id }),
    });

    const result = await res.json();
    alert(result.message);
    fetchReviews();
  };

  const handleUpdate = async () => {
    const res = await fetch('http://localhost/backend/review/update.php', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_review: editing,
        ...editData,
      }),
    });

    const result = await res.json();
    alert(result.message);
    setEditing(null);
    fetchReviews();
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <div className="admin-header">
          <h2>Halaman Admin - Review Pengguna</h2>
          <button onClick={() => navigate('/')} className="btn-back">← Kembali ke Home</button>
        </div>

        {reviews.length === 0 ? (
          <p className="no-review">Belum ada review.</p>
        ) : (
          <table className="review-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Pesan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r, i) => (
                <tr key={r.id_review}>
                  <td>{i + 1}</td>
                  <td>
                    {editing === r.id_review ? (
                      <input value={editData.nama} onChange={(e) => setEditData({ ...editData, nama: e.target.value })} />
                    ) : (
                      r.nama
                    )}
                  </td>
                  <td>
                    {editing === r.id_review ? (
                      <input value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} />
                    ) : (
                      r.email
                    )}
                  </td>
                  <td>
                    {editing === r.id_review ? (
                      <input value={editData.pesan} onChange={(e) => setEditData({ ...editData, pesan: e.target.value })} />
                    ) : (
                      r.pesan
                    )}
                  </td>
                  <td>
                    {editing === r.id_review ? (
                      <>
                        <button className="btn save" onClick={handleUpdate}>Simpan</button>
                        <button className="btn cancel" onClick={() => setEditing(null)}>Batal</button>
                      </>
                    ) : (
                      <>
                        <button className="btn edit" onClick={() => {
                          setEditing(r.id_review);
                          setEditData({ nama: r.nama, email: r.email, pesan: r.pesan });
                        }}>Edit</button>
                        <button className="btn delete" onClick={() => handleDelete(r.id_review)}>Hapus</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReviewList;
