import React from "react";
import { FaClock, FaCertificate, FaStar } from "react-icons/fa";
import home from "../assets/home.webp";
import { FaMedal } from "react-icons/fa6";

const kelasData = [
  {
    title: "Kelas JF-TEST ISO Jepang",
    duration: "1.5 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas JF-Test diperuntukan bagi peserta yang telah menguasai bahasa Jepang dan ingin mendapatkan sertifikat untuk memenuhi persyaratan Specified Skill Worker (SSW) dan memiliki peluang untuk bekerja ke Jepang.",
    image:  home ,
    rating: 4.8,
  },
  {
    title: "Kelas BASIC ISO Jepang",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image:  home ,
    rating: 4.9,
  },
  {
    title: "Kelas BASIC ISO Jepang",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image:  home ,
    rating: 5.0,
  },
  {
    title: "Kelas BASIC ISO Jepang",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image:  home ,
    rating: 5.0,
  },
];

const KelasTerbaik = () => {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-sm text-blue-500 font-medium">Kelas Terbaik ISO Jepang</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
        Kelas BASIC adalah Kelas Terbaik di ISO JEPANG
      </h2>
      <h3 className="text-xl font-semibold text-blue-900 mt-1">MENGAPA DEMIKIAN ?</h3>

      <p className="max-w-3xl mx-auto mt-4 text-gray-600">
        Di Kelas BASIC, Para Peserta Didik Mendapatkan Berbagai Materi Pendidikan
        yang Menjadi Persyaratan untuk Mengikuti Program SSW (Specified Skill Worker)
        diantaranya Kurikulum Pendidikan Kemampuan Bahasa Jepang JF-Test A2 dan
        Kurikulum Pendidikan Skill SSW di Berbagai Bidang.
        <br /><br />
        Dan yang Lebih Menariknya Peserta Didik Kelas BASIC akan diikutsertakan dalam
        Wawancara Bersama Pihak User JEPANG untuk Penempatan Kerja di Berbagai Wilayah
        yang ada di Jepang.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-4 max-w-[90rem] mx-auto justify-center">
        {kelasData.map((kelas, idx) => (
          <div key={idx} className="bg-[#0B1E47] text-white rounded-xl shadow-lg overflow-hidden w-80">
            <img src={kelas.image} alt={kelas.title} className="w-full h-56 object-cover" />
            <div className="p-5 text-left">
              <h4 className="text-lg font-bold mb-2">{kelas.title}</h4>
              <div className="flex items-center justify-between gap-4 text-sm mb-3 text-blue-300">
                <div className="flex items-center gap-1">
                  <FaClock />
                  <span>{kelas.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaMedal />
                  <span>Bersertifikat</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">{kelas.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-yellow-400">
                  <span>{kelas.rating}</span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <button className="btn btn-sm btn-warning p-5 px-7 text-white font-bold">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KelasTerbaik;
