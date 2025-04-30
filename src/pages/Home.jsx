import React, { useState } from "react";
import books from "../data/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">BookNest 📚</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-md-3 mb-4 d-flex justify-content-center">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
