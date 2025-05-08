import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const categories = [
  { title: 'Agama', books: ['book1.jpg', 'book2.jpg', 'book3.jpg', 'book4.jpg', 'book5.jpg'] },
  { title: 'Fiksi', books: ['book6.jpg', 'book7.jpg', 'book8.jpg', 'book9.jpg', 'book10.jpg'] },
  { title: 'Pemrograman', books: ['book11.jpg', 'book12.jpg', 'book13.jpg', 'book14.jpg', 'book15.jpg'] },
  { title: 'Olahraga', books: ['book16.jpg', 'book17.jpg', 'book18.jpg', 'book19.jpg', 'book20.jpg'] },
];

function Category() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-2 p-4">
        <button onClick={() => navigate(-1)} className="text-xl">←</button>
        <h2 className="text-lg font-medium">Category</h2>
      </div>

      {/* Daftar Buku Tiap Kategori */}
      <div className="p-6 space-y-10">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {cat.books.map((book, i) => (
                <Link key={i} to={`/book/${cat.title.toLowerCase()}-${i}`}>
                  <img src={`/${book}`} alt={`Buku ${i + 1}`} className="w-full h-auto rounded shadow" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;