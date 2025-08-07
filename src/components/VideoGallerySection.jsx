import React, { useEffect, useRef } from "react";
import { Play, Calendar, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import bg1 from "../assets/Test1.jpg";
import bg2 from "../assets/Test2.jpg";
import bg3 from "../assets/Test3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const videoData = [
  {
    id: 1,
    title: "Kegiatan Peserta Asa Hikari Mulya",
    thumbnail: "https://placehold.co/400x250",
    duration: "5:45",
    category: "Asa Hikari Mulya",
    tag: "Kegiatan",
    description:
      "Kegiatan Peserta Asa Hikari Mulya Dalam Mengikuti Kegiatan Besar dalam Sebuah Kurikulum Asa Hikari Mulya. Kurikulum yang Mengajakan Peserta Asa Hikari Mulya Menjaga Berkualitas Jepang dan Manjur Menghadapi Keadaan Seridaki Dimengerti Pada Perusahaan Jepang.",
  },
  {
    id: 2,
    title: "Aplikasi Pera Pera",
    thumbnail: "https://placehold.co/400x250",
    duration: "1:43",
    category: "Asa Hikari Mulya",
    tag: "Registrasi",
    description:
      "Peserta Didik Asa Hikari Mulya Online Akan diberikan Pembelajaran Bahasa Jepang via Aplikasi buat Asa Hikari Mulya yang bernama Pera Pera Aplikasi ini memfig ukan men bantu peserta mencapai Bahasa Jepang dalam dengan Cepat sekaligus memahami Huruf Hiragana.",
  },
  {
    id: 3,
    title:
      "Highlight Online Class Bersama Ibu Uda Fauzyah Mentri Ketenagakerjaan",
    thumbnail: "https://placehold.co/400x250",
    duration: "6:32",
    category: "Asa Hikari Mulya",
    tag: "Program",
    description:
      "Pada Akhir Tahun 2021 Asa Hikari Mulya Mengadakan Class Online Untuk Peserta Asa Hikari Mulya Dalam Mengikuti Kegiatan Online Bersama Pendamfkan Kota Palu. Class Online Asa Hikari Mulya Dihata Langsung Secara Online via Zoom Oleh Ibu Ida Fauziyah Mentri Ketenagakerjaan Republik Indonesia Acara Berlangsung Sangat Seru dan Spektakular.",
  },
  {
    id: 4,
    title:
      "20 Peserta Lulus Wawancara di Perusahaan Jepang Bidang Perakitan Mobil",
    thumbnail: "https://placehold.co/400x250",
    duration: "12:31",
    category: "Asa Hikari Mulya",
    tag: "Testimoni",
    description:
      "Testimoni 20 Peserta yang Lulus Wawancara Perusahaan Jepang di Bidang Perakitan Mobil Perusahaan Wawancara Jepang dilI Toyota ini Berhasil dari Berbagai Faktor yang ada di Indonesia Mereka adalah yang bersekolah dari Medan Acunaela, Makassar, Lampung, Janti Bersekolah Provinsi yang ada di Pulau Jawa Para Peserta Uni Sudah Berangkat ke Jepang Untuk Mengikuti Kursus Kerja Selama 3 Tahun.",
  },
];

const galery = [
  {
    bg: bg1,
    name: "Peserta Didik Bidang Manufaktur",
    location: "Prefektur Kagoshima, Jepang",
  },
  {
    bg: bg2,
    name: "Peserta Didik Bidang Perakitan Komponen Untuk HP & Laptop",
    location: "Prefektur Kagoshima, Jepang",
  },
  {
    bg: bg3,
    name: "Peserta Didik Bidang Pengepakan di Perusahaan Roda 4",
    location: "Prefektur Oita, Jepang",
  },
];

export default function VideoGallerySection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const galerySwiperRef = useRef(null);

  useEffect(() => {
    if (galerySwiperRef.current && prevRef.current && nextRef.current) {
      const swiper = galerySwiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);
  return (
    <section className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm md:text-base font-medium mb-2 tracking-wide">
            Cuplikan Video Asa Hikari Mulya
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Video Pembelajaran Asa Hikari Mulya
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-20 lg:gap-4 gap-8">
          {videoData.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-colors cursor-pointer">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play
                      className="w-8 h-8 text-blue-600 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="w-3 h-3" />
                    {video.category}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Users className="w-3 h-3" />
                    {video.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {video.description}
                </p>

                {/* Watch Button */}
                <button className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Tonton Video
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-md btn-warning text-white md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:border-0 shadow-none">
            Lihat Semua Video
          </button>
        </div>
      </div>
      <div className="divider"></div>

      {/* galery */}
      <div className="relative mt-4 min-w-full">
        {/* Static Header */}
        <div className="absolute top-5 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-white text-base md:text-lg font-medium mb-2 tracking-wide">
              Foto Kegiatan Peserta Didik
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Galeri Foto Kegiatan Peserta Didik Asa Hikari Mulya
            </h1>
          </div>
        </div>
        {/* Background Carousel */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 8000, // twice the testimonial delay
            disableOnInteraction: false,
          }}
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          allowTouchMove={false}
          className="h-[75vh] md:h-[62vh]  lg:min-h-[540pt] mb-10 lg:mb-0"
        >
          {galery.map((item, index) => (
            <SwiperSlide key={index}>
              <section
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${item.bg})`,
                }}
              ></section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-8 top-[60%] md:top-[49%] md:left-[10%] z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300"
        >
          <FaAngleLeft className="md:w-7 h-full" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-8 top-[60%] md:top-[49%] md:right-[10%] z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300"
        >
          <FaAngleRight className="md:w-7 h-full" />
        </button>

        {/* Foreground Galery Carousel */}
        <Swiper
          ref={galerySwiperRef}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="!absolute top-[110pt] md:top-[100pt] lg:top-[150pt] min-h-[380pt] md:min-h-[330pt] lg:min-h-[300pt] left-0 w-full z-10 "
        >
          {galery.map((item, index) => (
            <SwiperSlide key={index}>
              <section className="min-h-full flex items-end justify-center text-white mt-10 pb-0 lg:pb-24">
                <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
                  <div className="bg-blue-300/10 backdrop-blur-sm rounded-2xl p-2 md:p-2 lg:p-4 border border-white/10">
                    <div className="flex flex-col items-center">
                      <img
                        src={item.bg}
                        alt={item.name}
                        className="w-[100%] h-[50%] md:w-[70%] lg:w-[90%] rounded-xl mb-4 border-3 aspect-[18/9] border-white/20 object-cover"
                      />
                      <h4 className="font-bold text-lg md:text-xl text-white">
                        {item.name}
                      </h4>
                      <p className="text-amber-400 text-sm md:text-base font-medium">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="divider"></div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}
