import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

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
    agama,
    fiksi1,
    prog1,
    olahraga1,
    agama,
    fiksi1,
    prog1,
    olahraga1,
  ];

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
          <input type="text" placeholder="Cari nama buku..." />
          <select>
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
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {books.map((book, index) => (
            <div key={index} className="carousel-item"><img src={book} alt={`Book ${index}`} /></div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div className="carousel-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>Buku Populer</h2>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {books.map((book, index) => (
            <div key={index} className="carousel-item"><img src={book} alt={`Popular ${index}`} /></div>
          ))}
        </Carousel>
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
