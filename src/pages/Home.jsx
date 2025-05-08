import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import bukuList from "../data/BukuList";

import heroImage from "../assets/hero-image.jpg";
import agama from "../assets/agama.webp";
import fiksi1 from "../assets/fiksi.jpg";
import prog1 from "../assets/pemrograman.jpg";
import olahraga1 from "../assets/olahraga.jpg";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
};

const Home = () => {
  const [bgColor, setBgColor] = useState("#f5f5f5");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) setBgColor("#f5f5f5");
      else if (scrollY < 500) setBgColor("#e0e7ff");
      else setBgColor("#d1d5db");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const books = [
    { title: "Mengenal Islam", category: "agama", image: agama },
    { title: "Petualangan Fiksi", category: "fiksi", image: fiksi1 },
    { title: "Belajar C++", category: "pemrograman", image: prog1 },
    { title: "Tips Sehat", category: "olahraga", image: olahraga1 },
    { title: "Kitab Suci", category: "agama", image: agama },
    { title: "Fiksi Misteri", category: "fiksi", image: fiksi1 },
    { title: "Dasar JavaScript", category: "pemrograman", image: prog1 },
    { title: "Latihan Fisik", category: "olahraga", image: olahraga1 },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="home-container"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
        paddingBottom: "50px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="search-container">
          <input
            type="text"
            placeholder="Cari nama buku..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Pilih Kategori</option>
            <option value="agama">Agama</option>
            <option value="fiksi">Fiksi</option>
            <option value="pemrograman">Pemrograman</option>
            <option value="olahraga">Olahraga</option>
          </select>
        </div>
      </div>

      <motion.div
        className="categories"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Kategori Buku</h2>
        <div className="category-grid">
          <div className="category-card"><img src={agama} alt="Agama" /><p>Agama</p></div>
          <div className="category-card"><img src={fiksi1} alt="Fiksi" /><p>Fiksi</p></div>
          <div className="category-card"><img src={prog1} alt="Pemrograman" /><p>Pemrograman</p></div>
          <div className="category-card"><img src={olahraga1} alt="Olahraga" /><p>Olahraga</p></div>
        </div>
      </motion.div>

      <motion.div className="carousel-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>Daftar Buku</h2>
        {filteredBooks.length === 0 ? (
          <p className="text-center mt-4">Buku tidak ditemukan.</p>
        ) : (
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {filteredBooks.map((book, index) => (
              <div key={index} className="carousel-item">
                <img src={book.image} alt={book.title} />
                <p className="text-center mt-2">{book.title}</p>
              </div>
            ))}
          </Carousel>
        )}
      </motion.div>

      <motion.div className="carousel-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>Buku Populer</h2>
        {filteredBooks.length === 0 ? (
          <p className="text-center mt-4">Buku tidak ditemukan.</p>
        ) : (
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {filteredBooks.map((book, index) => (
              <div key={index} className="carousel-item">
                <img src={book.image} alt={book.title} />
                <p className="text-center mt-2">{book.title}</p>
              </div>
            ))}
          </Carousel>
        )}
      </motion.div>

      <footer className="footer">
        <i>Created by Kelompok 6</i>
        <div className="footer-links">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/category">CATEGORY</a>
          <a href="/contact">CONTACT</a>
        </div>
        <p>© 2025 Ruang Baca Digital. Semua hak dilindungi</p>
      </footer>
    </motion.div>
  );
};

export default Home;
