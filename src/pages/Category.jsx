import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div className="container p-5">
      <h2 className="text-primary">Kategori: {categoryName}</h2>
      <p>Daftar buku dalam kategori ini akan ditampilkan di sini.</p>
    </div>
  );
};

export default Category;
