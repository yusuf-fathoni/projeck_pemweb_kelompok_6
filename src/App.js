// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Category from './Pages/Category/Category.jsx'; // Make sure the path is correct
import Contact from './Pages/Contact/Contact.jsx';
import AddBook from './Pages/Category/AddBook';
import BookList from './Pages/Category/BookList';
import ReviewList from './Pages/ReviewList/ReviewList';

//import component
import BookDetail from './Components/BookDetail/BookDetail';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/book/:id" element={<BookDetail />} /> {/* Route for BookDetail page */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/book-list" element={<BookList />} />
      <Route path="/admin/review" element={<ReviewList />} />
      {/* Halaman login & register */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Halaman yang butuh login */}
      <Route element={<PrivateRoute />}>
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
