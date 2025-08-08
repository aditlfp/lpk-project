import { useEffect, useState } from "react";
import home from "../assets/img_fix/hero.jpg"; // Pastikan path ini sesuai dengan struktur folder Anda
import logo from "../assets/img_fix/logo_dark.png";
import api from "../utils/axios";

export default function HeroSection() {
  const [imgHero, setImgHero] = useState(null);
  const [logoHero, setLogoHero] = useState(null);
  const [titleHero, setTitleHero] = useState(null);
  const [descHero, setDescHero] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/main_hero");

        if (Array.isArray(res.data.data)) {
          const activeHero = res.data.data.find(
            (item) => item.is_pinned === "1"
          );

          if (activeHero) {
            // Logo
            setLogoHero(
              activeHero.main_logo
                ? `https://lpk-backend.sac-po.com/storage/${activeHero.main_logo}`
                : logo
            );

            // Background Image
            setImgHero(
              activeHero.c_image
                ? `https://lpk-backend.sac-po.com/storage/${activeHero.c_image}`
                : home
            );

            // Title & Description
            setTitleHero(
              activeHero.title ||
                "Kuasai Bahasa Jepang, Raih Peluang Kerja ke Jepang dengan Asa Hikari Mulya!"
            );
            setDescHero(
              activeHero.desc ||
                "Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang."
            );
          } else {
            // Fallback if no pinned hero found
            setLogoHero(logo);
            setImgHero(home);
            setTitleHero(
              "Kuasai Bahasa Jepang, Raih Peluang Kerja ke Jepang dengan Asa Hikari Mulya!"
            );
            setDescHero(
              "Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang."
            );
          }
        } else {
          // Invalid API format fallback
          setLogoHero(logo);
          setImgHero(home);
          setTitleHero(
            "Kuasai Bahasa Jepang, Raih Peluang Kerja ke Jepang dengan Asa Hikari Mulya!"
          );
          setDescHero(
            "Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang."
          );
        }
      } catch (err) {
        console.error("Failed to fetch hero image:", err);
        // Fallback on error
        setLogoHero(logo);
        setImgHero(home);
        setTitleHero(
          "Kuasai Bahasa Jepang, Raih Peluang Kerja ke Jepang dengan Asa Hikari Mulya!"
        );
        setDescHero(
          "Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang."
        );
      }
    }

    getData();
  }, []); // ✅ only run once on mount
  return (
    <div className="relative h-[100vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgHero})`, // ← ganti dengan path atau URL gambar
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-blue-950 opacity-75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Logo */}
        <div className="flex w-full justify-center items-center gap-x-4 mb-6 mt-[30pt] lg:mt-[10pt]">
          <img
            src={logoHero}
            alt="Asa Hikari Mulya"
            className="w-1/3 md:w-1/6 lg:w-1/10 bg-white rounded-sm"
          />
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-[2.3rem] lg::text-[2.9rem] font-bold mb-4 md:mb-10 lg:mb-5 text-pretty max-w-5xl">
          {titleHero}
        </h1>

        {/* Deskripsi */}
        <p className="max-w-5xl md:max-w-[80rem] md:mx-10 font-bold text-sm md:text-lg text-gray-300 mb-6 md:mb-10 lg:mb-5">
          {descHero}
        </p>

        {/* Tombol */}
        <a
          href="https://recruitment.savanait.com/auth/login.php"
          className="btn btn-warning text-white font-bold btn-xl text-sm md:text-2xl p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 hover:border-0 shadow-none"
        >
          Daftar Sekarang
        </a>

        {/* Kolaborator */}
        {/* <div className="mt-5 md:mt-10 lg:mt-5">
          <p className="text-lg md:text-xl font-bold opacity-70">
            Berkolaborasi dengan
          </p>
          <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-2 lg:mt-4 justify-center items-center">
            <img src={logo_white} alt="Kemnaker" className="h-12" />
            <img src={logo_white} alt="TIT" className="h-12" />
            <img src={logo_white} alt="JITCO" className="h-12" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
