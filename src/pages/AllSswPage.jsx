import { useEffect, useState } from "react";
import api from "../utils/axios";
import SswCard from "../components/sections/SswCard";
import Pagination from "../components/partials/Pagination";
import { ArrowLeft } from "lucide-react";

function AllSswPage({ onBackClick }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async(page = 1) => {
    const res = await api.get(`/ssw-fields?page=${page}`)
    setData(res)
    setTotalPages(res.data.meta.last_page);
    setCurrentPage(res.data.meta.current_page);
    setLoading(false)
  }

  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  return (
    <div>
      <div className="container mx-auto px-4 py-20">
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
                17 Bidang Pekerjaan SSW
            </h2>
          </div>

          <span className="text-gray-400 font-semibold md:text-xl text-center">
            Dengan berkurangnya tenaga kerja di Jepang, ada 17 bidang industri
            yang terdampak dengan tidak tercukupinya kebutuhan tenaga kerja
            untuk masa yang akan datang. Bidang itulah yang nantinya diisi
            dengan Specified Skilled Worker (SSW)/Tokutei Ginou 特定技能 ini. Ke
            17 Bidang tersebut adalah :
          </span>
        </div>
        <SswCard data={data?.data?.data} isLoading={isLoading}/>
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default AllSswPage;
