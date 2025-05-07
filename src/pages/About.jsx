import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-2 p-4">
        <button onClick={() => navigate(-1)} className="text-xl">←</button>
        <h2 className="text-lg font-medium">ABOUT</h2>
      </div>

      {/* Gambar seperti homepage */}
      <img src="/homepage-image.jpg" alt="Gambar Utama" className="w-full h-auto" />

      {/* Tentang Kami */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Tentang Kami :</h3>
        <p className="mb-4">
          Ruang Baca adalah komunitas literasi yang menyediakan tempat nyaman untuk membaca, berdiskusi,
          dan berbagi pengetahuan. Didirikan pada tahun 2025, kami berkomitmen untuk meningkatkan minat
          baca dikalangan masyarakat, terutama generasi muda.
        </p>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Visi</h4>
            <p>Menjadi pusat literasi yang inklusif dan inspiratif di Indonesia</p>
          </div>
          <div>
            <h4 className="font-semibold">Misi</h4>
            <ul className="list-disc list-inside">
              <li>Menyediakan ruang baca yang nyaman dan gratis</li>
              <li>Menyelenggarakan kegiatan literasi seperti diskusi buku, bedah karya, dan kelas menulis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
