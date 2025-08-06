import { FaClock, FaStar } from "react-icons/fa";
import kelas from "../assets/img_fix/kelas.jpg";
import kelas2 from "../assets/img_fix/kelas2.jpg";
import { FaMedal } from "react-icons/fa6";

const kelasData = [
  {
    title: "Kelas JF-TEST Asa Hikari Mulya",
    duration: "1.5 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas JF-Test diperuntukan bagi peserta yang telah menguasai bahasa Jepang dan ingin mendapatkan sertifikat untuk memenuhi persyaratan Specified Skill Worker (SSW) dan memiliki peluang untuk bekerja ke Jepang.",
    image: kelas,
    rating: 4.8,
  },
  {
    title: "Kelas BASIC Asa Hikari Mulya",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image: kelas2,
    rating: 4.9,
  },
  {
    title: "Kelas BASIC Asa Hikari Mulya",
    duration: "3 Bulan Pendidikan",
    sertifikat: true,
    description:
      "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
    image: kelas2,
    rating: 5.0,
  },
  {
    title: "Kelas BASIC Asa Hikari Mulya",
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
      <p className="text-sm md:text-base text-blue-500 font-medium">
        Kelas Terbaik Asa Hikari Mulya
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
        Kelas BASIC adalah Kelas Terbaik di Asa Hikari Mulya
      </h2>
      <h3 className="text-xl font-semibold text-blue-900 mt-1">
        MENGAPA DEMIKIAN ?
      </h3>

      <p className="max-w-3xl lg:max-w-full mx-2 md:mx-4 lg:mx-8 mt-4 text-gray-600 md:text-lg text-justify lg:text-center">
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

      <div className="mt-12 md:grid gap-4 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90rem] mx-auto justify-center items-center">
        {kelasData.map((kelas, idx) => (
          <div
            key={idx}
            className="bg-blue-950 text-white rounded-xl my-5 sm:my-0 shadow-lg overflow-hidden w-full md:w-[22rem] lg:w-full flex flex-col"
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
                <h4 className="text-lg md:text-xl lg:text-lg font-bold mb-2 text-left">
                  {kelas.title}
                </h4>
                <div className="flex items-center justify-between gap-4 text-sm md:text-base mb-3 text-blue-300">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{kelas.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMedal />
                    <span>Bersertifikat</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base text-justify">
                  {kelas.description}
                </p>
              </div>

              {/* Footer always at bottom */}
              <div className="mt-5 flex justify-between items-end">
                <div className="flex items-center gap-1 text-yellow-400 text-sm md:text-lg">
                  <span>{kelas.rating}</span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <button className="btn btn-sm btn-warning px-6 text-white font-bold md:text-lg">
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
