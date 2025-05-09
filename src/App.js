// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Category from './Pages/Category/Category.jsx';
import BookDetail from './Components/BookDetail/BookDetail'; // Make sure the path is correct
import Contact from './Pages/Contact/Contact.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/book/:id" element={<BookDetail />} /> {/* Route for BookDetail page */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
