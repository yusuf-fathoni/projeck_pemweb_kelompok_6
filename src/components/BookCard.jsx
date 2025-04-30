import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img src={book.cover} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted">Penulis: {book.author}</p>
        <p className="text-primary small">{book.category}</p>
        <Link to={`/book/${book.id}`} className="btn btn-primary btn-sm mt-2">
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
