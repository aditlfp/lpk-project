import FooterAction from "./FooterAction";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSearch,
  FaClock,
} from "react-icons/fa";
import icon from "../assets/img_fix/logo_white.jpg";
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
      <div className="bg-[#540209] pt-[84%] md:pt-32 relative z-0 w-screen">
        {/* Kartu floating yang masuk ke dalam */}
        <div className="absolute -top-1 w-full">
          <FooterAction />
        </div>

        {/* Isi footer */}
        {/* ✅ Footer utama */}
        <footer className="flex flex-col md:flex-row flex-wrap gap-10 px-6 pb-10 text-white max-w-7xl mx-auto">
          {/* Kolom 1: Kontak & Logo */}
          <div className="flex-1 min-w-[220px] space-y-4">
            <img src={icon} alt="AHIYA" className="w-[7rem]" />
            <p className="text-sm text-gray-300">
              Pusat Pelatihan dan Pendidikan Bahasa Serta Budaya Jepang
            </p>
            <div className="flex justify-center items-center gap-x-3">
              <div className="flex flex-col gap-y-5 items-center mt-5 text-red-500">
                <MapPin />
                <Mail />
                <TbBrandWhatsappFilled className="text-xl" />
              </div>
              <div className="flex flex-col gap-y-5 justify-center">
                <p className="text-sm">
                  Jl. Pedurenan Depok No. 7A, Cisalak, Kec. Cimanggis, Kota
                  Depok, Jawa Barat 16452
                </p>
                <p className="text-sm"> asahikarimulya@gmail.com</p>
                <p className="text-sm">
                  <a href={handleClick}>{`+` + whatsappNumber}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold text-lg mb-2 border-b border-red-400 w-fit">
              Link Cepat
            </h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="font-semibold text-lg mb-2 border-b border-red-400 w-fit">
              Link Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Kebijakan Privasi (English)</li>
              <li>Syarat dan Ketentuan</li>
              <li>Kontak</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Kolom 4: Jam Kerja & Sosial Media */}
          <div className="flex-1 min-w-[250px] space-y-4">
            <h3 className="font-semibold text-lg mb-2 border-b border-red-400 w-fit">
              Jam Kerja
            </h3>
            <div className="flex flex-row items-center text-sm gap-2">
              <div className="space-y-2">
                <FaClock className="text-red-400" />
                <FaClock className="text-red-400" />
              </div>
              <div>
                <p>09.00 AM - 05.00 PM, Senin - Jumat</p>
                <p>09.00 AM - 13.00 PM, Sabtu</p>
              </div>
            </div>
            <p className="text-sm">
              Pelayanan Kami Pada Jam Kerja di atas, Silahkan Hubungi Kami
              Melalui Nomor Telepon atau WhatsApp Untuk Informasi Lebih Lanjut.
            </p>
            <div className="flex space-x-3 mt-2">
              <a className="bg-red-600 p-2 rounded-full" href="#">
                <FaYoutube />
              </a>
              <a className="bg-red-800 p-2 rounded-full" href="#">
                <FaFacebookF />
              </a>
              <a className="bg-red-400 p-2 rounded-full" href="#">
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
        <div className="border-t border-red-700 py-4 px-6 text-gray-300 font-medium text-xs flex justify-between items-center  max-w-7xl mx-auto">
          <span>Coded By Adityalfp</span>
          <span>Copyright © 2025. All rights reserved.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
