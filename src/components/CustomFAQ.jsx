import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const faqItems = [
  {
    question: "Apa itu Asa Hikari Mulya?",
    answer: (
      <>
        <p>
          Asa Hikari Mulya adalah lembaga yang menyediakan pelatihan bahasa
          Jepang secara online dan offline dalam mempersiapkan peserta untuk
          bekerja di Jepang. Kami juga memiliki Bekerjasama dengan Sending
          Organization (SO) Lembaga Pendidikan & Pelatihan Rakyat Indonesia
          (LPPR Indonesia) dan Perusahaan Penempatan Pekerja Migran Indonesia
          (P3MI) PT. Multi Lintas Buana Raya yang resmi untuk pemberangkatan
          peserta kami ke Jepang. Kami juga bekerja sama dengan
          perusahaan-perusahaan di Jepang untuk menyalurkan tenaga kerja yang
          terlatih dan siap bekerja.
        </p>
        <p className="mt-4">
          Info Lebih Lanjut cek{" "}
          <a href="/tentang-kami" className="text-blue-600 underline">
            Tentang Kami
          </a>
        </p>
      </>
    ),
  },
  {
    question: "Siapa yang bisa mengikuti program ini?",
    answer: (
      <p>
        Program ini terbuka untuk WNI usia 18-30 tahun, sehat jasmani rohani,
        dan berminat bekerja di Jepang. Tidak butuh pengalaman kerja, semua akan
        dilatih dari dasar.
      </p>
    ),
  },
  {
    question: "Siapa yang bisa mengikuti program ini?",
    answer: (
      <>
        <p className="mb-2">Persyaratan untuk mendaftar meliputi:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Usia: 18-27 tahun.</li>
          <li>Pendidikan: Lulusan SMA/SMK.</li>
          <li>Kesehatan: Sehat jasmani dan rohani.</li>
          <li>Fisik: Tinggi badan minimal 150 cm (wanita), 160 cm (pria).</li>
          <li>
            Kondisi Kesehatan Mata: Tidak buta warna atau memiliki gangguan
            penglihatan lainnya.
          </li>
          <li>Tidak ada riwayat kriminal.</li>
          <li>Tidak merokok dan bebas dari obat-obatan terlarang.</li>
        </ul>
      </>
    ),
  },
];

const CustomFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    faqItems.forEach((_, i) => {
      const content = contentRefs.current[i];
      if (content) {
        if (i === activeIndex) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      }
    });
  }, [activeIndex]);

  return (
    <section id="faq" className="px-4 py-10 mb-10 md:mx-20 md:mb-5">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex flex-col gap-y-4 mb-2 md:mb-10">
          <span className="font-semibold text-xl text-blue-500">
            Frequently Asked Questions (FAQ)
          </span>
          <h1 className="text-4xl font-semibold">
            Pertanyaan Yang Sering Diajukan
          </h1>
          <span className="text-gray-400 font-semibold md:text-xl">
            Pertanyaan yang Sering Diajukan Ke Kami Terkait Prosedur, Dokumen,
            Seleksi, Dan Lainnya.
          </span>
        </div>
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-md transition"
          >
            {/* Header */}
            <button
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
              className={`w-full text-left px-6 py-4 font-medium text-base transition-colors duration-300 ${
                activeIndex === i
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="flex justify-between items-center md:text-xl">
                <span>{item.question}</span>
                <span>
                  {activeIndex === i ? (
                    <FaChevronUp className="text-white" />
                  ) : (
                    <FaChevronDown className="text-primary" />
                  )}
                </span>
              </div>
            </button>
            {/* Body */}
            <div
              ref={(el) => (contentRefs.current[i] = el)}
              className="overflow-hidden transition-all duration-500 bg-white px-6 text-sm md:text-xl text-gray-800"
              style={{ maxHeight: "0px" }}
            >
              <div className="py-8">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomFAQ;
