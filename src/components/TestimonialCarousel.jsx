import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import DOMPurify from "dompurify";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef, useEffect, useState, useMemo } from "react";

import api from "../utils/axios";
import Pagination from "./partials/Pagination";

export default function TestimoniCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const testimonialSwiperRef = useRef(null);

  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
  const [isLoading, setLoading] = useState(true);

  const fetchData = async (page = 1) => {
    try {
      const res = await api.get(`/testimonis?page=${page}`);
      setData(res.data.data);
      setMeta(res.data.meta);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (testimonialSwiperRef.current && prevRef.current && nextRef.current) {
      const swiper = testimonialSwiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // ambil fallback image sekali saja dari data
  const fallbackImage = useMemo(() => {
    const found = data.find((item) => item.image_foto !== null);
    return found
      ? `http://localhost:8000/storage/${found.image_foto}`
      : "/default.jpg";
  }, [data]);

  if (isLoading) {
    return (
      <>
        <div className="bg-[#F4F8FB] min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Memuat data testimoni...</p>
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
    <div className="relative">
      {/* Header */}
      <div className="absolute top-5 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-white text-base md:text-lg font-medium mb-2 tracking-wide">
            Testimoni Peserta Didik
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ulasan dari Peserta Didik
          </h1>
          <span className="text-gray-300 text-lg md:text-xl mt-2 block">
            Berikut beberapa ulasan dari peserta didik Asa Hikari Mulya...
          </span>
        </div>
      </div>

      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={data.length > 1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        allowTouchMove={false}
        className="h-[65vh] sm:h-[70vh] min-h-[400px] md:min-h-[500px] lg:min-h-[540px] mb-10 lg:mb-0"
      >
        {data.map((item) => {
          const bgImage = item.image_foto
            ? `http://localhost:8000/storage/${item.image_foto}`
            : fallbackImage;
          return (
            <SwiperSlide key={item.id}>
              <section
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${bgImage})`,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation */}
      <button
        ref={prevRef}
        className="absolute left-3 sm:left-6 md:left-[5%] top-1/2 -translate-y-1/2 z-20 
             text-white text-lg sm:text-2xl bg-transparent hover:bg-white/10 
             rounded-full p-2 sm:p-3 transition-all duration-300"
      >
        <FaAngleLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-3 sm:right-6 md:right-[5%] top-1/2 -translate-y-1/2 z-20 
             text-white text-lg sm:text-2xl bg-transparent hover:bg-white/10 
             rounded-full p-2 sm:p-3 transition-all duration-300"
      >
        <FaAngleRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Foreground Carousel */}
      <Swiper
        ref={testimonialSwiperRef}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={data.length > 1}
        className="!absolute top-[170px] sm:top-[120px] md:top-[140px] left-0 w-full z-10"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <section className="flex items-end justify-center text-white mt-6 sm:mt-10 pb-12 sm:pb-20">
              <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
                <div className="bg-blue-300/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  {/* Comment */}
                  <p
                    className="text-gray-200 text-sm sm:text-base md:text-xl leading-relaxed mb-4 sm:mb-6 italic"
                    dangerouslySetInnerHTML={{
                      __html: `"${DOMPurify.sanitize(item.comment)}"`,
                    }}
                  />
                  {/* Foto + Info */}
                  <div className="flex flex-col items-center">
                    <img
                      src={
                        item.image_foto
                          ? `http://localhost:8000/storage/${item.image_foto}`
                          : fallbackImage
                      }
                      alt={item.username}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl mb-4 border-4 border-white/30 object-cover shadow-lg"
                    />
                    {/* Rating */}
                    <div className="flex justify-center mb-2">
                      {[...Array(item.rating)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-blue-400 text-base sm:text-lg md:text-xl mx-0.5"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Nama */}
                    <h4 className="font-bold text-base sm:text-lg lg:text-xl text-white">
                      {item.username}
                    </h4>
                    {/* Lokasi */}
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={meta.current_page}
          totalPages={meta.last_page}
          onPageChange={(page) => fetchData(page)}
        />
      </div>
    </div>
  );
}
