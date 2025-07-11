import React from 'react';
import './CardBook.css';

const CardBook = ({ id, title, image }) => {
  return (
    <div className="card-book">
      <img src={image} alt={title} />
      <div className="book-info">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default CardBook;
