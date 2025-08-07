import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef, useEffect } from "react";

import tes1 from "../assets/testimonial1.jpg";
import tes2 from "../assets/testimonial2.jpg";
import tes3 from "../assets/testimonial3.jpg";
import bg1 from "../assets/Test1.jpg";
import bg2 from "../assets/Test2.jpg";
import bg3 from "../assets/Test3.jpg";

const testimonials = [
  {
    bg: bg1,
    image: tes1,
    name: "Peserta Didik Bidang Manufaktur",
    location: "Prefektur Kagoshima, Jepang",
    stars: 5,
    content:
      "Setelah mengikuti program pendidikan Asa Hikari Mulya, selama di Jepang kami dapat berkegiatan sehari-hari dan bekerja dengan baik...",
  },
  {
    bg: bg2,
    image: tes2,
    name: "Peserta Didik Bidang Perakitan Komponen Untuk HP & Laptop",
    location: "Prefektur Kagoshima, Jepang",
    stars: 5,
    content:
      "Pelatihan bahasa Jepang di LPK yang menerapkan program Asa Hikari Mulya sangat menyenangkan dan berkualitas karena dibimbing oleh pengajar yang berpengalaman...",
  },
  {
    bg: bg3,
    image: tes3,
    name: "Peserta Didik Bidang Pengepakan di Perusahaan Roda 4",
    location: "Prefektur Oita, Jepang",
    stars: 5,
    content:
      "Sebelum berangkat ke Jepang, Program pendidikan Asa Hikari Mulya memberikan banyak bekal pelatihan yang...",
  },
];

export default function TestimoniCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const testimonialSwiperRef = useRef(null);

  useEffect(() => {
    if (testimonialSwiperRef.current && prevRef.current && nextRef.current) {
      const swiper = testimonialSwiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      {/* Static Header */}
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
          delay: 8000, // twice the testimonial delay
          disableOnInteraction: false,
        }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        allowTouchMove={false}
        className="h-[70vh] min-h-[520pt] md:min-h-[420pt] lg:min-h-[540pt] mb-10 lg:mb-0"
      >
        {testimonials.map((item, index) => (
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
        className="absolute left-8 top-[60%] md:top-[50%] md:left-[8%] z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300"
      >
        <FaAngleLeft className="md:w-7 h-full" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-8 top-[60%] md:top-[50%] md:right-[8%] z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300"
      >
        <FaAngleRight className="md:w-7 h-full" />
      </button>

      {/* Foreground Testimonial Carousel */}
      <Swiper
        ref={testimonialSwiperRef}
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white/50 !w-2 !h-2 !md:w-4 !md:h-4 !mx-1",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="!absolute top-[120pt] md:top-[100pt] min-h-[380pt] md:min-h-[330pt] lg:min-h-[300pt] left-0 w-full z-10 "
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="min-h-full flex items-end justify-center text-white mt-10 pb-0 lg:pb-24">
              <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
                <div className="bg-blue-300/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <p className="text-gray-200 text-base md:text-xl leading-relaxed mb-6 italic line-clamp-5">
                    "{item.content}"
                  </p>
                  <div className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 md:w-22 md:h-22 rounded-xl mb-4 border-3 border-white/20 object-cover"
                    />
                    <div className="flex justify-center mb-2">
                      {[...Array(item.stars)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-amber-400 text-xl mx-0.5"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <h4 className="font-bold text-lg lg:text-xl text-white">
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

      {/* Pagination bullet override */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </div>
  );
}
