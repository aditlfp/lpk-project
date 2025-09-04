import { useEffect, useState } from "react";
import api from "../utils/axios";
import { FaClock, FaMedal } from "react-icons/fa";
import StarRating from "../components/partials/StarRating";
import Pagination from "../components/partials/Pagination";
import { ArrowLeft } from "lucide-react";

function AllClassesPage({ onBackClick }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page = 1) => {
    try {
      const res = await api.get(`/lpk-classes?page=${page}`);
      setData(res.data.data); // <-- hanya data array
      setTotalPages(res.data.meta.last_page);
      setCurrentPage(res.data.meta.current_page);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
    <div className="container mx-auto px-4 py-28">
      <div className="flex flex-col gap-y-4 mb-2 md:mb-10">
        <div className="flex items-center">
          <button
            onClick={onBackClick}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors mr-4"
            aria-label="Kembali ke halaman utama"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h2 className="text-3xl font-bold text-gray-800">
            Menampilkan Semua Kelas LPK
          </h2>
        </div>

        <span className="text-gray-400 font-semibold md:text-xl text-center">
          Kami telah merancang setiap program untuk menjadi bekal lengkap Anda.
          Bersama instruktur terbaik dan kurikulum yang teruji, Anda tidak hanya
          akan menguasai materi, tetapi juga membangun mentalitas dan
          kedisiplinan yang dibutuhkan untuk sukses. Lihatlah daftar kelas kami
          di bawah ini. Pilihlah jalan Anda, dan biarkan kami membimbing Anda
          untuk meraih mimpi tersebut. Masa depan Anda di Negeri Sakura menanti!
        </span>
      </div>
      <div className="mt-12 md:grid gap-4 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90rem] mx-auto justify-center items-center">
        {data.map((kelas, idx) => (
          <div
            key={idx}
            className="bg-blue-950 text-white rounded-xl my-5 sm:my-0 shadow-lg overflow-hidden w-full md:w-[22rem] lg:w-full flex flex-col"
            style={{ height: "100%" }}
          >
            <img
              src={import.meta.env.VITE_BACKEND_URL_STORAGE + kelas.image}
              alt={kelas.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col flex-1 justify-between">
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
                  )}
                </div>
                <p className="text-gray-300 text-sm md:text-base text-justify">
                  {kelas.desc}
                </p>
              </div>

              <div className="mt-5 flex justify-between items-end">
                <div className="flex items-center gap-1 text-blue-400 text-sm md:text-lg">
                  <StarRating rating={kelas.rating} />
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

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default AllClassesPage;
