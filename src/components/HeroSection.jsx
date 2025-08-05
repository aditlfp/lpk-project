import React from "react";
import home from "../assets/img_fix/hero.jpg"; // Pastikan path ini sesuai dengan struktur folder Anda
import logo from "../assets/img_fix/logo_dark.png";
import logo_white from "../assets/img_fix/logo_white.jpg";

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
          backgroundPosition: "center",
        }}
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-[#540209] opacity-75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Logo */}
        <div className="flex w-full justify-center items-center gap-x-4 mb-6 mt-10 lg:mt-5">
          <img
            src={logo}
            alt="Asa Hikari Mulya"
            className="w-1/3 md:w-1/5 lg:w-1/10  bg-white"
          />
          <div className="flex flex-col justify-start items-start font-bold md:text-[2.9rem] text-2xl">
            <span>Asa</span>
            <span>Hikari</span>
            <span>Mulya</span>
          </div>
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-[2.9rem] font-bold mb-4 md:mb-10 text-pretty max-w-5xl">
          Kuasai Bahasa Jepang, Raih Peluang Kerja ke Jepang dengan Asa Hikari
          Mulya!
        </h1>

        {/* Deskripsi */}
        <p className="max-w-5xl md:max-w-[80rem] md:mx-10 font-bold text-sm md:text-base text-gray-300 mb-6 md:mb-10">
          Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang
          mempersiapkan Anda untuk bekerja di Jepang melalui program Specified
          Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif,
          sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis
          kebutuhan pasar kerja Jepang.
        </p>

        {/* Tombol */}
        <button className="btn btn-warning text-white font-bold btn-xl text-sm md:text-2xl p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 hover:border-0 shadow-none">
          Daftar Sekarang
        </button>

        {/* Kolaborator */}
        <div className="mt-5 md:mt-10">
          <p className="text-lg md:text-xl font-bold opacity-70">
            Berkolaborasi dengan
          </p>
          <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-2 lg:mt-4 justify-center items-center">
            <img src={logo_white} alt="Kemnaker" className="h-12" />
            <img src={logo_white} alt="TIT" className="h-12" />
            <img src={logo_white} alt="JITCO" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
