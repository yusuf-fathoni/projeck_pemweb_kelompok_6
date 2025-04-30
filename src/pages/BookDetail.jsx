import React from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="container p-5 text-center text-danger">Buku tidak ditemukan.</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-primary">{book.title}</h1>
      <img src={book.cover} alt={book.title} className="d-block mx-auto my-4" style={{ width: "200px" }} />
      <p><strong>Penulis:</strong> {book.author}</p>
      <p><strong>Kategori:</strong> {book.category}</p>
      <p>{book.description}</p>
      <a
        href={book.downloadLink}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Unduh Buku
      </a>
    </div>
  );
};

export default BookDetail;
