import ButtonBlue from "./partials/ButtonBlue";
import api from "../utils/axios";
import { useEffect, useState } from "react";
import SswCard from "./sections/SswCard";

const SSWTokuteiGinou = ({ onSeeAllClick }) => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get("/ssw-fields");
      setLoading(false)
      setData(res.data.data.slice(0, 3))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/10"></div>

        {/* Animated decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <div className="absolute top-8 right-8 w-40 h-40 border-2 border-blue-300 rounded-2xl transform rotate-12 animate-pulse"></div>
          <div
            className="absolute top-16 right-16 w-32 h-32 border border-blue-300 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-20 right-32 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-400 rounded-xl transform rotate-45 opacity-30 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 border-2 border-cyan-300 rounded-lg transform -rotate-12 animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-15">
          <div
            className="absolute bottom-8 left-8 w-32 h-32 border-2 border-cyan-300 rounded-full animate-pulse"
            style={{ animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute bottom-16 left-16 w-40 h-40 border border-blue-300 rounded-2xl transform -rotate-12 animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-24 left-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-40 animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-32 left-24 w-24 h-24 border-2 border-blue-300 rounded-xl transform rotate-45 animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>

        {/* Center decorative elements */}
        <div
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-ping"
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-bounce"
          style={{ animationDuration: "2.5s" }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
            Specified Skilled Worker (SSW) / Tokutei Ginou
          </h1>
          <p className="text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6 text-lg md:text-xl text-justify backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Specified Skilled Workers (SSW) atau Tokutei Ginou 特定技能 adalah
            status visa/izin tinggal bagi warga negara asing di Jepang yang
            mulai berlaku sejak 1 April 2019. Pemegang visa SSW dapat bekerja di
            perusahaan Jepang dengan hak dan kewajiban yang sama dengan pekerja
            Jepang.
          </p>
          <p className="text-cyan-200 text-sm md:text-lg bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-full px-6 py-2 inline-block backdrop-blur-sm border border-white/10">
            ✨ Dikutip dari Laman BP2TKI
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            17 Bidang Pekerjaan SSW
          </h2>
          <p className="text-gray-600 max-w-4xl lg:max-w-full mx-auto md:mx-4 lg:mx-12 md:text-lg leading-relaxed text-justify">
            Dengan berkurangnya tenaga kerja di Jepang, ada 17 bidang industri
            yang terdampak dengan tidak tercukupinya kebutuhan tenaga kerja
            untuk masa yang akan datang. Bidang itulah yang nantinya diisi
            dengan Specified Skilled Worker (SSW)/Tokutei Ginou 特定技能 ini. Ke
            17 Bidang tersebut adalah :
          </p>
        </div>

        <SswCard data={data} isLoading={isLoading}/>
        {/* Lihat Selengkapnya Button */}
        {/* <ButtonEffect /> */}
        <div className="flex justify-center items-center mt-10">
          <ButtonBlue
            title={"Lihat Selengkapnya"}
            navigateToLink={onSeeAllClick}
            className={"hover:shadow-md btn-sm text-lg"}
          />
        </div>
      </div>
    </div>
  );
};

export default SSWTokuteiGinou;
