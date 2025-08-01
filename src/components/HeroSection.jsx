import React from "react";
import home from "../assets/home.webp"; // Pastikan path ini sesuai dengan struktur folder Anda
import logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <div className="relative h-[100vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${home})`, // ← ganti dengan path atau URL gambar
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-blue-950 opacity-75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Logo */}
        <img src={logo} alt="ISO Jepang" className="w-1/6 mb-16" />

        {/* Judul */}
        <h1 className="text-4xl md:text-[3.1rem] font-bold mb-4 text-pretty max-w-5xl">
          Kuasai Bahasa Jepang, Raih Peluang Kerja ke Jepang dengan ISO Jepang!
        </h1>

        {/* Deskripsi */}
        <p className="max-w-5xl md:max-w-[80rem] font-bold text-sm md:text-lg text-gray-300 mb-6">
          ISO Jepang adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk
          bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan
          pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis
          kebutuhan pasar kerja Jepang.
        </p>

        {/* Tombol */}
        <button className="btn btn-warning text-white font-bold btn-xl text-sm p-4 md:p-6 transition-transform duration-300 hover:-translate-y-2 hover:bg-white hover:text-blue-600 hover:border-0 shadow-none">
          Daftar Sekarang
        </button>

        {/* Kolaborator */}
        <p className="mt-10 text-lg font-bold opacity-70">Berkolaborasi dengan</p>
        <div className="flex gap-6 mt-2 justify-center items-center">
          <img src={logo} alt="Kemnaker" className="h-12" />
          <img src={logo} alt="TIT" className="h-12" />
          <img src={logo} alt="JITCO" className="h-12" />
        </div>
      </div>
    </div>
  );
}
