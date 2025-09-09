import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import pdf_file from "../assets/pdf_file/requirement.pdf";
import { ArrowLeft } from "lucide-react";
function RequirementPages({ onBackClick }) {
  const faqItems = [
    {
      question: "Persyaratan untuk mendaftar siswa",
      answer: (
        <>
          <div className="flex justify-between items-center">
            <p className="mb-2">Syarat Wajib </p>
            {/* <a href={pdf_file} download="my_file.pdf">
              <button className="btn btn-sm rounded-sm">Download PDF</button>
            </a> */}
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li> 1. Scan KTP Pendaftar </li>
            <li> 2. Scan KTP Orang Tua/Wali</li>
            <li> 3. Scan Akta Kelahiran</li>
            <li> 4. Scan Kartu Keluarga</li>
            <li> 5. Scan Ijazah SD/MI, SMP/Mts, SMA/SMK/MA</li>
            <li> 6. Scan Ijazah Sarjana ( Opsional )</li>
            <li> 7. Surat keterangan sehat dari dokter/klinik/puskesmas</li>
            <li> 8. Surat Izin Orang Tua/Wali/Suami/Istri</li>
            <li> 9. Sertifikat keahlian ( Opsional )</li>
            <li> 10. Surat pernyataan kesanggupan</li>
            <li>
              11. Pas Photo 3x4, 4x6 (Laki/Perempuan Baju putih berdasi,
              baground merah, LakiLaki rambut rapi/perempuan tanpa Hijab)
              masing-masing berjumlah 5 lembar
            </li>
            <li>
              12. Foto full badan sisi depan, belakang, kanan, dan kiri. (Baju
              (Laki/Perempuan Baju pu0h berdasi, baground merah, LakiLaki rambut
              rapi/perempuan tanpa Hijab)
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Persyaratan untuk mendaftar Guru/Sensei",
      answer: (
        <>
          <div className="flex justify-between items-center">
            <p className="mb-2">Syarat Wajib </p>
            {/* <a href={pdf_file} download="my_file.pdf">
              <button className="btn btn-sm rounded-sm">Download PDF</button>
            </a> */}
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>1. Scan KTP Pendaftar </li>
            <li> 2. Scan Ijazah terakhir</li>
            <li> 3. Scan Sertifikat N4/N3/N2/N1</li>
            <li> 4. Sertifikat Profesi</li>
            <li> 5. Pas Photo Bebas Rapi</li>
          </ul>
        </>
      ),
    },
  ];

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
    <section id="faq" className="px-4 pt-20 mb-16 md:mx-20 md:mb-5 mt-20">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex flex-col gap-y-4 mb-2 md:mb-10">
          <div className="flex">
            <button
              onClick={onBackClick}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors mr-4"
              aria-label="Kembali ke halaman utama"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
            <h1 className="text-4xl font-semibold">Persyaratan Pendaftaran</h1>
          </div>

          <span className="text-gray-400 font-semibold md:text-xl">
            Persyaratan yang wajib dipenuhi sebelum mendaftarkan diri
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
            >
              <div className="py-8">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RequirementPages;
