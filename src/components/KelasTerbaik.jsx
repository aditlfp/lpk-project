import { FaClock, FaStar } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import api from "../utils/axios";
import { useEffect, useState } from "react";
import StarRating from "./partials/StarRating";
import ButtonBlue from "./partials/ButtonBlue";

const KelasTerbaik = ({onSeeAllClick}) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const fetchData = async() => {
    try {
      const res = await api.get('/lpk-classes')
      const allData = res.data.data;

      const activeData = allData.filter(item => item.active);

      const last4Active = activeData.slice(-4);
      setData(last4Active);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

 if (isLoading) {
    return (
      <>
        <div className="bg-[#F4F8FB] min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Memuat data kelas LPK...</p>
        </div>
      </>
    );
  }

  if(data.length === 0){
    return (
      <div className="bg-[#F4F8FB] min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Data saat ini belum tersedia</p>
      </div>
    )
  }

  return (
    <section id="kelas" className="py-16 px-4 text-center">
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
        {data?.map((kelas, idx) => (
          <div
            key={idx}
            className="bg-blue-950 text-white rounded-xl my-5 sm:my-0 shadow-lg overflow-hidden w-full md:w-[22rem] lg:w-full flex flex-col"
            style={{ height: "100%" }} // optional if wrapping with grid
          >
            <img
              src={import.meta.env.VITE_BACKEND_URL_STORAGE +kelas.image}
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
                    <span>{kelas.waktu_pendidikan}</span>
                  </div>
                  {kelas?.bersertifikat ? (
                    <div className="flex items-center gap-1">
                      <FaMedal />
                      <span>Bersertifikat</span>
                    </div>
                  ) : (
                    <span>Tidak Bersetifikat</span>
                  )
                
                }

                </div>
                <p className="text-gray-300 text-sm md:text-base text-justify">
                  {kelas.desc}
                </p>
              </div>

              {/* Footer always at bottom */}
              <div className="mt-5 flex justify-between items-end">
                <div className="flex items-center gap-1 text-blue-400 text-sm md:text-lg">
                  <StarRating rating={kelas.rating}/>
                </div>
                <a
                  href={import.meta.env.VITE_URL_SIGN_UP}
                  className="btn btn-sm btn-primary px-6 text-white font-bold md:text-lg"
                >
                  Daftar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
          <ButtonBlue
            title={"Lihat Selengkapnya"}
            navigateToLink={onSeeAllClick}
            className={"hover:shadow-md btn-sm text-lg"}
          />
        </div>
    </section>
  );
};

export default KelasTerbaik;
