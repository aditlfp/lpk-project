import { FaClock, FaStar } from "react-icons/fa";
import kelas from "../assets/img_fix/kelas.jpg";
import kelas2 from "../assets/img_fix/kelas2.jpg";
import { FaMedal } from "react-icons/fa6";

const kelasData = [
  {
    title: "Kelas JF-TEST ISO Jepang",
    duration: "1.5 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas JF-Test diperuntukan bagi peserta yang telah menguasai bahasa Jepang dan ingin mendapatkan sertifikat untuk memenuhi persyaratan Specified Skill Worker (SSW) dan memiliki peluang untuk bekerja ke Jepang.",
    image: kelas,
    rating: 4.8,
  },
  {
    title: "Kelas BASIC ISO Jepang",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image: kelas2,
    rating: 4.9,
  },
  {
    title: "Kelas BASIC ISO Jepang",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image: kelas2,
    rating: 5.0,
  },
  {
    title: "Kelas BASIC ISO Jepang",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image: kelas2,
    rating: 5.0,
  },
];

const KelasTerbaik = () => {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-sm text-red-500 font-medium">
        Kelas Terbaik ISO Jepang
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
        Kelas BASIC adalah Kelas Terbaik di ISO JEPANG
      </h2>
      <h3 className="text-xl font-semibold text-red-900 mt-1">
        MENGAPA DEMIKIAN ?
      </h3>

      <p className="max-w-3xl mx-2 mt-4 text-gray-600 md:mx-auto text-justify lg:text-center">
        Di Kelas BASIC, Para Peserta Didik Mendapatkan Berbagai Materi
        Pendidikan yang Menjadi Persyaratan untuk Mengikuti Program SSW
        (Specified Skill Worker) diantaranya Kurikulum Pendidikan Kemampuan
        Bahasa Jepang JF-Test A2 dan Kurikulum Pendidikan Skill SSW di Berbagai
        Bidang.
        <br />
        <br />
        Dan yang Lebih Menariknya Peserta Didik Kelas BASIC akan diikutsertakan
        dalam Wawancara Bersama Pihak User JEPANG untuk Penempatan Kerja di
        Berbagai Wilayah yang ada di Jepang.
      </p>

      <div className="mt-12 grid gap-8 sm:flex lg:gap-4 md:grid-cols-4 max-w-[90rem] mx-auto justify-center">
        {kelasData.map((kelas, idx) => (
          <div
            key={idx}
            className="bg-red-950 text-white rounded-xl shadow-lg overflow-hidden w-80 lg:w-full flex flex-col"
            style={{ height: "100%" }} // optional if wrapping with grid
          >
            <img
              src={kelas.image}
              alt={kelas.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col flex-1 justify-between">
              {/* Content section */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-left">
                  {kelas.title}
                </h4>
                <div className="flex items-center justify-between gap-4 text-sm mb-3 text-red-300">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{kelas.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMedal />
                    <span>Bersertifikat</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm text-justify">
                  {kelas.description}
                </p>
              </div>

              {/* Footer always at bottom */}
              <div className="mt-5 flex justify-between items-end">
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  <span>{kelas.rating}</span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <button className="btn btn-sm btn-warning px-6 text-white font-bold">
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
