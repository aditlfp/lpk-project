import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import tes1 from "../assets/testimonial1.jpg";
import tes2 from "../assets/testimonial2.jpg";
import tes3 from "../assets/testimonial3.jpg";
import bg1 from "../assets/Test1.jpg";
import bg2 from "../assets/Test2.jpg";
import bg3 from "../assets/Test3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef, useEffect } from "react";

const testimonials = [
  {
    bg: bg1,
    image: tes1,
    name: "Peserta Didik Bidang Manufaktur",
    location: "Prefektur Kagoshima, Jepang",
    stars: 5,
    content:
      "Setelah mengikuti program pendidikan ISO, selama di Jepang kami dapat berkegiatan sehari-hari dan bekerja dengan baik...",
  },
  {
    bg: bg2,
    image: tes2,
    name: "Peserta Didik Bidang Perakitan Komponen Untuk HP & Laptop",
    location: "Prefektur Kagoshima, Jepang",
    stars: 5,
    content:
      "Pelatihan bahasa Jepang di LPK yang menerapkan program ISO sangat menyenangkan dan berkualitas karena dibimbing oleh pengajar yang berpengalaman. Belajar bahasa dan budaya kerja Jepang jadi mudah untuk dipahami. Banyak hal yang baru bisa kita dapatkan sebagai bekal untuk bekerja ke Jepang.",
  },
  {
    bg: bg3,
    image: tes3,
    name: "Peserta Didik Bidang Pengepakan di Perusahaan Roda 4",
    location: "Prefektur Oita, Jepang",
    stars: 5,
    content:
      "Sebelum berangkat ke Jepang, Program pendidikan ISO memberikan banyak bekal pelatihan yang... ",
  },
];

export default function TestimoniCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      {/* Static Header - Does not scroll with carousel */}
      <div className="absolute top-5 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-blue-400 text-base font-medium mb-4 tracking-wide">
            Testimoni Peserta Didik
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ulasan dari Peserta Didik
          </h1>
          <span className="text-gray-300 text-lg mt-2 block">
            Berikut beberapa ulasan dari peserta didik ISO Jepang yang sedang
            berada di Jepang dan yang telah proses belajar di ISO Jepang.
          </span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-8 top-[41%] lg:top-1/2 z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300"
      >
        <FaAngleLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute right-8 top-[41%] lg:top-1/2 z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300"
      >
        <FaAngleRight />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-2 !h-2",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
          renderBullet: function (index, className) {
            return '<span class="' + className + ' !mx-1"></span>';
          },
        }}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        className="h-[70vh] min-h-[850px] lg:min-h-[600px] mb-10 lg:mb-0"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <section
              className="h-full bg-cover bg-center flex items-end justify-center text-white relative pb-52 lg:pb-24"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${item.bg})`,
              }}
            >
              <div className="max-w-[90rem] mx-auto px-6 text-center max-h-[20rem]">
                {/* Testimonial Content */}
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <p className="text-gray-200 text-base leading-relaxed mb-4 lg:mb-8 italic">
                    "{item.content}"
                  </p>

                  {/* Profile */}
                  <div className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl mb-2 lg:mb-4 border-3 border-white/20 object-cover"
                    />

                    {/* Star Rating */}
                    <div className="flex justify-center mb-3">
                      {[...Array(item.stars)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-yellow-400 text-xl mx-0.5"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <h4 className="font-bold text-lg lg:text-xl text-white mb-1">
                      {item.name}
                    </h4>
                    <p className="text-blue-400 text-sm font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
        }
      `}</style>
    </div>
  );
}
