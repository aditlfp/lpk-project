import FooterAction from "./FooterAction";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSearch,
  FaClock,
} from "react-icons/fa";
import icon from "../assets/img_fix/logo_dark.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { TbBrandWhatsappFilled } from "react-icons/tb";

function Footer() {
  const whatsappNumber = "6281395554334"; // Replace with your WhatsApp number (with country code)
  const message =
    "Halo Admin LPK Asa Hikari Mulya, Saya ingin menanyakan informasi lebih lanjut mengenai program pelatihan yang tersedia!"; // Optional default message

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Bagian atas footer */}
      <div className="bg-blue-950 pt-[84%] md:pt-[30%] lg:pt-[14%] lg:px-4 relative z-0 w-screen">
        {/* Kartu floating yang masuk ke dalam */}
        <div className="absolute -top-1 w-full">
          <FooterAction />
        </div>

        {/* Isi footer */}
        {/* ✅ Footer utama */}
        <footer className="flex flex-col md:flex-row flex-wrap gap-10 px-6 pb-10 text-white max-w-7xl mx-auto">
          {/* Kolom 1: Kontak & Logo */}
          <div className="flex-1 min-w-[220px] md:w-full md:max-w-[350px]  space-y-4">
            <img src={icon} alt="Asa Hikari Mulya" className="w-[7rem] bg-white" />
            <p className="text-sm md:text-lg text-gray-300">
              Pusat Pelatihan dan Pendidikan Bahasa Serta Budaya Jepang
            </p>
            <div className="flex flex-col gap-y-5 mt-5 text-blue-500">
              <div className="flex items-start gap-x-3">
                <MapPin className="mt-1 w-10 h-10 md:max-w-24 md:h-auto" />
                <p className="text-sm md:text-base text-white">
                 Jl. Betoro Katong, Nomor 22, Kelurahan Nologaten, Kecamatan Ponorogo,
                 Kabupaten Ponorogo, Kode Pos 63411
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Mail className="mt-1 w-5 h-5 md:max-w-7 md:h-auto" />
                <p className="text-sm md:text-base text-white">
                  asahikarimulya82@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <TbBrandWhatsappFilled className="mt-1 w-5 h-5 md:max-w-7 md:h-auto text-xl" />
                <p className="text-sm md:text-base text-white">
                  <a href={handleClick}>{whatsappNumber}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-col md:gap-4 md:w-full md:max-w-[250px]">
            {/* Kolom 2: Link Cepat */}
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-lg md:text-xl mb-2 border-b border-blue-400 w-fit">
                Link Cepat
              </h3>
              <ul className="space-y-2 md:space-y-1 text-sm md:text-lg">
                <li>Kelas</li>
                <li>Artikel</li>
                <li>Program</li>
                <li>Pengajar</li>
                <li>Materi JLPT</li>
                <li>Materi JF-Test</li>
                <li>Mitra Asa Hikari Mulya</li>
              </ul>
            </div>

            {/* Kolom 3: Link Support */}
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-lg md:text-xl mb-2 border-b border-blue-400 w-fit">
                Link Support
              </h3>
              <ul className="space-y-2 md:space-y-1 text-sm md:text-lg">
                <li>Kebijakan Privasi (English)</li>
                <li>Syarat dan Ketentuan</li>
                <li>Kontak</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* Kolom 4: Jam Kerja & Sosial Media */}
          <div className="flex-1 min-w-[250px] space-y-4">
            <h3 className="font-semibold text-lg md:text-xl mb-2 border-b border-blue-400 w-fit">
              Jam Kerja
            </h3>
            <div className="flex flex-row items-center text-sm gap-2">
              <div className="space-y-2">
                <FaClock className="text-blue-400 md:w-5 md:h-auto" />
              </div>
              <div className="md:text-lg">
                <p>07:30 WIB - 16:00 WIB, Senin - Jumat</p>
              </div>
            </div>
            <p className="text-sm md:text-lg">
              Pelayanan Kami Pada Jam Kerja di atas, Silahkan Hubungi Kami
              Melalui Nomor Telepon atau WhatsApp Untuk Informasi Lebih Lanjut.
            </p>
            <div className="flex space-x-3 mt-2">
              <a className="bg-blue-600 p-2 rounded-full" href="#">
                <FaYoutube />
              </a>
              <a className="bg-blue-800 p-2 rounded-full" href="#">
                <FaFacebookF />
              </a>
              <a className="bg-blue-400 p-2 rounded-full" href="#">
                <FaInstagram />
              </a>
              <a className="bg-gray-500 p-2 rounded-full" href="#">
                <FaTiktok />
              </a>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
              Daftar Sekarang
            </button>
          </div>
        </footer>

        {/* Bottom footer */}
        <div className="border-t border-blue-700 py-4 px-6 text-gray-300 font-medium text-xs md:text-base flex justify-between items-center  max-w-7xl mx-auto">
          <span>Coded By Adityalfp</span>
          <span>Copyright © 2025. All rights reserved.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
