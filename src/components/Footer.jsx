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

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* Bagian atas footer */}
      <div className="bg-blue-950 pt-[230pt] md:pt-[30%] lg:pt-[14%] lg:px-4 relative z-0 w-screen">
        {/* Kartu floating yang masuk ke dalam */}
        <div className="absolute -top-1 w-full">
          <FooterAction />
        </div>

        {/* Isi footer */}
        {/* ✅ Footer utama */}
        <footer className="flex flex-col md:flex-row flex-wrap gap-10 px-6 pb-10 text-white max-w-7xl mx-auto">
          {/* Kolom 1: Kontak & Logo */}
          <div className="flex-1 min-w-[220px] md:w-full md:max-w-[350px]  space-y-4">
            <img
              src={icon}
              alt="Asa Hikari Mulya"
              className="w-[7rem] bg-white"
            />
            <p className="text-sm md:text-lg text-gray-300">
              Pusat Pelatihan dan Pendidikan Bahasa Serta Budaya Jepang
            </p>
            <div className="flex flex-col gap-y-5 mt-5 text-blue-500">
              <div className="flex items-start gap-x-3">
                <MapPin className="mt-1 w-10 h-10 md:max-w-24 md:h-auto" />
                <div className="flex flex-col gap-2">
                  <p className="text-sm md:text-base text-white">
                    Jl. Betoro Katong, Nomor 22, Kelurahan Nologaten, Kecamatan
                    Ponorogo, Kabupaten Ponorogo, Kode Pos 63411
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3229227737447!2d111.47399047405082!3d-7.861234578145226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a18cbe9a9b4d%3A0xc2a43dddf592cecb!2sPT%20ASA%20HIKARI%20MULYA%20(LPK)!5e0!3m2!1sid!2sid!4v1754570821563!5m2!1sid!2sid"
                    width="220"
                    height="120"
                    style={{ border: 0 }}
                    className="rounded-lg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                  >
                    {whatsappNumber}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col md:gap-4 md:w-full md:max-w-[250px]">
            {/* Kolom 2: Link Cepat */}
            <div className="flex-1 min-w-[150px]">
              <h3 className="font-semibold text-lg md:text-xl mb-2 border-b border-blue-400 w-fit">
                Link Cepat
              </h3>
              <ul className="space-y-2 md:space-y-1 text-sm md:text-lg">
                <li>
                  <a href="#kelas">Kelas</a>
                </li>
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
                <li>
                  <a href="#faq">FAQ</a>
                </li>
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
            <div className="flex space-x-3 mt-2 md:mt-4">
              <a className="bg-blue-600 p-2 rounded-full" href="https://www.youtube.com/@asahikarimulyaofficiall" target="_blank">
                <FaYoutube />
              </a>
              <a className="bg-blue-800 p-2 rounded-full" href="https://www.facebook.com/profile.php?id=61550357071704" target="_blank">
                <FaFacebookF />
              </a>
              <a className="bg-blue-400 p-2 rounded-full" href="https://www.instagram.com/asahikarimulya.official?igsh=bzIwb3gzdXVjY2Iy" target="_blank">
                <FaInstagram />
              </a>
              <a className="bg-gray-500 p-2 rounded-full" href="https://www.tiktok.com/@asahikarimulya.official?_t=ZS-8ymiuOWavwu&_r=1" target="_blank">
                <FaTiktok />
              </a>
            </div>
            <a
              href="https://recruitment.savanait.com/auth/login.php"
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded"
            >
              Daftar Sekarang
            </a>
          </div>
        </footer>

        {/* Bottom footer */}
        <div className="border-t border-blue-700 py-4 px-6 text-gray-300 font-medium text-xs md:text-base flex justify-between items-center  max-w-7xl mx-auto">
          <a href="https://github.com/aditlfp" target="_blank">Support By SavanaIt</a>
          <span>Copyright © 2025. All rights reserved.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
